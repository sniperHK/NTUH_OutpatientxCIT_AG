import type { Question } from './types'

export const questions: Question[] = [
  // === 原始考題 (from 門診暴力事件考題.docx) ===
  {
    id: 'Q01',
    type: 'single-choice',
    category: 'both',
    module: 'M03',
    stem: '在門診遇到情緒激動的病人或家屬時，以下哪個站位原則是正確的？',
    options: [
      { id: 'A', text: '正面貼近病人以展現誠意', isCorrect: false },
      { id: 'B', text: '背對出口以表示沒有威脅', isCorrect: false },
      { id: 'C', text: '側身 45 度、保持 1-2 公尺距離、靠近出口', isCorrect: true },
      { id: 'D', text: '站在病人與出口之間以防止其離開', isCorrect: false },
    ],
    explanation:
      '正確的安全站位原則是：側身 45 度降低威脅感、保持 1-2 公尺安全距離、靠近出口確保退路暢通、不被逼至角落。正面貼近會讓對方感到被侵犯，背對出口會失去逃生路線，堵住出口會讓病人更激動。',
  },
  {
    id: 'Q02',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '當病人家屬大聲質問：「我爸等了兩個小時，你們到底在幹什麼！」最適當的第一反應是？',
    options: [
      { id: 'A', text: '「大家都在等，你不要吵。」', isCorrect: false },
      { id: 'B', text: '「先生你冷靜一下。」', isCorrect: false },
      { id: 'C', text: '停下手邊工作，面對家屬，讓他說完', isCorrect: true },
      { id: 'D', text: '「這不是我們的問題，請你去投訴。」', isCorrect: false },
    ],
    explanation:
      '依據「停聽同選」框架，第一步是「停」——停下手邊工作、面對對方。「大家都在等」否定感受，「冷靜一下」暗示對方不正常，「不是我們的問題」切斷溝通。這些都會升級衝突。',
  },
  {
    id: 'Q03',
    type: 'single-choice',
    category: 'both',
    module: 'M06',
    stem: '門診發生肢體暴力事件時，以下哪個通報順序是正確的？',
    options: [
      { id: 'A', text: '先規勸→通知 Leader→再決定是否聯繫駐警', isCorrect: false },
      { id: 'B', text: '立即聯繫駐警隊，駐警主動聯絡管區派出所', isCorrect: true },
      { id: 'C', text: '先通知護理長，由護理長決定是否報警', isCorrect: false },
      { id: 'D', text: '先拍照蒐證，再通知相關人員', isCorrect: false },
    ],
    explanation:
      '肢體暴力屬於路徑 B：立即聯繫駐警隊，駐警到場後立即主動聯絡管區派出所到院。同步通知當班 Leader/護理長。言語暴力才走先規勸的路徑 A。',
  },
  {
    id: 'Q04',
    type: 'single-choice',
    category: 'both',
    module: 'M01',
    stem: '台灣 CIT 在地化的「眼耳鼻舌身意」六感評估法，對應到國際 STAMP 框架的哪一個字母組合？',
    options: [
      { id: 'A', text: '完全不對應，是兩套獨立工具', isCorrect: false },
      { id: 'B', text: '眼=Staring、耳=Mumbling、鼻=Anxiety、舌=Tone、身=Pacing，再加「意」評估暴力意圖／歷史', isCorrect: true },
      { id: 'C', text: '眼=Tone、耳=Pacing、鼻=Mumbling、舌=Staring、身=Anxiety', isCorrect: false },
      { id: 'D', text: '六感與 STAMP 完全相同，僅名稱差異', isCorrect: false },
    ],
    explanation:
      '「眼耳鼻舌身意」（TW-CIT 2023，林皓陽醫師、劉英國醫師）對應國際 STAMP：眼(Staring 瞪視)、耳(Mumbling 喃喃自語／幻聽)、鼻(Anxiety 焦躁／呼吸加快)、舌(Tone 音調與音量)、身(Pacing 身體姿態如踱步、握拳)，並在「意」項補強暴力意圖／歷史評估，比 STAMP 更完整。',
  },
  {
    id: 'Q05',
    type: 'single-choice',
    category: 'both',
    module: 'M06',
    stem: '關於暴力事件後做筆錄，以下何者正確？',
    options: [
      { id: 'A', text: '只能到警察局做筆錄', isCorrect: false },
      { id: 'B', text: '可請管區在門診製作筆錄，也可另約時間', isCorrect: true },
      { id: 'C', text: '做筆錄的時間需使用個人假別', isCorrect: false },
      { id: 'D', text: '做筆錄必須自行前往，不可有人陪同', isCorrect: false },
    ],
    explanation:
      '可請管區在門診製作筆錄，不一定要去警局。若上班中不便可另約時間。至警局做筆錄時間可加時數，不需使用個人假別。若害怕可請院內駐警陪同前往。',
  },

  // === M01 暴力曲線與風險辨識 ===
  {
    id: 'Q06',
    type: 'single-choice',
    category: 'pre',
    module: 'M01',
    stem: '暴力曲線中，最適合進行言語降階的時機是哪個階段？',
    options: [
      { id: 'A', text: '階段一：誘發事件', isCorrect: false },
      { id: 'B', text: '階段二：升溫', isCorrect: true },
      { id: 'C', text: '階段三：危機', isCorrect: false },
      { id: 'D', text: '階段五：危機後抑鬱', isCorrect: false },
    ],
    explanation:
      '升溫期（階段二）是黃金介入窗口。此時病人情緒尚未失控，認知功能仍存在，言語溝通仍然有效。進入危機期後介入難度與風險都大幅提升。',
  },
  {
    id: 'Q07',
    type: 'single-choice',
    category: 'pre',
    module: 'M01',
    stem: '以下哪一項不屬於「眼耳鼻舌身意」六感評估法的指標？',
    options: [
      { id: 'A', text: '眼（瞪視、目露凶光）', isCorrect: false },
      { id: 'B', text: '舌（音調、音量、敵意言詞）', isCorrect: false },
      { id: 'C', text: '手（握拳次數計算）', isCorrect: true },
      { id: 'D', text: '意（暴力意圖或歷史）', isCorrect: false },
    ],
    explanation:
      '「眼耳鼻舌身意」六項指標：眼（瞪視）、耳（幻聽／喃喃自語）、鼻（焦躁／呼吸加快）、舌（音調音量）、身（身體姿態如踱步、握拳、擊物）、意（暴力意圖或歷史）。「手」並非獨立指標，握拳屬於「身」項目觀察重點之一。',
  },
  {
    id: 'Q08',
    type: 'single-choice',
    category: 'pre',
    module: 'M01',
    stem: '門診最常見的暴力事件觸發因子組合是？',
    options: [
      { id: 'A', text: '費用爭議 + 環境因素', isCorrect: false },
      { id: 'B', text: '等候過久 + 資訊不透明', isCorrect: true },
      { id: 'C', text: '疼痛 + 精神疾患', isCorrect: false },
      { id: 'D', text: '病程期望落差 + 轉介複雜', isCorrect: false },
    ],
    explanation:
      '門診最常見的觸發情境是「等候過久 + 資訊不透明」的組合。一位已等待 1.5 小時的家屬，若看到後到的患者先進診間又未獲得解釋，情緒將快速升溫。',
  },

  // === M02 Agitation 急性處置 ===
  {
    id: 'Q09',
    type: 'single-choice',
    category: 'pre',
    module: 'M02',
    stem: '精神危機版「叫叫 CABD」中的「C」代表什麼？',
    options: [
      { id: 'A', text: 'Circulation（循環）', isCorrect: false },
      { id: 'B', text: 'Cognition（認知）', isCorrect: true },
      { id: 'C', text: 'Communication（溝通）', isCorrect: false },
      { id: 'D', text: 'Crisis（危機）', isCorrect: false },
    ],
    explanation:
      '精神危機版「叫叫 CABD」：C(Cognition 認知) — 評估思考與意識狀態、A(Affection 情緒) — 觀察情緒表現與肢體語言、B(Behavior 行為) — 辨識怪異與危險行為、D(Decide and Defuse 決定與降階)。',
  },
  {
    id: 'Q10',
    type: 'single-choice',
    category: 'pre',
    module: 'M02',
    stem: '在門診發現情緒激躁的患者時，第一步應該做什麼？',
    options: [
      { id: 'A', text: '獨自前往安撫病人', isCorrect: false },
      { id: 'B', text: '立即通知團隊並疏散周邊', isCorrect: true },
      { id: 'C', text: '先完成手邊工作再處理', isCorrect: false },
      { id: 'D', text: '直接撥打 110 報警', isCorrect: false },
    ],
    explanation:
      '叫叫 CABD 的第一步是「叫」——叫團隊（通知同仁、Leader）和叫周邊（疏散周邊、確認裝備）。單打獨鬥是最危險的處置方式。110 是立即危險時才使用。',
  },

  // === M03 環境察覺與自我調控 ===
  {
    id: 'Q11',
    type: 'single-choice',
    category: 'pre',
    module: 'M03',
    stem: '以下哪項不屬於門診環境風險掃描的重點？',
    options: [
      { id: 'A', text: '確認逃生路線暢通', isCorrect: false },
      { id: 'B', text: '確認尖銳物品已收納', isCorrect: false },
      { id: 'C', text: '確認病歷是否完整', isCorrect: true },
      { id: 'D', text: '確認出口位置', isCorrect: false },
    ],
    explanation:
      '環境風險掃描的重點包括：確認逃生路線、出口位置、尖銳物品收納、潛在武器移除等。病歷完整性屬於一般護理作業，不在暴力預防的環境掃描範疇。',
  },
  {
    id: 'Q12',
    type: 'single-choice',
    category: 'pre',
    module: 'M03',
    stem: '面對暴力威脅時出現心跳加速、手抖等反應，以下認知何者正確？',
    options: [
      { id: 'A', text: '表示你不適合處理這種情境', isCorrect: false },
      { id: 'B', text: '這是正常的生理反應，不代表不專業', isCorrect: true },
      { id: 'C', text: '應該壓抑這些反應以保持專業形象', isCorrect: false },
      { id: 'D', text: '立刻請假離開現場', isCorrect: false },
    ],
    explanation:
      '面對暴力威脅時的心跳加速、手抖等是正常的「戰或逃」反應。這些是身體的保護機制，不代表你不專業。重要的是辨識這些反應，並運用深呼吸等技巧穩定自己。',
  },

  // === M04 言語降階 ===
  {
    id: 'Q13',
    type: 'scenario',
    category: 'post',
    module: 'M04',
    stem: '病人質疑：「為什麼這個藥要自費？上次明明健保有給付！」以下回應何者最符合「停聽同選」原則？',
    scenarioContext: '門診收費窗口，病人拿到自費單後情緒激動',
    options: [
      { id: 'A', text: '「健保規定就是這樣，我們也沒辦法。」', isCorrect: false },
      { id: 'B', text: '「您先回去坐，等一下叫到號再來。」', isCorrect: false },
      { id: 'C', text: '「突然被告知要自費，換作是我也會想弄清楚。我幫您查上次處方，或您直接跟醫師確認？」', isCorrect: true },
      { id: 'D', text: '「你不要在這裡吵，影響其他病人。」', isCorrect: false },
    ],
    explanation:
      'C 選項完整運用了「停聽同選」：同理回應（「換作是我也會想弄清楚」）+ 提供兩個選項。A 是防衛姿態，B 忽略病人需求，D 否定感受且帶有命令語氣。',
  },
  {
    id: 'Q14',
    type: 'single-choice',
    category: 'post',
    module: 'M04',
    stem: '降階溝通的三原則「不評斷、不對抗、不離開」中，「不離開」的前提條件是？',
    options: [
      { id: 'A', text: '無論如何都不應該離開', isCorrect: false },
      { id: 'B', text: '安全無虞時才維持在場', isCorrect: true },
      { id: 'C', text: '只有主管指示才能離開', isCorrect: false },
      { id: 'D', text: '駐警到場後才能離開', isCorrect: false },
    ],
    explanation:
      '「不離開」的前提是安全無虞。若評估有人身安全疑慮，應立即退避並啟動支援。自身安全永遠是最高優先。',
  },
  {
    id: 'Q15',
    type: 'single-choice',
    category: 'post',
    module: 'M04',
    stem: 'DEFUSE 框架中 "U — Utilize Interests" 的核心技巧是？',
    options: [
      { id: 'A', text: '利用病人的弱點來控制局面', isCorrect: false },
      { id: 'B', text: '辨識對方真正需求，建立共識', isCorrect: true },
      { id: 'C', text: '利用權威地位要求病人配合', isCorrect: false },
      { id: 'D', text: '透過獎勵引導病人行為改變', isCorrect: false },
    ],
    explanation:
      'U (Utilize Interests) 是善用需求：認可病人的感受和需求，不否定情緒，盡可能建立共識。同理不等於同意——「我理解您等了很久很著急」承認的是感受，不是認同不合理的要求。',
  },
  {
    id: 'Q16',
    type: 'scenario',
    category: 'post',
    module: 'M04',
    stem: '護理師對情緒激動的家屬說：「先生你冷靜一下。」這句話最主要的問題是？',
    options: [
      { id: 'A', text: '語氣不夠堅定', isCorrect: false },
      { id: 'B', text: '暗示對方「不正常」，通常會引發反彈', isCorrect: true },
      { id: 'C', text: '沒有稱呼對方的名字', isCorrect: false },
      { id: 'D', text: '應該用敬語「請您冷靜」', isCorrect: false },
    ],
    explanation:
      '「冷靜一下」暗示對方「你現在不正常」，這是在評斷對方的情緒狀態，違反降階溝通「不評斷」原則。更好的說法是：「先生，您慢慢說，這樣我才能好好聽到您說的。」',
  },

  // === M05 團隊合作 ===
  {
    id: 'Q17',
    type: 'single-choice',
    category: 'post',
    module: 'M05',
    stem: '門診暴力事件中的「三角色制」不包含以下哪個角色？',
    options: [
      { id: 'A', text: '主責溝通者', isCorrect: false },
      { id: 'B', text: '通報者', isCorrect: false },
      { id: 'C', text: '錄影紀錄者', isCorrect: true },
      { id: 'D', text: '現場秩序維護者', isCorrect: false },
    ],
    explanation:
      '三角色制包含：主責溝通者（負責一對一降階溝通）、通報者（負責啟動 call-for-help 流程）、現場秩序維護者（管理環境安全）。錄影紀錄雖然重要，但不是三角色制的核心角色之一。',
  },
  {
    id: 'Q18',
    type: 'scenario',
    category: 'post',
    module: 'M05',
    stem: '病人針對小美護理師大聲抱怨。此時旁邊的學姊到場，最適當的處置是？',
    options: [
      { id: 'A', text: '學姊直接介入，要求病人安靜', isCorrect: false },
      { id: 'B', text: '學姊接手溝通，讓小美去打電話通報', isCorrect: true },
      { id: 'C', text: '兩人一起跟病人說話', isCorrect: false },
      { id: 'D', text: '讓小美繼續處理，學姊在旁觀看', isCorrect: false },
    ],
    explanation:
      '當病人針對特定護理師抱怨時，由另一位同仁接手溝通（換人可降溫）。多人同時說話會讓病人更混亂，是降階失敗的常見原因。明確分工：「小美你去打電話，我來處理。」',
  },
  {
    id: 'Q19',
    type: 'single-choice',
    category: 'post',
    module: 'M05',
    stem: '門診暴力事件中，團隊站位的核心原則是？',
    options: [
      { id: 'A', text: '多人包圍病人，防止其逃跑', isCorrect: false },
      { id: 'B', text: '所有人保持出口動線暢通，不圍堵病人', isCorrect: true },
      { id: 'C', text: '所有人站在病人與出口之間', isCorrect: false },
      { id: 'D', text: '盡量多人靠近病人以展現人數優勢', isCorrect: false },
    ],
    explanation:
      '團隊站位的核心原則是保持出口動線暢通，絕對不要圍堵病人。圍堵會讓病人感到被困，升高攻擊風險。主責溝通者面對病人、秩序維護者管理動線、通報者退至安全位置。',
  },

  // === M06 通報升級與法規 ===
  {
    id: 'Q20',
    type: 'single-choice',
    category: 'post',
    module: 'M06',
    stem: '以下何者不是升級通報的四項指標之一？',
    options: [
      { id: 'A', text: '言語威脅', isCorrect: false },
      { id: 'B', text: '持物品揮舞', isCorrect: false },
      { id: 'C', text: '病人拒絕簽署同意書', isCorrect: true },
      { id: 'D', text: '無法溝通', isCorrect: false },
    ],
    explanation:
      '升級通報四項指標：言語威脅、持物品揮舞、逼近醫護人員、無法溝通。「拒絕簽署同意書」屬於一般醫療溝通問題，不在暴力升級指標範疇。任一指標出現即應啟動通報。',
  },
  {
    id: 'Q21',
    type: 'single-choice',
    category: 'post',
    module: 'M06',
    stem: '醫療法第 24 條規定，以強暴、脅迫妨礙醫療業務執行者，最高可處？',
    options: [
      { id: 'A', text: '一年以下有期徒刑', isCorrect: false },
      { id: 'B', text: '兩年以下有期徒刑', isCorrect: false },
      { id: 'C', text: '三年以下有期徒刑，得併科三十萬元以下罰金', isCorrect: true },
      { id: 'D', text: '五年以下有期徒刑', isCorrect: false },
    ],
    explanation:
      '醫療法第 24 條明文規定：任何人不得以強暴、脅迫、恐嚇或其他非法方式妨礙醫療業務之執行。違者處三年以下有期徒刑，得併科新臺幣三十萬元以下罰金。',
  },
  {
    id: 'Q22',
    type: 'scenario',
    category: 'post',
    module: 'M06',
    stem: '病人持雨傘揮舞並大喊：「再不讓我看診我就砸了你們櫃檯！」此時應走哪條通報路徑？',
    options: [
      { id: 'A', text: '路徑 A：先以停聽同選規勸', isCorrect: false },
      { id: 'B', text: '路徑 B：立即聯繫駐警隊，駐警聯絡管區', isCorrect: true },
      { id: 'C', text: '路徑 C：直接撥打 110', isCorrect: false },
      { id: 'D', text: '先由 Leader 到場評估再決定', isCorrect: false },
    ],
    explanation:
      '持物揮舞屬於肢體暴力的前兆/行為，應走路徑 B：立即聯繫駐警隊，駐警到場後主動聯絡管區派出所。路徑 C（110）保留給持凶器、已造成人員受傷等立即危險情境。',
  },
  {
    id: 'Q23',
    type: 'scenario',
    category: 'post',
    module: 'M02',
    stem: '初評 CAB 中，病人說「你們都想害我，我聽到他們在說我壞話」，這主要反映了哪個面向的問題？',
    options: [
      { id: 'A', text: 'Affection（情緒）', isCorrect: false },
      { id: 'B', text: 'Behavior（行為）', isCorrect: false },
      { id: 'C', text: 'Cognition（認知）', isCorrect: true },
      { id: 'D', text: 'Decide（決定）', isCorrect: false },
    ],
    explanation:
      '「你們都想害我」反映被害妄想，「聽到他們在說我壞話」可能為幻聽或關係妄想。這些屬於認知面（C-Cognition）的異常，代表思考內容脫離現實，需要提高警覺。',
  },
  {
    id: 'Q24',
    type: 'single-choice',
    category: 'post',
    module: 'M01',
    stem: '暴力曲線「危機後抑鬱」階段（階段五）最需要注意的風險是？',
    options: [
      { id: 'A', text: '病人再次言語攻擊', isCorrect: false },
      { id: 'B', text: '病人因自責產生自傷風險', isCorrect: true },
      { id: 'C', text: '家屬代替病人發怒', isCorrect: false },
      { id: 'D', text: '候診區其他病人效仿', isCorrect: false },
    ],
    explanation:
      '危機後抑鬱階段，病人情緒受到抑制，可能出現自責、沉默、哭泣。此時需要注意因自責情緒衍生的自傷傷人事件，提供持續的醫療照護與關懷。',
  },
  {
    id: 'Q25',
    type: 'single-choice',
    category: 'pre',
    module: 'M03',
    stem: '以下哪種即時壓力調控技巧可以在面對激躁病人時使用？',
    options: [
      { id: 'A', text: '離開現場到茶水間放鬆', isCorrect: false },
      { id: 'B', text: 'Box Breathing：吸 4 秒、屏 4 秒、吐 4 秒、屏 4 秒', isCorrect: true },
      { id: 'C', text: '在心裡數到 100', isCorrect: false },
      { id: 'D', text: '閉上眼睛冥想 30 秒', isCorrect: false },
    ],
    explanation:
      'Box Breathing（方盒呼吸法）是可在高壓情境現場使用的即時技巧：吸氣 4 秒、屏住 4 秒、吐氣 4 秒、屏住 4 秒，重複 2-3 次。其他選項（離開、長時間數數、閉眼冥想）不適合在面對病人的當下使用。',
  },

  // === M02 CABD 進階題 ===
  {
    id: 'Q26',
    type: 'single-choice',
    category: 'pre',
    module: 'M02',
    stem: '「眼耳鼻舌身意」六感評估中，以下哪個指標組合代表最高風險？',
    options: [
      { id: 'A', text: '眼 + 舌 異常', isCorrect: false },
      { id: 'B', text: '鼻 + 身 異常', isCorrect: false },
      { id: 'C', text: '六項指標（眼、耳、鼻、舌、身、意）全部異常', isCorrect: true },
      { id: 'D', text: '耳 + 眼 異常', isCorrect: false },
    ],
    explanation:
      '「眼耳鼻舌身意」六項指標全部異常（6/6）代表最高風險等級，應立即啟動完整「叫叫 CABD」流程並聯繫駐警隊待命。2 項異常即需啟動 CABD 初評，4 項以上異常為高風險。',
  },
  {
    id: 'Q27',
    type: 'single-choice',
    category: 'pre',
    module: 'M02',
    stem: '精神危機版「叫叫 CABD」中的 C 代表什麼？',
    options: [
      { id: 'A', text: 'Communication（溝通）', isCorrect: false },
      { id: 'B', text: 'Cognition（認知）', isCorrect: true },
      { id: 'C', text: 'Circulation（循環）', isCorrect: false },
      { id: 'D', text: 'Control（控制）', isCorrect: false },
    ],
    explanation:
      '精神危機版 CABD：C(Cognition 認知) 評估思考與意識狀態、A(Affection 情緒) 觀察情緒與肢體語言、B(Behavior 行為) 辨識怪異與危險行為、D(Decide and Defuse 決定與降階)。與急救版 CABD 的字母意涵不同。',
  },
  {
    id: 'Q28',
    type: 'single-choice',
    category: 'post',
    module: 'M02',
    stem: '「居安思危」口訣中，「居安」指的是什麼？',
    options: [
      { id: 'A', text: '讓病人待在安全的地方', isCorrect: false },
      { id: 'B', text: '確保自身處於安全位置與狀態', isCorrect: true },
      { id: 'C', text: '維持候診區的安寧', isCorrect: false },
      { id: 'D', text: '讓所有人回到座位上', isCorrect: false },
    ],
    explanation:
      '「居安」指的是先確保自身安全——包含安全站位、確認退路、維持安全距離、不單獨行動。只有在自己安全的前提下，才能有效評估與處置危機情境。自身安全永遠是最高優先。',
  },
  {
    id: 'Q29',
    type: 'scenario',
    category: 'post',
    module: 'M02',
    stem: '候診區一位病人不斷喃喃自語、在座位旁來回踱步、表情焦躁，你觀察到「眼耳鼻舌身意」六感評估有 3 項異常（耳、鼻、身）。此時你的第一步行動應該是？',
    scenarioContext: '上午門診候診區，約 20 名病人候診中',
    options: [
      { id: 'A', text: '直接走過去安撫病人', isCorrect: false },
      { id: 'B', text: '通知同仁並啟動 CABD 初評', isCorrect: true },
      { id: 'C', text: '繼續觀察，等到 6 項全部異常再處理', isCorrect: false },
      { id: 'D', text: '立即撥打 110 報警', isCorrect: false },
    ],
    explanation:
      '六感評估 3 項異常屬中-高風險，應啟動 CABD 初評並同步通知當班 leader。不需等到全部異常才行動（2 項即需啟動），也不應在未通知團隊的情況下單獨接近。110 保留給立即危險情境。',
  },
  {
    id: 'Q30',
    type: 'single-choice',
    category: 'post',
    module: 'M02',
    stem: '進行 CAB 初評後，以下哪種情境最需要聯繫精神科會診？',
    options: [
      { id: 'A', text: '病人因等候過久而情緒激動，但溝通仍有效', isCorrect: false },
      { id: 'B', text: '病人出現妄想內容、認知脫離現實，但無攻擊行為', isCorrect: true },
      { id: 'C', text: '家屬大聲抱怨收費問題', isCorrect: false },
      { id: 'D', text: '病人因疼痛而煩躁不安', isCorrect: false },
    ],
    explanation:
      '當 CAB 評估發現認知面有妄想、思考脫離現實（C 異常），即使行為面暫無攻擊性，仍需精神科專業評估與介入。其他選項屬於情境性激躁，通常可透過降階溝通處理。',
  },

  // === 決策樹與暴力曲線 ===
  {
    id: 'Q31',
    type: 'scenario',
    category: 'post',
    module: 'M06',
    stem: '候診病人突然抓起椅子高舉過頭，大喊「再不叫我看診就砸了！」此時正確的通報路徑是？',
    scenarioContext: '下午門診候診區，病人已等候 2 小時',
    options: [
      { id: 'A', text: '路徑 A：先以停聽同選嘗試規勸', isCorrect: false },
      { id: 'B', text: '路徑 B：立即聯繫駐警隊，駐警聯絡管區派出所', isCorrect: true },
      { id: 'C', text: '先通知護理長到場評估', isCorrect: false },
      { id: 'D', text: '自行上前奪取椅子', isCorrect: false },
    ],
    explanation:
      '持物品揮舞（抓椅子高舉）屬於肢體暴力行為，應走路徑 B：立即聯繫駐警隊，駐警到場後主動聯絡管區派出所。此時言語降階的風險過高，絕對不要嘗試自行奪取物品。',
  },
  {
    id: 'Q32',
    type: 'single-choice',
    category: 'both',
    module: 'M01',
    stem: '在暴力曲線中，哪個階段是言語降階介入的「黃金窗口」？',
    options: [
      { id: 'A', text: '階段一：誘發事件', isCorrect: false },
      { id: 'B', text: '階段二：升溫期', isCorrect: true },
      { id: 'C', text: '階段三：危機期', isCorrect: false },
      { id: 'D', text: '階段四：高原期', isCorrect: false },
    ],
    explanation:
      '升溫期（階段二）是黃金介入窗口。此階段病人情緒開始升高但尚未失控，認知功能仍存在，言語溝通仍然有效。一旦進入危機期，病人理性思考能力大幅下降，降階難度與風險都顯著提升。',
  },
  {
    id: 'Q33',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '「停聽同選」中的「選」對應 DEFUSE 框架的哪個步驟？',
    options: [
      { id: 'A', text: 'D — Determine（判斷）', isCorrect: false },
      { id: 'B', text: 'F — Facilitate Choices（促進選擇）', isCorrect: true },
      { id: 'C', text: 'U — Utilize Interests（善用需求）', isCorrect: false },
      { id: 'D', text: 'E — Evaluate（評估）', isCorrect: false },
    ],
    explanation:
      '「選」= 提供選項，讓對方重獲掌控感，對應 DEFUSE 中的 F（Facilitate Choices 促進選擇）。兩套框架的核心理念一致：透過給予合理選項，降低對方的無助感與對抗性。',
  },

  // === M05 團隊合作進階 ===
  {
    id: 'Q34',
    type: 'scenario',
    category: 'post',
    module: 'M05',
    stem: '你已嘗試言語降階超過 5 分鐘，但病人情緒持續升高，開始出現拍桌行為。此時你應該？',
    scenarioContext: '門診護理站，病人因報告遺失問題持續激動',
    options: [
      { id: 'A', text: '繼續嘗試降階，再給 5 分鐘', isCorrect: false },
      { id: 'B', text: '提高音量壓制對方', isCorrect: false },
      { id: 'C', text: '啟動團隊支援，由其他同仁接手溝通，並通知 leader', isCorrect: true },
      { id: 'D', text: '轉身離開不再處理', isCorrect: false },
    ],
    explanation:
      '降階溝通超過 5 分鐘無效且情緒持續升級時，應判斷為降階失敗，啟動團隊支援：換人接手溝通（換人可降溫）、通知 leader 到場、必要時聯繫駐警。繼續堅持反而可能因疲勞而犯錯。',
  },
  {
    id: 'Q35',
    type: 'single-choice',
    category: 'post',
    module: 'M05',
    stem: '駐警到場後，你應優先向駐警交代哪些資訊？',
    options: [
      { id: 'A', text: '病人的完整病史與用藥紀錄', isCorrect: false },
      { id: 'B', text: '事件經過、病人目前行為狀態、已嘗試的處置、現場有無武器', isCorrect: true },
      { id: 'C', text: '只需告訴駐警「有人在鬧事」即可', isCorrect: false },
      { id: 'D', text: '請駐警自行評估，不需提供資訊', isCorrect: false },
    ],
    explanation:
      '駐警到場時的簡報應包含：(1) 事件經過摘要 (2) 病人目前的行為狀態與情緒 (3) 已嘗試的處置方式 (4) 現場是否有武器或危險物品。這些資訊能幫助駐警快速掌握狀況並做出適當判斷。',
  },

  // === M03 環境察覺進階 ===
  {
    id: 'Q36',
    type: 'scenario',
    category: 'post',
    module: 'M03',
    stem: '你在只有一個出入口的診間內，病人突然站起來擋住門口，情緒激動。你的第一步行動應該是？',
    scenarioContext: '單門診間，僅有一扇門，病人站在門口位置',
    options: [
      { id: 'A', text: '試著推開病人衝出門口', isCorrect: false },
      { id: 'B', text: '保持冷靜，用緩和語氣溝通，同時觀察是否有其他脫離路線或可用的求救方式', isCorrect: true },
      { id: 'C', text: '大聲尖叫求救', isCorrect: false },
      { id: 'D', text: '拿起桌上物品防身', isCorrect: false },
    ],
    explanation:
      '被困在單門房間時，首要是保持冷靜、不激化對方。用緩和語氣維持溝通的同時，觀察環境：是否有窗戶、緊急求救鈴、電話等求救管道。肢體對抗（推開、拿物品）可能激發更嚴重的攻擊。',
  },
  {
    id: 'Q37',
    type: 'single-choice',
    category: 'pre',
    module: 'M03',
    stem: '門診設置的緊急求救鈴應在何時按下？',
    options: [
      { id: 'A', text: '只要病人提高音量就應該按', isCorrect: false },
      { id: 'B', text: '當感受到人身安全受到威脅，需要立即支援時', isCorrect: true },
      { id: 'C', text: '只有在被攻擊後才能按', isCorrect: false },
      { id: 'D', text: '必須經過護理長同意才能按', isCorrect: false },
    ],
    explanation:
      '緊急求救鈴的使用時機是「當你感受到人身安全受到威脅、需要立即支援時」。不需要等到被攻擊才按，也不需要主管同意。這是保護醫護人員安全的預防性措施，寧可多按一次也不要錯過求救時機。',
  },
  // === 新增：行為急症、降階五步驟、法律 (Q38-Q47) ===
  {
    id: 'Q38',
    type: 'single-choice',
    category: 'both',
    module: 'M01',
    stem: '50 歲男子眼神失焦、關不上寶特瓶蓋、語無倫次、無特別病史。以下何者是現場最適當的處置方向？',
    options: [
      { id: 'A', text: '立即呼叫精神科會診，強制約束', isCorrect: false },
      { id: 'B', text: '先排除身體原因（血糖、中風、電解質等），行為急症不等於精神疾病', isCorrect: true },
      { id: 'C', text: '通知家屬接回家觀察', isCorrect: false },
      { id: 'D', text: '請他自己去精神科掛號', isCorrect: false },
    ],
    explanation:
      '這是林皓陽醫師教材中的真實案例 — 最後血糖檢查為 >1,500 mg/dL。核心原則：行為急症 ≠ 精神疾病。低血糖、頭部外傷、電解質不平衡都可能造成急性精神症狀。現場不需要精確診斷，但必須先排除可逆的身體原因。',
  },
  {
    id: 'Q39',
    type: 'single-choice',
    category: 'both',
    module: 'M02',
    stem: '精神危機有四大樣態 LOR/LOC/LOH/LOP。病人呈現「幻聽、自言自語、多疑、懼怕」，最主要的樣態是？',
    options: [
      { id: 'A', text: 'LOR — Loss of Reality 失去現實感', isCorrect: true },
      { id: 'B', text: 'LOC — Loss of Control 失去控制感', isCorrect: false },
      { id: 'C', text: 'LOH — Loss of Hope 失去希望', isCorrect: false },
      { id: 'D', text: 'LOP — Loss of Perspective 失去穩定想法', isCorrect: false },
    ],
    explanation:
      '幻聽、自言自語、多疑是典型的 LOR（失去現實感）表現。LOC 是易怒／衝動／踱步；LOH 是退縮／自殺意念；LOP 是執著／偏執／反覆同一主題。四大樣態不一定獨自出現，但分類有助於選擇降階策略 — 對 LOR 病人要避免突然動作、不否定幻覺內容、先處理情緒。',
  },
  {
    id: 'Q40',
    type: 'single-choice',
    category: 'both',
    module: 'M01',
    stem: '為什麼在病人情緒最高點時跟他講道理往往無效？',
    options: [
      { id: 'A', text: '病人故意不聽', isCorrect: false },
      { id: 'B', text: '情緒爆發時杏仁核活化、前額葉（理性腦）被綁架，無法進行邏輯思考', isCorrect: true },
      { id: 'C', text: '只有我們講得不夠大聲', isCorrect: false },
      { id: 'D', text: '必須先威脅才會聽', isCorrect: false },
    ],
    explanation:
      '這是降階溝通的神經科學基礎。杏仁核（情緒腦）活化時會「綁架」前額葉皮質（理性腦），人進入 Fight/Flight/Freeze 本能反應，6 秒內理智線斷。所以要「先降階、再講理」— 情緒在安全區才有辦法高階思考。病人是這樣，你自己也是這樣。',
  },
  {
    id: 'Q41',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '林皓陽醫師言語降階五步驟中，「第二步：目標確認」的核心是什麼？',
    options: [
      { id: 'A', text: '跟病人講道理，講到他認輸', isCorrect: false },
      { id: 'B', text: '讓病人放輕鬆、降低對峙感（不是要「贏」）', isCorrect: true },
      { id: 'C', text: '讓病人道歉', isCorrect: false },
      { id: 'D', text: '立刻叫駐警', isCorrect: false },
    ],
    explanation:
      '降階不是辯論、不需要贏。面對激動的病人，目標是「讓他放輕鬆、降低對峙感」，不是講贏他。一旦進入辯論模式，雙方都被杏仁核綁架，衝突只會升級。先降對峙感，後面第三招「同理回應」才有機會發揮。',
  },
  {
    id: 'Q42',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '同理回應的三句公式依序是？',
    options: [
      { id: 'A', text: '事實 → 情緒 → 需求（我注意到__／你是不是覺得__／想要__）', isCorrect: true },
      { id: 'B', text: '指責 → 命令 → 威脅', isCorrect: false },
      { id: 'C', text: '解釋 → 道歉 → 補償', isCorrect: false },
      { id: 'D', text: '診斷 → 用藥 → 通報', isCorrect: false },
    ],
    explanation:
      '「我注意到您等了快兩小時（事實）／您是不是覺得很焦慮（情緒）／想要先了解爸爸狀況（需求）？」— 這是把病人從情緒腦拉回皮質的結構化話術。先認同情緒再說，但同理不等於同意 — 你認同的是感受，不是行為。',
  },
  {
    id: 'Q43',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '降階第五步「轉移焦點」的五種方向，以下哪一組正確？',
    options: [
      { id: 'A', text: '從站著到坐著、從情緒到事件、從執著到選擇、從精神到身體、從情緒到任務', isCorrect: true },
      { id: 'B', text: '從門口到角落、從輕聲到大聲、從被動到主動', isCorrect: false },
      { id: 'C', text: '從安撫到威脅、從建議到命令、從退讓到堅持', isCorrect: false },
      { id: 'D', text: '從護理師到醫師、從醫師到駐警、從駐警到警察', isCorrect: false },
    ],
    explanation:
      '五種轉移焦點口訣：身、坐、事、選、任。「要不要坐著說？」「告訴我發生什麼事」「你要吃藥還是打針？」「現在一定很累吧？」「我需要您幫我確認一下資料」 — 用身體／姿勢／事件／選擇／任務把病人的注意力從「情緒」拉走。',
  },
  {
    id: 'Q44',
    type: 'scenario',
    category: 'both',
    module: 'M04',
    stem: '21 英呎法則（Tueller Drill）的意義是？',
    scenarioContext: '言語降階第三步戰術三寶中的「距離」原則',
    options: [
      { id: 'A', text: '病人身高要量到 21 英呎', isCorrect: false },
      { id: 'B', text: '一個人在 1.5 秒內可跨越約 21 英呎（6.4 公尺），意思是只要對方在 6 公尺內就沒有絕對安全距離', isCorrect: true },
      { id: 'C', text: '駐警到場需要 21 秒', isCorrect: false },
      { id: 'D', text: '診間要有 21 英呎寬', isCorrect: false },
    ],
    explanation:
      '21 英呎法則是警察界經典研究：一個攻擊者在 1.5 秒內可跨越約 21 英呎（6.4 公尺），這比多數人拔槍反應的時間還短。門診啟示：盡量讓病人「坐著」，爭取反應時間；隨時面朝病人、不要在正前方、可 90° 斜角；利用診療桌／椅背作為掩體。',
  },
  {
    id: 'Q45',
    type: 'scenario',
    category: 'both',
    module: 'M07',
    stem: '家屬抱怨「爸爸不吃藥也不看醫生」並疑似有傷害他人之虞。但你擔心強制送醫會被告「妨害自由」。正確觀念是？',
    scenarioContext: '精神衛生法第 48 條適用情境',
    options: [
      { id: 'A', text: '沒有醫師確診就不能通報送醫', isCorrect: false },
      { id: 'B', text: '只要依客觀事實合理懷疑需送醫，法律保護通報者，「送醫通常都不會錯」', isCorrect: true },
      { id: 'C', text: '必須等到實際發生傷害才能介入', isCorrect: false },
      { id: 'D', text: '先請家屬簽切結書才能送醫', isCorrect: false },
    ],
    explanation:
      '依據精神衛生法第 48 條與臺灣高雄地院等判決，「只要依客觀上所發生事實，有使他人可認為患者可疑為罹有精神疾病而有送醫檢查之必要，即難認通報送醫者有何違法之故意」。2019 年嘉義鐵路警察李承翰事件就是錯失通報時機的悲劇。遇到模糊情境可先撥打衛福部 24h 諮詢專線 (049) 255-1010。',
  },
  {
    id: 'Q46',
    type: 'single-choice',
    category: 'post',
    module: 'M07',
    stem: '「上兵伐謀，其次伐交，其次伐兵，其下攻城」在降階實務的對應，以下何者錯誤？',
    options: [
      { id: 'A', text: '伐謀 = 預防性介入（流程透明、列管個案識別）', isCorrect: false },
      { id: 'B', text: '伐交 = 言語降階（停聽同選、五步驟）', isCorrect: false },
      { id: 'C', text: '伐兵 = 徒手單人制伏最有效率', isCorrect: true },
      { id: 'D', text: '攻城 = 強制約束／送醫，成本最高需做足準備', isCorrect: false },
    ],
    explanation:
      '伐兵是指「動用強制力需盤點團隊、裝備」 — 安全壓制其實需要 5 個人，不是靠徒手單人。越上層手段成本越低、效果越好；越下層風險越大。攻城（強制處置）一定會有損失，必須在效益評估後才執行。',
  },
  {
    id: 'Q47',
    type: 'single-choice',
    category: 'post',
    module: 'M02',
    stem: '關於「簡易風險評估表 14 項」（安大略省）在門診實務的使用，以下何者正確？',
    options: [
      { id: 'A', text: '必須每一項都問病人才算完整', isCorrect: false },
      { id: 'B', text: '勾超過 7 項才能通報送醫', isCorrect: false },
      { id: 'C', text: '沒有硬性截斷點，重點是向上通報時有結構化語言與客觀紀錄', isCorrect: true },
      { id: 'D', text: '只有精神科才能使用', isCorrect: false },
    ],
    explanation:
      '14 項評估表沒有硬性截斷點，重點是「協助你向上通報時有結構化語言」— 例如：「病人符合 5 項風險指標，其中 3 項涉及自他傷」。大部分項目可由觀察與家屬資訊取得，不需要一一逐項問病人。這也是精神衛生法 48 條實務上「客觀事實」最好的紀錄工具，保護通報者。',
  },
  // === 平衡題庫：M05/M07 + 跨模組整合 (Q48-Q55) ===
  {
    id: 'Q48',
    type: 'single-choice',
    category: 'both',
    module: 'M07',
    stem: '依據 M07「伐兵／攻城前 checklist」，**安全壓制**一個激動病人通常需要幾個人？',
    options: [
      { id: 'A', text: '2 人', isCorrect: false },
      { id: 'B', text: '3 人', isCorrect: false },
      { id: 'C', text: '5 人', isCorrect: true },
      { id: 'D', text: '看現場情況，越多越好', isCorrect: false },
    ],
    explanation:
      '安全壓制需要 5 個人：1 人主責溝通（避免增加刺激）、4 人各控制一個肢體。少於 5 人容易導致病人掙脫、壓制者受傷、或用力失控造成姿勢性窒息。這也是為什麼「不要單人強制處置」是 M07 的核心原則。安全 = 事先計畫 + 大家一起。',
  },
  {
    id: 'Q49',
    type: 'scenario',
    category: 'both',
    module: 'M07',
    stem: '家屬來櫃檯說：「爸爸不吃藥、不看醫生，在家威脅要打媽媽。」病人本人目前在候診，無明顯激動，**無明確精神科診斷**。依據精神衛生法第 48 條，正確作法是？',
    scenarioContext: '精神衛生法 48 條「有傷害之虞」要件判斷',
    options: [
      { id: 'A', text: '沒有醫師確診為精神疾病，不能通報送醫', isCorrect: false },
      { id: 'B', text: '以客觀事實（家屬陳述威脅、拒絕就醫）合理懷疑「有傷害他人之虞」，應通知衛生局並可通知警察', isCorrect: true },
      { id: 'C', text: '要求家屬自行勸爸爸就醫，否則無法處理', isCorrect: false },
      { id: 'D', text: '必須等病人在診間發生暴力才能通報', isCorrect: false },
    ],
    explanation:
      '精神衛生法第 48 條關鍵字是「有傷害他人或自己，**或有傷害之虞**」— 不需要等實際發生。臺灣法院判決：「只要依客觀上所發生事實，有使他人可認為患者可疑為罹有精神疾病而有送醫檢查之必要，即難認通報送醫者有何違法之故意」。家屬陳述威脅與拒絕就醫都是「客觀事實」。模糊時可先撥 (049) 255-1010 諮詢。',
  },
  {
    id: 'Q50',
    type: 'single-choice',
    category: 'post',
    module: 'M07',
    stem: '2019 年嘉義鐵路警察李承翰事件給一線人員的最重要教訓是？',
    options: [
      { id: 'A', text: '精神病人都是危險的，應一律拒絕接觸', isCorrect: false },
      { id: 'B', text: '「不送醫怕被告妨害自由」這個恐懼，讓人員錯失保護的機會；法律其實站在合理懷疑送醫這邊', isCorrect: true },
      { id: 'C', text: '家屬的判斷不可信', isCorrect: false },
      { id: 'D', text: '只有警察才能執行強制送醫', isCorrect: false },
    ],
    explanation:
      '2019 年早上，鄭姓男子陳述朋友與女兒要害他，家屬請求強制送醫。當班員警因擔心「被告妨害自由」未執行。該男子當晚在嘉義火車站刺死鐵警李承翰，後鑑定為思覺失調症發作。教訓：**「怕被告」的恐懼讓一線人員錯失保護自己、他人、病人本人的機會**。精神衛生法 48 條 + 法院判決都站在「合理懷疑即可送醫」這邊。',
  },
  {
    id: 'Q51',
    type: 'single-choice',
    category: 'both',
    module: 'M05',
    stem: '為什麼建議 Pre-SBAR 通報時加入「四大樣態標籤」（LOR/LOC/LOH/LOP）？',
    options: [
      { id: 'A', text: '讓駐警知道病人的精神科診斷', isCorrect: false },
      { id: 'B', text: '讓駐警／支援同仁到場前就調整應對策略（例如 LOR 主導時不正面對視、不突然動作）', isCorrect: true },
      { id: 'C', text: '為了精確統計醫院內精神病盛行率', isCorrect: false },
      { id: 'D', text: '讓病人聽到自己的「代號」', isCorrect: false },
    ],
    explanation:
      '不同樣態的病人需要不同應對：LOR（失去現實感）要避免突然動作、不否定幻覺；LOC（失去控制感）要給選擇感、減少刺激；LOH（失去希望）要先建立連結、評估自傷；LOP（失去穩定想法）要轉移焦點、縮小選擇。駐警／同仁到場前就知道主導樣態，可節省數秒臨場判斷，也減少誤激化風險。',
  },
  {
    id: 'Q52',
    type: 'scenario',
    category: 'both',
    module: 'M05',
    stem: '同事降階 5 分鐘未見效，要你接手主責溝通者。你的第一句話應該是？',
    scenarioContext: '主責交接時的起手式',
    options: [
      { id: 'A', text: '「不好意思，請您從頭跟我說一次。」', isCorrect: false },
      { id: 'B', text: '「小美先去忙，這裡我來。」（然後面對病人）「我注意到您在跟我同事討論等候時間的事，您是不是覺得很焦慮？想要有人幫您把流程問清楚？」', isCorrect: true },
      { id: 'C', text: '「先生您冷靜點，別把氣出在她身上。」', isCorrect: false },
      { id: 'D', text: '「我是護理長，您的問題我來處理就好。」', isCorrect: false },
    ],
    explanation:
      '正確起手式結合三個技巧：(1) 明確向原主責宣告交接（減少雙主責混亂）；(2) 用 M04 同理三句公式「我注意到（事實）／您是不是覺得（情緒）／想要（需求）」展示「我有在聽」，避免病人被迫重頭講。A 錯在讓病人重頭來過；C 否定情緒；D 擺階級反而增加對立。',
  },
  {
    id: 'Q53',
    type: 'single-choice',
    category: 'pre',
    module: 'M03',
    stem: '你被病人擋在單門診間內（LOC 失去控制感）。下列哪組動作組合最能降低危險？',
    options: [
      { id: 'A', text: '大聲斥責 + 試圖推開 + 拿物品防身', isCorrect: false },
      { id: 'B', text: '家具建立屏障 + 持續平穩對話 + 用「要不要坐著說」轉移焦點 + 掙脫時朝出口方向', isCorrect: true },
      { id: 'C', text: '保持安靜、完全不動，等支援到場', isCorrect: false },
      { id: 'D', text: '假裝同意病人所有訴求', isCorrect: false },
    ],
    explanation:
      '正確組合對應 M03 + M04：(1) 家具屏障爭取空間（環境）；(2) 持續對話爭取時間（降階）；(3) 轉移焦點「從站到坐」（五招之一，打斷 LOC 衝動）；(4) 掙脫時朝出口方向（非遠離）。A 升級衝突；C 完全靜止反而讓對方無法釋放情緒，容易爆發；D 虛假同意會在被戳穿時讓情勢更糟。',
  },
  {
    id: 'Q54',
    type: 'single-choice',
    category: 'post',
    module: 'M06',
    stem: '你不確定某情境是否要啟動強制送醫（精神衛生法 48 條）。**最好的第一通電話**是？',
    options: [
      { id: 'A', text: '直接撥 110 報警', isCorrect: false },
      { id: 'B', text: '衛福部 24 小時精神醫療緊急處置線上諮詢專線 (049) 255-1010', isCorrect: true },
      { id: 'C', text: '撥給病人的家屬要他們自行處理', isCorrect: false },
      { id: 'D', text: '等下一班同事來上班再決定', isCorrect: false },
    ],
    explanation:
      '(049) 255-1010 是衛福部 24h 專線，專門協助「要不要送醫／怎麼送醫」的判斷。打這通電話有三個好處：(1) 有衛生系統人員協助判讀精神衛生法適用性；(2) 建立溝通紀錄保護通報者；(3) 可三方通話（+ 110 或駐警）。比直接報警或撒手不管都適合，尤其遇到非典型或情境不明時。',
  },
  {
    id: 'Q55',
    type: 'single-choice',
    category: 'both',
    module: 'M04',
    stem: '言語降階五步驟中，「第五步：開始用招」的三招依序是？',
    options: [
      { id: 'A', text: '辨識情緒 → 同理回應 → 轉移焦點', isCorrect: true },
      { id: 'B', text: '同理回應 → 辨識情緒 → 威脅警告', isCorrect: false },
      { id: 'C', text: '說服 → 解釋 → 道歉', isCorrect: false },
      { id: 'D', text: '轉移焦點 → 威脅警告 → 強制處理', isCorrect: false },
    ],
    explanation:
      '三招順序對應神經科學：(1) **辨識情緒**（affect labeling）— 先在心裡為病人與自己的情緒命名，把活動從杏仁核轉到大腦皮質；(2) **同理回應**（我注意到／您是不是覺得／想要）— 展示「我聽見了」，降低對峙；(3) **轉移焦點**（身/坐/事/選/任）— 把注意力從情緒拉走。順序不能顛倒，同理建立在辨識之上，轉移建立在同理之上。',
  },
]
