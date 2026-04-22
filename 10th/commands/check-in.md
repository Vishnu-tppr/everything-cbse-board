---
name: check-in
description: Quick 2-minute daily check-in for sleep, stress, and focus levels. Auto-adjusts session difficulty based on mental state. Prevents burnout over 10-month prep.
---

# /check-in Command

## Syntax
```
/check-in [mode]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| mode | No | daily, weekly | daily |

## What It Does
1. Loads `skills/mental-balance/SKILL.md`
2. Asks 5 quick questions (sleep, stress, focus, satisfaction, distraction)
3. Classifies as GREEN / YELLOW / RED zone
4. Auto-adjusts today's session difficulty
5. Tracks trends over weeks — flags burnout patterns

## Auto-Adjustment
```
GREEN (well-rested, focused) → Full intensity, tackle hard chapters
YELLOW (moderate) → Standard session, mix of revision + new
RED (stressed, tired) → Light mode — revision, IA work, easy warm-ups
3+ RED days → Suggest rest day + recovery plan
```

## Chains To
**planner** agent → adjusts daily plan based on zone
**mental-balance** skill → wellness tracking logic
