import type { Scenario } from '../types'

const S03: Scenario = {
  id: 'S03',
  title: '診間逼近',
  subtitle: '單門診間病人逼近護理師',
  setting: '單門診間，只有護理師與病人兩人，診間門關著。',
  patient: '40 歲男性，體格壯碩，因慢性疼痛長期就診。',
  color: '#8E44AD',
  colorLight: '#E8DAEF',
  skills: ['環境察覺', 'DEFUSE — Ensure Safety', '團隊支援啟動'],
  modalities: ['LOC'],
  modalityNote:
    '病人因慢性疼痛積累挫折，突然逼近護理師，呈現 LOC（失去控制感）極端表現 — 衝動、逾越物理距離、握拳。應對重點：M04 戰術三寶（距離/掩體/隨時面朝）、21 英呎法則（盡量讓病人坐著）、不要硬碰硬。',
  rootStageId: 'T0',
  stages: [
    {
      id: 'T0',
      title: '氣氛緊張',
      statusLabel: '高風險環境，需先做安全動作',
      tensionLevel: 2,
      narrative:
        '單門診間內，40 歲體格壯碩的男性病人看完診後，醫師已離開。病人走向護理師，距離不到一公尺，壓低聲音說：「你幫我跟醫師說，止痛藥劑量要加。不然我的痛誰要負責？」眼神直視、身體微微前傾。',
      behavioralIndicators: [
        '侵入個人空間（不到一公尺）',
        '壓低聲音、語氣帶有威脅',
        '眼神直視不移開',
        '身體前傾、雙手握拳',
        '診間只有兩人，門是關的',
      ],
      decisions: [
        {
          id: 'T0-A',
          text: '不急著回答，側身移動拉開距離、走向門口側邊（保留退路），順勢把門推開一點。語氣平穩：「我聽到你的意思了，疼痛一直沒改善確實很辛苦。這需要跟醫師討論，我可以幫你安排再跟醫師談一次，你覺得呢？」',
          feedback: '正確！優先確保安全（拉開距離、打開門、確認出口），再運用停聽同選。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T1A',
          consequence: '病人雖仍不滿，但看到門開著、你已移到門邊，身體稍微後退。',
          teachingPoint:
            'DEFUSE 的 Ensure Safety 在此情境最為關鍵。獨處時：(1) 確認出口位置 (2) 側身站位 (3) 把門打開製造目擊者與退路 (4) 維持至少兩臂距離。安全永遠是第一優先。',
        },
        {
          id: 'T0-B',
          text: '後退一步，害怕地說：「好好好，我幫你說……你先別這樣……」',
          feedback: '恐懼是正常反應，但直接答應不在職責範圍內的要求會強化對方用威脅取得好處。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人察覺你怕他，更進一步：「那你現在就去叫醫師。」',
          teachingPoint:
            '在壓力下不要做超出職責的承諾。可以承認需求、表達願意協助，但具體決策仍需回到專業流程。',
        },
        {
          id: 'T0-C',
          text: '不動聲色：「你這樣講話讓我覺得不舒服，請你退後。」',
          feedback: '直接設界線的勇氣很好，但在獨處且對方佔優勢的情況下，直接挑戰可能激化。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T1B',
          consequence: '病人冷笑：「我怎樣了嗎？你是在兇我？」身體更靠近。',
          teachingPoint:
            '設界線要看情境。獨處時、對方體格佔優勢時，安全優先於設界線。先拉開距離、確保退路，再以間接方式設定界線。',
        },
        {
          id: 'T0-D',
          text: '繼續坐著操作電腦：「好好好我等一下跟醫師講。」避免衝突。',
          feedback: '錯誤。坐著 + 背對退路 + 虛應承諾 = 三重高風險。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T1B',
          consequence: '病人看你敷衍，手撐在桌面逼近：「我是問你現在！」',
          teachingPoint:
            '坐著會讓你失去反應時間。高風險情境第一動作永遠是站起來並移動到有退路的位置。',
        },
      ],
      criticalActions: [
        '評估環境：門的位置、有無危險物品',
        '拉開至少兩臂距離',
        '側身約 45 度，靠近出口',
        '準備啟動求援（對講機、門外同事）',
      ],
      teachingPoints: [
        '獨處情境是門診暴力的高風險場景',
        '環境察覺（M03）在此情境直接關係人身安全',
        '壓低聲音的威脅可能比大聲叫罵更危險',
        '「關門的診間 + 體格差距 + 獨處」= 高風險組合',
      ],
    },
    {
      id: 'T1A',
      title: '有退路的對話',
      statusLabel: '可控高風險，需持續分工',
      tensionLevel: 2,
      narrative:
        '門已打開，你在門邊側身站著。病人仍皺眉：「那你現在就去幫我約，不要叫我再跑一趟。」語氣仍帶壓力但音量正常。',
      behavioralIndicators: [
        '接受物理距離',
        '要求具體時程',
        '情緒仍緊繃但未升級',
      ],
      decisions: [
        {
          id: 'T1A-A',
          text: '「我現在就幫您掛號回診，也讓護理長了解您的疼痛狀況，這樣下次跟醫師討論會更完整。我們先一起到護理站，您覺得可以嗎？」同時用眼神示意門外同事進來協助。',
          feedback: '正確。離開獨處空間 + 啟動團隊 + 具體可行的行動承諾。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T2A',
          consequence: '病人點頭走向護理站，同事自然加入，脫離獨處風險。',
          teachingPoint:
            '當對方接受物理距離後，最關鍵的是把場景從「獨處」轉成「有他人」。能離開獨處空間，就離開。',
        },
        {
          id: 'T1A-B',
          text: '留在原地打電腦約診：「等我一下喔，我現在幫你約。」',
          feedback: '錯誤。你重新回到獨處、低頭、背對退路的姿態。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人走回來逼近：「你到底好了沒？」',
          teachingPoint:
            '即使情勢稍緩，在獨處診間內也不要低頭、不要背對、不要失去退路。',
        },
        {
          id: 'T1A-C',
          text: '拒絕他的要求：「這是醫師決定的，我沒辦法。」',
          feedback: '錯誤。情勢剛穩下來就丟出一句無協助意願，對方立刻再升。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人臉色一沉：「那你叫醫師現在出來。」',
          teachingPoint:
            '即使你無法滿足具體要求，也要提供替代管道。「我沒辦法」= 對話結束 + 情緒反彈。',
        },
      ],
      criticalActions: [
        '離開獨處空間',
        '啟動同事加入',
        '保持具體可行的承諾',
      ],
      teachingPoints: [
        '獨處情境降階的核心是「把自己從獨處中拉出來」',
        '有第三人在場能顯著降低暴力發生率',
      ],
    },
    {
      id: 'T1B',
      title: '威脅升級',
      statusLabel: '身體圍堵，需立刻脫離',
      tensionLevel: 4,
      narrative:
        '病人往前一步，一手撐在你旁邊的桌面上，幾乎把你逼到牆角：「你到底幫不幫？不幫的話我自己去找醫師，到時候出了事你負責！」',
      behavioralIndicators: [
        '進一步侵入個人空間',
        '用身體和手臂形成圍堵',
        '語氣從要求變為威脅',
        '提到「出事你負責」暗示後果',
      ],
      decisions: [
        {
          id: 'T1B-A',
          text: '立刻從桌子另一側移動、打開診間門，往門外退。語氣堅定但不對抗：「先生，我想幫你處理疼痛，我們先到外面，我帶你找護理長。」同時用眼神或手勢向門外同事求援。',
          feedback:
            '正確！首要行動是脫離被圍堵的位置、打開門、啟動支援，再表達願意幫忙。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T2A',
          consequence: '同事看到手勢進來診間，病人見有他人後退一步，情緒稍緩。',
          teachingPoint:
            '被逼到角落時，第一優先是移動到有退路的位置並打開門。門打開 = 有目擊者 + 有退路 + 降低對方行為升級的可能。',
        },
        {
          id: 'T1B-B',
          text: '不動，堅持在原地說：「你不要靠這麼近，我會幫你處理。」',
          feedback: '錯誤。言語設界線的效果在身體被壓迫時大打折扣。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人用力拍桌面：「講話算話！」距離更近。',
          teachingPoint:
            '當身體安全受到威脅時，「行動」比「言語」重要。先移動確保安全，再用言語溝通。',
        },
        {
          id: 'T1B-C',
          text: '大聲喊叫：「有人來幫忙！」',
          feedback: '呼救合理，但突然大聲可能驚嚇對方導致衝動反應。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人被嚇一跳後反射性抓住你的手臂：「你在做什麼！」',
          teachingPoint:
            '求援方式要看情境。能移動到門邊的話，邊移動邊用正常音量呼叫同事更安全。',
        },
        {
          id: 'T1B-D',
          text: '嘗試推開對方的手臂往外擠。',
          feedback: '錯誤。主動身體接觸會直接觸發肢體衝突。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '病人反手抓住你並推擠，你撞到桌角受傷，事件成為暴力傷害案件。',
          teachingPoint:
            '在體格佔劣勢時主動身體接觸極其危險。要繞開、不要對抗。',
        },
      ],
      criticalActions: [
        '立即脫離被圍堵位置',
        '打開門，確保退路與目擊者',
        '啟動團隊支援',
        '不要獨自面對身體威脅',
      ],
      teachingPoints: [
        '被圍堵時，移動比說話重要',
        '打開門是最重要的安全動作之一',
        '向同事求援不是示弱，是專業安全判斷',
      ],
    },
    {
      id: 'T2A',
      title: '脫離獨處，團隊接手',
      statusLabel: '支援到位，可收尾',
      tensionLevel: 2,
      narrative:
        '你成功引導病人到護理站或諮詢室，同事與護理長在場。病人看到有多人在場，情緒明顯緩和，重新坐下陳述疼痛問題。',
      behavioralIndicators: [
        '有他人在場後對方退讓',
        '願意重新以諮詢方式表達',
        '不再壓低聲音或圍堵',
      ],
      decisions: [
        {
          id: 'T2A-A',
          text: '由兩人一組（你 + 護理長或同事）重新與病人討論疼痛管理與回診安排，並完整記錄事件。',
          feedback: '正確。兩人一組 + 完整記錄 + 實質協助是專業收尾。',
          isCorrect: true,
          impact: 'de-escalate',
          outcomeId: 'O1',
          consequence: '病人接受回診安排離開。事件留紀錄、你獲得同仁情緒支持。',
          teachingPoint:
            '脫離危機後的真正收尾在於：完整記錄、團隊 debrief、以及護理師本人的情緒照顧。不要「沒事就過了」。',
        },
        {
          id: 'T2A-B',
          text: '病人冷靜後獨自處理後續：「好啦那我自己處理。」你放他離開沒有通報。',
          feedback: '錯誤。威脅事件即使未轉為肢體攻擊，也應通報。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O2',
          consequence: '事件被紀錄為一般就醫，但下次他仍可能以相同模式威脅其他同仁。',
          teachingPoint:
            '不通報等於讓下一位同仁承擔同樣風險。通報是保護整個團隊的行動。',
        },
        {
          id: 'T2A-C',
          text: '立刻把病人安排再進診間與醫師討論加藥。',
          feedback: '錯誤。在威脅剛發生後安排藥物調整，等於讓威脅生效。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O2',
          consequence: '病人達到目的離開，威脅行為被強化，下次更嚴重。',
          teachingPoint:
            '威脅後的藥物需求必須經完整精神/疼痛團隊評估，不能在當下單獨回應。',
        },
      ],
      criticalActions: [
        '兩人一組處理後續',
        '完整填寫事件通報單',
        '安排護理師情緒支持',
      ],
      teachingPoints: [
        '脫離險境後仍需正式通報',
        '兩人原則能降低單一同仁再次獨自面對的風險',
      ],
    },
    {
      id: 'T3B',
      title: '肢體衝突邊緣',
      statusLabel: '危機期，極高風險',
      tensionLevel: 5,
      narrative:
        '病人持續逼近、手已撐到你身側，可能隨時抓住你。診間門仍關著，沒有人看到這裡發生什麼。',
      behavioralIndicators: [
        '持續逼近、無視口頭界線',
        '可能出現肢體接觸',
        '獨處空間、無目擊者',
      ],
      decisions: [
        {
          id: 'T3B-A',
          text: '用非武力方式繞過對方：偏頭後退 + 側身低姿快速移動到門把、拉開門 + 同時按下緊急求援鍵或大聲「幫忙！」。不做身體對抗。',
          feedback: '正確。危機期目標只有一個：離開與求援。不要嘗試說服或對抗。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O3',
          consequence: '同仁與安衞室到場，病人被控制，事件形成正式暴力通報案件。',
          teachingPoint:
            '危機期的專業判斷是：放棄降階、專注逃離與求援。能打開門、能觸發求援鍵就是勝利。',
        },
        {
          id: 'T3B-B',
          text: '硬擠過去、推開對方往門口。',
          feedback: '錯誤。主動身體對抗 + 體格劣勢。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '病人反推更用力，你摔倒撞到桌角手腕骨折，事件成為傷害案件。',
          teachingPoint:
            '在獨處 + 體格劣勢下，推擠往往讓你受傷更重。要繞、要低、不要對抗。',
        },
        {
          id: 'T3B-C',
          text: '站在原地求情：「拜託不要這樣……」',
          feedback: '錯誤。危機期求情等於把安全完全交給對方的情緒。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '病人抓住你的手臂不放，同時另一隻手拉開抽屜搜索藥物。事件惡化。',
          teachingPoint:
            '危機期最大的錯誤之一就是停留在原地並期待對方的善意。求援鍵比求情有效。',
        },
      ],
      criticalActions: [
        '離開 + 求援，放棄說服',
        '不做身體對抗',
        '事後立即通報與就醫',
      ],
      teachingPoints: [
        '危機期語言失效，只剩環境與肢體動作',
        '緊急求援鍵/對講機的位置平時就要熟悉',
      ],
    },
  ],
  outcomes: [
    {
      id: 'O1',
      title: '成功脫離獨處並完整通報',
      severity: 'safe',
      label: '成功脫離',
      narrative:
        '你及時拉開距離、打開門、並把場景移到有同事的地方。病人看到有人在場後態度收斂，接受回診安排。事件完整填寫通報，你也獲得同仁情緒支持。',
      consequences: [
        '沒有發生肢體接觸',
        '事件留下完整紀錄，供後續風險管理',
        '護理師獲得團隊情緒支持',
      ],
      criticalActions: [
        '填寫暴力事件通報單',
        '檢討診間環境（門向、求援設備）',
        '持續關注該病人後續就診風險',
      ],
      teachingPoints: [
        '獨處診間的安全守則：門不鎖、背不對門、知道出口',
        '威脅事件即使未發生肢體攻擊，也應通報',
      ],
    },
    {
      id: 'O2',
      title: '事件被淡化未通報',
      severity: 'support',
      label: '未正式通報',
      narrative:
        '病人冷靜後獨自離開，或你安排了加藥使他滿意。沒有造成立即傷害，但事件未被正式記錄或通報。下一位接觸他的同仁將在不知情的狀態下面對同樣風險。',
      consequences: [
        '個案仍可能以相同威脅模式取得好處',
        '團隊風險資訊未被累積',
        '護理師個人承擔情緒壓力無支持',
      ],
      criticalActions: [
        '即使延後，仍應補通報',
        '在團隊會議中提出此類模式',
        '建立「威脅事件一律通報」的文化',
      ],
      teachingPoints: [
        '「沒事發生」不是不通報的理由',
        '通報是保護下一位同仁，不是與病人為敵',
      ],
    },
    {
      id: 'O3',
      title: '正式暴力事件，成功避免肢體傷害',
      severity: 'incident',
      label: '安全事件',
      narrative:
        '你成功觸發求援並離開獨處空間，同事與安衞室及時到場。病人被引導到獨立空間等待或請離院區。沒有造成身體傷害，但事件已構成正式暴力通報案件。',
      consequences: [
        '沒有肢體傷害',
        '事件正式列為暴力通報',
        '該病人後續就診模式可能需調整（如兩人一診）',
      ],
      criticalActions: [
        '完成暴力事件通報',
        '安排護理師情緒與身體狀況檢查',
        '檢討診間安全設計',
      ],
      teachingPoints: [
        '及時觸發求援 = 成功控制風險',
        '危機期「離開」本身就是勝利',
      ],
    },
    {
      id: 'O4',
      title: '不良後果：肢體攻擊與護理師受傷',
      severity: 'adverse',
      label: '不良後果',
      narrative:
        '因為單人對抗、主動推擠或在危機期僵住，發生肢體衝突：護理師可能被抓、推倒、撞傷，甚至骨折。事件進入警方程序，護理師需請假就醫，團隊士氣受影響。',
      consequences: [
        '護理師身體受傷',
        '事件進入警方與內部調查',
        '團隊心理壓力增加',
      ],
      criticalActions: [
        '立即就醫與警方報案',
        '提供受傷同仁心理支持與休假',
        '啟動診間環境與流程全面檢討',
      ],
      teachingPoints: [
        '獨處診間 + 體格劣勢下，身體對抗是最糟選項',
        '個人英雄主義不如系統性安全設計',
      ],
    },
  ],
  debriefGuide: [
    '回顧：在什麼時間點你第一次感到不安全？你注意到了哪些危險信號？',
    '分析：環境察覺（出口、距離、危險物品）在這個情境中有多重要？打開門這個動作的意義為何？',
    '反思：面對身體威脅時，你的本能反應是什麼？凍住？反抗？逃跑？這些反應都是正常的。',
    '連結：你的工作環境中，有哪些類似的獨處情境？目前的安全措施足夠嗎？',
    '行動：你的單位可以做哪些環境改善？（例如：診間門的方向、求援設備位置、排班人力）',
  ],
}

export default S03
