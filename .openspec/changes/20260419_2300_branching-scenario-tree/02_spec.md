# Spec

## User Story

作為 CIT 工作坊學習者，我希望情境模擬能依我的選擇走向不同結果，這樣我才能理解錯誤話術與延誤支援的真實代價，而不是只看平面的正確答案。

## Requirements

### Functional

1. Scenario data model must support decision-based navigation.
2. A decision may lead to another stage or directly to an ending.
3. `ScenarioPlayer` must remain compatible with existing linear scenarios.
4. Branching scenarios must show the learner's current path and current tension state.
5. Final screen must show the reached ending, downstream consequences, visited teaching points, and debrief prompts.

### S01 Content

1. `S01` must contain at least one safe de-escalation ending.
2. `S01` must contain at least one team-supported containment ending.
3. `S01` must contain at least one harmful/adverse ending caused by repeated poor choices.
4. Wrong choices must not merely show red feedback; they must materially worsen the next node or ending.

## Acceptance

- Selecting an empathetic, concrete response in `S01` can reach a safe resolution.
- Selecting repeated invalidating or threatening responses in `S01` can reach a physical-conflict or adverse-consequence ending.
- Visiting `S02–S04` still works without adding new branching metadata.
