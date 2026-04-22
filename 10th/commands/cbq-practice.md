---
name: cbq-practice
description: Generate Competency-Based Questions (case studies + AR questions) from a chapter. Chains to case-builder + examiner agents. Covers the 50% of the paper that is CBQ format.
---

# /cbq-practice Command

## Syntax
```
/cbq-practice [subject] [chapter] [count]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, physics, chemistry, biology, history, geography, polsci, economics, english | — |
| chapter | Yes | Any chapter name (in quotes) | — |
| count | No | 1-10 | 3 |

## What It Does

1. Invokes the **case-builder** agent for case studies
2. Invokes the **examiner** agent for Assertion-Reasoning questions
3. Generates `count` CBQ items: mix of case studies (4M) and AR questions (1M)
4. Each includes marking scheme and model answer
5. Loads `skills/cbq-engine/SKILL.md` and `skills/assertion-reason/SKILL.md`

## Output Mix
```
For count=3:
  1 Case Study (4M) with 3 sub-questions
  2 Assertion-Reasoning questions (1M each)
  Total: 6 marks of CBQ practice
```

## Examples

```
/cbq-practice science "electricity" 5
→ 2 case studies (home circuits, appliance data) + 3 AR questions

/cbq-practice math "surface areas and volumes" 3
→ 1 case study (water tank/swimming pool scenario) + 2 AR questions

/cbq-practice history "nationalism in india" 4
→ 2 source-based case studies (historical documents) + 2 AR questions
```

## Chains To
**case-builder** agent → CBQ scenario generation
**examiner** agent → AR question generation
**evaluator** agent → auto-mark after student attempts
