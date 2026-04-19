import type { Scenario } from '../types'

const S01: Scenario = {
  id: 'S01',
  title: '等候過久',
  subtitle: '女兒陪阿嬤等候 1.5 小時',
  setting: '上午門診候診區，約 30 位病人候診中',
  patient: '70 歲阿嬤（坐輪椅），由女兒陪同',
  color: '#C0392B',
  colorLight: '#FADBD8',
  skills: ['停聽同選', 'DEFUSE', '暴力曲線辨識', '團隊支援'],
  rootStageId: 'T0',
  stages: [
    {
      id: 'T0',
      title: '初始接觸',
      statusLabel: '焦慮期，可修復',
      tensionLevel: 1,
      narrative:
        '上午門診候診區，70 歲阿嬤（坐輪椅）由女兒陪同，已等候 1.5 小時。女兒快步走向護理站，表情焦急：「請問到底還要等多久？我媽都快暈倒了！」',
      behavioralIndicators: [
        '語氣急躁但仍有禮貌',
        '雙手撐著護理站台面',
        '頻繁回頭看阿嬤',
      ],
      decisions: [
        {
          id: 'T0-A',
          text: '放下手邊工作，站起來面對女兒：「我聽到了，等這麼久真的很辛苦，我理解您很擔心媽媽的身體。我先幫您看目前進度，也可以先替阿嬤量血壓，讓我們先確認她安不安全，好嗎？」',
          feedback: '正確。你先處理情緒與安全，再處理排隊問題，對方較容易重新回到合作狀態。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T1A',
          consequence: '女兒感受到你有在聽，也願意補充阿嬤的不舒服情況。',
          teachingPoint:
            '停聽同選的順序很重要。先停下工作、讓對方感受到被看見，再把焦點拉回「阿嬤現在是否安全」。',
        },
        {
          id: 'T0-B',
          text: '繼續低頭做事，頭也不抬地說：「大家都在等，號碼到了就會叫。」',
          feedback: '錯誤。你否定了對方的特殊擔憂，也用低頭不看人的姿態把關係推向對立。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '女兒覺得自己和阿嬤被敷衍，情緒明顯升高。',
          teachingPoint:
            '「大家都在等」是在處理流程，不是在處理情緒。對方會理解成「你媽不重要」。',
        },
        {
          id: 'T0-C',
          text: '看了一眼女兒：「小姐你冷靜一下，我們也很忙。」',
          feedback: '錯誤。「冷靜一下」通常只會讓對方更不冷靜，後半句還把現場變成彼此對抗。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T1B',
          consequence: '女兒開始把你視為阻擋她的人，而不是能幫忙的人。',
          teachingPoint:
            '降階不是把對方壓下去，而是創造一個還能繼續說話的空間。',
        },
        {
          id: 'T0-D',
          text: '站起來走向女兒，但立刻開始解釋：「因為今天病人很多，醫師看診比較慢，這不是我們能控制的……」',
          feedback: '部分動作是對的，但你太快進入說理，跳過了傾聽與同理，對方不會買單。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '女兒覺得你只想替單位辯解，沒有真的在乎阿嬤。',
          teachingPoint:
            '先回應感受，再解釋流程。順序錯了，再合理的內容也很難被接住。',
        },
      ],
      criticalActions: [
        '放下手邊工作，面對對方',
        '確認周圍環境與出口位置',
        '維持約 1 至 2 公尺安全距離',
      ],
      teachingPoints: [
        '目前仍有明顯降階空間',
        '這個節點最重要的是修復關係與確認阿嬤安全',
        '語氣急但尚未辱罵或拍桌，仍屬可介入階段',
      ],
    },
    {
      id: 'T1A',
      title: '信任開始修復',
      statusLabel: '關係回穩，但仍需要跟進',
      tensionLevel: 2,
      narrative:
        '女兒深吸一口氣，但眼神仍然緊張：「她剛剛有點頭暈，我是怕再等下去會出事。」她沒有離開櫃台，但語氣比剛才低了一些。',
      behavioralIndicators: [
        '音量下降',
        '開始描述具體擔憂而非單純抱怨',
        '注意力重新回到阿嬤身上',
      ],
      decisions: [
        {
          id: 'T1A-A',
          text: '立即請同事協助量血壓，並對女兒說：「我先讓阿嬤坐好，我這邊幫您確認還有幾位，三分鐘內回來跟您說，若她真的不舒服我們先做基本評估。」',
          feedback: '正確。你把承諾做成具體動作和時間點，能把剛建立的信任穩住。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T2A',
          consequence: '女兒開始願意等你回來，也把注意力放回阿嬤身體狀況。',
          teachingPoint:
            '情緒一旦稍微下降，就要立刻用可驗證的行動把它接住，不要只停在安撫話術。',
        },
        {
          id: 'T1A-B',
          text: '鬆一口氣後回去做自己的事：「好，那你們先等一下，我忙完再說。」',
          feedback: '錯誤。你前面建立的信任會立刻被這句話摧毀，對方會覺得你剛剛只是做表面功夫。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '女兒覺得又被晾在現場，情緒重新往上衝。',
          teachingPoint:
            '降階不是一句好聽話，而是後續真的要跟進。最容易反彈的時刻就是承諾落空的那一刻。',
        },
        {
          id: 'T1A-C',
          text: '直接補一句：「但先說喔，不可能因為你們比較急就插隊。」',
          feedback: '錯誤。即便你想設下界線，也不該在對方剛開始放鬆時先丟一句讓她感覺被防備。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '女兒重新聚焦在「你們就是不願意幫」這件事上。',
          teachingPoint:
            '先處理安全與當前需求，再談流程界線；時機太早，界線會被聽成拒絕。',
        },
      ],
      criticalActions: [
        '把承諾轉成具體時間與具體動作',
        '優先確認阿嬤是否需要即時評估',
        '避免在關係剛修復時急著防衛流程',
      ],
      teachingPoints: [
        '降階成功的第一個訊號是對方開始講具體擔憂',
        '此時需要用 follow-through 鞏固，而不是再講一次原則',
      ],
    },
    {
      id: 'T1B',
      title: '公開對抗形成',
      statusLabel: '言語攻擊期，旁人已受影響',
      tensionLevel: 3,
      narrative:
        '女兒被激怒，音量提高：「你們是不是看她老人家好欺負！已經等快兩小時了！」她開始用手指著你，旁邊候診病人紛紛轉頭注意。',
      behavioralIndicators: [
        '音量明顯提高',
        '手指指向護理師',
        '身體前傾，佔據空間',
        '周遭候診病人開始側目',
      ],
      decisions: [
        {
          id: 'T1B-A',
          text: '放慢語速回應：「我聽到您最擔心的是媽媽會不會撐不住。這件事比排隊更重要。我請同事先看一下阿嬤狀況，我也立刻幫您確認現在進度，讓您知道接下來怎麼做。」',
          feedback: '正確。你把對話從指控拉回核心問題，並且加入團隊分工來降低風險。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T2A',
          consequence: '女兒雖然還在生氣，但開始願意聽你提出處理方案。',
          teachingPoint:
            '在升溫階段，真正有效的是辨識核心擔憂並立刻啟動具體支援，而不是跟著辯論。',
        },
        {
          id: 'T1B-B',
          text: '提高音量反駁：「我們絕對沒有欺負老人家！你不要亂講！」',
          feedback: '錯誤。你把現場帶進對錯爭執，會讓對方更用力證明自己被不公平對待。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '雙方開始互相拉高音量，現場進入高風險狀態。',
          teachingPoint:
            '被指控時最容易出現防衛反應，但在降階現場，防衛通常等於升階。',
        },
        {
          id: 'T1B-C',
          text: '轉頭對同事大聲說：「去叫保全來，這個家屬在鬧事。」',
          feedback: '錯誤。你在對方面前直接貼標籤，幾乎等於公開羞辱，通常會讓衝突再跳一級。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '女兒感到被敵視與羞辱，開始出現更激烈的肢體動作。',
          teachingPoint:
            '團隊支援可以啟動，但不應用羞辱式、公開對立的方式宣告。',
        },
        {
          id: 'T1B-D',
          text: '沉默不語，低頭繼續處理文件，等她自己講完。',
          feedback: '錯誤。在對方最需要被看見的時候轉身忽略，通常只會逼出更大的動作來爭取注意。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '女兒更用力拍桌，情勢很快跨到高風險行為。',
          teachingPoint:
            '當你不回應，對方往往會用更大的聲量或更大的動作迫使你回應。',
        },
      ],
      criticalActions: [
        '控制自己的音量與語速',
        '辨識是否需要團隊分工',
        '開始留意旁人、出口與高風險物品位置',
      ],
      teachingPoints: [
        '現場已從單純不滿進入言語攻擊期',
        '要避免與病人爭辯對錯，聚焦安全與需求',
        '此時的支援重點是一人溝通、一人處理現場與病人安全',
      ],
    },
    {
      id: 'T2A',
      title: '重建合作窗口',
      statusLabel: '仍可降階，但不能空轉',
      tensionLevel: 2,
      narrative:
        '女兒沒有完全放鬆，但至少停下來聽你說。阿嬤看起來有些疲憊，額頭冒汗。現場還有其他病人在看，但衝突沒有再往上衝。',
      behavioralIndicators: [
        '女兒仍皺眉，但不再打斷你',
        '注意力重新回到阿嬤身上',
        '現場噪音下降，旁觀者減少',
      ],
      decisions: [
        {
          id: 'T2A-A',
          text: '你和同事立刻分工：一人協助阿嬤量血壓與評估症狀，一人查詢目前順序並告知前面還有幾位，承諾 3 分鐘後再回來更新。',
          feedback: '正確。這是把「聽懂」轉成「做到」的關鍵一步，也是最有機會真正降階的做法。',
          isCorrect: true,
          impact: 'de-escalate',
          outcomeId: 'O1',
          consequence: '女兒開始把你視為正在解決問題的人，現場迅速降溫。',
          teachingPoint:
            '當你同時處理病人安全與等待資訊，不只是在安撫情緒，而是在重建掌控感。',
        },
        {
          id: 'T2A-B',
          text: '你說「我馬上回來」，但沒有交代任何時間點，也沒有安排同事先看阿嬤，就直接轉身去忙別的。',
          feedback: '錯誤。沒有時間點、沒有行動、沒有交接，對方很快會認定你在拖延。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '女兒等不到回應，情緒再度升高，開始用更大的動作逼你回來。',
          teachingPoint:
            '在高壓現場，模糊承諾等於沒有承諾。時間點與分工都要說清楚。',
        },
        {
          id: 'T2A-C',
          text: '你承諾「我幫你想辦法先插進去」，但其實沒有能力保證。',
          feedback: '錯誤。你暫時買到安靜，卻把自己推向下一個失信節點。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '一旦對方發現承諾做不到，反彈會比一開始更大。',
          teachingPoint:
            '不切實際的承諾不是降階，是延遲爆炸。',
        },
      ],
      criticalActions: [
        '說明誰在做什麼、多久回來',
        '讓阿嬤的安全評估優先進行',
        '避免承諾自己做不到的事情',
      ],
      teachingPoints: [
        '這是把關係修復轉成問題解決的節點',
        '若沒有具體 follow-through，情緒會再次上衝',
      ],
    },
    {
      id: 'T2B',
      title: '拍桌升溫',
      statusLabel: '公開衝突期，需明確控場',
      tensionLevel: 4,
      narrative:
        '因為沒有等到明確處理，女兒用力拍桌：「叫你們主管出來！我要投訴！我媽要是在這裡昏倒算誰的！」有病人開始拿手機錄影，阿嬤坐在輪椅上看起來更虛弱。',
      behavioralIndicators: [
        '拍桌或大幅揮手',
        '開始要求主管、投訴、錄影',
        '現場圍觀增加',
        '阿嬤狀態看起來比剛才更差',
      ],
      decisions: [
        {
          id: 'T2B-A',
          text: '你後退半步，穩定語氣說：「我會請護理長一起來協助，但現在先讓我們確保阿嬤安全。」同時示意同事先去評估阿嬤，自己留在現場維持對話與界線。',
          feedback: '正確。你同時做了三件事：保安全距離、啟動支援、把焦點拉回真正的高風險對象。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T3A',
          consequence: '現場雖然還緊張，但開始轉成團隊可以接手的狀態。',
          teachingPoint:
            '此時的界線要和支援一起出現，不能只有一句警告，也不能只顧流程不顧阿嬤。',
        },
        {
          id: 'T2B-B',
          text: '你也提高音量：「你再拍桌子我就叫警衛！不要以為大聲就有用！」',
          feedback: '錯誤。這是威脅，不是界線。你讓雙方一起進入輸贏模式。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '女兒更用力逼近護理站，現場很快跨到肢體風險。',
          teachingPoint:
            '界線要描述可接受與不可接受的行為，同時保留「我仍願意幫忙」的訊號。',
        },
        {
          id: 'T2B-C',
          text: '你轉身離開護理站：「你要投訴就去，我沒空理你。」',
          feedback: '錯誤。你把失控現場丟著不管，也讓阿嬤失去被即時照顧的機會。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '女兒情緒失控衝向護理站，阿嬤仍未被評估，現場出現不良後果。',
          teachingPoint:
            '在高風險階段離場，不是降階，而是把風險留給更糟的情境去爆炸。',
        },
        {
          id: 'T2B-D',
          text: '你伸手去碰女兒的手臂，想把她拉離櫃台。',
          feedback: '錯誤。你主動身體接觸一個正在升溫的人，極可能把言語衝突直接推成肢體衝突。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '對方把你的接觸視為挑釁或攻擊，現場直接惡化。',
          teachingPoint:
            '非必要的身體接觸會大幅提升被反擊的風險，尤其在對方高度激動時。',
        },
      ],
      criticalActions: [
        '保持出口與身體緩衝空間',
        '把阿嬤安全列為並行優先事項',
        '啟動護理長或指定支援，而非單打獨鬥',
      ],
      teachingPoints: [
        '拍桌與公開羞辱代表情勢已進入公開衝突期',
        '此時若仍單人應對，風險會快速上升',
        '團隊支援與病人安全評估必須同步進行',
      ],
    },
    {
      id: 'T3A',
      title: '團隊接手與控場',
      statusLabel: '高張力但可控',
      tensionLevel: 3,
      narrative:
        '護理長到場後接手對話，你留在旁邊支援。另一位同事正協助阿嬤量血壓並確認症狀。女兒仍然激動，但開始願意把抱怨轉成具體訴求。',
      behavioralIndicators: [
        '有明確主講者與支援者',
        '阿嬤開始被評估',
        '女兒仍情緒化，但不再拍桌',
      ],
      decisions: [
        {
          id: 'T3A-A',
          text: '團隊分工明確：護理長負責說明與設下界線，你負責提供目前順序與後續安排，同事持續評估阿嬤；若症狀惡化則立即轉基本評估流程。',
          feedback: '正確。這是把高張力事件拉回專業流程的做法，既照顧情緒，也照顧安全。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O2',
          consequence: '現場雖未完全輕鬆，但已被團隊穩住，沒有再往肢體衝突發展。',
          teachingPoint:
            '團隊支援不是人多壓人，而是清楚分工：一人說、一人查、一人顧安全。',
        },
        {
          id: 'T3A-B',
          text: '三個人同時開始對女兒解釋流程與規定，希望一次把她說服。',
          feedback: '錯誤。這會讓家屬感覺被包圍與說教，容易再度爆開。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '現場重新混亂，最終仍需保全到場維持秩序。',
          teachingPoint:
            '人多不等於支援有效。支援的關鍵是降低刺激，不是增加聲量。',
        },
        {
          id: 'T3A-C',
          text: '你們只顧著談投訴流程，沒有人持續關注阿嬤的不舒服。',
          feedback: '錯誤。你把焦點從風險最高的人身上移開，可能造成醫療與安全的雙重後果。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O3',
          consequence: '女兒對你們更不信任，衝突雖被壓住，但事件仍升級成安全通報。',
          teachingPoint:
            'CIT 現場要持續辨識真正的高風險點。這一題真正的高風險可能不是女兒，而是阿嬤。',
        },
      ],
      criticalActions: [
        '固定一位主講者',
        '同步進行阿嬤評估與現場控場',
        '必要時準備啟動通報與事件紀錄',
      ],
      teachingPoints: [
        '良好的團隊支援能讓現場從單點對抗回到系統處理',
        '高張力不代表一定失敗，但必須靠清楚分工穩住',
      ],
    },
    {
      id: 'T3B',
      title: '高風險失控',
      statusLabel: '危機期，可能轉為肢體衝突',
      tensionLevel: 5,
      narrative:
        '女兒情緒全面失控，開始更大力拍打櫃台，甚至試圖繞進護理站內側。現場病人後退閃避，阿嬤仍坐在原地，神情虛弱而無人照應。',
      behavioralIndicators: [
        '持續拍桌、逼近、試圖越過界線',
        '現場他人後退，出現驚嚇反應',
        '阿嬤被暫時忽略，風險升高',
      ],
      decisions: [
        {
          id: 'T3B-A',
          text: '你立即保持距離與出口，請同事啟動保全與護理長支援，自己只用短句設下界線：「我會幫忙，但我需要您先停下拍桌。」同時讓另一位同事去照顧阿嬤並疏散周圍病人。',
          feedback: '正確。到了危機期，首要任務已不是說服，而是安全、支援與現場控制。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O3',
          consequence: '雖然仍形成安全事件，但團隊成功阻止更嚴重的肢體傷害。',
          teachingPoint:
            '危機期的專業判斷是收斂語言、放大安全、啟動支援，不要再嘗試單靠口才逆轉一切。',
        },
        {
          id: 'T3B-B',
          text: '你上前擋住她並與她拉扯：「妳不要太超過！」',
          feedback: '錯誤。你把自己直接送進肢體衝突最前線，而且是在沒有支援到位時單人硬碰硬。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '言語衝突轉成推擠，現場有人差點跌倒，事件造成不良後果。',
          teachingPoint:
            '在高風險階段，單人身體對抗通常不是勇敢，而是把大家都拖進更糟的局面。',
        },
        {
          id: 'T3B-C',
          text: '你僵在原地，不叫人也不處理阿嬤，希望她自己停下來。',
          feedback: '錯誤。當場不作為讓風險同時落在護理站、旁觀病人和阿嬤身上。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '現場延誤處置，阿嬤與周邊病人都暴露在更大的風險中。',
          teachingPoint:
            '危機期最大的錯誤之一就是僵住。此時必須立刻啟動支援與分工。',
        },
      ],
      criticalActions: [
        '優先確保自身、同事與其他病人的安全',
        '啟動保全/護理長等支援',
        '指定同事照顧阿嬤並清空周邊空間',
      ],
      teachingPoints: [
        '到了危機期，語言只能輔助，安全管理才是主軸',
        '不要單人進行身體阻擋或拉扯',
        '要同時看見「激動者」與「被忽略的脆弱病人」',
      ],
    },
  ],
  outcomes: [
    {
      id: 'O1',
      title: '成功降階並回到照護流程',
      severity: 'safe',
      label: '成功降階',
      narrative:
        '阿嬤血壓偏高但意識清楚，女兒因為得到明確資訊與即時評估，明顯放鬆下來。你回來告知前面還有 3 位病人、預估約 20 分鐘，並說明若阿嬤再出現頭暈惡化就先啟動評估。女兒點頭：「謝謝你，剛剛我真的太急了。」',
      consequences: [
        '衝突在言語階段被成功壓回合作狀態',
        '阿嬤獲得即時安全評估，降低醫療延誤風險',
        '候診區沒有進一步擴大成公共衝突事件',
      ],
      criticalActions: [
        '記錄這次事件與處置經過',
        '提醒團隊留意阿嬤後續狀況',
        '簡短 debrief：哪些話術最有幫助',
      ],
      teachingPoints: [
        '成功降階的關鍵是：先情緒、再安全、後流程',
        '具體時間點與具體行動會大幅提升病人家屬的掌控感',
      ],
    },
    {
      id: 'O2',
      title: '團隊接手後穩住現場',
      severity: 'support',
      label: '團隊穩住現場',
      narrative:
        '護理長接手後，女兒雖然仍有不滿，但在團隊分工下不再持續升溫。阿嬤先接受基本評估，再依狀況安排後續處理。這次不是完美降階，但成功避免了更嚴重的失控。',
      consequences: [
        '事件沒有完全靠單人話術化解，而是靠團隊支援穩住',
        '阿嬤安全與現場秩序都被同步照顧',
        '後續仍需要事件紀錄與團隊檢討',
      ],
      criticalActions: [
        '完成暴力/滋擾事件紀錄',
        '與團隊 debrief 分工是否清楚',
        '回顧何時應更早啟動支援',
      ],
      teachingPoints: [
        '啟動支援不是失敗，而是專業判斷',
        '團隊穩住現場有時比追求單人完美回應更重要',
      ],
    },
    {
      id: 'O3',
      title: '安全事件，需保全或正式通報介入',
      severity: 'incident',
      label: '安全事件',
      narrative:
        '現場最終仍發展成明顯的安全事件：需要護理長、保全或其他支援到場處理，候診區秩序受到影響，部分病人受到驚嚇。雖然沒有造成更嚴重傷害，但這已不是單純抱怨，而是需要正式通報與檢討的事件。',
      consequences: [
        '候診區秩序中斷，其他病人受到影響',
        '需要保全或主管介入，事件正式升級',
        '後續必須進行通報、紀錄與團隊檢討',
      ],
      criticalActions: [
        '完成通報與事件紀錄',
        '確認有無病人、同仁或家屬受驚嚇或受傷',
        '檢討是否有更早的介入時機',
      ],
      teachingPoints: [
        '不是所有事件都能被完全降回平靜，但仍可把傷害壓到最低',
        '當情勢進入危機期，重點是阻止更糟的後果',
      ],
    },
    {
      id: 'O4',
      title: '不良後果：衝突失控並伴隨照護風險',
      severity: 'adverse',
      label: '不良後果',
      narrative:
        '因為持續的否定、威脅或不作為，女兒最終衝進護理站邊界或與人發生推擠，現場一度混亂。更嚴重的是，阿嬤在過程中沒有被及時評估，出現近乎昏厥或其他不適。這已不是單純「家屬情緒不好」，而是錯誤處置導致的複合性不良後果。',
      consequences: [
        '言語衝突演變成實質的肢體風險或推擠',
        '阿嬤因延誤評估而承受額外醫療風險',
        '候診區其他病人與同仁也暴露在危害之中',
      ],
      criticalActions: [
        '立即啟動安全事件與醫療事件通報',
        '確認阿嬤、同仁與其他病人是否受傷',
        '進行完整 debrief 與流程檢討',
      ],
      teachingPoints: [
        '錯誤話術真正危險的地方，不只是不好聽，而是會把風險一步步推高',
        '在門診暴力情境中，被忽略的脆弱病人常常是最終最大受害者',
      ],
    },
  ],
  debriefGuide: [
    '回顧：你在哪一個節點最早看見情勢可能分叉？當時有哪些行為指標？',
    '分析：哪些選擇讓情勢降溫？哪些選擇其實是在把風險往後推？',
    '反思：當你被指責、被拍桌或被公開挑戰時，自己最容易出現哪一種反應？',
    '連結：在你單位的真實流程裡，護理長、同事、保全分別應在何時介入？',
    '行動：下次遇到類似情境，你要先守住哪三件事：情緒、安全、還是流程？順序為何？',
  ],
}

export default S01
