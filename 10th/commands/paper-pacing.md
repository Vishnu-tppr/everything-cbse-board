---
name: paper-pacing
description: Generate exact time budget per section for a 3-hour paper. Flags if student's pace is too slow. Integrates with mock-test for live pacing feedback.
---

# /paper-pacing Command

## Syntax
```
/paper-pacing [subject]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |

## What It Does
1. Loads `skills/time-manager/SKILL.md`
2. Outputs exact time budget per section (MCQ, VSA, SA, LA, Case Study)
3. Shows per-question time targets
4. Includes 15-minute review protocol
5. Flags pacing red flags

## Also Available
```
/simulate-timing [subject] [actual-times]
→ Compare actual attempt times vs ideal
→ "You spent 45 min on Section C — target was 35 min. Over by 10 min."
```

## Chains To
**time-manager** skill → pacing data
**exam-hall-mode** skill → integrates pacing into strict simulation
