import { useParams, Link, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { questions } from '@/data/questions'
import QuizPlayer from '@/components/quiz/QuizPlayer'

const quizConfig = {
  pre: { label: '前測', description: '課前知識評估（基礎題）', color: '#2980B9' },
  post: { label: '後測', description: '課後學習成效評估（情境應用題）', color: '#1E8449' },
  full: { label: '完整練習', description: '涵蓋所有模組的完整題庫', color: '#8E44AD' },
} as const

type QuizType = keyof typeof quizConfig

export default function QuizPage() {
  const { type } = useParams<{ type?: string }>()
  const navigate = useNavigate()

  const filteredQuestions = useMemo(() => {
    if (!type) return []
    if (type === 'full') return [...questions]
    if (type === 'pre')
      return questions.filter((q) => q.category === 'pre' || q.category === 'both')
    if (type === 'post')
      return questions.filter((q) => q.category === 'post' || q.category === 'both')
    return []
  }, [type])

  // If no type, show selector
  if (!type) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A] mb-1">評量測驗</h1>
          <p className="text-gray-500 text-sm">選擇測驗類型開始作答</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {(Object.entries(quizConfig) as [QuizType, (typeof quizConfig)[QuizType]][]).map(
            ([key, cfg]) => {
              const count =
                key === 'full'
                  ? questions.length
                  : key === 'pre'
                    ? questions.filter((q) => q.category === 'pre' || q.category === 'both').length
                    : questions.filter((q) => q.category === 'post' || q.category === 'both').length
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => navigate(`/quiz/${key}`)}
                  className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow text-left cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    style={{ backgroundColor: cfg.color }}
                  >
                    {key === 'pre' ? 'A' : key === 'post' ? 'B' : 'C'}
                  </div>
                  <h3 className="font-semibold text-[#1B2A4A] mb-1">{cfg.label}</h3>
                  <p className="text-sm text-gray-500 mb-2">{cfg.description}</p>
                  <p className="text-xs text-gray-400">{count} 題</p>
                </button>
              )
            },
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Link to="/" className="text-sm text-[#2980B9] hover:underline">
            &larr; 返回首頁
          </Link>
        </div>
      </div>
    )
  }

  const cfg = quizConfig[type as QuizType]

  if (!cfg || filteredQuestions.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 mb-4">找不到此測驗類型</p>
        <Link to="/quiz" className="text-[#2980B9] hover:underline text-sm">
          返回測驗選擇
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: cfg.color }}
            >
              {cfg.label}
            </span>
            <span className="text-xs text-gray-400">
              {filteredQuestions.length} 題
            </span>
          </div>
          <h1 className="text-xl font-bold text-[#1B2A4A]">{cfg.description}</h1>
        </div>
        <Link
          to="/quiz"
          className="text-sm text-gray-400 hover:text-[#2980B9] transition-colors"
        >
          更換測驗
        </Link>
      </div>

      <QuizPlayer questions={filteredQuestions} quizType={cfg.label} />

      <div className="pt-4 border-t border-gray-200">
        <Link to="/" className="text-sm text-[#2980B9] hover:underline">
          &larr; 返回首頁
        </Link>
      </div>
    </div>
  )
}
