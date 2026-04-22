---
name: mock-test
description: Generates a full-length CBSE 12th mock paper (70 marks for Science, 80 marks for Math/English). Chains to examiner agent.
---

# /mock-test Command

## Syntax
```
/mock-test [subject]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | physics, chemistry, math, biology, cs, english | — |

## What It Does

1. Invokes the **examiner** agent.
2. Generates a perfectly balanced CBSE paper matching the latest sample paper blueprint.
3. For Physics/Chem/Bio/CS (70 Marks):
   - Section A: 16 MCQs (including 4 AR) (16M)
   - Section B: 5 VSAs (10M)
   - Section C: 7 SAs (21M)
   - Section D: 2 Case Studies (8M)
   - Section E: 3 LAs (15M)
4. For Math/English (80 Marks): Maps to the exact 80-mark blueprint.

## Examples

```
/mock-test physics
→ Generates a full 3-hour, 70-mark Physics paper with strict internal choices in Section E.
```

## Chains To
**examiner** agent → generates full paper structure.
