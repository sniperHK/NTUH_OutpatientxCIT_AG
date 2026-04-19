import { Link } from 'react-router-dom'
import { courseInfo, modules, scenarioMetas, tools, slideOrder, slideMeta } from '@/data/siteMeta'
import { Presentation, MessageSquare, BookOpen, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative text-center py-10 px-4 rounded-2xl bg-gradient-to-br from-[#D6EAF8] to-[#E8DAEF]">
        {/* QR Code 右上角 */}
        <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-sm hidden sm:block">
          <img
            src={`${import.meta.env.BASE_URL}cit-qr.svg`}
            alt="QR Code: cit.henry780930.com"
            className="w-20 h-20"
          />
          <p className="text-[10px] text-gray-500 text-center mt-1 leading-tight">
            掃我<br/>分享給同仁
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-2">
          {courseInfo.title}
        </h1>
        <p className="text-gray-600 mb-1">{courseInfo.subtitle}</p>
        <p className="text-sm text-gray-500 mb-1">{courseInfo.date}</p>
        <p className="text-sm text-gray-500 mb-6">{courseInfo.location}</p>
        <Link
          to="/content/M01"
          className="inline-block px-6 py-2.5 rounded-lg bg-[#1B2A4A] text-white font-medium hover:bg-[#2C3E50] hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          開始學習
        </Link>
      </section>

      {/* 核心框架速查 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-1 flex items-center gap-2">
          <Zap size={22} className="text-[#F39C12]" />
          核心框架速查
        </h2>
        <p className="text-sm text-gray-500 mb-4">課堂上最常引用的四個框架 — 上課前先掃一遍</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* 卡片 1：四大樣態 */}
          <Link
            to="/content/M02#section-2"
            className="block bg-gradient-to-br from-[#D6EAF8] to-white rounded-lg border border-[#2980B9]/20 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-xs font-mono text-[#2980B9] mb-1">M02</div>
            <h3 className="font-semibold text-[#1B2A4A] mb-2">精神危機四大樣態</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>• <b>LOR</b> 失去現實感</li>
              <li>• <b>LOC</b> 失去控制感</li>
              <li>• <b>LOH</b> 失去希望</li>
              <li>• <b>LOP</b> 失去穩定想法</li>
            </ul>
          </Link>

          {/* 卡片 2：言語降階五步驟 */}
          <Link
            to="/content/M04#section-6"
            className="block bg-gradient-to-br from-[#E8DAEF] to-white rounded-lg border border-[#8E44AD]/20 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-xs font-mono text-[#8E44AD] mb-1">M04</div>
            <h3 className="font-semibold text-[#1B2A4A] mb-2">言語降階五步驟</h3>
            <ol className="text-xs text-gray-600 space-y-0.5">
              <li>1. 心理建設</li>
              <li>2. 目標確認</li>
              <li>3. 戰術三寶</li>
              <li>4. 控制輸出</li>
              <li>5. 辨識→同理→轉移</li>
            </ol>
          </Link>

          {/* 卡片 3：降階兵法 */}
          <Link
            to="/content/M07#zero"
            className="block bg-gradient-to-br from-[#FDEBD0] to-white rounded-lg border border-[#E67E22]/20 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-xs font-mono text-[#E67E22] mb-1">M07</div>
            <h3 className="font-semibold text-[#1B2A4A] mb-2">降階兵法</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>上兵 <b>伐謀</b>：預防</li>
              <li>其次 <b>伐交</b>：言語</li>
              <li>其次 <b>伐兵</b>：備援</li>
              <li>其下 <b>攻城</b>：強制</li>
            </ul>
          </Link>

          {/* 卡片 4：法律速查 */}
          <Link
            to="/content/M07#section-6"
            className="block bg-gradient-to-br from-[#FADBD8] to-white rounded-lg border border-[#C0392B]/20 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-xs font-mono text-[#C0392B] mb-1">法律附錄</div>
            <h3 className="font-semibold text-[#1B2A4A] mb-2">精神衛生法 48 條</h3>
            <ul className="text-xs text-gray-600 space-y-0.5">
              <li>「有傷害之虞」即可通報</li>
              <li>送醫通常都不會錯</li>
              <li className="pt-1 font-semibold text-[#C0392B]">☎ (049) 255-1010</li>
              <li className="text-gray-400 text-[10px]">24h 諮詢專線</li>
            </ul>
          </Link>
        </div>

        {/* 名詞對照表連結 */}
        <div className="mt-4">
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 text-sm text-[#2980B9] hover:underline"
          >
            <BookOpen size={16} />
            更多縮寫與術語速查 → 名詞對照表
          </Link>
        </div>
      </section>

      {/* 學習模組 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">學習模組</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.id}
              to={`/content/${m.id}`}
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
              className="block bg-white rounded-lg border border-gray-200 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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

      {/* 課堂簡報 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4 flex items-center gap-2">
          <Presentation size={22} />
          課堂簡報
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {slideOrder.map((id) => {
            const s = slideMeta[id]
            return (
              <Link
                key={id}
                to={`/slides/${id}`}
                className="block bg-white rounded-lg border border-gray-200 p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-xs font-mono text-gray-400">{id.replace('S-', '')}</span>
                </div>
                <h3 className="font-semibold text-[#1B2A4A] mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{s.desc}</p>
                <span className="text-xs text-gray-400">{s.instructor}醫師</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 評量測驗 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">評量測驗</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/quiz/pre"
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-semibold text-[#1B2A4A] mb-1">前測</h3>
            <p className="text-sm text-gray-500">課前知識評估</p>
          </Link>
          <Link
            to="/quiz/post"
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-semibold text-[#1B2A4A] mb-1">後測</h3>
            <p className="text-sm text-gray-500">課後學習成效評估</p>
          </Link>
        </div>
      </section>

      {/* 留言板 */}
      <section>
        <h2 className="text-xl font-bold text-[#1B2A4A] mb-4 flex items-center gap-2">
          <MessageSquare size={22} />
          留言板
        </h2>
        <Link
          to="/messages"
          className="block bg-gradient-to-br from-[#D5F5E3] to-[#E8F8F5] rounded-xl p-5 border border-[#1E8449]/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <MessageSquare className="w-5 h-5 text-[#1E8449]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1B2A4A]">課前課後討論區</h3>
              <p className="text-xs text-gray-600">提問 · 經驗分享 · 現場互動</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 ml-[3.25rem]">
            匿名或暱稱皆可，歡迎分享您在門診遇到的案例與疑問。
          </p>
        </Link>
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
