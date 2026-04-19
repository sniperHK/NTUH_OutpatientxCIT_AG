import type { Scenario } from '../types'

const S04: Scenario = {
  id: 'S04',
  title: '精神狀態異常',
  subtitle: '候診區病人行為異常，疑似精神危機',
  setting: '上午門診候診區，約 15 名候診病人。',
  patient:
    '40 歲男性，獨自一人，衣著凌亂，坐在角落自言自語，偶爾對空揮手。旁邊病人開始感到不安。',
  color: '#8E44AD',
  colorLight: '#E8DAEF',
  skills: ['六感評估', 'CABD 初評', '居安思危', '團隊支援'],
  rootStageId: 'T0',
  stages: [
    {
      id: 'T0',
      title: '初步觀察',
      statusLabel: '接觸前評估期',
      tensionLevel: 2,
      narrative:
        '你在巡視候診區時注意到角落的男性病人。他衣著凌亂，坐在椅子上不斷喃喃自語，偶爾對空揮手，時而起身在座位旁踱步，隨即又坐下。周圍候診病人明顯保持距離，有人不安地向護理站張望。',
      behavioralIndicators: [
        '自言自語',
        '對空揮手',
        '衣著凌亂',
        '不與他人互動',
        '時而起身踱步',
      ],
      decisions: [
        {
          id: 'T0-A',
          text: '先從遠處觀察，進行「眼耳鼻舌身意」六感評估：逐項檢視眼（瞪視）、耳（喃喃自語）、鼻（焦躁）、舌（音調）、身（姿態）、意（暴力意圖／歷史）六個指標',
          feedback:
            '正確！在接觸前先從安全距離進行「眼耳鼻舌身意」六感評估，是系統化風險辨識的第一步。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T1A',
          consequence: '你從安全距離觀察，六項中 5 項異常，屬於高風險等級。',
          teachingPoint:
            '「眼耳鼻舌身意」六感評估應在安全距離下進行。六項指標分別是：眼（Staring 瞪視）、耳（幻聽／喃喃自語）、鼻（焦躁／呼吸加快）、舌（音調與音量）、身（身體姿態如踱步、握拳）、意（暴力意圖或歷史）。先觀察再行動，是「居安思危」的第一步。',
        },
        {
          id: 'T0-B',
          text: '立刻走過去詢問「你還好嗎？」',
          feedback:
            '在未評估風險的情況下貿然接近，可能驚嚇到正處於妄想或幻覺狀態的病人。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '病人被驚嚇後大聲喝斥並站起身，候診區氣氛緊繃。',
          teachingPoint:
            '面對疑似精神危機的個案，「接觸前評估」是必要步驟。未經評估就接近，等於在不了解風險的情況下暴露自己。',
        },
        {
          id: 'T0-C',
          text: '通知駐警把他帶走',
          feedback:
            '目前病人並未出現攻擊行為或明確的安全威脅，直接叫駐警是過度反應。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T1B',
          consequence: '駐警接近時病人激動反抗：「你們憑什麼！」現場陷入混亂。',
          teachingPoint:
            '駐警介入應保留在評估後確認有安全威脅的情境。精神狀態異常不等於暴力，需先進行系統化評估。',
        },
        {
          id: 'T0-D',
          text: '忽略，繼續手邊工作',
          feedback:
            '忽略明顯的行為異常可能導致情況惡化，且未盡到照護責任。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T1B',
          consequence: '15 分鐘後病人突然對著候診區其他病人大吼，現場驚慌。',
          teachingPoint:
            '門診護理師有責任維持候診環境的安全。當觀察到異常行為時，至少應進行風險評估，而非放任不管。',
        },
      ],
      criticalActions: [
        '從安全距離觀察，不貿然接近',
        '逐項進行「眼耳鼻舌身意」六感指標評估',
        '同時注意周圍候診病人的安全',
      ],
      teachingPoints: [
        '「眼耳鼻舌身意」六感評估是接觸前的暴力風險篩檢工具',
        '觀察行為異常不等於判斷「有暴力傾向」，需系統化評估',
        '居安思危：先確保自身安全，再進行評估',
      ],
    },
    {
      id: 'T1A',
      title: '啟動 CABD 初評',
      statusLabel: '高風險，需團隊支援介入',
      tensionLevel: 3,
      narrative:
        '六感評估 6 項中 5 項異常（眼空洞/耳自語/鼻焦躁/舌不連貫/身踱步，意暫未確認）。依流程應立即啟動「叫叫 CABD」：叫團隊、叫周邊，再進行 CAB 接觸評估。',
      behavioralIndicators: [
        '六感評估 5/6 異常',
        '對周圍環境反應遲鈍',
        '未持有明顯武器',
      ],
      decisions: [
        {
          id: 'T1A-A',
          text: '保持安全距離，先通知同仁待命（叫團隊）、引導周邊候診病人稍遠（叫周邊），再嘗試以簡短語句進行接觸評估。',
          feedback: '正確！「居安思危 + 不單獨行動」的標準流程。',
          isCorrect: true,
          impact: 'de-escalate',
          nextStageId: 'T2A',
          consequence: '同仁就位、周邊病人退開，你從 2 公尺距離平穩開口。',
          teachingPoint:
            '「叫叫 CABD」的叫：先叫團隊（同仁待命）、再叫周邊（管控現場）。接著進行 CAB 三面向（認知/情緒/行為）評估。單打獨鬥是最危險的處置方式。',
        },
        {
          id: 'T1A-B',
          text: '直接坐到他旁邊開始對話',
          feedback: '在六感評估幾乎全異常情況下，失去安全距離與逃生空間，極高風險。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人突然站起、手往你肩膀推：「你們都是一夥的！」',
          teachingPoint:
            '安全距離（至少 1-2 公尺）是面對高風險個案的基本原則。坐到旁邊等於放棄了反應時間與退路。',
        },
        {
          id: 'T1A-C',
          text: '大聲叫他的名字確認意識',
          feedback: '突然的大聲刺激可能驚嚇處於精神危機狀態的病人。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人被驚嚇後向聲音方向揮手，打落旁邊病人的物品，現場失序。',
          teachingPoint:
            '接觸精神狀態異常的個案時，應使用平穩、緩慢、音量適中的語調。避免突然的大聲呼喊或快速動作。',
        },
        {
          id: 'T1A-D',
          text: '立即啟動約束流程',
          feedback: '病人目前並無攻擊行為，約束是最後手段，不應在未嘗試溝通前使用。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '多人壓制過程中病人受驚嚇強烈反抗，雙方都有人受傷，引起投訴。',
          teachingPoint:
            '約束是侵入性最高的處置，僅在病人有立即危害自己或他人的行為、且其他方法均無效時才可使用。門診場域更應優先使用降階溝通。',
        },
      ],
      criticalActions: [
        '通知鄰近同仁提高警覺並待命',
        '引導周圍候診病人稍微遠離',
        '確認自己的退路與逃生動線',
      ],
      teachingPoints: [
        '「眼耳鼻舌身意」六感 ≥2 項異常即應啟動 CABD 初評',
        '六感評估 4 項以上異常屬高風險，需完整「叫叫 CABD」流程',
        '「叫」的順序：先叫團隊、再叫周邊，確保不單獨面對',
      ],
    },
    {
      id: 'T1B',
      title: '貿然接觸後，病人受驚',
      statusLabel: '情勢惡化，仍可挽回',
      tensionLevel: 4,
      narrative:
        '因為你直接走近或大聲喝斥，病人被驚擾後站起：「你不要過來！他們派你來監視我！」語氣帶有恐懼與敵意，手不斷揮動。其他候診病人驚慌。',
      behavioralIndicators: [
        '妄想內容浮現（「他們派你」）',
        '手部揮動、姿態防衛',
        '聲音提高但未實際攻擊',
        '周邊病人恐慌',
      ],
      decisions: [
        {
          id: 'T1B-A',
          text: '立刻後退 2 公尺、雙手自然下垂、放慢語速：「先生，我是這裡的護理師，我不會靠近你。你先坐，我請同事一起過來。」同時按下對講機求援並引導周邊病人離開。',
          feedback: '正確。補做「叫叫 CABD」：拉開距離 + 平穩語調 + 啟動團隊 + 疏散周邊。',
          isCorrect: true,
          impact: 'support',
          nextStageId: 'T2A',
          consequence: '病人警戒但未前進，同仁陸續到場，你重新進入安全狀態。',
          teachingPoint:
            '錯誤的第一步並不等於全盤失敗。及時補做「拉距離 + 叫團隊 + 慢語調」三個動作，多數情境仍可重回評估階段。',
        },
        {
          id: 'T1B-B',
          text: '站在原地試圖安撫：「沒有人派我來，你不要誤會。」',
          feedback: '錯誤。正面否定妄想會被解讀為「你就是那夥人」。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人逼近：「你是不是跟他們串通！」情勢衝上危機期。',
          teachingPoint:
            '面對妄想型個案不要正面否定。承認「感受」（「聽起來你很不安」），不評論「想法」的真假。',
        },
        {
          id: 'T1B-C',
          text: '立刻叫駐警上前制止。',
          feedback: '錯誤。病人被駭後見到駐警會把「被害妄想」確認為真。',
          isCorrect: false,
          impact: 'danger',
          nextStageId: 'T3B',
          consequence: '病人大叫：「我就知道你們要害我！」揮手撥打靠近的駐警。',
          teachingPoint:
            '駐警介入的時機要審慎。在精神危機個案面前突然出現制服，常會觸發更嚴重反應。',
        },
      ],
      criticalActions: [
        '拉開距離',
        '放慢與降低音量',
        '啟動團隊支援',
        '疏散周邊',
      ],
      teachingPoints: [
        '錯誤第一步仍可補救，關鍵是意識到並立刻修正',
        '妄想型個案：不否定、不附和、承認感受',
      ],
    },
    {
      id: 'T2A',
      title: 'CAB 接觸評估',
      statusLabel: '評估中，需持續控場',
      tensionLevel: 3,
      narrative:
        '同仁在旁待命，你保持 2 公尺距離以平穩語調：「先生，我是這裡的護理師，請問您今天來看哪一科？」病人抬頭回應，但不連貫：「他們一直在監視我……到處都有攝影機……」語氣帶恐懼而非敵意。CAB 初評：C = 被害妄想；A = 恐懼焦慮；B = 躁動但無攻擊。',
      behavioralIndicators: [
        '對呼喚有反應但內容不連貫',
        '表達被害妄想（「他們在監視我」）',
        '情緒以恐懼為主',
        '無攻擊性行為但持續躁動',
      ],
      decisions: [
        {
          id: 'T2A-A',
          text: '維持安全距離、用簡短語句承認感受：「聽起來你最近很不安，我會請一位醫師來跟你談。」同時請同仁聯繫精神科會診。',
          feedback: '正確！CAB 評估結果（妄想 + 無攻擊）→ 精神科會診路徑。',
          isCorrect: true,
          impact: 'de-escalate',
          outcomeId: 'O1',
          consequence: '精神科醫師到場完成評估，病人配合轉到精神科處理。',
          teachingPoint:
            'CABD 的 D（Decide and Defuse）：根據 CAB 評估結果決定策略。認知異常 + 無攻擊 → 維持安全接觸 + 精神科會診。不要糾正妄想內容，也不用附和。',
        },
        {
          id: 'T2A-B',
          text: '嘗試說服他「沒有人在監視你，這裡是醫院，很安全的」',
          feedback: '錯誤。直接否定妄想會破壞信任並可能激發攻擊。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '病人表情變得警戒：「你也是他們派的……」往後退並尋找出口。',
          teachingPoint:
            '承認「感受」（聽起來你很不安），不評論「想法」的真假。',
        },
        {
          id: 'T2A-C',
          text: '給他一杯水讓他冷靜',
          feedback: '錯誤。遞物品需靠近對方、進入攻擊範圍。',
          isCorrect: false,
          impact: 'escalate',
          nextStageId: 'T2B',
          consequence: '病人看你伸手過來後反射性揮開水杯，場面騷動。',
          teachingPoint:
            '在未確認安全的情況下，遞送物品會縮短安全距離。若要提供，可放在對方可及之處再退開。',
        },
        {
          id: 'T2A-D',
          text: '請駐警強制帶離候診區',
          feedback: '錯誤。無攻擊行為，強制帶離可能引發激烈反抗。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O3',
          consequence: '駐警制服出現觸發妄想，病人強烈反抗、需多人壓制，事件成為正式通報。',
          teachingPoint:
            '強制帶離是安全威脅確認後的最後手段。CAB 評估顯示「無攻擊」→ 應走精神科會診路徑。',
        },
      ],
      criticalActions: [
        '持續維持安全距離與退路',
        '請同仁聯繫精神科會診',
        '持續監測病人行為變化',
      ],
      teachingPoints: [
        'CAB 三面向評估可在 1-2 分鐘內完成，不需精準診斷，只需判斷風險',
        '妄想型個案：不否定、不附和、承認感受',
        '「無攻擊」= 精神科會診；「有攻擊」= 駐警介入',
      ],
    },
    {
      id: 'T2B',
      title: '信任破裂',
      statusLabel: '妄想被觸發，需重新評估',
      tensionLevel: 4,
      narrative:
        '你的話被病人解讀為敵意，他退到角落，雙手抱頭：「你們都是一夥的……離我遠一點！」雖然還沒攻擊，但已進入防衛姿態。',
      behavioralIndicators: [
        '退到角落',
        '雙手抱頭、防衛姿態',
        '妄想內容擴大（「你們都是一夥」）',
        '暫無攻擊但張力極高',
      ],
      decisions: [
        {
          id: 'T2B-A',
          text: '停止說話、退到 3 公尺外，請最熟悉病人的同仁（或門診醫師）代為開口，同時請精神科會診與值班社工到場。',
          feedback: '正確。當一個人已被標記為「威脅」，換人接手是最有效的降階。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O2',
          consequence: '更換接觸者後，病人逐漸配合，精神科介入完成處置。',
          teachingPoint:
            '當你成為妄想的對象，最專業的做法是「讓位」。不是失敗，是辨識到這次需要別的人來接手。',
        },
        {
          id: 'T2B-B',
          text: '繼續解釋：「我真的是護理師，你看我的識別證……」',
          feedback: '錯誤。解釋只會被解讀為「更深的偽裝」。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '病人更激動，揮手打翻旁邊置物架，事件升級為通報案件。',
          teachingPoint:
            '與妄想講理等於沒講。退一步換人，讓新面孔帶來新可能。',
        },
        {
          id: 'T2B-C',
          text: '直接呼叫駐警。',
          feedback: '部分情境有效，但在尚無攻擊時可能過激。',
          isCorrect: false,
          impact: 'escalate',
          outcomeId: 'O3',
          consequence: '駐警到場後病人強烈反抗，雖然壓制成功但造成擦傷，事件正式通報。',
          teachingPoint:
            '駐警是最後一線，不是降階工具。先嘗試換人與精神科支援。',
        },
      ],
      criticalActions: [
        '辨識自己已成為妄想對象',
        '退讓、換人接手',
        '同時呼叫精神科與社工',
      ],
      teachingPoints: [
        '專業不是堅持要自己處理到底',
        '換人不是丟鍋，是降低對方壓力',
      ],
    },
    {
      id: 'T3B',
      title: '危機期，即將或已有攻擊',
      statusLabel: '危機期，極高風險',
      tensionLevel: 5,
      narrative:
        '病人已失控，出現揮拳、推擠、或攻擊周邊物品的行為。現場病人驚慌、有人尖叫。',
      behavioralIndicators: [
        '明確攻擊行為（揮拳/推擠/砸物）',
        '失去對話能力',
        '周邊病人面臨實質風險',
      ],
      decisions: [
        {
          id: 'T3B-A',
          text: '立即疏散周邊病人到安全區、同仁形成「人牆但保持距離」限制病人擴大移動範圍、按下緊急鈕呼叫駐警與精神科值班，必要時準備約束。',
          feedback: '正確。危機期進入安全管理模式：疏散 + 限制 + 專業支援同步進行。',
          isCorrect: true,
          impact: 'support',
          outcomeId: 'O3',
          consequence: '駐警與精神科到場，病人被安全約束並送精神科急診，沒有人員重傷。',
          teachingPoint:
            '危機期的目標是：把傷害壓到最低。疏散優先，限制範圍次之，物理約束是最後手段。單人英雄主義此時極其危險。',
        },
        {
          id: 'T3B-B',
          text: '自己上前壓制。',
          feedback: '錯誤。單人壓制精神危機個案極易受傷。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '壓制過程中你被揮拳擊中頭部，病人也在掙扎中受傷，事件嚴重化。',
          teachingPoint:
            '即使是約束，也必須多人協作（通常 ≥ 4 人）。單人壓制不是勇敢，是增加傷害。',
        },
        {
          id: 'T3B-C',
          text: '僵在原地不動。',
          feedback: '錯誤。周邊病人需要你的疏散指令。',
          isCorrect: false,
          impact: 'danger',
          outcomeId: 'O4',
          consequence: '附近年長病人來不及閃避被推倒，造成骨折。',
          teachingPoint:
            '危機期最大的錯誤之一是僵住。即使無法靠近激動者，疏散周邊永遠可以做。',
        },
      ],
      criticalActions: [
        '疏散周邊病人',
        '多人協作、不單人壓制',
        '駐警 + 精神科值班同步啟動',
      ],
      teachingPoints: [
        '危機期語言失效，只剩安全管理',
        '即使無法降階激動者，仍要保護其他人',
      ],
    },
  ],
  outcomes: [
    {
      id: 'O1',
      title: '精神科會診平穩轉介',
      severity: 'safe',
      label: '成功轉介',
      narrative:
        '你完成六感評估與 CAB 初評後，啟動叫叫 CABD、維持安全距離並請精神科會診。病人在平穩接觸下配合轉介，未發生衝突。其他候診病人未被驚擾。',
      consequences: [
        '病人獲得專業精神科評估與處置',
        '候診區秩序維持',
        '事件留下完整評估紀錄',
      ],
      criticalActions: [
        '完成照護紀錄（含六感 + CAB 評估結果）',
        '與精神科交接完整資訊',
        '團隊 debrief：評估與分工是否順暢',
      ],
      teachingPoints: [
        '「眼耳鼻舌身意 → 叫叫 CABD → 精神科會診」是門診精神危機的標準路徑',
        '專業判斷的核心是：不貿然、不忽略、不越權',
      ],
    },
    {
      id: 'O2',
      title: '換人接手後完成處置',
      severity: 'support',
      label: '換人成功',
      narrative:
        '當你發現自己成為妄想對象後，立刻退讓、由其他同仁或醫師接手。新面孔降低了病人的威脅感，精神科與社工到場後完成處置。你需要團隊支持與事後 debrief。',
      consequences: [
        '沒有發生肢體衝突',
        '病人獲得適切轉介',
        '護理師學到換人接手的判斷',
      ],
      criticalActions: [
        '完成事件紀錄',
        '安排護理師本人情緒支持',
        '團隊討論換人接手的時機判準',
      ],
      teachingPoints: [
        '被病人標記為威脅對象時，換人是最專業的選擇',
        '個人降階不下來，不等於團隊降階不下來',
      ],
    },
    {
      id: 'O3',
      title: '安全事件，需正式通報',
      severity: 'incident',
      label: '安全事件',
      narrative:
        '事件升級為需駐警介入或約束的安全案件。可能過程中有物品損壞、候診病人受驚嚇、或輕微擦傷。沒有嚴重傷害，但已構成正式暴力通報。',
      consequences: [
        '事件正式列為暴力通報',
        '可能有物品損壞或輕微擦傷',
        '候診區秩序中斷',
      ],
      criticalActions: [
        '完成暴力事件通報',
        '確認旁觀病人情緒',
        '檢討是否有更早的介入時機（如更早啟動 CABD）',
      ],
      teachingPoints: [
        '不是所有事件都能被完全降回平靜',
        '進入危機期時，重點是阻止更糟的後果',
      ],
    },
    {
      id: 'O4',
      title: '不良後果：人員傷害事件',
      severity: 'adverse',
      label: '不良後果',
      narrative:
        '因為單人壓制、僵住、或錯誤介入，造成實質人員傷害：護理師被擊中、旁邊病人被推倒、或病人於掙扎中受傷。事件進入警方/醫療與投訴程序。',
      consequences: [
        '人員受傷（同仁/病人/旁人）',
        '事件進入警方與內部調查',
        '團隊心理壓力大',
      ],
      criticalActions: [
        '立即就醫與警方協助',
        '提供受傷同仁心理支持與休假',
        '啟動流程全面檢討',
      ],
      teachingPoints: [
        '精神危機情境下，單人英雄主義會造成更大傷害',
        '疏散周邊永遠是「無論如何都可以做」的動作',
      ],
    },
  ],
  debriefGuide: [
    '回顧：「眼耳鼻舌身意」六項指標在這位病人身上分別觀察到什麼？從六感評估到 CABD 的銜接時機是什麼？',
    '分析：CAB 三面向評估（認知、情緒、行為）的結果各是什麼？這些結果如何影響你的處置決策？',
    '反思：面對精神狀態異常的個案，如何在「不激發對方」的前提下進行評估？哪些言行應該避免？',
    '判斷：在什麼情況下應該聯繫精神科會診？什麼情況下應該直接聯繫駐警或報警？兩者的判斷依據有何不同？',
    '環境：在處理這位病人的同時，如何兼顧其他候診病人的安全與感受？團隊分工該如何安排？',
  ],
}

export default S04
