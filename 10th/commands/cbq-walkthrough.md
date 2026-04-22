---
name: cbq-walkthrough
description: Walk through a CBQ case study step-by-step — teaches the THINKING process, not just the answer. Builds CBQ problem-solving skills for the 50% competency portion.
---

# /cbq-walkthrough Command

## Syntax
```
/cbq-walkthrough [subject] [chapter]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english | — |
| chapter | No | Specific chapter name | Random from subject |

## What It Does

1. Loads `skills/cbq-engine/SKILL.md`
2. Generates ONE case study passage
3. Instead of asking student to solve, WALKS THROUGH the thinking:
   - Step 1: "What chapter is this about?" (identify)
   - Step 2: "What data is relevant vs distractor?" (extract)
   - Step 3: "What concept/formula applies?" (connect)
   - Step 4: "How do I structure my answer?" (write)
4. Then gives a SIMILAR case study for the student to try alone

## Example Flow
```
/cbq-walkthrough science electricity

STEP 1 — IDENTIFY:
  "Read this passage. What chapter does it relate to?"
  → Student: "Electricity"
  → "Correct! The clues were: 'circuit', 'ammeter', 'resistance'"

STEP 2 — EXTRACT:
  "What data from the passage do we need?"
  → Student: "V = 12V, I = 2A"
  → "Good! Did you notice the distractor? The 'temperature' mentioned
     is irrelevant to this calculation."

STEP 3 — CONNECT:
  "What formula connects V, I, and R?"
  → Student: "V = IR, so R = V/I = 12/2 = 6Ω"
  → "Perfect! Now for part (iii), they ask 'what happens if R doubles'..."

STEP 4 — WRITE:
  "Structure your answer for the examiner:"
  → Given: V = 12V, I = 2A
  → Formula: R = V/I
  → Answer: R = 6Ω
  → Part iii: If R → 12Ω, then I = V/R = 12/12 = 1A (current halves)
```

## Chains To
**case-builder** agent → generates the case study
**tutor** agent → guides the thinking process
**cbq-engine** skill → CBQ format rules
