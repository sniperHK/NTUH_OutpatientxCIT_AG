import type { DecisionTree } from '../types'

export const escalationTree: DecisionTree = {
  id: 'escalation-tree',
  title: '暴力升級通報決策樹',
  subtitle: '從觀察異常行為到啟動通報的分級流程',
  color: '#1B2A4A',
  colorLight: '#D6DBDF',
  rootNode: {
    id: 'root',
    label: '觀察到異常行為',
    description: '透過「眼耳鼻舌身意」六感評估發現病人/家屬出現異常行為徵兆',
    question: '你觀察到什麼異常行為？',
    children: [
      {
        id: 'verbal-dissatisfaction',
        label: '言語不滿',
        description: '音量提高、反覆抱怨、語氣急躁但尚未威脅',
        action: '同理溝通：運用「停聽同選」技巧進行去激化',
        question: '對方的反應如何？',
        children: [
          {
            id: 'verbal-resolved',
            label: '規勸有效',
            action: '持續觀察，記錄事件',
          },
          {
            id: 'verbal-escalate',
            label: '規勸無效',
            action: '升級至言語威脅層級處理',
          },
        ],
      },
      {
        id: 'verbal-threat',
        label: '言語威脅',
        description: '「我要打你」「信不信我砸了這裡」等威脅性言語',
        action: '通知當班 Leader + 聯繫駐警隊',
        question: '駐警到場後的狀況？',
        children: [
          {
            id: 'threat-guard',
            label: '駐警到場規勸',
            action: 'Leader 評估是否需聯繫管區派出所',
          },
        ],
      },
      {
        id: 'object-waving',
        label: '持物揮舞',
        description: '拿起椅子、點滴架、水壺、雨傘等物品',
        action: '立即聯繫駐警隊 + 通知管區派出所',
        question: '駐警與管區到場後的處置？',
        children: [
          {
            id: 'object-police',
            label: '駐警 + 管區到場',
            action: '管區員警製作紀錄、留下當事人資料',
          },
        ],
      },
      {
        id: 'physical-attack',
        label: '肢體攻擊',
        description: '推擠、拍打、丟擲物品、嚴重肢體攻擊、持凶器',
        action: '直接撥打 110 + 撤離現場人員',
        question: '撤離後的後續處置？',
        children: [
          {
            id: 'attack-evacuate',
            label: '撤離 + 等待警方',
            action: '同步通知駐警隊 + 當班 Leader，保存監視畫面',
          },
        ],
      },
    ],
  },
  mermaidDiagram: `graph TD
    ROOT["🔍 觀察到異常行為<br/><small>眼耳鼻舌身意 六感評估</small>"]
    ROOT --> A["😤 言語不滿<br/><small>音量提高、抱怨、急躁</small>"]
    ROOT --> B["⚠️ 言語威脅<br/><small>「我要打你」「信不信我砸了」</small>"]
    ROOT --> C["🔴 持物揮舞<br/><small>椅子、點滴架、水壺</small>"]
    ROOT --> D["🚨 肢體攻擊<br/><small>推擠、拍打、持凶器</small>"]

    A --> A1["💬 同理溝通<br/><small>停聽同選 / DEFUSE</small>"]
    A1 --> A1a["✅ 規勸有效<br/><small>持續觀察、記錄</small>"]
    A1 --> A1b["❌ 規勸無效"]
    A1b --> B

    B --> B1["📞 通知 Leader + 駐警<br/><small>Leader 到場評估</small>"]
    B1 --> B2["👮 駐警到場規勸"]
    B2 --> B3["📋 Leader 評估<br/><small>是否聯繫管區</small>"]

    C --> C1["🚔 駐警 + 管區派出所<br/><small>駐警主動聯絡管區</small>"]
    C1 --> C2["📝 管區製作紀錄"]

    D --> D1["📱 直接撥打 110"]
    D --> D2["🏃 撤離現場人員"]
    D --> D3["📢 通知駐警 + Leader"]

    style ROOT fill:#1B2A4A,color:#fff,stroke:#1B2A4A
    style A fill:#3498DB,color:#fff
    style B fill:#E67E22,color:#fff
    style C fill:#E74C3C,color:#fff
    style D fill:#8B0000,color:#fff
    style A1 fill:#D6EAF8,color:#1B2A4A
    style A1a fill:#D5F5E3,color:#1B2A4A
    style A1b fill:#FADBD8,color:#1B2A4A
    style B1 fill:#FDEBD0,color:#1B2A4A
    style B2 fill:#FDEBD0,color:#1B2A4A
    style B3 fill:#FDEBD0,color:#1B2A4A
    style C1 fill:#FADBD8,color:#1B2A4A
    style C2 fill:#FADBD8,color:#1B2A4A
    style D1 fill:#F5B7B1,color:#1B2A4A
    style D2 fill:#F5B7B1,color:#1B2A4A
    style D3 fill:#F5B7B1,color:#1B2A4A`,
}
