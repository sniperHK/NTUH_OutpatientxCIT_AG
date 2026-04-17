import { Link } from 'react-router-dom'
import { modules, slideMeta, scenarioMetas, tools } from '../data/siteMeta'

/* ── colour helpers ── */
const moduleColor = (id: string) => modules.find(m => m.id === id)?.color ?? '#6B7280'

/* ── 4/20 timetable data ── */
interface SessionRow {
  time: string
  topic: string
  instructor?: string
  hours?: string
  isBreak?: boolean
  /** border colour key: module colour or gray */
  borderColor: string
  /** link targets */
  slideId?: string
  moduleIds?: string[]
}

const schedule: SessionRow[] = [
  {
    time: '08:00–08:10',
    topic: '課程簡介',
    instructor: '劉政亨醫師',
    borderColor: '#6B7280',
  },
  {
    time: '08:10–09:00',
    topic: '醫療職場暴力辨識與風險評估',
    instructor: '林皓陽醫師',
    hours: '1',
    borderColor: moduleColor('M01'),
    slideId: 'S-M01',
    moduleIds: ['M01', 'M02', 'M03'],
  },
  {
    time: '09:00–09:10',
    topic: '休息',
    isBreak: true,
    borderColor: '#D1D5DB',
  },
  {
    time: '09:10–10:10',
    topic: '情境模擬演練（一）：暴力降階溝通技巧',
    instructor: '林皓陽醫師',
    hours: '1',
    borderColor: moduleColor('M04'),
    slideId: 'S-M04',
    moduleIds: ['M04'],
  },
  {
    time: '10:10–10:20',
    topic: '休息',
    isBreak: true,
    borderColor: '#D1D5DB',
  },
  {
    time: '10:20–11:20',
    topic: '情境模擬演練（二）：團隊合作與安全處置',
    instructor: '劉政亨醫師',
    hours: '2',
    borderColor: moduleColor('M05'),
    slideId: 'S-M05',
    moduleIds: ['M05', 'M06'],
  },
  {
    time: '11:20–11:50',
    topic: '案例分析與綜合討論',
    borderColor: '#6B7280',
  },
  {
    time: '11:50–12:00',
    topic: '課程總結',
    borderColor: '#6B7280',
  },
]

/* ── Step badge ── */
function StepBadge({ num, color }: { num: number; color: string }) {
  return (
    <div
      className="absolute -left-10 top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow"
      style={{ backgroundColor: color }}
    >
      {num}
    </div>
  )
}

/* ── Module link pill ── */
function ModulePill({ id }: { id: string }) {
  const m = modules.find(mod => mod.id === id)
  if (!m) return null
  return (
    <Link
      to={`/content/${id}`}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium hover:opacity-80 transition-opacity"
      style={{ backgroundColor: m.colorLight, color: m.color }}
    >
      {m.id} {m.title}
    </Link>
  )
}

/* ── Slide link pill ── */
function SlidePill({ id }: { id: string }) {
  const s = slideMeta[id as keyof typeof slideMeta]
  if (!s) return null
  return (
    <Link
      to={`/slides/${id}`}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium hover:opacity-80 transition-opacity border"
      style={{ borderColor: s.color + '60', color: s.color }}
    >
      {id}
    </Link>
  )
}

/* ── Scenario link pill ── */
function ScenarioPill({ id, title }: { id: string; title: string }) {
  return (
    <Link
      to={`/scenario/${id}`}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
    >
      {id} {title}
    </Link>
  )
}

/* ── Tool link pill ── */
function ToolPill({ id, title }: { id: string; title: string; color: string }) {
  return (
    <Link
      to={`/tools/${id}`}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
    >
      {title}
    </Link>
  )
}

/* ── Main component ── */
export default function RoadmapPage() {
  const stepColors = {
    1: '#2980B9',
    2: '#8E44AD',
    3: '#C0392B',
    4: '#1E8449',
    5: '#E67E22',
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#1B2A4A] mb-2">學習路線</h1>
      <p className="text-sm text-gray-500 mb-8">
        從課前自學到課後評量，完整五步驟學習歷程
      </p>

      <div className="relative pl-10">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gray-200" />

        <div className="space-y-8">

          {/* ── Step 1: 課前自學 ── */}
          <div className="relative">
            <StepBadge num={1} color={stepColors[1]} />
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: stepColors[1] + '40', backgroundColor: '#D6EAF8' + '40' }}
            >
              <h3 className="font-semibold text-[#1B2A4A] mb-1">
                Step 1 — 課前自學
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                透過線上教材預習暴力曲線、急性處置、環境察覺、言語降階等核心知識。
              </p>
              <div className="flex flex-wrap gap-2">
                {['M01', 'M02', 'M03', 'M04'].map(id => (
                  <ModulePill key={id} id={id} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Step 2: 前測 ── */}
          <div className="relative">
            <StepBadge num={2} color={stepColors[2]} />
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: stepColors[2] + '40', backgroundColor: '#E8DAEF' + '40' }}
            >
              <h3 className="font-semibold text-[#1B2A4A] mb-1">
                Step 2 — 前測（4/7 或 4/9）
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                完成課前知識評量，讓講師掌握學員起始能力。
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Link
                  to="/quiz/pre"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: stepColors[2] }}
                >
                  前往前測
                </Link>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200/50">
                <p className="text-xs font-medium text-gray-500 mb-2">前測演練會議記錄</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://github.com/sniperHK/NTUH_OutpatientxCIT_AG/blob/master/docs/meetings/20260407_pretest1_%E5%85%A7%E7%A7%91.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    📝 4/7 內科 13 診
                  </a>
                  <a
                    href="https://github.com/sniperHK/NTUH_OutpatientxCIT_AG/blob/master/docs/meetings/20260409_pretest2_%E7%B2%BE%E7%A5%9E%E9%83%A8.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    📝 4/9 精神部
                  </a>
                  <Link
                    to="/content/M07"
                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#34495E] text-white hover:opacity-90"
                  >
                    → M07 現場應變
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Step 3: 4/20 課堂 ── */}
          <div className="relative">
            <StepBadge num={3} color={stepColors[3]} />
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: stepColors[3] + '40', backgroundColor: '#FADBD8' + '20' }}
            >
              <h3 className="font-semibold text-[#1B2A4A] mb-1">
                Step 3 — 4/20 課堂講授與情境演練
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                08:00–12:00 西址第七講堂，包含講授、影片示範與情境模擬。
              </p>

              {/* ── Visual timetable ── */}
              <div className="space-y-2">
                {schedule.map((row, i) => (
                  <div
                    key={i}
                    className={`flex rounded-lg border-l-4 ${
                      row.isBreak
                        ? 'bg-gray-50 py-1.5 px-3'
                        : 'bg-white py-3 px-4 shadow-sm'
                    }`}
                    style={{ borderLeftColor: row.borderColor }}
                  >
                    {row.isBreak ? (
                      <span className="text-xs text-gray-400 italic">
                        {row.time} — {row.topic}
                      </span>
                    ) : (
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                            {row.time}
                          </span>
                          <span className="text-sm font-semibold text-[#1B2A4A]">
                            {row.topic}
                          </span>
                          {row.hours && (
                            <span className="text-xs text-gray-400">
                              ({row.hours} hr)
                            </span>
                          )}
                        </div>
                        {row.instructor && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {row.instructor}
                          </p>
                        )}
                        {(row.slideId || row.moduleIds) && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {row.slideId && <SlidePill id={row.slideId} />}
                            {row.moduleIds?.map(id => (
                              <ModulePill key={id} id={id} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-3">
                合計 4 小時（10:20–12:00 合計 2 時數）
              </p>
            </div>
          </div>

          {/* ── Step 4: 課後練習 ── */}
          <div className="relative">
            <StepBadge num={4} color={stepColors[4]} />
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: stepColors[4] + '40', backgroundColor: '#D5F5E3' + '40' }}
            >
              <h3 className="font-semibold text-[#1B2A4A] mb-1">
                Step 4 — 課後情境練習 + 決策樹
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                利用互動情境與暴力升級通報決策樹進行自主練習。
              </p>

              <div className="mb-2">
                <p className="text-xs font-medium text-gray-500 mb-1.5">情境練習</p>
                <div className="flex flex-wrap gap-1.5">
                  {scenarioMetas.map(s => (
                    <ScenarioPill key={s.id} id={s.id} title={s.title} />
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <p className="text-xs font-medium text-gray-500 mb-1.5">互動工具</p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map(t => (
                    <ToolPill key={t.id} id={t.id} title={t.title} color={t.color} />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500 mb-1.5">隨堂測驗練習</p>
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: stepColors[4] }}
                >
                  前往測驗練習
                </Link>
              </div>
            </div>
          </div>

          {/* ── Step 5: 後測 ── */}
          <div className="relative">
            <StepBadge num={5} color={stepColors[5]} />
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: stepColors[5] + '40', backgroundColor: '#FDEBD0' + '40' }}
            >
              <h3 className="font-semibold text-[#1B2A4A] mb-1">
                Step 5 — 後測（6/4 或 6/11）
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                完成課後評量，評估學習成效與行為改變意向。門診診間以 SP 角色扮演方式進行。
              </p>
              <Link
                to="/quiz/post"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: stepColors[5] }}
              >
                前往後測
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
