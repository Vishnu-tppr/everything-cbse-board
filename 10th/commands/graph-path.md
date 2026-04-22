---
name: graph-path
description: Show prerequisite chapter dependencies. If weak in a chapter, find the ROOT CAUSE in an earlier chapter. Auto-suggests foundation fixes.
---

# /graph-path Command

## Syntax
```
/graph-path [subject] [chapter]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science | — |
| chapter | Yes | Chapter name (in quotes) | — |

## What It Does
1. Loads `skills/concept-graph/SKILL.md`
2. Shows prerequisite chain for the given chapter
3. Identifies which foundation chapters are weak
4. Suggests targeted fix path with estimated time

## Also Available
```
/fix-foundation [subject] [chapter]
→ Auto-generates 2-3 day plan to fix prerequisite gaps
→ Quick-test to verify each prerequisite before moving forward
```

## Example
```
/graph-path math trigonometry

OUTPUT:
  Prerequisites: Polynomials → Triangles → Trigonometry
  ⚠️ Polynomials mastery: 65% — likely causing trig struggles
  Fix: 2 days on polynomial factorization, then retry trig
```

## Chains To
**concept-graph** skill → dependency data
**tutor** agent → teaches prerequisite concepts
**examiner** agent → generates prerequisite quick-tests
**weak-spotter** agent → identifies which prerequisites are weak
