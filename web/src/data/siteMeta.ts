import type { ModuleMeta, ToolMeta } from './types'

export const modules: ModuleMeta[] = [
  {
    id: 'M01',
    title: '暴力曲線與風險辨識',
    subtitle: 'Violence Curve & Risk Assessment',
    color: '#2980B9',
    colorLight: '#D6EAF8',
    instructor: '林皓陽',
    timeSlot: '08:10–08:30',
    sourceFiles: ['Ｂ認識暴力曲線.pdf', 'STAMP'],
  },
  {
    id: 'M02',
    title: 'Agitation 急性處置',
    subtitle: '叫叫 CABD — 初評與次評',
    color: '#8E44AD',
    colorLight: '#E8DAEF',
    instructor: '林皓陽',
    timeSlot: '08:30–08:50',
    sourceFiles: ['精神危機狀態處置.pptx'],
  },
  {
    id: 'M03',
    title: '環境察覺與自我調控',
    subtitle: 'Environmental Awareness & Self-Regulation',
    color: '#E67E22',
    colorLight: '#FDEBD0',
    instructor: '林皓陽',
    timeSlot: '08:50–09:00',
    sourceFiles: ['Ａ接觸前評估.pdf'],
  },
  {
    id: 'M04',
    title: '言語降階與 DEFUSE 框架',
    subtitle: 'Verbal De-escalation & DEFUSE Framework',
    color: '#C0392B',
    colorLight: '#FADBD8',
    instructor: '林皓陽',
    timeSlot: '09:10–10:10',
    sourceFiles: ['Ｃ降階技巧.pdf', '精神危機之降階原則.pdf'],
  },
  {
    id: 'M05',
    title: '團隊合作與安全處置',
    subtitle: 'Team Collaboration & Safety Management',
    color: '#1E8449',
    colorLight: '#D5F5E3',
    instructor: '劉政亨',
    timeSlot: '10:20–11:20',
    sourceFiles: ['團隊CIT protocol.pptx', '門診SOP'],
  },
  {
    id: 'M06',
    title: '通報升級與法規',
    subtitle: 'Escalation Reporting & Regulations',
    color: '#2C3E50',
    colorLight: '#D6DBDF',
    instructor: '劉政亨',
    timeSlot: '10:20–11:20',
    sourceFiles: ['CIT相關法規', '門診滋擾流程'],
  },
  {
    id: 'M07',
    title: '門診現場應變實務',
    subtitle: 'Field Response — 整合前測演練發現',
    color: '#34495E',
    colorLight: '#D5D8DC',
    instructor: '劉政亨 + 林皓陽',
    timeSlot: '綜合補充',
    sourceFiles: ['20260407 前測會議記錄', '20260409 前測會議記錄'],
  },
]

export const tools: ToolMeta[] = [
  {
    id: 'escalation-tree',
    title: '暴力升級通報決策樹',
    subtitle: '從觀察異常行為到啟動通報的分級流程',
    color: '#1B2A4A',
    colorLight: '#D6DBDF',
  },
  {
    id: 'slec-defuse',
    title: '停聽同選 ↔ DEFUSE',
    subtitle: '兩套去激化框架的對照互動流程',
    color: '#C0392B',
    colorLight: '#FADBD8',
  },
  {
    id: 'violence-curve',
    title: '暴力曲線介入時機',
    subtitle: '5 階段各階段的建議動作與升級條件',
    color: '#16A085',
    colorLight: '#D1F2EB',
  },
]

export const scenarioMetas = [
  {
    id: 'S01',
    title: '等候過久',
    subtitle: '女兒陪阿嬤等候 1.5 小時',
    color: '#C0392B',
    colorLight: '#FADBD8',
  },
  {
    id: 'S02',
    title: '自費藥品爭議',
    subtitle: '病人質疑收費不合理',
    color: '#E67E22',
    colorLight: '#FDEBD0',
  },
  {
    id: 'S03',
    title: '診間逼近',
    subtitle: '單門診間病人逼近護理師',
    color: '#8E44AD',
    colorLight: '#E8DAEF',
  },
  {
    id: 'S04',
    title: '精神狀態異常',
    subtitle: '候診區病人行為異常，疑似精神危機',
    color: '#8E44AD',
    colorLight: '#E8DAEF',
  },
]

export const slideOrder = ['S-M01', 'S-M03', 'S-M04', 'S-M05'] as const
export type SlideId = (typeof slideOrder)[number]

export const slideMeta: Record<SlideId, { title: string; desc: string; color: string; colorLight: string; instructor: string }> = {
  'S-M01': { title: '暴力曲線與風險辨識', desc: 'M01 + M02 — STAMP, CABD, 暴力曲線五階段', color: '#2980B9', colorLight: '#D6EAF8', instructor: '林皓陽' },
  'S-M03': { title: '環境察覺與自我調控', desc: 'M03 — 安全站位、環境掃描、Box Breathing', color: '#E67E22', colorLight: '#FDEBD0', instructor: '林皓陽' },
  'S-M04': { title: '言語降階與 DEFUSE', desc: 'M04 — DEFUSE 六步驟、停聽同選、話術演練', color: '#C0392B', colorLight: '#FADBD8', instructor: '林皓陽' },
  'S-M05': { title: '團隊合作與通報升級', desc: 'M05 + M06 — 三角色、通報決策樹、案例 Debrief', color: '#1E8449', colorLight: '#D5F5E3', instructor: '劉政亨' },
}

export const courseInfo = {
  title: 'CIT 門診暴力去激化工作坊',
  subtitle: '115 年臺大醫院護理部',
  courseCode: '202157',
  date: '115 年 4 月 20 日（一）08:00–12:00',
  location: '西址第七講堂',
  instructors: ['劉政亨醫師', '林皓陽醫師'],
}
