# CIT 門診暴力教學網站 — 設計規格

> Date: 2026-04-16
> Status: Approved
> Reference project: `2026北市EMTP複訓_AG專案`

## Context

台大醫院護理部 115 年 CIT 工作坊（簽文 1151900387）需要一個教學網站，讓 50 名門診同仁可在課前自學、課中參照、課後複習。架構完整複製 EMTP 參考專案（React + Vite + Tailwind + shadcn/ui），內容從現有 CIT 教材重新撰寫為門診版 markdown。

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Routing | React Router DOM 7 |
| Markdown | react-markdown + remark-gfm + rehype-raw |
| Diagrams | Mermaid |
| Slides | Slidev |
| Backend | Supabase (quiz results, message board) |
| Deployment | GitHub Pages (static SPA) |

## Project Structure

```
web/
├── src/
│   ├── pages/          # HomePage, ContentPage, ScenarioPage, QuizPage, ToolPage, SlidesPage, HandoutPage, MessageBoardPage, RoadmapPage
│   ├── components/
│   │   ├── layout/     # Header, Sidebar, Layout
│   │   ├── scenario/   # ScenarioPlayer, NarrativePanel, ActionSelector, FeedbackPanel, StageProgress
│   │   ├── quiz/       # QuizPlayer
│   │   ├── tools/      # EscalationTree, StopListenEmpathizeChoose, ViolenceCurveIntervention
│   │   ├── markdown/   # MermaidBlock
│   │   └── ui/         # shadcn primitives
│   ├── data/
│   │   ├── siteMeta.ts
│   │   ├── scenarios/  # S01.ts, S02.ts, S03.ts
│   │   ├── trees/      # escalation.ts, slec-defuse.ts, violence-curve.ts
│   │   └── questions.ts
│   ├── hooks/
│   ├── lib/
│   └── index.css
├── slides/             # M01.md, M04.md (Slidev)
├── public/
│   └── slides/         # Built Slidev HTML
├── vite.config.ts
├── package.json
└── tsconfig.json

docs/
└── modules/
    ├── M01_violence-curve.md
    ├── M02_agitation-emergency.md
    ├── M03_environmental-awareness.md
    ├── M04_verbal-deescalation.md
    ├── M05_team-collaboration.md
    └── M06_reporting-regulations.md
```

## Modules (6)

| ID | Title | Color | Source Material |
|----|-------|-------|----------------|
| M01 | 暴力曲線與風險辨識 | #2980B9 (blue) | Ｂ認識暴力曲線.pdf, STAMP |
| M02 | Agitation 急性處置 | #8E44AD (purple) | 精神危機狀態處置.pptx |
| M03 | 環境察覺與自我調控 | #E67E22 (orange) | Ａ接觸前評估.pdf |
| M04 | 言語降階與 DEFUSE | #C0392B (red) | Ｃ降階技巧.pdf |
| M05 | 團隊合作與安全處置 | #1E8449 (green) | 團隊CIT protocol.pptx, 門診SOP |
| M06 | 通報升級與法規 | #2C3E50 (dark) | CIT相關法規, 門診滋擾流程 |

Each module is a markdown file rendered via react-markdown with:
- Styled tables (light header with color accent)
- Alert boxes (info/warning/danger)
- Mermaid diagrams
- Key concept callouts

## Scenarios (3)

Interactive branching clinical scenarios, each with multiple stages:

### S01: 等候過久
- Setting: 上午門診候診區
- Patient: 70 歲阿嬤（輪椅）+ 女兒陪同，等候 1.5 小時
- Stages: T0 初始接觸 → T1 情緒升溫 → T2 拍桌/音量提高 → T3 降階成功或升級
- Skills: 停聽同選 + DEFUSE
- Decision points: 回應話術選擇、是否呼叫支援、選項提供

### S02: 自費藥品爭議
- Setting: 門診繳費櫃台
- Patient: 中年男性，質疑自費藥品收費
- Stages: T0 詢問 → T1 質疑升高 → T2 指責護理師 → T3 處理結果
- Skills: 同理溝通 + 升級判斷
- Decision points: 溝通方式、是否請主管協助、通報時機

### S03: 診間逼近
- Setting: 單門診間
- Patient: 男性病人逐步逼近護理師
- Stages: T0 言語激動 → T1 站起逼近 → T2 阻擋出口 → T3 脫離/支援
- Skills: 安全站位 + 團隊呼叫
- Decision points: 站位選擇、何時按緊急鈴、如何保持出口暢通

Each scenario stage includes:
- Narrative text describing the situation
- Behavioral indicators (observable patient actions)
- 2-4 multiple-choice decision options with feedback
- Teaching points
- Critical actions checklist

## Decision Trees (3)

Interactive Mermaid-based decision tools:

### 暴力升級通報決策樹
- Root: 觀察到異常行為
- Branches: 言語不滿 → 言語威脅 → 持物揮舞 → 肢體攻擊
- Leaf actions: 同理溝通 / 通知 leader / 聯繫駐警 / 報警 110
- Color: navy (#1B2A4A)

### 停聽同選 ↔ DEFUSE 對照流程
- Dual-track flow showing both frameworks side by side
- Interactive: click each step to see detail, example phrases, dos/don'ts
- Color: red (#C0392B)

### 暴力曲線介入時機
- 5-stage timeline (誘發 → 升溫 → 危機 → 降溫 → 危機後)
- Each stage: recommended actions, warning signs, escalation criteria
- Color: teal (#16A085)

## Quiz System

Based on existing `門診暴力事件考題.docx`, expanded:

- **Pre-test**: 10 questions (5 single-choice + 2 scenario-based + 3 self-efficacy)
- **Post-test**: 20 questions (expanded coverage of all 6 modules)
- **Full bank**: ~30 questions for practice
- Question types: single-choice, scenario-based with multiple parts
- Scoring with immediate feedback
- Results stored via Supabase (prod) or local JSON (dev)

## Routes

```
/                      → HomePage (module cards, scenarios, tools, quizzes)
/content/:moduleId     → ContentPage (M01–M06 markdown)
/scenario/:id          → ScenarioPage (S01–S03)
/tools/:toolId         → ToolPage (decision trees)
/quiz                  → QuizPage (pre/post/full selector)
/quiz/:type            → QuizPage with type filter
/slides/:slideId       → SlidesPage (Slidev iframe)
/handout               → HandoutPage (student reference PDF)
/messages              → MessageBoardPage
/roadmap               → RoadmapPage (learning path)
```

## Visual Design

- **Color palette**: Light background, colored accents per module (matching sitemap-v2.html)
- **Typography**: Inter + PingFang TC + Noto Sans TC
- **Layout**: Collapsible sidebar + header + max-width content container
- **Module cards**: Light colored badges, hover shadow effect
- **Tables**: Light colored headers (not dark), subtle row striping

## Learning Path

```
課前自學 M01–M04 → 前測 (4/7 or 4/9) → 4/20 課堂 → 課後情境+決策樹 → 後測 (6/4 or 6/11)
```

## Deployment

- GitHub Pages via GitHub Actions
- Repo name: `CIT-clinic-violence-workshop` (private)
- Base path: `/CIT-clinic-violence-workshop/`
- SPA fallback via 404.html

## Out of Scope (for now)

- Teacher dashboard (defer to later)
- Docker/Express backend (use Supabase only)
- Annotation layer
- PowerCam recording integration
