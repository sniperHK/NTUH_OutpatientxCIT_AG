# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@.shared-ai-context

## Project Overview

台大醫院門診暴力應對專案：將 CIT (Crisis Intervention Team) 去激化訓練從消防/警察領域轉譯為門診護理情境，設計工作坊課程、SOP、評核工具。

- **專案發起人**：雯霞（門診護理長）
- **顧問**：劉醫師（CH Liu）、林浩陽醫師（CIT 內容專家）
- **核心方法**：「停聽同選」四步驟去激化話術（源自 CIT 的 CAB 框架）

## Repository Structure

本專案為文件驅動的課程設計專案（非軟體開發），無 build system 或測試框架。

### Working Documents (root)

| File | Purpose |
|------|---------|
| `CIT門診暴力去激化工作坊設計.md` | 主課程設計文件（60 分鐘工作坊架構） |
| `TODO.md` | 三階段待辦事項（基礎建設 → 課程規劃 → 評估工具） |
| `醫院版CIT_納入素材盤點_014_CIT來源.md` | 素材審查與模組對應（8 核心模組 + 4 小時最小實施方案） |
| `前庭提要.md` | 專案起源對話記錄 |
| `0205門診會議記錄.md` | 2026-02-05 會議決議 |

### Reference Materials

- `北市EMTP_CIT相關文件/` — 台灣 CIT 原始教材庫（~31 GB），含 2022 公版教材、2023 更新教案、2024 心理司文件、參考影片、降階技巧影片
  - `TW-CIT 教材_2022/` — 官方課程（大堂課 PDF + 分組課 PDF + 情境演練劇本）
  - `消防署複訓_2022/` — 含可編輯 .pptx/.docx 原始檔
  - `2023新案/` — 暴力情境教案更新版
  - `001_2024心理司/` — 政府計畫文件
- `門診CIT工作坊文件/` — 院內文件（滋擾流程 SOP、暴力防範流程、演練評核表、考題、課程簽文）
- Root PDFs: 魚骨圖分析、暴力防範問卷、情境演練評核表

## Key Domain Concepts

- **CIT**: Crisis Intervention Team — 源自美國孟菲斯模式，台灣由消防/警察導入
- **停聽同選**: 門診版去激化四步驟（停下 → 傾聽 → 同理 → 提供選項）
- **STAMP / DEFUSE**: 暴力風險評估工具（見 `Ｂ認識暴力曲線.pptx`）
- **暴力曲線**: 患者激動程度的時間軸模型，用於判斷介入時機
- **SP (Standardized Patient)**: 標準化病人，用於演練評核

## Working Conventions

- 文件以繁體中文撰寫，專業術語保留英文（CIT、STAMP、DEFUSE、SP）
- 素材來源路徑指向 OneDrive：`~/Library/CloudStorage/OneDrive-個人/088_EMS緊急救護/014_CIT`
- `北市EMTP_CIT相關文件/` 中部分檔案為 0-byte placeholder，原始檔在 OneDrive
- 課程設計採「先射箭再畫靶」策略：SOP 邊演練邊修正，非一次定稿
