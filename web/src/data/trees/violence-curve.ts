import type { DecisionTree } from '../types'

export const violenceCurveTree: DecisionTree = {
  id: 'violence-curve',
  title: '暴力曲線介入時機',
  subtitle: '5 階段各階段的建議動作與升級條件',
  color: '#16A085',
  colorLight: '#D1F2EB',
  rootNode: {
    id: 'root',
    label: '暴力曲線五階段',
    children: [
      {
        id: 'stage1',
        label: '階段一：誘發事件',
        description: '受到外在刺激或內在症狀誘發攻擊情緒。等候過久、自費爭議、流程說明不清。',
        action: '移除刺激源：釐清問題、主動說明流程、主動關懷',
      },
      {
        id: 'stage2',
        label: '階段二：升溫',
        description: '刺激源持續存在，自我調適機轉失能。音量提高、語氣急躁、開始指責。',
        action: '降溫：運用「停聽同選」進行去激化。這是黃金介入窗口。',
      },
      {
        id: 'stage3',
        label: '階段三：危機',
        description: '情緒最高峰無處宣洩。拍桌、推擠、言語威脅、持物揮舞。',
        action: '緊急介入：安全至上、啟動支援系統、不要單獨面對。考慮行為約束。',
      },
      {
        id: 'stage4',
        label: '階段四：高原/降溫',
        description: '持續的情緒張力，可能再次出現暴力行為。情緒起伏不定、暫時安靜但仍緊繃。',
        action: '降溫：在安全環境下持續降階技巧。避免二次刺激。',
      },
      {
        id: 'stage5',
        label: '階段五：危機後抑鬱',
        description: '情緒發洩後短期內受到抑制，可能出現自責。沉默、哭泣、道歉。',
        action: '專業介入：檢視事件、持續醫療照護、注意自傷風險。關懷同仁。',
      },
    ],
  },
  mermaidDiagram: `graph LR
    S1["1️⃣ 誘發事件<br/><small>外在刺激<br/>等候、費用、流程</small>"]
    S2["2️⃣ 升溫<br/><small>⭐ 黃金介入窗口<br/>音量↑ 指責 急躁</small>"]
    S3["3️⃣ 危機<br/><small>情緒最高峰<br/>拍桌 推擠 威脅</small>"]
    S4["4️⃣ 高原/降溫<br/><small>情緒起伏不定<br/>可能再爆發</small>"]
    S5["5️⃣ 危機後抑鬱<br/><small>沉默 哭泣 道歉<br/>注意自傷風險</small>"]

    S1 --> S2 --> S3 --> S4 --> S5

    A1["🟢 移除刺激源<br/><small>釐清問題<br/>主動說明流程</small>"]
    A2["🟡 停聽同選<br/><small>去激化降溫<br/>最有效介入時機</small>"]
    A3["🔴 緊急介入<br/><small>安全至上<br/>啟動支援 不獨面對</small>"]
    A4["🟠 持續降階<br/><small>安全環境<br/>避免二次刺激</small>"]
    A5["🔵 專業介入<br/><small>事件檢視<br/>同仁關懷</small>"]

    S1 -.-> A1
    S2 -.-> A2
    S3 -.-> A3
    S4 -.-> A4
    S5 -.-> A5

    style S1 fill:#27AE60,color:#fff
    style S2 fill:#F1C40F,color:#1B2A4A
    style S3 fill:#E74C3C,color:#fff
    style S4 fill:#E67E22,color:#fff
    style S5 fill:#3498DB,color:#fff
    style A1 fill:#D5F5E3,color:#1B2A4A
    style A2 fill:#FCF3CF,color:#1B2A4A
    style A3 fill:#FADBD8,color:#1B2A4A
    style A4 fill:#FDEBD0,color:#1B2A4A
    style A5 fill:#D6EAF8,color:#1B2A4A`,
}
