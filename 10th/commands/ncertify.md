---
name: ncertify
description: Check if an answer uses NCERT-style language and keywords. Flags coaching jargon and vague language. Suggests minimal edits to match examiner expectations.
---

# /ncertify Command

## Syntax
```
/ncertify [subject] [answer-text]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |
| answer-text | Yes | Student's written answer (in quotes) | — |

## What It Does

1. Loads `skills/ncert-mirror/SKILL.md`
2. Identifies chapter from the answer content
3. Checks for NCERT keywords (present vs missing)
4. Flags non-NCERT or coaching-centre jargon
5. Suggests minimal edits (not a full rewrite)
6. Shows keyword coverage percentage

## Example
```
/ncertify science "Plants make food using sunlight and water through green leaves"

OUTPUT:
  📖 NCERT CHECK: 3/7 keywords (43%) ⚠️
  ✅ sunlight, water, leaves
  ❌ Missing: photosynthesis, chlorophyll, autotrophic, CO₂
  ⚠️ "make food" → use "synthesize food/glucose"
  
  Suggested: "Plants synthesize food (glucose) through the process
  of photosynthesis using CO₂, H₂O, and sunlight in the presence
  of chlorophyll in leaves. This is called autotrophic nutrition."
```

## Chains To
**keyword-bank** skill → provides expected keywords per chapter
**evaluator** agent → can run ncertify as part of answer evaluation
