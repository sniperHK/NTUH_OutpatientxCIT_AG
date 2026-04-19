import { FileText, Printer } from 'lucide-react'

export default function HandoutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FDEBD0] flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#E67E22]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1B2A4A]">學員手冊</h1>
            <p className="text-sm text-gray-500">CIT 危機處理介入訓練工作坊 — 隨身速查卡</p>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-[#1B2A4A] text-white rounded-lg hover:bg-[#2C3E50] transition-colors print:hidden"
        >
          <Printer className="w-4 h-4" />
          列印
        </button>
      </div>

      {/* 停聽同選口袋卡 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-6 print:border-black">
        <h2 className="text-lg font-bold text-[#C0392B] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#FADBD8] text-[#C0392B] flex items-center justify-center text-xs font-bold">1</span>
          停聽同選 — 去激化四步驟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { step: '停', action: '停下手邊工作，面對對方', tips: '放下東西、站起來、確認環境安全與出口', color: '#2980B9', bg: '#D6EAF8' },
            { step: '聽', action: '讓對方說完，不打斷', tips: '「嗯...」「我聽到了...」點頭示意', color: '#8E44AD', bg: '#E8DAEF' },
            { step: '同', action: '同理回應，承認感受', tips: '「等這麼久真的很辛苦」「我理解您很著急」', color: '#E67E22', bg: '#FDEBD0' },
            { step: '選', action: '提供 2 個選項', tips: '「您可以先坐著休息，我幫您確認進度；或者我先帶阿嬤去量血壓？」', color: '#1E8449', bg: '#D5F5E3' },
          ].map((item) => (
            <div key={item.step} className="rounded-lg p-3" style={{ background: item.bg }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-black" style={{ color: item.color }}>{item.step}</span>
                <span className="font-semibold text-sm" style={{ color: item.color }}>{item.action}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.tips}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEFUSE 速查表 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-6 print:border-black">
        <h2 className="text-lg font-bold text-[#8E44AD] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#E8DAEF] text-[#8E44AD] flex items-center justify-center text-xs font-bold">2</span>
          DEFUSE 六步驟速查
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F5EEF8]">
              <th className="px-3 py-2 text-left font-semibold text-[#8E44AD] w-16">步驟</th>
              <th className="px-3 py-2 text-left font-semibold text-[#8E44AD]">動作</th>
              <th className="px-3 py-2 text-left font-semibold text-[#8E44AD] w-16">對應</th>
            </tr>
          </thead>
          <tbody>
            {[
              { letter: 'D', name: 'Decide', desc: '判斷是否適合口頭降階', map: '停' },
              { letter: 'E', name: 'Ensure Safety', desc: '確保環境安全、清除危險物品', map: '停' },
              { letter: 'F', name: 'Form Relationship', desc: '自我介紹、詢問稱呼', map: '聽' },
              { letter: 'U', name: 'Utilize Interests', desc: '辨識需求、驗證感受', map: '同' },
              { letter: 'S', name: 'Set Limits', desc: '說明後果、提供選項', map: '選' },
              { letter: 'E', name: 'Enforce/Evaluate', desc: '重新評估、必要時升級', map: '選' },
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                <td className="px-3 py-2 font-bold text-[#8E44AD]">{row.letter}</td>
                <td className="px-3 py-2">
                  <span className="font-medium">{row.name}</span>
                  <span className="text-gray-500 ml-1">— {row.desc}</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#FADBD8] text-[#C0392B] text-xs font-bold leading-6">{row.map}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 安全站位 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-6 print:border-black">
        <h2 className="text-lg font-bold text-[#E67E22] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#FDEBD0] text-[#E67E22] flex items-center justify-center text-xs font-bold">3</span>
          安全站位原則
        </h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { icon: '📏', text: '保持 1–2 公尺安全距離' },
            { icon: '🧍', text: '側身 45 度站位' },
            { icon: '🚪', text: '保持出口暢通' },
            { icon: '🚫', text: '不被逼至角落' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#FDEBD0] rounded-lg p-3">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-[#2C3E50]">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 通報升級決策 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-6 print:border-black">
        <h2 className="text-lg font-bold text-[#1B2A4A] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#D6DBDF] text-[#2C3E50] flex items-center justify-center text-xs font-bold">4</span>
          通報升級流程
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-3 p-3 bg-[#D6EAF8] rounded-lg">
            <span className="font-bold text-[#2980B9] shrink-0">Level 1</span>
            <div><strong>言語不滿</strong> → 同理溝通（停聽同選）→ 嘗試降階</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[#FDEBD0] rounded-lg">
            <span className="font-bold text-[#E67E22] shrink-0">Level 2</span>
            <div><strong>言語威脅</strong> → 通知 Leader → 聯繫駐警隊</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[#FADBD8] rounded-lg">
            <span className="font-bold text-[#C0392B] shrink-0">Level 3</span>
            <div><strong>持物 / 肢體暴力</strong> → 駐警 → 聯繫管區派出所</div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[#E8DAEF] rounded-lg">
            <span className="font-bold text-[#8E44AD] shrink-0">Level 4</span>
            <div><strong>立即危險</strong> → 直接撥打 <strong>110</strong></div>
          </div>
        </div>
      </section>

      {/* 團隊分工 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 mb-6 print:border-black">
        <h2 className="text-lg font-bold text-[#1E8449] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#D5F5E3] text-[#1E8449] flex items-center justify-center text-xs font-bold">5</span>
          團隊三角色分工
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="bg-[#D5F5E3] rounded-lg p-3 text-center">
            <div className="font-bold text-[#1E8449] mb-1">主責溝通者</div>
            <p className="text-gray-600 text-xs">一人主導對話，其他人不插嘴</p>
          </div>
          <div className="bg-[#D6EAF8] rounded-lg p-3 text-center">
            <div className="font-bold text-[#2980B9] mb-1">通報者</div>
            <p className="text-gray-600 text-xs">聯繫駐警 / leader / 管區</p>
          </div>
          <div className="bg-[#FDEBD0] rounded-lg p-3 text-center">
            <div className="font-bold text-[#E67E22] mb-1">現場秩序維護</div>
            <p className="text-gray-600 text-xs">引導其他病人、保護高風險族群</p>
          </div>
        </div>
      </section>

      {/* 重要聯繫資訊 */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 print:border-black">
        <h2 className="text-lg font-bold text-[#2C3E50] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#D6DBDF] text-[#2C3E50] flex items-center justify-center text-xs font-bold">6</span>
          重要聯繫資訊
        </h2>

        {/* 6A. 緊急通報 */}
        <h3 className="text-sm font-semibold text-[#C0392B] mb-2 mt-2">🚨 緊急通報</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
          <div className="bg-[#FADBD8] rounded-lg p-3">
            <div className="font-semibold text-[#2C3E50]">報警</div>
            <a href="tel:110" className="text-[#C0392B] font-bold text-lg">110</a>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-semibold text-[#2C3E50]">院內駐警隊（暗語：阿兩阿兩）</div>
            <p className="text-gray-500 text-xs">東址：分機 <span className="font-mono">_____</span></p>
            <p className="text-gray-500 text-xs">西址：分機 <span className="font-mono">_____</span></p>
            <p className="text-gray-500 text-xs">兒醫：分機 <span className="font-mono">_____</span></p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 sm:col-span-2">
            <div className="font-semibold text-[#2C3E50]">管區 — 中正第一分局</div>
            <p className="text-gray-600 text-xs">台北市中正區公園路 15 號 ｜ 介壽派出所轄區</p>
            <a href="tel:0223716426" className="text-[#C0392B] font-bold">02-2371-6426</a>
          </div>
          <div className="bg-[#FCF3CF] rounded-lg p-3 sm:col-span-2">
            <div className="font-semibold text-[#2C3E50]">衛福部 24h 精神醫療緊急處置線上諮詢專線</div>
            <p className="text-gray-600 text-xs">疑似精神危機、是否強制送醫的第一通諮詢電話（精神衛生法第 48 條實務）</p>
            <a href="tel:0492551010" className="text-[#B9770E] font-bold text-lg">(049) 255-1010</a>
          </div>
        </div>

        {/* 6B. 心理諮詢支持 */}
        <h3 className="text-sm font-semibold text-[#1E8449] mb-2 mt-4">🧠 心理諮詢支持（事件後關懷）</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
          <div className="bg-[#D5F5E3] rounded-lg p-3">
            <div className="font-semibold text-[#2C3E50]">衛福部 1925 安心專線</div>
            <p className="text-gray-600 text-xs">24h 免費・全國・依舊愛我</p>
            <a href="tel:1925" className="text-[#1E8449] font-bold text-lg">1925</a>
          </div>
          <div className="bg-[#D5F5E3] rounded-lg p-3">
            <div className="font-semibold text-[#2C3E50]">生命線 / 張老師</div>
            <div className="flex gap-3 mt-1">
              <a href="tel:1995" className="text-[#1E8449] font-semibold">1995 生命線</a>
              <a href="tel:1980" className="text-[#1E8449] font-semibold">1980 張老師</a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 sm:col-span-2">
            <div className="font-semibold text-[#2C3E50]">院內 EAP 員工協助方案</div>
            <p className="text-gray-500 text-xs">分機 <span className="font-mono">_____</span>（請洽人事室或員工關懷窗口）</p>
          </div>
        </div>

        {/* 6C. 院內參考連結 */}
        <h3 className="text-sm font-semibold text-[#2980B9] mb-2 mt-4">📚 院內知識平台連結</h3>
        <div className="space-y-2 text-sm mb-4">
          <a
            href="https://km.ntuh.gov.tw/km/readdocument.aspx?documentId=44104"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#D6EAF8] rounded-lg p-3 hover:bg-[#AED6F1] transition-colors"
          >
            <div className="font-semibold text-[#2980B9]">→ 院內暴力行為應變作業要點</div>
            <p className="text-gray-600 text-xs">第六章 6.26 ｜ KM 平台 documentId=44104</p>
          </a>
          <a
            href="https://km.ntuh.gov.tw/km/readdocument.aspx?documentId=90347"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#D6EAF8] rounded-lg p-3 hover:bg-[#AED6F1] transition-colors"
          >
            <div className="font-semibold text-[#2980B9]">→ 員工關懷計畫</div>
            <p className="text-gray-600 text-xs">KM 平台 documentId=90347</p>
          </a>
        </div>

        {/* 6D. 工作坊聯絡 */}
        <h3 className="text-sm font-semibold text-[#8E44AD] mb-2 mt-4">📧 工作坊聯絡窗口</h3>
        <div className="bg-[#E8DAEF] rounded-lg p-3 text-sm">
          <div className="font-semibold text-[#2C3E50]">林雯霞 護理長</div>
          <div className="text-gray-600 text-xs">CIT 危機處理介入訓練工作坊聯絡人</div>
          <div className="flex flex-wrap gap-3 mt-1">
            <a href="tel:266883" className="text-[#8E44AD] font-semibold">分機 266883</a>
            <a href="mailto:betty0505@ntuh.gov.tw" className="text-[#8E44AD] font-semibold">betty0505@ntuh.gov.tw</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center print:text-gray-600">
          標示 <span className="font-mono">_____</span> 之欄位為院內機密分機，請依實際單位填入後再列印分發
        </p>
      </section>
    </div>
  )
}
