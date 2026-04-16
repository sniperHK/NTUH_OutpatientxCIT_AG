import { Link } from 'react-router-dom'
import { courseInfo, modules, scenarioMetas, tools } from '@/data/siteMeta'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-10 px-4 rounded-2xl bg-gradient-to-br from-[#D6EAF8] to-[#E8DAEF]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-2">
          {courseInfo.title}
        </h1>
        <p className="text-gray-600 mb-1">{courseInfo.subtitle}</p>
        <p className="text-sm text-gray-500 mb-1">{courseInfo.date}</p>
        <p className="text-sm text-gray-500 mb-6">{courseInfo.location}</p>
        <Link
          to="/content/M01"
          className="inline-block px-6 py-2.5 rounded-lg bg-[#1B2A4A] text-white font-medium hover:bg-[#2C3E50] transition-colors"
        >
          開始學習
        </Link>
      </section>

      {/* 學習模組 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">學習模組</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.id}
              to={`/content/${m.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: m.color }}
                />
                <span className="text-xs font-mono text-gray-400">{m.id}</span>
              </div>
              <h3 className="font-semibold text-[#1B2A4A] mb-1">{m.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{m.subtitle}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{m.instructor}</span>
                <span>{m.timeSlot}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 情境模擬 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">情境模擬</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenarioMetas.map((s) => (
            <Link
              key={s.id}
              to={`/scenario/${s.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-xs font-mono text-gray-400">{s.id}</span>
              </div>
              <h3 className="font-semibold text-[#1B2A4A] mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500">{s.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 互動工具 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">互動工具</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link
              key={t.id}
              to={`/tools/${t.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: t.color }}
                />
              </div>
              <h3 className="font-semibold text-[#1B2A4A] mb-1">{t.title}</h3>
              <p className="text-xs text-gray-500">{t.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 評量測驗 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">評量測驗</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/quiz/pre"
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-[#1B2A4A] mb-1">前測</h3>
            <p className="text-sm text-gray-500">課前知識評估</p>
          </Link>
          <Link
            to="/quiz/post"
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-[#1B2A4A] mb-1">後測</h3>
            <p className="text-sm text-gray-500">課後學習成效評估</p>
          </Link>
        </div>
      </section>

      {/* 學習路線 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">學習路線</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {[
            '課前自學',
            '前測',
            '4/20 課堂',
            '課後練習',
            '後測',
          ].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#1B2A4A] font-medium">
                {step}
              </span>
              {i < arr.length - 1 && (
                <span className="text-gray-300 text-lg">&rarr;</span>
              )}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
