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
}

export interface Stage {
  id: string
  title: string
  narrative: string
  behavioralIndicators: string[]
  decisions: Decision[]
  criticalActions?: string[]
  teachingPoints?: string[]
}

export interface Scenario {
  id: string
  title: string
  subtitle: string
  setting: string
  patient: string
  color: string
  colorLight: string
  skills: string[]
  stages: Stage[]
  debriefGuide: string[]
}

// Decision tree
export interface TreeNode {
  id: string
  label: string
  description?: string
  action?: string
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
