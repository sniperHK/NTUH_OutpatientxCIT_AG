import { useEffect, useRef, useState } from 'react'
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

function flattenNodes(node: TreeNode): TreeNode[] {
  const result: TreeNode[] = [node]
  if (node.children) {
    for (const child of node.children) {
      result.push(...flattenNodes(child))
    }
  }
  return result
}

export default function DecisionTreeViewer({ tree }: Props) {
  const diagramRef = useRef<HTMLDivElement>(null)
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null)
  const allNodes = flattenNodes(tree.rootNode)

  useEffect(() => {
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
  }, [tree])

  return (
    <div className="space-y-6">
      {/* Mermaid diagram */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 overflow-x-auto">
        <div ref={diagramRef} className="min-w-[600px] flex justify-center" />
      </div>

      {/* Node detail panels */}
      <div>
        <h3 className="text-lg font-semibold text-[#1B2A4A] mb-3">節點說明</h3>
        <div className="grid gap-3 sm:grid-cols-2">
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
                  <p className="text-xs text-gray-500 mb-1">{node.description}</p>
                )}
                {selectedNode?.id === node.id && node.action && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-xs font-medium text-[#1E8449]">
                      建議行動
                    </p>
                    <p className="text-sm text-gray-700 mt-0.5">{node.action}</p>
                  </div>
                )}
              </button>
            ))}
        </div>
      </div>

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
          <li>實際處置時請依現場評估靈活調整</li>
        </ul>
      </div>
    </div>
  )
}
