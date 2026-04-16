import { useState } from 'react'
import type { Scenario, Decision } from '@/data/types'

interface ScenarioPlayerProps {
  scenario: Scenario
}

export default function ScenarioPlayer({ scenario }: ScenarioPlayerProps) {
  const { stages, debriefGuide, color, colorLight } = scenario
  const [currentStageIdx, setCurrentStageIdx] = useState(0)
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null)
  const [history, setHistory] = useState<Record<string, string>>({})
  const [finished, setFinished] = useState(false)

  const stage = stages[currentStageIdx]!
  const isLastStage = currentStageIdx === stages.length - 1
  const hasDecisions = stage.decisions.length > 0
  const progress = ((currentStageIdx + 1) / stages.length) * 100

  function handleSelect(decision: Decision) {
    if (selectedDecision) return
    setSelectedDecision(decision)
    setHistory((prev) => ({ ...prev, [stage.id]: decision.id }))
  }

  function handleNext() {
    if (isLastStage) {
      setFinished(true)
      return
    }
    setSelectedDecision(null)
    setCurrentStageIdx((i) => i + 1)
  }

  // --- Finished / debrief screen ---
  if (finished) {
    const correctCount = Object.entries(history).filter(([stageId, decId]) => {
      const s = stages.find((st) => st.id === stageId)
      return s?.decisions.find((d) => d.id === decId)?.isCorrect
    }).length
    const totalDecisionStages = stages.filter((s) => s.decisions.length > 0).length

    return (
      <div className="space-y-8">
        {/* Score summary */}
        <div
          className="rounded-xl p-6 text-center"
          style={{ backgroundColor: colorLight }}
        >
          <h2 className="text-2xl font-bold mb-2" style={{ color }}>
            情境模擬完成
          </h2>
          <p className="text-lg text-gray-700">
            正確決策：{correctCount} / {totalDecisionStages} 階段
          </p>
        </div>

        {/* Teaching points recap */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-[#1B2A4A] mb-4">關鍵教學重點</h3>
          <div className="space-y-4">
            {stages.map((s) => (
              <div key={s.id}>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {s.id} {s.title}
                </p>
                {s.teachingPoints && (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                    {s.teachingPoints.map((tp, i) => (
                      <li key={i}>{tp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Critical actions across all stages */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-[#1B2A4A] mb-4">關鍵行動清單</h3>
          <ul className="space-y-2">
            {stages.flatMap((s) =>
              (s.criticalActions ?? []).map((action, i) => (
                <li
                  key={`${s.id}-${i}`}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span>
                    <span className="font-medium text-gray-500">[{s.title}]</span>{' '}
                    {action}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Debrief guide */}
        <div
          className="rounded-xl p-6 border-2"
          style={{ borderColor: color }}
        >
          <h3 className="font-bold text-[#1B2A4A] mb-4">Debrief 引導問題</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            {debriefGuide.map((q, i) => (
              <li key={i} className="leading-relaxed">{q}</li>
            ))}
          </ol>
        </div>

        {/* Restart button */}
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentStageIdx(0)
              setSelectedDecision(null)
              setHistory({})
              setFinished(false)
            }}
            className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors"
            style={{ backgroundColor: color }}
          >
            重新模擬
          </button>
        </div>
      </div>
    )
  }

  // --- Active stage screen ---
  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            階段 {currentStageIdx + 1} / {stages.length}
          </span>
          <span>{stage.id} {stage.title}</span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
        </div>
      </div>

      {/* Stage title */}
      <div className="flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: color }}
        >
          {currentStageIdx + 1}
        </span>
        <h2 className="text-xl font-bold text-[#1B2A4A]">{stage.title}</h2>
      </div>

      {/* Narrative */}
      <div
        className="rounded-xl p-5 leading-relaxed text-gray-800 whitespace-pre-line"
        style={{ backgroundColor: colorLight }}
      >
        {stage.narrative}
      </div>

      {/* Behavioral indicators */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
          行為觀察指標
        </h3>
        <ul className="space-y-2">
          {stage.behavioralIndicators.map((indicator, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              {indicator}
            </li>
          ))}
        </ul>
      </div>

      {/* Decisions */}
      {hasDecisions && (
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
            你的決定
          </h3>
          <div className="space-y-3">
            {stage.decisions.map((d) => {
              const isSelected = selectedDecision?.id === d.id
              const showResult = selectedDecision !== null

              let borderStyle = 'border-gray-200'
              let bgStyle = 'bg-white'
              if (showResult && d.isCorrect) {
                borderStyle = 'border-emerald-400'
                bgStyle = 'bg-emerald-50'
              } else if (isSelected && !d.isCorrect) {
                borderStyle = 'border-red-400'
                bgStyle = 'bg-red-50'
              }

              return (
                <button
                  key={d.id}
                  onClick={() => handleSelect(d)}
                  disabled={selectedDecision !== null}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all ${borderStyle} ${bgStyle} ${
                    !showResult
                      ? 'hover:border-gray-400 hover:shadow-sm cursor-pointer'
                      : 'cursor-default'
                  }`}
                >
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {d.text}
                  </p>

                  {/* Feedback */}
                  {showResult && (isSelected || d.isCorrect) && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-1.5 mb-1">
                        {d.isCorrect ? (
                          <span className="text-emerald-600 text-xs font-bold">
                            正確
                          </span>
                        ) : (
                          <span className="text-red-600 text-xs font-bold">
                            需改善
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {d.feedback}
                      </p>
                      {d.teachingPoint && (
                        <p className="mt-2 text-xs leading-relaxed font-medium" style={{ color }}>
                          教學重點：{d.teachingPoint}
                        </p>
                      )}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Teaching points (shown for result stages without decisions) */}
      {!hasDecisions && stage.teachingPoints && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
            教學重點
          </h3>
          <ul className="space-y-2">
            {stage.teachingPoints.map((tp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                {tp}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Critical actions (shown for result stages without decisions) */}
      {!hasDecisions && stage.criticalActions && (
        <div
          className="rounded-xl p-5 border-2"
          style={{ borderColor: color }}
        >
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color }}>
            關鍵行動
          </h3>
          <ul className="space-y-2">
            {stage.criticalActions.map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                {action}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next button */}
      {(selectedDecision !== null || !hasDecisions) && (
        <div className="text-center pt-2">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors"
            style={{ backgroundColor: color }}
          >
            {isLastStage ? '查看總結與 Debrief' : '下一階段'}
          </button>
        </div>
      )}
    </div>
  )
}
