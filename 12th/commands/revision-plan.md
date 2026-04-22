---
name: revision-plan
description: Creates a personalized, day-by-day 12th grade study schedule balancing theory, practicals, and mock tests. Chains to planner.
---

# /revision-plan Command

## Syntax
```
/revision-plan [exam_date] [weak_chapters]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| exam_date | Yes | YYYY-MM-DD | — |
| weak_chapters| Yes | Comma-separated list | — |

## What It Does

1. Invokes the **planner** agent.
2. Calculates available days, accounting for 10% buffer and January/February practical exam slots.
3. Multiplies weightage by weakness to prioritize topics.
4. Outputs a strict Morning (Derivations/Math), Afternoon (Theory), Evening (Practice) calendar.

## Examples

```
/revision-plan 2027-02-15 "optics,integration,aldehydes"
→ Planner generates a detailed day-by-day block schedule optimizing for those 3 massive chapters.
```

## Chains To
**planner**
