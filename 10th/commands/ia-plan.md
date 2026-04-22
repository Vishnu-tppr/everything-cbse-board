---
name: ia-plan
description: Break down IA (Internal Assessment) 20 marks into actionable timeline. Track periodic tests, projects, portfolios. Target 100/100 across 5 subjects.
---

# /ia-plan Command

## Syntax
```
/ia-plan [subject]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | No | math, science, sst, english, tamil, all | all |

## What It Does

1. Loads `skills/ia-optimizer/SKILL.md`
2. Breaks down the 20 IA marks into: periodic tests (10M) + assessment (5M) + portfolio (5M)
3. Generates month-by-month action checklist
4. Tracks what's completed vs at-risk
5. Generates `/ia-audit` sub-report showing marks at risk

## Examples
```
/ia-plan science
→ Timeline: PT dates, lab experiment schedule, project milestones, notebook checkpoints

/ia-plan all
→ Cross-subject IA dashboard with risk alerts per subject
```

## Chains To
**planner** agent → integrates IA tasks into study calendar
**generate-report** → includes IA status in weekly reports
