import { useParams, Link } from 'react-router-dom'
import { tools } from '@/data/siteMeta'
import { escalationTree } from '@/data/trees/escalation'
import { slecDefuseTree } from '@/data/trees/slec-defuse'
import { violenceCurveTree } from '@/data/trees/violence-curve'
import DecisionTreeViewer from '@/components/tools/DecisionTreeViewer'
import type { DecisionTree } from '@/data/types'

const treeMap: Record<string, DecisionTree> = {
  'escalation-tree': escalationTree,
  'slec-defuse': slecDefuseTree,
  'violence-curve': violenceCurveTree,
}

export default function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>()
  const tree = toolId ? treeMap[toolId] : undefined
  const meta = tools.find((t) => t.id === toolId)

  if (!tree || !meta) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 mb-4">找不到此互動工具</p>
        <Link to="/" className="text-[#2980B9] hover:underline text-sm">
          返回首頁
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: meta.color }}
            >
              互動工具
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#1B2A4A] mb-1">
            {meta.title}
          </h1>
          <p className="text-gray-500 text-sm">{meta.subtitle}</p>
        </div>
      </div>

      {/* Decision tree viewer */}
      <DecisionTreeViewer tree={tree} />

      {/* Back link */}
      <div className="pt-4 border-t border-gray-200">
        <Link to="/" className="text-sm text-[#2980B9] hover:underline">
          &larr; 返回首頁
        </Link>
      </div>
    </div>
  )
}
