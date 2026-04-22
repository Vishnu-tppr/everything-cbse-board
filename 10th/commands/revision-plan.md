---
name: revision-plan
description: Generates a day-by-day revision calendar based on exam date and weak chapters. Chains to planner agent.
---

# /revision-plan Command

## Syntax
```
/revision-plan [exam-date] [weak-chapters]
```

## Parameters

| Parameter | Required | Format | Example |
|-----------|----------|--------|---------|
| exam-date | Yes | YYYY-MM-DD | 2027-03-15 |
| weak-chapters | No | comma-separated | "trigonometry,electricity,nationalism" |

## What It Does

1. Invokes the **planner** agent
2. Calculates available days (with 10% buffer)
3. Prioritizes by weightage × weakness severity
4. Generates Phase 1 (deep revision), Phase 2 (practice), Phase 3 (light revision)
5. Outputs day-by-day calendar with specific tasks
6. Includes weekly milestones and progress checkpoints

## Output Includes
- Total days available and phase breakdown
- Daily schedule: morning/afternoon/evening slots
- Subject-wise time allocation
- Special focus days for weak chapters
- Weekly rest and milestone days
- Exam-week specific strategy

## Examples

```
/revision-plan 2027-03-01 "quadratic-equations,electricity,nationalism-in-india"
→ 100+ day calendar with 3x focus on the 3 weak chapters

/revision-plan 2027-03-15
→ General balanced revision plan (no specific weak chapters)

/revision-plan 2027-02-01 "all-math,biology-heredity,economics"
→ Intensive 30-day plan with heavy Math focus
```

## Chains To
**planner** agent → personalized revision calendar
