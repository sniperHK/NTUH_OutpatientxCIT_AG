import { useParams, Link } from 'react-router-dom'
import { slideOrder, slideMeta } from '@/data/siteMeta'
import type { SlideId } from '@/data/siteMeta'
import { Presentation, Maximize2, ChevronLeft } from 'lucide-react'

export default function SlidesPage() {
  const { slideId } = useParams<{ slideId: string }>()
  const BASE = import.meta.env.BASE_URL

  // Default to first slide if none specified
  const currentId = (slideId && slideId in slideMeta ? slideId : slideOrder[0]) as SlideId
  const meta = slideMeta[currentId]

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Top bar: back + slide tabs + fullscreen */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shrink-0">
        <Link to="/" className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#1B2A4A]">
          <ChevronLeft size={16} /> 首頁
        </Link>

        <div className="flex items-center gap-1">
          {slideOrder.map((id) => {
            const s = slideMeta[id]
            const isActive = id === currentId
            return (
              <Link
                key={id}
                to={`/slides/${id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={isActive ? { backgroundColor: s.color } : undefined}
              >
                {id.replace('S-', '')}
              </Link>
            )
          })}
        </div>

        <button
          onClick={() => window.open(`${BASE}slides/${currentId}/`, '_blank')}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Maximize2 size={14} />
          全螢幕
        </button>
      </div>

      {/* Slide info */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100 shrink-0">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: meta.colorLight }}>
          <Presentation size={16} style={{ color: meta.color }} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#1B2A4A]">{meta.title}</h2>
          <p className="text-xs text-gray-500">{meta.desc} — {meta.instructor}醫師</p>
        </div>
      </div>

      {/* Iframe */}
      <div className="flex-1 overflow-hidden">
        <iframe
          key={currentId}
          src={`${BASE}slides/${currentId}/`}
          title={meta.title}
          className="w-full h-full border-0"
          allow="fullscreen"
        />
      </div>
    </div>
  )
}
