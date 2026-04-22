---
name: generate-report
description: Generates a clean weekly/monthly progress report for parent or sibling review. Shows chapters covered, scores, weak areas, study consistency, and next actions.
---

# /generate-report Command

## Syntax
```
/generate-report [period]
```

## Parameters

| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| period | No | daily, weekly, monthly, custom | weekly |

## What It Does

1. Collects data from the session: chapters discussed, scores, questions attempted
2. Cross-references with weak-chapter-tracker and mistake-dna
3. Generates a clean, readable report for parent/sibling accountability
4. Highlights progress, flags concerns, suggests next actions

## Output Format

```
📊 CBSE PREP — WEEKLY PROGRESS REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Student: [Name]  |  Week: [date range]  |  Days to Board Exam: [N]

📚 CHAPTERS COVERED THIS WEEK:
  ✅ Math: Quadratic Equations (mastery: 85%)
  ✅ Science: Electricity (mastery: 72%) ⚠️
  ✅ SST: Nationalism in India (mastery: 90%)
  ✅ English: Grammar — Reported Speech (mastery: 80%)
  ❌ Tamil: Iyal 3 (not started)

📝 PRACTICE STATS:
  Questions attempted: 47
  Correct: 38 (81%)
  CBQ questions attempted: 8
  CBQ accuracy: 75%
  Full papers completed: 1 (Science — scored 68/80)

🔴 CONCERNS:
  1. Electricity chapter below 80% — needs 2 more practice sessions
  2. Tamil Iyal 3 not started — falling behind schedule
  3. CBQ accuracy below target (75% vs 85% target)

🟢 HIGHLIGHTS:
  1. Math quadratic equations improved from 60% to 85% ↑
  2. SST Nationalism mastered — ready for board level
  3. Consistency: studied 6 out of 7 days ✅

📋 NEXT WEEK PRIORITIES:
  1. Complete Electricity recovery (Physics)
  2. Start Tamil Iyal 3
  3. Practice 5 more CBQ questions
  4. Complete 1 full Math paper

🎯 ESTIMATED BOARD SCORE (current trajectory):
  Math: 92-95  |  Science: 85-90  |  SST: 95-98
  English: 90-93  |  Tamil: 80-85
  Total: ~450-460 / 500 (Gap to 495+: ~40 marks to close)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report generated: [date]
```

## Examples

```
/generate-report weekly
→ Generates this week's progress summary

/generate-report monthly
→ Full month summary with trend graphs and milestone tracking

/generate-report daily
→ Quick daily summary: what was done, what's next
```

## Chains To
**weak-spotter** agent → pulls weakness data
**mistake-dna** skill → pulls error pattern data
**planner** agent → compares actual vs planned progress
