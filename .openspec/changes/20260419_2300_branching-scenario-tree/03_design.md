# Design

## Data Model

- Extend `Decision` with optional `nextStageId`, `outcomeId`, `impact`, `consequence`.
- Extend `Stage` with optional `tensionLevel`, `statusLabel`.
- Extend `Scenario` with optional `rootStageId` and `outcomes`.
- Treat a scenario as branching when `rootStageId` or `outcomes` is present; otherwise keep linear behavior.

## Player Behavior

- Resolve the active stage by `currentStageId` instead of fixed array index.
- On selection:
  - show feedback immediately
  - store the selected decision in history
- On advance:
  - `outcomeId` → ending screen
  - `nextStageId` → jump to the referenced stage
  - fallback to next array item for legacy linear scenarios

## UI

- Replace fake linear-only progress for branching scenarios with:
  - path breadcrumb
  - tension meter
  - ending severity card
- Final branching summary includes:
  - ending title + severity
  - visited path with selected actions
  - consequences
  - aggregated critical actions
  - debrief guide

## Files

- `web/src/data/types.ts`
- `web/src/components/scenario/ScenarioPlayer.tsx`
- `web/src/data/scenarios/S01.ts`
