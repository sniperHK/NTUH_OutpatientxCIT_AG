import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

interface GlossaryEntry {
  term: string
  english?: string
  full?: string
  definition: string
  moduleRef?: string
  moduleId?: string
}

const sections: { title: string; color: string; entries: GlossaryEntry[] }[] = [
  {
    title: '評估框架',
    color: '#2980B9',
    entries: [
      {
        term: '眼耳鼻舌身意',
        english: 'Six-Sense Evaluation',
        definition:
          'TW-CIT 2023 在地化的暴力前兆評估法。六個感官向度：眼（瞪視）、耳（幻聽/自語）、鼻（焦躁）、舌（音調）、身（姿態）、意（暴力意圖/歷史）。≥2 項異常即啟動 CABD。',
        moduleRef: 'M01 第四節',
        moduleId: 'M01',
      },
      {
        term: 'STAMP',
        definition:
          '國際通用暴力風險評估：Staring / Tone / Anxiety / Mumbling / Pacing。與「眼耳鼻舌身意」對應，但少了「意（暴力意圖/歷史）」向度。',
        moduleRef: 'M01',
        moduleId: 'M01',
      },
      {
        term: 'CABD',
        english: 'Cognition / Affection / Behavior / Decide',
        definition:
          '精神危機版「叫叫 CABD」初評架構。叫團隊、叫周邊裝備後，依 C（認知）、A（情緒）、B（行為）快速評估，再 D（Decide and Defuse）決定接觸策略。',
        moduleRef: 'M02 第三節',
        moduleId: 'M02',
      },
      {
        term: '四大樣態',
        english: 'LOR / LOC / LOH / LOP',
        full:
          'Loss of Reality / Control / Hope / Perspective',
        definition:
          '精神危機四種主要樣態。LOR 失去現實感（幻聽/妄想）、LOC 失去控制感（易怒/衝動）、LOH 失去希望（退縮/自殺意念）、LOP 失去穩定想法（執著/偏執）。不同樣態選擇不同降階策略。',
        moduleRef: 'M02 第二節',
        moduleId: 'M02',
      },
      {
        term: '14 項風險評估表',
        english: 'Ontario Simple Risk Assessment',
        definition:
          '加拿大安大略省簡易風險評估清單，涵蓋自傷/他傷意圖、認知、妄想、幻覺、易怒等 14 項。沒有硬性截斷點，重點在提供「客觀事實」紀錄支持通報決策。',
        moduleRef: 'M02 第八節',
        moduleId: 'M02',
      },
    ],
  },
  {
    title: '降階框架',
    color: '#8E44AD',
    entries: [
      {
        term: '停聽同選',
        definition:
          '台大門診版 CIT 降階四步驟：停下手邊工作 → 聽對方說完 → 同理回應 → 提供選項。對應 DEFUSE 結構化框架的中文實用版。',
        moduleRef: 'M04 第二節',
        moduleId: 'M04',
      },
      {
        term: 'DEFUSE',
        english: 'Decide / Ensure Safety / Form Relationship / Utilize Interests / Set Limits / Enforce',
        definition:
          '六步驟言語降階框架。不必然有嚴格順序，實務中反覆交替使用。D 判斷情境、E 確保安全、F 建立關係、U 善用需求、S 設下界線、E 重新評估。',
        moduleRef: 'M04 第一節',
        moduleId: 'M04',
      },
      {
        term: '言語降階五步驟',
        definition:
          '林皓陽醫師 MJAC CIT 2025 實務版：(1) 心理建設和狀況選擇 (2) 目標確認 (3) 戰術三寶 (4) 控制輸出 (5) 開始用招（辨識情緒→同理回應→轉移焦點）。',
        moduleRef: 'M04 第六節',
        moduleId: 'M04',
      },
      {
        term: '同理三句公式',
        definition:
          '「我注意到 ____（事實）／你是不是覺得 ____（情緒）／想要 ____（需求）？」— 把情緒腦拉回皮質的結構化話術。先認同情緒再說，同理不等於同意。',
        moduleRef: 'M04 第六節',
        moduleId: 'M04',
      },
      {
        term: '轉移焦點五招',
        definition:
          '身、坐、事、選、任 — 從精神到身體、從站到坐、從情緒到事件、從執著到選擇、從情緒到任務。用姿勢/事件/選擇/任務把病人注意力從情緒拉走。',
        moduleRef: 'M04 第六節',
        moduleId: 'M04',
      },
      {
        term: '降階兵法',
        english: 'Sun Tzu Strategy Levels',
        definition:
          '「上兵伐謀，其次伐交，其次伐兵，其下攻城。」伐謀＝預防性介入、伐交＝言語降階、伐兵＝強制力準備、攻城＝強制處置。越上層成本越低效果越好。',
        moduleRef: 'M07 第零節',
        moduleId: 'M07',
      },
    ],
  },
  {
    title: '神經科學',
    color: '#E67E22',
    entries: [
      {
        term: '杏仁核綁架',
        english: 'Amygdala Hijack',
        definition:
          '情緒爆發時杏仁核活化，「綁架」前額葉皮質，6 秒內理智線斷。這就是為什麼要「先降階，再講理」—情緒在安全區才有辦法高階思考。',
        moduleRef: 'M01 第五節-補',
        moduleId: 'M01',
      },
      {
        term: 'Affect Labeling',
        definition:
          '給情緒一個名字（Coding）— 把杏仁核活動轉移到大腦皮質。fMRI 研究證實的自我同理技巧。不只是心理安慰，有神經科學基礎。',
        moduleRef: 'M01 第五節-補',
        moduleId: 'M01',
      },
      {
        term: 'Freeze / Fight / Flight',
        definition:
          '受到威脅時的三種生物本能反應：僵直、對抗、逃離。由杏仁核主導，為保命設計，不是為思考。病人是這樣，你也是這樣。',
        moduleRef: 'M01 第五節-補',
        moduleId: 'M01',
      },
      {
        term: '21 英呎法則',
        english: 'Tueller Drill',
        definition:
          '一個人在 1.5 秒內可跨越約 21 英呎（6.4 公尺）— 只要對方在 6 公尺內就沒有絕對安全距離。門診啟示：盡量讓病人坐著，爭取反應時間。',
        moduleRef: 'M04 E(Ensure Safety)',
        moduleId: 'M04',
      },
    ],
  },
  {
    title: '團隊與通報',
    color: '#16A085',
    entries: [
      {
        term: '三角色模型',
        english: 'Three-Role Team',
        definition:
          '門診暴力現場必備分工：主責溝通者（Primary Communicator）、通報者（Alerter）、秩序維護者（Scene Manager）。避免多人同時跟病人說話。',
        moduleRef: 'M05 第一節',
        moduleId: 'M05',
      },
      {
        term: 'Pre-SBAR',
        definition:
          '5-10 秒極短版支援請求：○○診 + 緊急度 + 是否持械 + 現場人數 + 四大樣態標籤。讓駐警出發前就知道該帶什麼裝備（盾牌/Master Key/束帶）。',
        moduleRef: 'M05 第七節',
        moduleId: 'M05',
      },
      {
        term: 'SBAR',
        english: 'Situation / Background / Assessment / Recommendation',
        definition:
          '駐警到場後的 30 秒簡報：S 事件類型、B 誘因、A 目前狀態、R 需要什麼協助。控制在 30 秒內、先講結論。',
        moduleRef: 'M05 第七節',
        moduleId: 'M05',
      },
      {
        term: '阿兩阿兩',
        definition:
          '台大門診統一支援暗語：「阿兩阿兩，請支援 ○○ 診。」典故：《烏龍派出所》兩津勘吉暱稱。偽裝成叫人的日常用語，不刺激病人。',
        moduleRef: 'M03 第 2.4 / M07 第四節',
        moduleId: 'M03',
      },
      {
        term: '安全壓制 = 5 人',
        definition:
          '標準安全壓制需 5 人：1 人主責溝通、4 人各控制一個肢體。少於 5 人易導致掙脫、壓制者受傷或姿勢性窒息。伐兵 checklist 必項。',
        moduleRef: 'M07 第零節',
        moduleId: 'M07',
      },
    ],
  },
  {
    title: '法律與資源',
    color: '#C0392B',
    entries: [
      {
        term: '精神衛生法第 48 條',
        definition:
          '「有傷害他人或自己，或有傷害之虞」的疑似精神疾病者，應通知衛生局心理健康科，可通知警察機關，護送就近醫院。不用正確診斷，法院判決保護合理懷疑送醫者。',
        moduleRef: 'M07 第六節',
        moduleId: 'M07',
      },
      {
        term: '(049) 255-1010',
        definition:
          '衛福部 24 小時精神醫療緊急處置線上諮詢專線。遇到模糊情境的第一通電話，有衛生系統人員協助判讀精神衛生法適用性。',
        moduleRef: 'M06 / M07 / HandoutPage',
      },
      {
        term: '李承翰案',
        definition:
          '2019 年嘉義鐵路警察案例。當班員警因擔心「被告妨害自由」未執行強制送醫，該男子當晚在嘉義火車站刺死鐵警，後鑑定為思覺失調症。提醒：「怕被告」的恐懼讓一線人員錯失保護的機會。',
        moduleRef: 'M07 第六節',
        moduleId: 'M07',
      },
    ],
  },
  {
    title: '暴力曲線與情境',
    color: '#D35400',
    entries: [
      {
        term: '暴力曲線',
        english: 'Violence Curve',
        definition:
          '五階段發展模型：誘發事件 → 升溫 → 危機 → 高原/降溫 → 危機後抑鬱。升溫期（階段二）是黃金介入窗口。',
        moduleRef: 'M01 第二節',
        moduleId: 'M01',
      },
      {
        term: '行為急症',
        english: 'Behavioral Emergency',
        definition:
          '**不等於精神疾病**。三大來源：身體疾病（低血糖/中風）、物質使用（酒精/藥物）、精神疾病或心理狀態。現場不需精確診斷，先排除身體原因。',
        moduleRef: 'M01 第零節',
        moduleId: 'M01',
      },
      {
        term: '藉警自盡',
        english: 'Suicide by Cop',
        definition:
          '故意激怒執法/醫護以被制止時自我結束。訊號：持凶器但不回應指令、直視挑釁、言語暗示「來殺我」。降階第一步要識別此情境。',
        moduleRef: 'M04 第六節',
        moduleId: 'M04',
      },
      {
        term: 'CIT',
        english: 'Crisis Intervention Team',
        definition:
          '源自美國孟菲斯模式（1988）的跨專業危機介入訓練。台灣由消防/警察導入，台大急診林皓陽醫師團隊引進醫療場域。',
      },
    ],
  },
]

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#FDEBD0] flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-[#D35400]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#1B2A4A]">名詞對照表</h1>
          <p className="text-sm text-gray-500">CIT 工作坊術語速查 — 縮寫、框架、口訣一次看</p>
        </div>
      </div>

      <div className="bg-[#FEF9E7] border border-[#F4D03F] rounded-lg p-4 mb-6 text-sm text-gray-700">
        <p>
          <strong>使用方式：</strong>下方按主題分類。每條詞彙附中文定義、模組位置與跳轉連結。課堂中聽到任何
          縮寫（LOR/LOC/CABD/SBAR…），可隨時來此速查。
        </p>
      </div>

      {sections.map((sec) => (
        <section key={sec.title} className="mb-8">
          <h2
            className="text-base font-semibold mb-3 pb-2 border-b-2"
            style={{ color: sec.color, borderColor: sec.color + '40' }}
          >
            {sec.title}
          </h2>
          <div className="space-y-3">
            {sec.entries.map((entry) => (
              <div
                key={entry.term}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                  <span className="font-bold text-[#1B2A4A]">{entry.term}</span>
                  {entry.english && (
                    <span className="text-xs text-gray-500 italic">{entry.english}</span>
                  )}
                  {entry.full && (
                    <span className="text-xs text-gray-400">= {entry.full}</span>
                  )}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{entry.definition}</p>
                {entry.moduleRef && (
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="text-gray-400">📍 {entry.moduleRef}</span>
                    {entry.moduleId && (
                      <Link
                        to={`/content/${entry.moduleId}`}
                        className="text-[#2980B9] hover:underline font-medium"
                      >
                        → 前往模組
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>共 {sections.reduce((sum, s) => sum + s.entries.length, 0)} 個詞條 ｜ 來源：TW-CIT 2022 / 2023、林皓陽醫師 MJAC CIT 2025、門診前測會議記錄</p>
      </div>
    </div>
  )
}
