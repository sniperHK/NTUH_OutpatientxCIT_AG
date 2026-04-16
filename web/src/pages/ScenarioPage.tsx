import { useParams, Link } from 'react-router-dom'
import ScenarioPlayer from '@/components/scenario/ScenarioPlayer'
import S01 from '@/data/scenarios/S01'
import S02 from '@/data/scenarios/S02'
import S03 from '@/data/scenarios/S03'
import type { Scenario } from '@/data/types'

const scenarioMap: Record<string, Scenario> = {
  S01,
  S02,
  S03,
}

export default function ScenarioPage() {
  const { id } = useParams<{ id: string }>()
  const scenario = id ? scenarioMap[id] : undefined

  if (!scenario) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p className="text-lg font-medium text-[#1B2A4A] mb-2">找不到此情境</p>
        <p className="text-sm mb-6">情境 ID「{id}」不存在</p>
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-[#1B2A4A] text-white text-sm hover:bg-[#2C3E50] transition-colors"
        >
          回到首頁
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-4"
        >
          &larr; 回到首頁
        </Link>

        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: scenario.colorLight }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: scenario.color }}
            />
            <span className="text-xs font-mono text-gray-500">{scenario.id}</span>
          </div>
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: scenario.color }}
          >
            {scenario.title}
          </h1>
          <p className="text-sm text-gray-600 mb-3">{scenario.subtitle}</p>

          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <div>
              <span className="font-semibold text-gray-500">場景：</span>
              {scenario.setting}
            </div>
            <div>
              <span className="font-semibold text-gray-500">對象：</span>
              {scenario.patient}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {scenario.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: scenario.color }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Player */}
      <ScenarioPlayer scenario={scenario} />
    </div>
  )
}
