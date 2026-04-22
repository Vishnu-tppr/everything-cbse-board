---
name: warm-up
description: Daily 20-minute mixed practice — 5 questions from recent chapters + 1 from weak ledger + 1 CBQ. Builds daily study habit and keeps recall fresh. Chains to examiner + case-builder agents.
---

# /warm-up Command

## Syntax
```
/warm-up [subject]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | No | math, science, sst, english, tamil, all | all |

## What It Does

1. Selects 7 questions automatically:
   - **3 questions** from recently studied chapters (recall maintenance)
   - **2 questions** from the weak-chapter-tracker (targeted recovery)
   - **1 AR question** (assertion-reasoning format practice)
   - **1 CBQ question** (case study / competency-based)
2. Mix of difficulty: 2 easy + 3 medium + 2 hard
3. Designed to take exactly **20 minutes**
4. Tracks daily completion for consistency

## Question Mix

```
WARM-UP SET (20 minutes total):
  Q1: MCQ — easy — recent chapter (1 min)
  Q2: MCQ — easy — recent chapter (1 min)
  Q3: SA 2M — medium — recent chapter (3 min)
  Q4: SA 3M — medium — weak chapter ⚠️ (5 min)
  Q5: SA 2M — medium — weak chapter ⚠️ (3 min)
  Q6: AR 1M — medium — any chapter (2 min)
  Q7: Case Study 4M — hard — any chapter (5 min)
  Total: 7 questions, ~20 minutes
```

## Examples

```
/warm-up math
→ 3 from recent Math chapters + 2 from weak Math chapters + 1 AR + 1 CBQ

/warm-up all
→ Mixed from all subjects, weighted towards weakest subject

/warm-up science
→ Mix of Physics, Chemistry, Biology questions
```

## Why 20 Minutes?

- Short enough to do EVERY DAY (even on busy days)
- Long enough to cover recall + weak areas + CBQ
- Builds consistency habit over 10 months = 300+ warm-up sessions
- 300 sessions × 7 questions = 2,100+ questions practiced before boards

## Chains To
**examiner** agent → question generation
**case-builder** agent → CBQ question
**evaluator** agent → auto-mark after attempt
**weak-spotter** agent → reads weak-chapter data for Q4, Q5
