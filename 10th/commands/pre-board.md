---
name: pre-board
description: Generates a tougher-than-CBSE paper at KV/Navodaya difficulty. Catches edge cases and builds exam stamina. Chains to examiner agent with elevated difficulty.
---

# /pre-board Command

## Syntax
```
/pre-board [subject] [school-type]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |
| school-type | No | kv, navodaya, dps, cbse-official | kv |

## What It Does

1. Invokes **examiner** agent with difficulty set to HARD
2. Generates a full paper at KV/Navodaya difficulty (tougher than actual CBSE)
3. Includes more application-based and tricky questions
4. Follows the exact CBSE blueprint (sections, marks, question types)
5. Stricter marking scheme (examiner expectations higher)

## Difficulty Comparison

| Aspect | CBSE Official | KV Pre-Board | Navodaya |
|--------|--------------|--------------|----------|
| Recall questions | 40% | 25% | 20% |
| Application | 35% | 40% | 45% |
| Analysis/HOTS | 25% | 35% | 35% |
| Tricky wording | Low | Medium | High |
| Case study depth | Standard | Deeper | Deepest |

## Why Practice at Higher Difficulty?

```
If you can score 70/80 on a KV pre-board paper,
you will score 75-80/80 on the actual CBSE board paper.

KV papers catch edge cases that CBSE sample papers don't.
Navodaya papers test deeper application thinking.
The actual board exam will feel EASIER after this practice.
```

## Examples

```
/pre-board math kv
→ Full 80-mark Math paper at KV difficulty — harder word problems, trickier CBQs

/pre-board science navodaya
→ Full Science paper with deeper application questions and harder AR questions

/pre-board sst kv
→ SST paper with more source analysis and map-heavy questions
```

## Chains To
**examiner** agent (elevated difficulty mode)
**evaluator** agent (stricter marking after attempt)
**math-step-evaluator** (for Math papers)
