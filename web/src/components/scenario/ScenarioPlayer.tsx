import { useState } from 'react'
import type { Decision, Scenario, ScenarioOutcome, Stage } from '@/data/types'

interface ScenarioPlayerProps {
  scenario: Scenario
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)))
}

function getImpactMeta(impact?: Decision['impact']) {
  switch (impact) {
    case 'de-escalate':
      return {
        label: '情勢下降',
        badgeClass: 'bg-emerald-100 text-emerald-700',
      }
    case 'stabilize':
      return {
        label: '暫時穩住',
        badgeClass: 'bg-sky-100 text-sky-700',
      }
    case 'support':
      return {
        label: '啟動支援',
        badgeClass: 'bg-indigo-100 text-indigo-700',
      }
    case 'escalate':
      return {
        label: '情勢升溫',
        badgeClass: 'bg-amber-100 text-amber-700',
      }
    case 'danger':
      return {
        label: '高風險',
        badgeClass: 'bg-red-100 text-red-700',
      }
    default:
      return {
        label: '情勢變化',
        badgeClass: 'bg-gray-100 text-gray-700',
      }
  }
}

function getOutcomeMeta(severity?: ScenarioOutcome['severity']) {
  switch (severity) {
    case 'safe':
      return {
        label: '成功降階',
        border: '#22C55E',
        bg: '#F0FDF4',
        text: '#166534',
      }
    case 'support':
      return {
        label: '團隊穩住現場',
        border: '#2563EB',
        bg: '#EFF6FF',
        text: '#1D4ED8',
      }
    case 'incident':
      return {
        label: '安全事件',
        border: '#D97706',
        bg: '#FFFBEB',
        text: '#B45309',
      }
    case 'adverse':
      return {
        label: '不良後果',
        border: '#DC2626',
        bg: '#FEF2F2',
        text: '#B91C1C',
      }
    default:
      return {
        label: '情境完成',
        border: '#94A3B8',
        bg: '#F8FAFC',
        text: '#475569',
      }
  }
}

export default function ScenarioPlayer({ scenario }: ScenarioPlayerProps) {
  const { stages, debriefGuide, color, colorLight, rootStageId, outcomes = [] } = scenario
  const stageMap = Object.fromEntries(stages.map((item) => [item.id, item]))
  const outcomeMap = Object.fromEntries(outcomes.map((item) => [item.id, item]))
  const initialStageId = rootStageId ?? stages[0]?.id ?? ''
  const branchingMode = Boolean(
    rootStageId ||
      outcomes.length > 0 ||
      stages.some((item) => item.decisions.some((decision) => decision.nextStageId || decision.outcomeId))
  )

  const [currentStageId, setCurrentStageId] = useState(initialStageId)
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null)
  const [history, setHistory] = useState<Record<string, string>>({})
  const [path, setPath] = useState<string[]>(initialStageId ? [initialStageId] : [])
  const [finished, setFinished] = useState(false)
  const [outcomeId, setOutcomeId] = useState<string | null>(null)

  const stage = (stageMap[currentStageId] ?? stages[0]) as Stage
  const currentStageIdx = stages.findIndex((item) => item.id === stage.id)
  const selectedDecision = stage.decisions.find((decision) => decision.id === selectedDecisionId) ?? null
  const hasDecisions = stage.decisions.length > 0
  const isLastStage = currentStageIdx === stages.length - 1
  const outcome = outcomeId ? (outcomeMap[outcomeId] ?? null) : null
  const outcomeMeta = getOutcomeMeta(outcome?.severity)

  const progress = branchingMode
    ? ((stage.tensionLevel ?? 1) / 5) * 100
    : ((currentStageIdx + 1) / stages.length) * 100

  const visitedStages = path
    .map((stageId) => stageMap[stageId])
    .filter(Boolean) as Stage[]

  const pathEntries = path
    .map((stageId) => {
      const visitedStage = stageMap[stageId]
      if (!visitedStage) return null

      const decisionId = history[stageId]
      const decision = visitedStage.decisions.find((item) => item.id === decisionId)

      return {
        stage: visitedStage,
        decision,
      }
    })
    .filter(Boolean) as Array<{ stage: Stage; decision?: Decision }>

  const visitedTeachingPoints = uniqueStrings([
    ...visitedStages.flatMap((item) => item.teachingPoints ?? []),
    ...(outcome?.teachingPoints ?? []),
  ])

  const visitedCriticalActions = uniqueStrings([
    ...visitedStages.flatMap((item) => item.criticalActions ?? []),
    ...(outcome?.criticalActions ?? []),
  ])

  function handleSelect(decision: Decision) {
    if (selectedDecisionId) return
    setSelectedDecisionId(decision.id)
    setHistory((prev) => ({ ...prev, [stage.id]: decision.id }))
  }

  function handleNext() {
    if (selectedDecision?.outcomeId) {
      setOutcomeId(selectedDecision.outcomeId)
      setFinished(true)
      return
    }

    if (selectedDecision?.nextStageId && stageMap[selectedDecision.nextStageId]) {
      setCurrentStageId(selectedDecision.nextStageId)
      setPath((prev) => [...prev, selectedDecision.nextStageId as string])
      setSelectedDecisionId(null)
      return
    }

    if (branchingMode) {
      setFinished(true)
      return
    }

    if (isLastStage) {
      setFinished(true)
      return
    }

    const nextStage = stages[currentStageIdx + 1]
    if (!nextStage) {
      setFinished(true)
      return
    }

    setCurrentStageId(nextStage.id)
    setPath((prev) => [...prev, nextStage.id])
    setSelectedDecisionId(null)
  }

  function handlePrevious() {
    if (path.length <= 1) return

    const previousPath = path.slice(0, -1)
    const previousStageId = previousPath[previousPath.length - 1] as string
    const previousDecisionId = history[previousStageId] ?? null

    const newHistory = { ...history }
    delete newHistory[stage.id]

    setPath(previousPath)
    setCurrentStageId(previousStageId)
    setSelectedDecisionId(previousDecisionId)
    setHistory(newHistory)
  }

  function handleRestart() {
    setCurrentStageId(initialStageId)
    setSelectedDecisionId(null)
    setHistory({})
    setPath(initialStageId ? [initialStageId] : [])
    setFinished(false)
    setOutcomeId(null)
  }

  if (finished && branchingMode) {
    return (
      <div className="space-y-8">
        <div
          className="rounded-xl border-2 p-6"
          style={{ borderColor: outcomeMeta.border, backgroundColor: outcomeMeta.bg }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: '#FFFFFFB3', color: outcomeMeta.text }}
            >
              {outcomeMeta.label}
            </span>
            {outcome && (
              <span className="text-xs font-mono text-gray-500">{outcome.id}</span>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: outcomeMeta.text }}>
            {outcome?.title ?? '情境模擬完成'}
          </h2>
          <p className="leading-relaxed whitespace-pre-line" style={{ color: outcomeMeta.text }}>
            {outcome?.narrative ?? '你已完成此樹狀情境。'}
          </p>
        </div>

        {outcome?.consequences && outcome.consequences.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-[#1B2A4A] mb-4">這次選擇造成的後果</h3>
            <ul className="space-y-2">
              {outcome.consequences.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: outcomeMeta.border }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-[#1B2A4A] mb-4">你的路徑</h3>
          <div className="space-y-4">
            {pathEntries.map(({ stage: visitedStage, decision }) => {
              const impactMeta = getImpactMeta(decision?.impact)

              return (
                <div key={visitedStage.id} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-gray-500">{visitedStage.id}</span>
                    <span className="font-semibold text-[#1B2A4A]">{visitedStage.title}</span>
                    {visitedStage.statusLabel && (
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {visitedStage.statusLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {visitedStage.narrative}
                  </p>

                  {decision && (
                    <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${impactMeta.badgeClass}`}>
                          {impactMeta.label}
                        </span>
                        <span className={`text-xs font-bold ${decision.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                          {decision.isCorrect ? '較佳應對' : '高風險應對'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800 leading-relaxed">{decision.text}</p>
                      <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                        {decision.feedback}
                      </p>
                      {decision.consequence && (
                        <p className="mt-2 text-xs font-medium text-gray-700 leading-relaxed">
                          後續影響：{decision.consequence}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {visitedTeachingPoints.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-[#1B2A4A] mb-4">關鍵教學重點</h3>
            <ul className="space-y-2">
              {visitedTeachingPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {visitedCriticalActions.length > 0 && (
          <div
            className="rounded-xl border-2 p-6"
            style={{ borderColor: color }}
          >
            <h3 className="font-bold mb-4" style={{ color }}>關鍵行動清單</h3>
            <ul className="space-y-2">
              {visitedCriticalActions.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className="rounded-xl p-6 border-2"
          style={{ borderColor: color }}
        >
          <h3 className="font-bold text-[#1B2A4A] mb-4">Debrief 引導問題</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            {debriefGuide.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <button
            onClick={handleRestart}
            className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors"
            style={{ backgroundColor: color }}
          >
            重新模擬
          </button>
        </div>
      </div>
    )
  }

  if (finished) {
    const correctCount = Object.entries(history).filter(([stageId, decisionId]) => {
      const visitedStage = stages.find((item) => item.id === stageId)
      return visitedStage?.decisions.find((decision) => decision.id === decisionId)?.isCorrect
    }).length
    const totalDecisionStages = stages.filter((item) => item.decisions.length > 0).length

    return (
      <div className="space-y-8">
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

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-[#1B2A4A] mb-4">關鍵教學重點</h3>
          <div className="space-y-4">
            {stages.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {item.id} {item.title}
                </p>
                {item.teachingPoints && (
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                    {item.teachingPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-[#1B2A4A] mb-4">關鍵行動清單</h3>
          <ul className="space-y-2">
            {stages.flatMap((item) =>
              (item.criticalActions ?? []).map((action, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span
                    className="mt-1 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span>
                    <span className="font-medium text-gray-500">[{item.title}]</span>{' '}
                    {action}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div
          className="rounded-xl p-6 border-2"
          style={{ borderColor: color }}
        >
          <h3 className="font-bold text-[#1B2A4A] mb-4">Debrief 引導問題</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
            {debriefGuide.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <button
            onClick={handleRestart}
            className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors"
            style={{ backgroundColor: color }}
          >
            重新模擬
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {branchingMode ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span className="font-semibold text-gray-600">你的路徑</span>
            {path.map((stageId) => {
              const visitedStage = stageMap[stageId]
              if (!visitedStage) return null

              return (
                <span
                  key={stageId}
                  className={`rounded-full px-2.5 py-1 ${
                    stageId === stage.id ? 'text-white' : 'bg-white border border-gray-200 text-gray-600'
                  }`}
                  style={stageId === stage.id ? { backgroundColor: color } : undefined}
                >
                  {visitedStage.id} {visitedStage.title}
                </span>
              )
            })}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>情勢溫度</span>
              <span>
                Level {stage.tensionLevel ?? 1} / 5
                {stage.statusLabel ? ` · ${stage.statusLabel}` : ''}
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: color }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              這不是固定答案題，而是會依你的選擇真的走向不同結果的樹狀劇情。
            </p>
          </div>
        </div>
      ) : (
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
      )}

      <div className="flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: color }}
        >
          {branchingMode ? path.length : currentStageIdx + 1}
        </span>
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A]">{stage.title}</h2>
          {stage.statusLabel && (
            <p className="text-xs text-gray-500 mt-1">{stage.statusLabel}</p>
          )}
        </div>
      </div>

      <div
        className="rounded-xl p-5 leading-relaxed text-gray-800 whitespace-pre-line"
        style={{ backgroundColor: colorLight }}
      >
        {stage.narrative}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
          行為觀察指標
        </h3>
        <ul className="space-y-2">
          {stage.behavioralIndicators.map((indicator, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span
                className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              {indicator}
            </li>
          ))}
        </ul>
      </div>

      {hasDecisions && (
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
            你的決定
          </h3>
          <div className="space-y-3">
            {stage.decisions.map((decision) => {
              const isSelected = selectedDecision?.id === decision.id
              const showResult = selectedDecision !== null
              const showFeedback = branchingMode
                ? showResult && isSelected
                : showResult && (isSelected || decision.isCorrect)

              let borderStyle = 'border-gray-200'
              let bgStyle = 'bg-white'
              if (showResult && decision.isCorrect && (isSelected || !branchingMode)) {
                borderStyle = 'border-emerald-400'
                bgStyle = 'bg-emerald-50'
              } else if (isSelected && !decision.isCorrect) {
                borderStyle = 'border-red-400'
                bgStyle = 'bg-red-50'
              }

              const impactMeta = getImpactMeta(decision.impact)

              return (
                <button
                  key={decision.id}
                  onClick={() => handleSelect(decision)}
                  disabled={selectedDecision !== null}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all ${borderStyle} ${bgStyle} ${
                    !showResult
                      ? 'hover:border-gray-400 hover:shadow-sm cursor-pointer'
                      : 'cursor-default'
                  }`}
                >
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {decision.text}
                  </p>

                  {showFeedback && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        <span className={`text-xs font-bold ${decision.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                          {decision.isCorrect ? '較佳應對' : '需改善'}
                        </span>
                        {branchingMode && (
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${impactMeta.badgeClass}`}>
                            {impactMeta.label}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {decision.feedback}
                      </p>
                      {decision.consequence && (
                        <p className="mt-2 text-xs font-medium text-gray-700 leading-relaxed">
                          後續影響：{decision.consequence}
                        </p>
                      )}
                      {decision.teachingPoint && (
                        <p className="mt-2 text-xs leading-relaxed font-medium" style={{ color }}>
                          教學重點：{decision.teachingPoint}
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

      {!hasDecisions && stage.teachingPoints && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
            教學重點
          </h3>
          <ul className="space-y-2">
            {stage.teachingPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hasDecisions && stage.criticalActions && (
        <div
          className="rounded-xl p-5 border-2"
          style={{ borderColor: color }}
        >
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color }}>
            關鍵行動
          </h3>
          <ul className="space-y-2">
            {stage.criticalActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
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

      {(selectedDecision !== null || !hasDecisions || path.length > 1) && (
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {path.length > 1 && (
            <button
              onClick={handlePrevious}
              className="px-6 py-2.5 rounded-lg border-2 bg-white font-medium transition-colors hover:bg-gray-50"
              style={{ borderColor: color, color }}
            >
              ← 上一步
            </button>
          )}
          {(selectedDecision !== null || !hasDecisions) && (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors"
              style={{ backgroundColor: color }}
            >
              {branchingMode
                ? selectedDecision?.outcomeId
                  ? '查看結果'
                  : '推進情境'
                : isLastStage
                  ? '查看總結與 Debrief'
                  : '下一階段'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
