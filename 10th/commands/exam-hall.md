---
name: exam-hall
description: Strict board exam simulation — no hints, no retries, no explanations during the test. Post-exam marks-vs-time analysis. Trains exam psychology.
---

# /exam-hall Command

## Syntax
```
/exam-hall [subject]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |

## What It Does
1. Loads `skills/exam-hall-mode/SKILL.md`
2. Generates a full 80-mark paper
3. STRICT MODE: No hints, no edits, no explanations during test
4. 180-minute timer (AI tracks time per answer)
5. After completion: detailed marks + time + mistake analysis

## Rules During Test
```
❌ No explanations from AI
❌ No editing submitted answers
❌ No hints or guidance
⏱ Strict 180-minute limit
✅ Only: "Next question", "Time: X min remaining"
```

## Chains To
**examiner** agent → generates board-level paper
**evaluator** → strict marking post-test
**math-step-evaluator** → step marking for Math
**time-manager** skill → time analysis
**mistake-dna** skill → error classification
