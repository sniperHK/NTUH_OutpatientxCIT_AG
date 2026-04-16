import { useState, useMemo } from 'react'
import type { Question } from '@/data/types'
import { modules } from '@/data/siteMeta'

interface Props {
  questions: Question[]
  quizType: string
}

interface AnswerRecord {
  questionId: string
  selectedId: string
  isCorrect: boolean
}

export default function QuizPlayer({ questions, quizType }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [finished, setFinished] = useState(false)

  const q = questions[currentIndex] as Question | undefined

  function handleSelect(optionId: string) {
    if (!q) return
    if (showExplanation) return
    setSelectedId(optionId)
    setShowExplanation(true)
    const correct = q.options.find((o) => o.id === optionId)?.isCorrect ?? false
    setAnswers((prev) => [
      ...prev,
      { questionId: q.id, selectedId: optionId, isCorrect: correct },
    ])
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedId(null)
      setShowExplanation(false)
    } else {
      setFinished(true)
    }
  }

  // Score breakdown by module
  const moduleBreakdown = useMemo(() => {
    const map = new Map<string, { total: number; correct: number }>()
    for (const a of answers) {
      const ques = questions.find((qq) => qq.id === a.questionId)
      if (!ques) continue
      const entry = map.get(ques.module) ?? { total: 0, correct: 0 }
      entry.total++
      if (a.isCorrect) entry.correct++
      map.set(ques.module, entry)
    }
    return map
  }, [answers, questions])

  if (finished) {
    const totalCorrect = answers.filter((a) => a.isCorrect).length
    const pct = Math.round((totalCorrect / questions.length) * 100)
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score summary */}
        <div className="text-center py-8">
          <div
            className={`inline-flex items-center justify-center w-28 h-28 rounded-full text-3xl font-bold mb-4 ${
              pct >= 80
                ? 'bg-[#D5F5E3] text-[#1E8449]'
                : pct >= 60
                  ? 'bg-[#FDEBD0] text-[#E67E22]'
                  : 'bg-[#FADBD8] text-[#C0392B]'
            }`}
          >
            {pct}%
          </div>
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-1">
            {quizType}完成
          </h2>
          <p className="text-gray-500">
            答對 {totalCorrect} / {questions.length} 題
          </p>
        </div>

        {/* Module breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1B2A4A] mb-3">各模組成績</h3>
          <div className="space-y-2">
            {Array.from(moduleBreakdown.entries()).map(([mod, data]) => {
              const modMeta = modules.find((m) => m.id === mod)
              const modPct = Math.round((data.correct / data.total) * 100)
              return (
                <div key={mod} className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: modMeta?.color ?? '#999' }}
                  />
                  <span className="text-sm text-[#1B2A4A] flex-1 truncate">
                    {modMeta?.title ?? mod}
                  </span>
                  <span className="text-xs text-gray-400">
                    {data.correct}/{data.total}
                  </span>
                  <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${modPct}%`,
                        backgroundColor: modMeta?.color ?? '#999',
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Review answers */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1B2A4A] mb-3">答題回顧</h3>
          <div className="space-y-3">
            {answers.map((a, i) => {
              const ques = questions.find((qq) => qq.id === a.questionId)!
              return (
                <div
                  key={a.questionId}
                  className={`flex items-start gap-2 text-sm p-2 rounded-lg ${
                    a.isCorrect ? 'bg-[#D5F5E3]/50' : 'bg-[#FADBD8]/50'
                  }`}
                >
                  <span className="font-mono text-xs text-gray-400 pt-0.5">
                    {i + 1}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1B2A4A] line-clamp-2">{ques.stem}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      你的答案：{a.selectedId}{' '}
                      {a.isCorrect ? '(正確)' : `(正確答案：${ques.options.find((o) => o.isCorrect)?.id})`}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  if (!q) return null

  const correctOption = q.options.find((o) => o.isCorrect)

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2980B9] rounded-full transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Module badge */}
        <div className="flex items-center gap-2 mb-3">
          {(() => {
            const mod = modules.find((m) => m.id === q.module)
            return mod ? (
              <span
                className="inline-block px-2 py-0.5 rounded text-xs font-medium text-white"
                style={{ backgroundColor: mod.color }}
              >
                {mod.id} {mod.title}
              </span>
            ) : null
          })()}
          {q.type === 'scenario' && (
            <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[#FDEBD0] text-[#E67E22]">
              情境題
            </span>
          )}
        </div>

        {/* Scenario context */}
        {q.scenarioContext && (
          <div className="mb-3 p-3 bg-gray-50 rounded-lg text-sm text-gray-600 border-l-3 border-[#E67E22]">
            {q.scenarioContext}
          </div>
        )}

        {/* Stem */}
        <h2 className="text-lg font-semibold text-[#1B2A4A] mb-5 leading-relaxed">
          {q.stem}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt) => {
            let btnClass =
              'w-full text-left p-4 rounded-lg border-2 transition-all text-sm leading-relaxed '
            if (!showExplanation) {
              btnClass +=
                selectedId === opt.id
                  ? 'border-[#2980B9] bg-[#D6EAF8]/30'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer'
            } else if (opt.isCorrect) {
              btnClass += 'border-[#1E8449] bg-[#D5F5E3]/50'
            } else if (opt.id === selectedId && !opt.isCorrect) {
              btnClass += 'border-[#C0392B] bg-[#FADBD8]/50'
            } else {
              btnClass += 'border-gray-100 text-gray-400'
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id)}
                disabled={showExplanation}
                className={btnClass}
              >
                <span className="font-medium mr-2">{opt.id}.</span>
                {opt.text}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-5 pt-4 border-t border-gray-200">
            <div
              className={`p-4 rounded-lg ${
                selectedId === correctOption?.id
                  ? 'bg-[#D5F5E3] border-l-4 border-[#1E8449]'
                  : 'bg-[#FADBD8] border-l-4 border-[#C0392B]'
              }`}
            >
              <p className="font-medium text-[#1B2A4A] mb-1">
                {selectedId === correctOption?.id ? '答對了！' : `答錯了！正確答案是 ${correctOption?.id}`}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {q.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Next button */}
      {showExplanation && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-lg bg-[#1B2A4A] text-white font-medium hover:bg-[#2C3E50] transition-colors cursor-pointer"
          >
            {currentIndex < questions.length - 1 ? '下一題' : '查看結果'}
          </button>
        </div>
      )}
    </div>
  )
}
