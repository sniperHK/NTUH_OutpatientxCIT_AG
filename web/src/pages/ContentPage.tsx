import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { modules } from '@/data/siteMeta'
import type { ModuleMeta } from '@/data/types'
import MermaidBlock from '@/components/markdown/MermaidBlock'
import { ChevronLeft, ChevronRight, BookOpen, Clock, User } from 'lucide-react'

// Module ID → markdown filename mapping
const moduleFileMap: Record<string, string> = {
  M01: 'M01_violence-curve.md',
  M02: 'M02_agitation-emergency.md',
  M03: 'M03_environmental-awareness.md',
  M04: 'M04_verbal-deescalation.md',
  M05: 'M05_team-collaboration.md',
  M06: 'M06_reporting-regulations.md',
  M07: 'M07_field-response.md',
}

// Resolve base path for fetching public assets
const BASE = import.meta.env.BASE_URL

export default function ContentPage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  // Find current module metadata and neighbors
  const currentIndex = modules.findIndex((m) => m.id === moduleId)
  const meta: ModuleMeta | undefined = modules[currentIndex]
  const prevModule: ModuleMeta | undefined = modules[currentIndex - 1]
  const nextModule: ModuleMeta | undefined = modules[currentIndex + 1]

  useEffect(() => {
    let cancelled = false

    async function loadContent() {
      if (!moduleId) return

      setLoading(true)
      setError('')

      const filename = moduleFileMap[moduleId]
      if (!filename) {
        setError(`找不到模組 ${moduleId} 的教材內容`)
        setLoading(false)
        return
      }

      try {
        const res = await fetch(`${BASE}modules/${filename}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const raw = await res.text()
        if (!cancelled) {
          setContent(raw)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '載入教材時發生錯誤')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadContent()
    return () => { cancelled = true }
  }, [moduleId])

  // Scroll to top on module change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [moduleId])

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p className="text-lg font-medium text-[#1B2A4A] mb-1">找不到模組</p>
        <p className="mt-2 text-sm">模組 ID「{moduleId}」不存在</p>
        <Link to="/" className="mt-4 text-sm text-[#2980B9] hover:underline">
          返回首頁
        </Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200" style={{ borderTopColor: meta.color }} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-medium text-red-700">{error}</p>
          <Link to="/" className="mt-3 inline-block text-sm text-[#2980B9] hover:underline">
            返回首頁
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Module Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white"
            style={{ backgroundColor: meta.color }}
          >
            {meta.id}
          </span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            學習模組
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1B2A4A] mb-1">{meta.title}</h1>
        <p className="text-base text-gray-500 mb-4">{meta.subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <User size={14} />
            {meta.instructor}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {meta.timeSlot}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BookOpen size={14} />
            模組 {currentIndex + 1} / {modules.length}
          </span>
        </div>
        <div className="mt-4 h-1 rounded-full" style={{ backgroundColor: meta.colorLight }}>
          <div
            className="h-full rounded-full transition-all"
            style={{
              backgroundColor: meta.color,
              width: `${((currentIndex + 1) / modules.length) * 100}%`,
            }}
          />
        </div>
      </header>

      {/* Markdown Content */}
      <article className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              const lang = match?.[1]

              if (lang === 'mermaid') {
                return <MermaidBlock code={String(children).trim()} />
              }

              // Inline code
              if (!className) {
                return (
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-[#C0392B]" {...props}>
                    {children}
                  </code>
                )
              }

              // Block code
              return (
                <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              )
            },
            table({ children }) {
              return (
                <div className="my-4 overflow-x-auto rounded-lg border border-gray-200">
                  <table>{children}</table>
                </div>
              )
            },
            blockquote({ children }) {
              return (
                <blockquote className="alert alert-info">
                  {children}
                </blockquote>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Prev / Next Navigation */}
      <nav className="mt-12 flex items-stretch gap-4 border-t border-gray-200 pt-6">
        {prevModule ? (
          <Link
            to={`/content/${prevModule.id}`}
            className="group flex flex-1 items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-sm"
          >
            <ChevronLeft size={20} className="shrink-0 text-gray-400 group-hover:text-gray-600" />
            <div className="text-right flex-1">
              <p className="text-xs text-gray-400">上一模組</p>
              <p className="text-sm font-medium text-[#1B2A4A]">{prevModule.title}</p>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextModule ? (
          <Link
            to={`/content/${nextModule.id}`}
            className="group flex flex-1 items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-sm"
          >
            <div className="flex-1">
              <p className="text-xs text-gray-400">下一模組</p>
              <p className="text-sm font-medium text-[#1B2A4A]">{nextModule.title}</p>
            </div>
            <ChevronRight size={20} className="shrink-0 text-gray-400 group-hover:text-gray-600" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  )
}
