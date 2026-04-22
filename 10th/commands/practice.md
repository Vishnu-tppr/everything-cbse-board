---
name: practice
description: Generate N practice questions from a specified chapter at given difficulty. Chains to examiner agent.
---

# /practice Command

## Syntax
```
/practice [subject] [chapter] [difficulty] [count]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, physics, chemistry, biology, history, geography, polsci, economics, english, tamil | — |
| chapter | Yes | Any chapter name (in quotes if multi-word) | — |
| difficulty | No | easy, medium, hard | medium |
| count | No | 1-20 | 5 |

## What It Does

1. Loads the subject skill file for chapter context
2. Invokes the **examiner** agent
3. Generates `count` questions at the specified difficulty
4. Each question includes: marks allocation, marking scheme, model answer
5. Mix of question types: MCQ, SA, LA, Case Study (proportional to marks)

## Difficulty Levels

| Level | Description | Typical Source |
|-------|-------------|----------------|
| Easy | Direct NCERT exercise level | NCERT textbook |
| Medium | CBSE sample paper level | CBSE/KV papers |
| Hard | Topper-level / Navodaya level | Navodaya/RD Sharma |

## Examples

```
/practice math "quadratic equations" hard 5
→ 5 hard questions: 1 MCQ, 1 SA-2M, 1 SA-3M, 1 LA-5M, 1 Case Study

/practice chemistry "acids bases and salts" easy 10
→ 10 easy questions: mostly MCQs and 2-mark questions

/practice history "nationalism in india" medium 3
→ 3 questions: 1 source-based, 1 SA, 1 map-based

/practice english "reported speech" medium 5
→ 5 grammar transformation exercises
```

## Chains To
**examiner** agent → generates questions with marking scheme
