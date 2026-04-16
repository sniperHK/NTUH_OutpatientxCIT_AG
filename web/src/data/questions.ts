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
    stem: 'STAMP 暴力風險評估工具中，「M」代表的是？',
    options: [
      { id: 'A', text: 'Movement（動作）', isCorrect: false },
      { id: 'B', text: 'Mumbling（喃喃自語）', isCorrect: true },
      { id: 'C', text: 'Mood（情緒）', isCorrect: false },
      { id: 'D', text: 'Medication（用藥）', isCorrect: false },
    ],
    explanation:
      'STAMP 代表：S(Staring 瞪視)、T(Tone 音調)、A(Anxiety 焦躁)、M(Mumbling 喃喃自語)、P(Pacing 踱步)。M 代表自言自語、對空比劃等可能失去現實感的行為。',
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
    stem: '以下哪項不屬於 STAMP 暴力前兆評估工具的項目？',
    options: [
      { id: 'A', text: 'Staring（瞪視）', isCorrect: false },
      { id: 'B', text: 'Tone（音調）', isCorrect: false },
      { id: 'C', text: 'Medication（用藥）', isCorrect: true },
      { id: 'D', text: 'Pacing（踱步）', isCorrect: false },
    ],
    explanation:
      'STAMP 五個字母分別是：S(Staring 瞪視)、T(Tone 音調與音量)、A(Anxiety 焦躁)、M(Mumbling 喃喃自語)、P(Pacing 踱步)。Medication 不在其中。',
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
    stem: 'STAMP 評估中，以下哪個指標組合代表最高風險？',
    options: [
      { id: 'A', text: 'Staring + Tone 異常', isCorrect: false },
      { id: 'B', text: 'Anxiety + Pacing 異常', isCorrect: false },
      { id: 'C', text: '五項指標（S、T、A、M、P）全部異常', isCorrect: true },
      { id: 'D', text: 'Mumbling + Staring 異常', isCorrect: false },
    ],
    explanation:
      'STAMP 五項指標全部異常（5/5）代表最高風險等級，應立即啟動完整「叫叫 CABD」流程並聯繫駐警隊待命。2 項異常即需啟動 CABD 初評，4-5 項異常為高風險。',
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
    stem: '候診區一位病人不斷喃喃自語、在座位旁來回踱步、表情焦躁，你觀察到 STAMP 有 3 項異常。此時你的第一步行動應該是？',
    scenarioContext: '上午門診候診區，約 20 名病人候診中',
    options: [
      { id: 'A', text: '直接走過去安撫病人', isCorrect: false },
      { id: 'B', text: '通知同仁並啟動 CABD 初評', isCorrect: true },
      { id: 'C', text: '繼續觀察，等到 5 項全部異常再處理', isCorrect: false },
      { id: 'D', text: '立即撥打 110 報警', isCorrect: false },
    ],
    explanation:
      'STAMP 3 項異常屬中-高風險，應啟動 CABD 初評並同步通知當班 leader。不需等到全部異常才行動（2 項即需啟動），也不應在未通知團隊的情況下單獨接近。110 保留給立即危險情境。',
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
]
