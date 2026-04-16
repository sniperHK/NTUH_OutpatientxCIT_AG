import type { DecisionTree } from '../types'

export const slecDefuseTree: DecisionTree = {
  id: 'slec-defuse',
  title: '停聽同選 ↔ DEFUSE',
  subtitle: '兩套去激化框架的對照互動流程',
  color: '#C0392B',
  colorLight: '#FADBD8',
  rootNode: {
    id: 'root',
    label: '病人/家屬情緒激動',
    question: '你決定開始降階溝通。第一步是什麼？',
    children: [
      {
        id: 'stop',
        label: '停',
        description: '停下手邊工作、面對對方、確認環境安全與出口位置',
        question: '停下手邊工作後，接下來？',
        children: [
          {
            id: 'decide',
            label: 'D — Decide（決定）',
            description: '判斷此情境是否適合口頭降階。病人仍可對話 = 有降階空間。',
          },
          {
            id: 'ensure',
            label: 'E — Ensure Safety（確保安全）',
            description: '確認後援、清除危險物品、維持兩臂距離、側身 45 度站位。',
          },
        ],
      },
      {
        id: 'listen',
        label: '聽',
        description: '讓對方說完、點頭示意、稱呼姓名、自我介紹',
        question: '傾聽之後，你要怎麼回應？',
        children: [
          {
            id: 'form',
            label: 'F — Form Relationship（建立關係）',
            description: '自我介紹、詢問稱呼、使用簡單用詞、選邊站：「我們是來幫你的。」',
          },
        ],
      },
      {
        id: 'empathize',
        label: '同',
        description: '同理回應、承認感受、找出對方真正需求',
        question: '同理回應後，下一步？',
        children: [
          {
            id: 'utilize',
            label: 'U — Utilize Interests（善用需求）',
            description: '認可感受和需求、建立共識、強調你不會傷害他。同理不等於同意。',
          },
        ],
      },
      {
        id: 'choose',
        label: '選',
        description: '提供 2 個選項、說明可行方案、必要時升級處理',
        question: '提供選項後，接下來的評估？',
        children: [
          {
            id: 'set',
            label: 'S — Set Limits（設下界線）',
            description: '描述特定舉動的後果、提供選擇釋出善意、引導病患思考退出情緒腦。',
          },
          {
            id: 'enforce',
            label: 'E — Enforce / Evaluate（重新評估）',
            description: '檢查自己脈搏、重新評估降階效果與暴力曲線位置、若升溫則退避啟動支援。',
          },
        ],
      },
    ],
  },
  mermaidDiagram: `graph LR
    subgraph SLEC["停聽同選"]
      S1["🖐️ 停<br/><small>停下手邊工作<br/>確認安全</small>"]
      S2["👂 聽<br/><small>讓對方說完<br/>點頭示意</small>"]
      S3["❤️ 同<br/><small>同理回應<br/>承認感受</small>"]
      S4["🔀 選<br/><small>提供選項<br/>說明方案</small>"]
      S1 --> S2 --> S3 --> S4
    end

    subgraph DEFUSE["DEFUSE 六步驟"]
      D1["D — Decide<br/><small>判斷是否適合降階</small>"]
      D2["E — Ensure Safety<br/><small>確保安全</small>"]
      D3["F — Form Relationship<br/><small>建立關係</small>"]
      D4["U — Utilize Interests<br/><small>善用需求</small>"]
      D5["S — Set Limits<br/><small>設下界線</small>"]
      D6["E — Evaluate<br/><small>重新評估</small>"]
      D1 --> D2 --> D3 --> D4 --> D5 --> D6
    end

    S1 -.->|對應| D1
    S1 -.->|對應| D2
    S2 -.->|對應| D3
    S3 -.->|對應| D4
    S4 -.->|對應| D5
    S4 -.->|對應| D6

    style S1 fill:#C0392B,color:#fff
    style S2 fill:#C0392B,color:#fff
    style S3 fill:#C0392B,color:#fff
    style S4 fill:#C0392B,color:#fff
    style D1 fill:#2980B9,color:#fff
    style D2 fill:#2980B9,color:#fff
    style D3 fill:#2980B9,color:#fff
    style D4 fill:#2980B9,color:#fff
    style D5 fill:#2980B9,color:#fff
    style D6 fill:#2980B9,color:#fff`,
}
