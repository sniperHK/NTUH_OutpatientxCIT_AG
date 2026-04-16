import { useEffect, useRef, useState } from 'react'

let mermaidInitialized = false

export default function MermaidBlock({ code }: { code: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
          })
          mermaidInitialized = true
        }

        const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const { svg: rendered } = await mermaid.render(id, code)

        if (!cancelled) {
          setSvg(rendered)
          setError('')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Mermaid render error')
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [code])

  if (error) {
    return (
      <div className="my-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        <p className="font-medium">Mermaid 圖表渲染失敗</p>
        <pre className="mt-2 whitespace-pre-wrap text-xs">{error}</pre>
      </div>
    )
  }

  if (!svg) {
    return (
      <div className="my-4 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-8 text-sm text-gray-400">
        圖表載入中...
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
