import type { Scenario } from '../types'

const S02: Scenario = {
  id: 'S02',
  title: '自費藥品爭議',
  subtitle: '病人質疑收費不合理',
  setting: '門診繳費窗口旁，下午看診時段，周圍尚有其他病人候診。',
  patient: '55 歲男性上班族，西裝筆挺，手持帳單。',
  color: '#E67E22',
  colorLight: '#FDEBD0',
  skills: ['停聽同選', 'DEFUSE', '設下界線', '團隊支援'],
  rootStageId: 'T0',
  stages: [
    {
      id: 'T0',
      title: '質疑收費',
      statusLabel: '焦慮/不滿期，可修復',
      tensionLevel: 1,
      narrative:
        '55 歲男性拿著帳單走向護理站，皺眉質問：「為什麼這個藥要自費？上次明明健保有給付！你們是不是亂收費？」語氣不悅但尚能控制。',
      behavioralIndicators: [
        '皺眉、語氣不悅但音量正常',
        '手持帳單指向金額處',
        '身體站直、雙腳打開，佔據空間',
      ],
      decisions: [
        {
          id: 'T0-A',
          text: '暫停手邊工作，面對病人：「您說上次是健保給付的，我了解了。突然被告知要自費，換作是我也會想弄清楚。我可以幫您查上次的處方紀錄來比對，或者您也可以等一下直接跟醫師確認，您看哪個方式比較方便？」',
          feedback: '正確！完整的停聽同選：停下工作、覆述確認理解、同理感受、提供兩個選項。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T1A',
          consequence: '病人語氣稍軟，願意配合一起查紀錄。',
          teachingPoint:
            '面對收費爭議，先承認「疑問是合理的」，再提供查詢管道。不要急著解釋制度，先處理人的感受。',
        },
        {
          id: 'T0-B',
          text: '「健保規定就是這樣，不是我們決定的。」',
          feedback: '防衛姿態，把責任推給「制度」，等於告訴病人「這不關我的事」，切斷了溝通。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人覺得被推皮球，語氣與音量都拉高。',
          teachingPoint:
            '「這不是我們的問題」是常見錯誤話術，形成防衛姿態。建議改為：「我理解您的困擾，讓我看看能怎麼協助。」',
        },
        {
          id: 'T0-C',
          text: '「你先去繳費，有問題再回來問。」',
          feedback: '忽視病人的疑問，要求先服從再說，會讓人覺得權益不被重視。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人覺得被命令，質疑立刻升級為指控。',
          teachingPoint:
            '跳過傾聽和同理直接給指令，會讓病人感到不被尊重，反而延長衝突時間。',
        },
      ],
      criticalActions: [
        '面對病人、停下手邊工作',
        '確認帳單內容以利後續說明',
        '判斷暴力曲線位置：目前為焦慮/不滿階段',
      ],
      teachingPoints: [
        '收費爭議是門診高頻衝突情境之一',
        '病人質疑收費時通常有「被騙」或「不公平」的感受',
        '先處理感受再處理事實',
      ],
    },
    {
      id: 'T1A',
      title: '開始合作查證',
      statusLabel: '信任回穩，仍需跟進',
      tensionLevel: 2,
      narrative:
        '病人語氣緩和一些：「那你幫我查一下好了。但是我上次真的沒付這麼多。」他仍皺著眉，但不再指著你。',
      behavioralIndicators: [
        '音量下降',
        '願意配合查詢',
        '仍有疑慮但開始轉為具體問題',
      ],
      decisions: [
        {
          id: 'T1A-A',
          text: '邀請病人到旁邊座位坐下：「我幫您調上次處方，大約 2 分鐘。您先坐這邊，我拿到資料就過來跟您說。」同時請同事協助處理其他病人。',
          feedback: '正確。把對話轉移到低刺激環境 + 具體時間承諾 + 團隊分工。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T2A',
          consequence: '病人坐下等待，現場壓力大幅下降。',
          teachingPoint:
            '當病人願意合作時，要立刻用具體行動與時間把信任鞏固。「2 分鐘」比「一下下」有說服力。',
        },
        {
          id: 'T1A-B',
          text: '繼續站在護理站前查電腦：「稍等喔。」但沒有告知預計多久。',
          feedback: '錯誤。公開場合讓病人站著等、沒有時間點，信任會快速蒸發。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '病人等了一分鐘開始不耐煩，又大聲說話。',
          teachingPoint:
            '不明確的等待是情緒再升的觸發點。要給具體時間點並轉移到低刺激空間。',
        },
        {
          id: 'T1A-C',
          text: '先幫他解釋制度：「其實原廠藥和學名藥是不一樣的……」直接進入說教。',
          feedback: '錯誤。病人還沒看到證據前被說教，會覺得你在替醫院辯解。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '病人打斷：「我不想聽這些，我要看我的帳單！」',
          teachingPoint:
            '先拿證據、後談制度。被說教會讓人重新進入防衛模式。',
        },
      ],
      criticalActions: [
        '轉移到低刺激空間',
        '給具體時間承諾',
        '安排同事分流其他病人',
      ],
      teachingPoints: [
        '降階成功的第一個訊號是病人願意「等」',
        '此時需要 follow-through 而非說理',
      ],
    },
    {
      id: 'T1B',
      title: '情緒升級',
      statusLabel: '言語攻擊期，旁人已受影響',
      tensionLevel: 3,
      narrative:
        '病人越說越氣：「我每次來都被你們多收錢！你們醫院是不是專門騙老實人的？我要去衛生局投訴！」音量開始影響到旁邊的病人，有人拿出手機。',
      behavioralIndicators: [
        '音量升高、語速加快',
        '開始擴大指控範圍（從這次 → 每次）',
        '提到要投訴、找外部機構',
        '周圍病人開始側目、錄影',
      ],
      decisions: [
        {
          id: 'T1B-A',
          text: '語氣平穩：「先生，我聽到您的擔心了。投訴是您的權利，我尊重。不過在那之前，要不要讓我先幫您釐清這次的帳單？如果確實有誤，我們一定會處理。這邊稍微安靜一點，我們到旁邊坐下來看？」',
          feedback:
            '正確！承認投訴權利（不對抗）、重新聚焦問題、提供立即行動、轉移到較安靜的空間。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T2A',
          consequence: '病人語氣稍軟：「好啦，那你給我看清楚。」願意跟著移動。',
          teachingPoint:
            '在升溫階段，真正有效的是辨識核心擔憂並立刻啟動具體支援，而不是跟著辯論。',
        },
        {
          id: 'T1B-B',
          text: '「先生你講話小聲一點，這邊還有其他病人。」',
          feedback: '要求對方控制音量等於評斷他的行為，通常會引發「你管我」的反彈。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T3B',
          consequence: '病人拍桌：「就是你們態度差！我怎樣講話輪不到你管！」',
          teachingPoint:
            '不要直接要求對方降低音量或冷靜。透過自己放慢語速、降低音量，讓對方跟著調整。',
        },
        {
          id: 'T1B-C',
          text: '提高音量反駁：「我們絕對沒有亂收費！你不要亂講！」',
          feedback: '把現場帶進對錯爭執，會讓對方更用力證明自己被不公平對待。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人更大聲：「好！那我們就衛生局見！」並拿手機開始錄影。',
          teachingPoint:
            '被指控時最容易出現防衛反應，但在降階現場，防衛通常等於升階。',
        },
        {
          id: 'T1B-D',
          text: '轉頭對同事說：「叫保全！這個人在鬧！」',
          feedback: '在對方面前貼標籤，幾乎等於公開羞辱，通常讓衝突再跳一級。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人被激怒：「你說我鬧？我今天就讓你看看什麼叫鬧！」',
          teachingPoint:
            '團隊支援可以啟動，但不應用羞辱式、公開對立的方式宣告。應低調用對講機或暗號。',
        },
      ],
      criticalActions: [
        '控制自己的音量與語速',
        '辨識是否需要團隊分工',
        '準備通知護理長',
      ],
      teachingPoints: [
        '現場已從單純不滿進入言語攻擊期',
        '要避免與病人爭辯對錯，聚焦安全與需求',
        '此時支援應低調啟動，而非公開「叫保全」',
      ],
    },
    {
      id: 'T2A',
      title: '釐清事實',
      statusLabel: '可降階至合作解決',
      tensionLevel: 2,
      narrative:
        '你調出上次處方紀錄，和病人坐在旁邊座位一起看。發現上次使用的是學名藥（健保給付），這次醫師改開原廠藥（需自費）。病人表情從生氣轉為困惑：「那醫師為什麼要換？」',
      behavioralIndicators: [
        '願意坐下、開始問具體問題',
        '從指控模式轉為諮詢模式',
        '眼神回到帳單與電腦螢幕',
      ],
      decisions: [
        {
          id: 'T2A-A',
          text: '「這個部分建議您回診時跟醫師直接討論，我這邊可以幫您安排 10 分鐘的醫師簡短說明，今天還是下次回診方便？」同時記錄事件並準備回饋給醫師。',
          feedback: '正確。回到專業流程：護理師不替醫師決策辯護，而是安排合適的管道。',
          isCorrect: true,
          impact: 'de-escalate',
          outcomeId: 'O1',
          consequence: '病人點頭：「好，那今天就安排一下吧，謝謝。」',
          teachingPoint:
            '護理師不需要也不應該替醫師的處方決策辯護。正確的做法是安排回診與醫師討論的管道。',
        },
        {
          id: 'T2A-B',
          text: '自己開始解釋原廠藥與學名藥的差異，希望一次說服病人。',
          feedback: '錯誤。超出護理職責，且容易說錯細節。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '病人聽不懂、又開始質疑：「你都不確定，那我怎麼付錢？」',
          teachingPoint:
            '資訊要落在對的人身上。藥學與處方決策應由醫師或藥師說明，不是護理師。',
        },
        {
          id: 'T2A-C',
          text: '承諾：「好啦沒關係，這次我幫你減免，你下次記得。」',
          feedback: '錯誤。越權且不切實際的承諾會製造下一個糾紛點。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '病人把話截圖，日後拿來要求其他減免，事件反而擴大。',
          teachingPoint:
            '不切實際的承諾不是降階，是把問題延後爆炸。堅守職責邊界才是專業。',
        },
      ],
      criticalActions: [
        '安排醫師再說明的正式管道',
        '記錄事件經過',
        '將處方疑問回饋給開立醫師',
      ],
      teachingPoints: [
        '收費爭議常源於資訊落差，釐清事實後多能和平解決',
        '護理師的角色是橋樑，不是替代決策者',
      ],
    },
    {
      id: 'T2B',
      title: '拍桌升溫',
      statusLabel: '公開衝突期，需團隊接手',
      tensionLevel: 4,
      narrative:
        '病人用力拍桌：「我就是要今天處理！叫你們主管出來！不然我今天不走！」旁邊病人有人錄影，有人快步離開。',
      behavioralIndicators: [
        '拍桌、要求主管',
        '威脅不離開',
        '現場圍觀與錄影增加',
      ],
      decisions: [
        {
          id: 'T2B-A',
          text: '後退半步，穩定語氣：「我會請護理長一起來協助，請您稍坐。」同時請同事通知護理長，並示意其他病人到稍遠處等待。',
          feedback: '正確。設身體緩衝 + 啟動支援 + 疏散旁觀。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T3A',
          consequence: '病人仍煩躁但坐下等待，護理長幾分鐘後到場。',
          teachingPoint:
            '當單人無法降階時，啟動主管不是失敗，是專業判斷。同時要疏散旁觀者降低公開壓力。',
        },
        {
          id: 'T2B-B',
          text: '提高音量：「你不要拍桌子！再拍我就叫警衛！」',
          feedback: '威脅而非界線。讓雙方進入輸贏模式。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人站起身逼近護理站：「你叫啊！叫啊！」',
          teachingPoint:
            '界線要描述行為、保留協助意願，不是對抗宣言。',
        },
        {
          id: 'T2B-C',
          text: '轉身離開護理站：「你要投訴就去，我沒空。」',
          feedback: '失職。把失控現場丟著不管。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '病人翻櫃台、推擠其他同仁，事件發展為暴力案件。',
          teachingPoint:
            '離場不等於降階，而是把風險留給更糟的情境爆炸。',
        },
      ],
      criticalActions: [
        '保持安全距離與出口',
        '低調啟動護理長/安衞室',
        '疏散旁觀病人',
      ],
      teachingPoints: [
        '拍桌與要求主管代表情勢已進入公開衝突期',
        '單人硬碰硬的風險會快速上升',
      ],
    },
    {
      id: 'T3A',
      title: '護理長接手',
      statusLabel: '團隊控場，可收尾',
      tensionLevel: 3,
      narrative:
        '護理長到場，引導病人至旁邊諮詢室。你在旁協助提供帳單資料與紀錄，同事接手櫃台其他病人。',
      behavioralIndicators: [
        '有明確主講者（護理長）與支援者',
        '場景轉移到非公開空間',
        '病人仍激動但不再拍桌',
      ],
      decisions: [
        {
          id: 'T3A-A',
          text: '分工明確：護理長主談、你提供紀錄與帳單、同事持續監看現場並準備事件紀錄。若病人接受解釋則安排回診。',
          feedback: '正確。一人談、一人查、一人顧現場，是 CIT 團隊合作標準。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O2',
          consequence: '病人同意先回家，下次回診再與醫師討論。事件留下紀錄但未升級。',
          teachingPoint:
            '團隊接手的關鍵是清楚分工。三人同時說話只會讓病人覺得被圍攻。',
        },
        {
          id: 'T3A-B',
          text: '三個人一起解釋，希望人多說服病人。',
          feedback: '錯誤。被包圍感會讓病人再度爆發。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '病人覺得被圍攻再次拍桌，最終由安衞室護送離開並正式通報。',
          teachingPoint:
            '支援的重點是「降低刺激」，不是「增加聲量」。',
        },
        {
          id: 'T3A-C',
          text: '護理長單獨處理，你回去做自己的事。',
          feedback: '錯誤。護理長需要你提供的第一手資訊。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '病人察覺資訊不一致：「你們兩個講的不一樣！」事件重啟。',
          teachingPoint:
            '支援不是把問題交給別人，而是一起處理並提供完整資訊。',
        },
      ],
      criticalActions: [
        '固定一位主講者',
        '提供完整事件紀錄與帳單給主管',
        '準備必要的正式通報',
      ],
      teachingPoints: [
        '團隊接手不是撤退，是把現場從單點對抗回到系統處理',
        '主管到場後，你仍是現場資訊的關鍵來源',
      ],
    },
    {
      id: 'T3B',
      title: '高風險失控',
      statusLabel: '危機期，可能轉為肢體衝突',
      tensionLevel: 5,
      narrative:
        '病人持續咆哮、拍打櫃台，甚至試圖繞進護理站內側。其他病人驚嚇後退，有人在門口張望。',
      behavioralIndicators: [
        '試圖越過界線、繞進工作區',
        '持續高音量咆哮',
        '其他病人驚嚇、可能拍攝',
      ],
      decisions: [
        {
          id: 'T3B-A',
          text: '立即保持距離與出口，低調啟動安衞室與護理長，用短句設界線：「先生，我需要您退後。我會幫忙，但先請您退後。」同事疏散周邊病人。',
          feedback: '正確。危機期首要是安全、支援與現場控制，不再指望靠話術逆轉。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O3',
          consequence: '安衞室到場後秩序恢復，事件形成安全案件並正式通報。',
          teachingPoint:
            '危機期的專業判斷是收斂語言、放大安全、啟動支援。',
        },
        {
          id: 'T3B-B',
          text: '上前阻擋並與其拉扯：「你不要過來！」',
          feedback: '錯誤。單人硬碰硬、把自己推入肢體衝突最前線。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '拉扯中你被推倒撞到桌角，事件成為暴力傷害案件。',
          teachingPoint:
            '在高風險階段，單人身體對抗不是勇敢，而是把大家拖進更糟的局面。',
        },
        {
          id: 'T3B-C',
          text: '僵住，不動也不叫人。',
          feedback: '錯誤。危機期最大錯誤之一是僵住。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '病人翻過櫃台直接靠近電腦並拍打螢幕，事件惡化。',
          teachingPoint:
            '當你不回應，對方通常會用更大的動作來逼你回應。',
        },
      ],
      criticalActions: [
        '自身與旁人安全優先',
        '低調啟動安衞室/駐警',
        '留意出口、避免被困',
      ],
      teachingPoints: [
        '危機期語言只能輔助，安全管理才是主軸',
        '不要單人做身體阻擋或拉扯',
      ],
    },
  ],
  outcomes: [
    {
      id: 'O1',
      title: '釐清事實並安排回診',
      severity: 'safe',
      label: '成功釐清',
      narrative:
        '病人在你陪同下看到上次處方紀錄，理解原廠藥與學名藥差異後，接受安排回診與醫師討論。他臨走前說：「謝謝你願意幫我查，剛剛是我太急了。」',
      consequences: [
        '衝突在言語階段被成功壓回合作狀態',
        '事件留下紀錄，回饋給開立醫師改善溝通',
        '候診區秩序未受影響',
      ],
      criticalActions: [
        '將處方疑問回饋給醫師',
        '完成事件記錄（即使和平解決）',
        '自我情緒照顧',
      ],
      teachingPoints: [
        '成功降階的關鍵：先情緒、再安全、後流程',
        '提供具體選項與時間承諾，能大幅提升病人的掌控感',
      ],
    },
    {
      id: 'O2',
      title: '護理長接手後和平收尾',
      severity: 'support',
      label: '團隊穩住',
      narrative:
        '護理長引導到諮詢室後，病人逐漸冷靜，接受先回家、下次回診時與醫師討論的安排。事件未升級為通報案件，但留下完整紀錄供後續檢討。',
      consequences: [
        '沒有完全靠單人降階，而是靠團隊分工穩住',
        '事件留下紀錄，進入內部檢討流程',
        '病人未失去對醫院的信任',
      ],
      criticalActions: [
        '完成事件紀錄',
        '團隊 debrief：分工是否清楚、何時應更早啟動支援',
        '追蹤病人後續回診狀況',
      ],
      teachingPoints: [
        '啟動主管支援不是失敗，而是專業判斷',
        '團隊穩住現場有時比追求個人完美回應更重要',
      ],
    },
    {
      id: 'O3',
      title: '安全事件，需正式通報',
      severity: 'incident',
      label: '安全事件',
      narrative:
        '事件發展成明顯的公開衝突：需要安衞室或駐警到場維持秩序，候診區其他病人受到驚嚇，衝突過程可能被錄影。沒有造成肢體傷害，但已是需要正式通報與檢討的安全事件。',
      consequences: [
        '候診區秩序中斷，其他病人受到影響',
        '需要安衞室介入，事件正式升級',
        '可能有外部傳播（社群錄影）',
      ],
      criticalActions: [
        '完成暴力/滋擾事件通報',
        '確認旁觀病人與同仁情緒狀態',
        '檢討是否有更早的介入時機',
      ],
      teachingPoints: [
        '不是所有事件都能被完全降回平靜',
        '進入危機期時，重點是阻止更糟的後果',
      ],
    },
    {
      id: 'O4',
      title: '不良後果：肢體衝突或事件擴大',
      severity: 'adverse',
      label: '不良後果',
      narrative:
        '因為錯誤話術、越權承諾或現場對抗，病人出現推擠、翻越櫃台或攻擊行為，同仁可能受傷，事件進入警方或投訴程序。這已不是單純的收費爭議，而是錯誤處置導致的複合性不良後果。',
      consequences: [
        '言語衝突演變成肢體衝突或傷害事件',
        '同仁/病人受傷',
        '事件進入警方/投訴/媒體程序',
      ],
      criticalActions: [
        '立即啟動暴力事件與醫療事件通報',
        '確認傷者並安排就醫',
        '進行完整 debrief 與流程檢討',
      ],
      teachingPoints: [
        '錯誤話術真正的風險不是不好聽，而是會把風險一步步推高',
        '離場或越權承諾都可能是事件擴大的觸發點',
      ],
    },
  ],
  debriefGuide: [
    '回顧：病人從「質疑」到「擴大指控」的過程中，有哪些行為指標變化？你在哪一個節點最早看見情勢可能分叉？',
    '分析：停聽同選的順序在收費爭議中如何運用？「選」的部分你提供了哪些具體選項？',
    '反思：面對被指控「亂收費」「騙人」，你內心的反應是什麼？如何避免落入對抗或防衛？',
    '連結：你的單位中，遇到收費爭議時，護理長、醫師、安衞室分別在何時該被啟動？',
    '行動：下次類似情境，你要先守住哪三件事：情緒、安全、還是流程？順序為何？',
  ],
}

export default S02
