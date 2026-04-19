import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { ChevronLeft, ChevronRight, Video, Calendar, MapPin } from 'lucide-react'

type Clip = {
  url?: string
  label?: string
  duration?: string
}

type Session = {
  title: string
  clips: Clip[]
}

type MeetingMeta = {
  title: string
  date: string
  location: string
  file: string
  sessions: Session[]
}

const BASE = import.meta.env.BASE_URL
const V = (p: string) => `${BASE}videos/${p}`

const meetingMeta: Record<string, MeetingMeta> = {
  pretest1: {
    title: '前測第 1 場 — 內科部',
    date: '2026-04-07（二）',
    location: '內科部門診 13 診',
    file: 'pretest1.md',
    sessions: [
      {
        title: '第一場',
        clips: [
          { url: V('pretest1/session-a/clip-01.mp4'), duration: '1:22' },
          { url: V('pretest1/session-a/clip-02.mp4'), duration: '1:34' },
          { url: V('pretest1/session-a/clip-03.mp4'), duration: '0:11' },
        ],
      },
      {
        title: '第二場',
        clips: [
          { url: V('pretest1/session-b/clip-01.mp4'), duration: '1:18' },
          { url: V('pretest1/session-b/clip-02.mp4'), duration: '2:23' },
        ],
      },
    ],
  },
  pretest2: {
    title: '前測第 2 場 — 精神部',
    date: '2026-04-09（四）',
    location: '精神部門診',
    file: 'pretest2.md',
    sessions: [
      {
        title: '第一場',
        clips: [
          { url: V('pretest2/session-a/clip-01.mp4'), duration: '2:22' },
          { url: V('pretest2/session-a/clip-02.mp4'), duration: '3:41' },
        ],
      },
      {
        title: '第二場',
        clips: [
          { url: V('pretest2/session-b/clip-01.mp4'), duration: '2:42' },
          { url: V('pretest2/session-b/clip-02.mp4'), duration: '2:20' },
          { url: V('pretest2/session-b/clip-03.mp4'), duration: '0:14' },
          { url: V('pretest2/session-b/clip-04.mp4'), duration: '3:05' },
          { url: V('pretest2/session-b/clip-05.mp4'), duration: '2:18' },
          { url: V('pretest2/session-b/clip-06.mp4'), duration: '5:22' },
        ],
      },
    ],
  },
}

const order = ['pretest1', 'pretest2'] as const
const STEP2_COLOR = '#8E44AD'

function ClipPlayer({ clip, label }: { clip: Clip; label: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <p className="text-xs font-medium text-gray-600">{label}</p>
        {clip.duration && (
          <p className="text-[10px] text-gray-400 font-mono">{clip.duration}</p>
        )}
      </div>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        {clip.url ? (
          <video
            controls
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src={clip.url} type="video/mp4" />
            您的瀏覽器不支援 video 標籤。
          </video>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed rounded-lg"
            style={{ borderColor: STEP2_COLOR + '66', backgroundColor: STEP2_COLOR + '0A' }}
          >
            <Video size={28} style={{ color: STEP2_COLOR }} strokeWidth={1.5} />
            <p className="text-xs font-medium" style={{ color: STEP2_COLOR }}>
              待上傳
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function MeetingPage() {
  const { id } = useParams<{ id: string }>()
  const meta = id ? meetingMeta[id] : undefined

  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  const currentIndex = id ? order.indexOf(id as (typeof order)[number]) : -1
  const prevId = currentIndex > 0 ? order[currentIndex - 1] : undefined
  const nextId =
    currentIndex >= 0 && currentIndex < order.length - 1 ? order[currentIndex + 1] : undefined

  useEffect(() => {
    let cancelled = false

    async function loadContent() {
      if (!meta) return
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${BASE}meetings/${meta.file}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const raw = await res.text()
        if (!cancelled) setContent(raw)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : '載入會議記錄時發生錯誤')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadContent()
    return () => {
      cancelled = true
    }
  }, [id, meta])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p className="text-lg font-medium text-[#1B2A4A] mb-1">找不到會議記錄</p>
        <p className="mt-2 text-sm">ID「{id}」不存在</p>
        <Link to="/roadmap" className="mt-4 text-sm text-[#2980B9] hover:underline">
          返回學習路線
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white"
            style={{ backgroundColor: STEP2_COLOR }}
          >
            前測
          </span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
            會議記錄
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1B2A4A] mb-2">{meta.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {meta.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {meta.location}
          </span>
        </div>
      </header>

      {/* Sessions with clips */}
      <div className="mb-8 space-y-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          情境模擬錄影
        </h2>
        {meta.sessions.map((session) => (
          <section key={session.title}>
            <h3
              className="text-base font-semibold mb-3 inline-flex items-center gap-2"
              style={{ color: STEP2_COLOR }}
            >
              <span
                className="inline-block w-1 h-4 rounded-sm"
                style={{ backgroundColor: STEP2_COLOR }}
              />
              {session.title}
              <span className="text-xs font-normal text-gray-400">
                （{session.clips.length} 段）
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {session.clips.map((clip, idx) => (
                <ClipPlayer
                  key={idx}
                  clip={clip}
                  label={clip.label ?? `片段 ${idx + 1}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Markdown Content */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div
            className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200"
            style={{ borderTopColor: STEP2_COLOR }}
          />
        </div>
      ) : error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-medium text-red-700">{error}</p>
        </div>
      ) : (
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              table({ children }) {
                return (
                  <div className="my-4 overflow-x-auto rounded-lg border border-gray-200">
                    <table>{children}</table>
                  </div>
                )
              },
              blockquote({ children }) {
                return <blockquote className="alert alert-info">{children}</blockquote>
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      )}

      {/* Prev / Next / Back Navigation */}
      <nav className="mt-12 flex items-stretch gap-4 border-t border-gray-200 pt-6">
        <Link
          to="/roadmap"
          className="group flex flex-1 items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-sm"
        >
          <ChevronLeft size={20} className="shrink-0 text-gray-400 group-hover:text-gray-600" />
          <div className="text-right flex-1">
            <p className="text-xs text-gray-400">返回</p>
            <p className="text-sm font-medium text-[#1B2A4A]">學習路線</p>
          </div>
        </Link>

        {(() => {
          const candidateId = nextId ?? prevId
          const candidateMeta = candidateId ? meetingMeta[candidateId] : undefined
          if (!candidateId || !candidateMeta) return <div className="flex-1" />
          const label = nextId ? '下一場前測' : '上一場前測'
          return (
            <Link
              to={`/meetings/${candidateId}`}
              className="group flex flex-1 items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-gray-300 hover:shadow-sm"
            >
              <div className="flex-1">
                <p className="text-xs text-gray-400">{label}</p>
                <p className="text-sm font-medium text-[#1B2A4A]">{candidateMeta.title}</p>
              </div>
              <ChevronRight size={20} className="shrink-0 text-gray-400 group-hover:text-gray-600" />
            </Link>
          )
        })()}
      </nav>
    </div>
  )
}
