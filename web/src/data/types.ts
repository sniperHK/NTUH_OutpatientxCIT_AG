// Module metadata
export interface ModuleMeta {
  id: string
  title: string
  subtitle: string
  color: string
  colorLight: string
  instructor: string
  timeSlot: string
  sourceFiles: string[]
}

// Scenario system
export interface Vitals {
  hr?: string
  bp?: string
  rr?: string
  spo2?: string
  gcs?: string
}

export interface Decision {
  id: string
  text: string
  feedback: string
  isCorrect: boolean
  teachingPoint?: string
  nextStageId?: string
  outcomeId?: string
  impact?: 'de-escalate' | 'stabilize' | 'support' | 'escalate' | 'danger'
  consequence?: string
}

export interface Stage {
  id: string
  title: string
  narrative: string
  behavioralIndicators: string[]
  decisions: Decision[]
  criticalActions?: string[]
  teachingPoints?: string[]
  tensionLevel?: 1 | 2 | 3 | 4 | 5
  statusLabel?: string
}

export interface ScenarioOutcome {
  id: string
  title: string
  severity: 'safe' | 'support' | 'incident' | 'adverse'
  label: string
  narrative: string
  consequences: string[]
  criticalActions?: string[]
  teachingPoints?: string[]
}

export type CrisisModality = 'LOR' | 'LOC' | 'LOH' | 'LOP'

export interface Scenario {
  id: string
  title: string
  subtitle: string
  setting: string
  patient: string
  color: string
  colorLight: string
  skills: string[]
  /** 精神危機四大樣態標籤（可複選，依據 M02 第二節） */
  modalities?: CrisisModality[]
  /** 教學重點說明此情境為何歸類於某樣態 */
  modalityNote?: string
  stages: Stage[]
  rootStageId?: string
  outcomes?: ScenarioOutcome[]
  debriefGuide: string[]
}

// Decision tree
export interface TreeNode {
  id: string
  label: string
  description?: string
  action?: string
  question?: string
  children?: TreeNode[]
}

export interface DecisionTree {
  id: string
  title: string
  subtitle: string
  color: string
  colorLight: string
  rootNode: TreeNode
  mermaidDiagram: string
}

// Quiz
export type QuestionType = 'single-choice' | 'scenario'

export interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface Question {
  id: string
  type: QuestionType
  category: 'pre' | 'post' | 'both'
  module: string
  stem: string
  scenarioContext?: string
  options: QuizOption[]
  explanation: string
}

// Tool metadata
export interface ToolMeta {
  id: string
  title: string
  subtitle: string
  color: string
  colorLight: string
}
