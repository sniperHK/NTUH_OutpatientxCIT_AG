import { useCallback, useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import type { DecisionTree, TreeNode } from '@/data/types'

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    fontFamily: '"Inter", "PingFang TC", "Noto Sans TC", system-ui, sans-serif',
    fontSize: '14px',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
    padding: 12,
  },
})

interface Props {
  tree: DecisionTree
}

type TabMode = 'interactive' | 'panorama'

function flattenNodes(node: TreeNode): TreeNode[] {
  const result: TreeNode[] = [node]
  if (node.children) {
    for (const child of node.children) {
      result.push(...flattenNodes(child))
    }
  }
  return result
}

function findNodeById(node: TreeNode, id: string): TreeNode | null {
  if (node.id === id) return node
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, id)
      if (found) return found
    }
  }
  return null
}

export default function DecisionTreeViewer({ tree }: Props) {
  const [tab, setTab] = useState<TabMode>('interactive')

  // Interactive guide state
  const [path, setPath] = useState<string[]>([tree.rootNode.id])
  const currentNodeId = path[path.length - 1] ?? tree.rootNode.id
  const currentNode = findNodeById(tree.rootNode, currentNodeId) ?? tree.rootNode
  const isLeaf = !currentNode.children || currentNode.children.length === 0

  // Panorama state
  const diagramRef = useRef<HTMLDivElement>(null)
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)
  const allNodes = flattenNodes(tree.rootNode)

  const handleReset = useCallback(() => {
    setPath([tree.rootNode.id])
  }, [tree.rootNode.id])

  const handleBack = useCallback(() => {
    setPath((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }, [])

  const handleSelectChild = useCallback(
    (childId: string) => {
      setPath((prev) => [...prev, childId])
    },
    []
  )

  const handleBreadcrumbClick = useCallback(
    (index: number) => {
      setPath((prev) => prev.slice(0, index + 1))
    },
    []
  )

  // Render mermaid diagram when panorama tab is active
  useEffect(() => {
    if (tab !== 'panorama') return
    async function renderDiagram() {
      if (!diagramRef.current) return
      diagramRef.current.innerHTML = ''
      const id = `mermaid-${tree.id}-${Date.now()}`
      try {
        const { svg } = await mermaid.render(id, tree.mermaidDiagram)
        diagramRef.current.innerHTML = svg
      } catch {
        diagramRef.current.innerHTML =
          '<p class="text-red-500 text-sm p-4">Mermaid diagram rendering failed.</p>'
      }
    }
    renderDiagram()
  }, [tree, tab])

  // Build breadcrumb labels
  const breadcrumbNodes = path.map((id) => findNodeById(tree.rootNode, id)).filter(Boolean) as TreeNode[]

  return (
    <div className="space-y-4">
      {/* Tab bar */}
      <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => setTab('interactive')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            tab === 'interactive'
              ? 'bg-white text-[#1B2A4A] shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          互動引導
        </button>
        <button
          type="button"
          onClick={() => setTab('panorama')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            tab === 'panorama'
              ? 'bg-white text-[#1B2A4A] shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          全景圖
        </button>
      </div>

      {/* ─── Tab 1: Interactive Guide ─── */}
      {tab === 'interactive' && (
        <div className="space-y-4">
          {/* Breadcrumb trail */}
          <div className="flex flex-wrap items-center gap-1 text-sm">
            {breadcrumbNodes.map((node, i) => (
              <span key={node.id} className="flex items-center gap-1">
                {i > 0 && <span className="text-gray-400">→</span>}
                <button
                  type="button"
                  onClick={() => handleBreadcrumbClick(i)}
                  className={`rounded px-2 py-0.5 transition-colors ${
                    i === breadcrumbNodes.length - 1
                      ? 'font-semibold text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={
                    i === breadcrumbNodes.length - 1
                      ? { backgroundColor: tree.color }
                      : undefined
                  }
                >
                  {node.label}
                </button>
              </span>
            ))}
          </div>

          {/* Current node card */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            {/* Question or label */}
            {currentNode.question && !isLeaf ? (
              <h2 className="text-xl font-bold text-[#1B2A4A]">
                {currentNode.question}
              </h2>
            ) : (
              <h2 className="text-xl font-bold text-[#1B2A4A]">
                {currentNode.label}
              </h2>
            )}
            {currentNode.description && (
              <p className="mt-2 text-gray-600">{currentNode.description}</p>
            )}
            {/* Show action for intermediate nodes that have both action and children */}
            {currentNode.action && !isLeaf && (
              <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-xs font-medium text-blue-700">此階段建議行動</p>
                <p className="mt-1 text-sm text-blue-900">{currentNode.action}</p>
              </div>
            )}
          </div>

          {/* Children as option buttons OR leaf action result */}
          {isLeaf ? (
            <div className="rounded-xl border-2 border-green-300 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-green-800">建議行動</h3>
              </div>
              <p className="text-green-900 text-base leading-relaxed">
                {currentNode.action ?? '依現場評估靈活調整處置方式。'}
              </p>
            </div>
          ) : (
            currentNode.children && (
              <div className="space-y-2">
                {currentNode.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    onClick={() => handleSelectChild(child.id)}
                    className="group flex w-full items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left transition-all hover:shadow-md hover:border-gray-300"
                    style={{ borderLeftWidth: '4px', borderLeftColor: tree.color }}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#1B2A4A] group-hover:underline">
                        {child.label}
                      </p>
                      {child.description && (
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {child.description}
                        </p>
                      )}
                    </div>
                    <span
                      className="mt-1 shrink-0 text-gray-400 group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            )
          )}

          {/* Bottom controls */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {path.length > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  回上一步
                </button>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                重新開始
              </button>
            </div>
            <button
              type="button"
              onClick={() => setTab('panorama')}
              className="text-sm hover:underline"
              style={{ color: tree.color }}
            >
              切換到全景圖 →
            </button>
          </div>
        </div>
      )}

      {/* ─── Tab 2: Panorama ─── */}
      {tab === 'panorama' && (
        <div className="space-y-6">
          {/* Mermaid diagram */}
          <div className="bg-white rounded-xl border border-gray-200 p-4 overflow-x-auto">
            <div ref={diagramRef} className="min-w-[600px] flex justify-center" />
          </div>

          {/* Collapsible node detail cards */}
          <details className="group">
            <summary className="cursor-pointer text-lg font-semibold text-[#1B2A4A] mb-3 list-none flex items-center gap-2">
              <span className="transition-transform group-open:rotate-90">▶</span>
              節點說明
            </summary>
            <div className="grid gap-3 sm:grid-cols-2 mt-3">
              {allNodes
                .filter((n) => n.description || n.action)
                .map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() =>
                      setSelectedNode(selectedNode?.id === node.id ? null : node)
                    }
                    className={`text-left w-full rounded-lg border p-4 transition-all cursor-pointer ${
                      selectedNode?.id === node.id
                        ? 'border-[#2980B9] bg-[#D6EAF8]/40 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <p className="font-medium text-[#1B2A4A] text-sm mb-1">
                      {node.label}
                    </p>
                    {node.description && (
                      <p className="text-xs text-gray-500 mb-1">
                        {node.description}
                      </p>
                    )}
                    {selectedNode?.id === node.id && node.action && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <p className="text-xs font-medium text-[#1E8449]">
                          建議行動
                        </p>
                        <p className="text-sm text-gray-700 mt-0.5">
                          {node.action}
                        </p>
                      </div>
                    )}
                  </button>
                ))}
            </div>
          </details>

          {/* Guide section */}
          <div
            className="rounded-xl p-5 border-l-4"
            style={{
              backgroundColor: tree.colorLight,
              borderColor: tree.color,
            }}
          >
            <h3 className="font-semibold text-[#1B2A4A] mb-2">使用說明</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>上方流程圖呈現完整決策路徑</li>
              <li>點擊下方節點卡片可展開「建議行動」說明</li>
              <li>切換「互動引導」分頁可逐步體驗決策流程</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
