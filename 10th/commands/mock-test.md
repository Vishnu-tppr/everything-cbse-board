---
name: mock-test
description: Generates a full CBSE-style test paper for a subject. Timed. Follows official CBSE blueprint. Chains to examiner agent.
---

# /mock-test Command

## Syntax
```
/mock-test [subject] [duration]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |
| duration | No | 60min, 90min, 3hr | 3hr |

## What It Does

1. Invokes the **examiner** agent in full-paper mode
2. Generates a complete CBSE-format test paper matching the official blueprint
3. Includes ALL sections: MCQ, VSA, SA, LA, Case Study
4. Provides marking scheme separately (view after attempting)
5. For shorter durations (60/90 min): generates proportionally fewer questions

## Paper Blueprint (3-hour, 80 marks)

### Mathematics
- Section A: 20 MCQs (1M each) = 20M
- Section B: 5 VSA (2M each) = 10M
- Section C: 6 SA (3M each) = 18M
- Section D: 4 LA (5M each) = 20M
- Section E: 3 Case Study (4M each) = 12M
- **Total: 38 questions, 80 marks**

### Science
- Section A: 20 MCQs (1M each) = 20M
- Section B: 6 VSA (2M each) = 12M
- Section C: 7 SA (3M each) = 21M
- Section D: 3 LA (5M each) = 15M
- Section E: 3 Case Study (4M each) = 12M
- **Total: 39 questions, 80 marks**

### Social Science
- Section A: 20 MCQs (1M each) = 20M
- Section B: 4 VSA (2M each) = 8M
- Section C: 6 SA (3M each) = 18M
- Section D: 4 LA (5M each) = 20M
- Section E: 3 Map/Case (4M+2M) = 14M
- **Total: 37 questions, 80 marks**

## Examples

```
/mock-test math 3hr
→ Full 80-mark Math paper with all 38 questions + separate answer key

/mock-test science 90min
→ Half-paper: 20 MCQs + 3 SA + 1 LA + 1 Case Study (40 marks)

/mock-test english 60min
→ Quick test: 1 passage + grammar + 2 literature questions (30 marks)
```

## Chains To
**examiner** agent → full paper generation with answer key
