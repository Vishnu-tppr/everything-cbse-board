---
name: chapter-summary
description: Outputs a concise, exam-ready chapter summary with key points, formulas, and the 5 most likely exam questions. Chains to tutor agent.
---

# /chapter-summary Command

## Syntax
```
/chapter-summary [subject] [chapter]
```

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| subject | Yes | math, science, physics, chemistry, biology, history, geography, polsci, economics, english, tamil |
| chapter | Yes | Chapter name (in quotes if multi-word) |

## What It Does

1. Loads the relevant subject skill file
2. Invokes the **tutor** agent in summary mode
3. Generates a concise, exam-focused chapter summary

## Output Format

```
📚 CHAPTER SUMMARY: [Chapter Name]
Subject: [Subject] | Marks Weightage: [X] marks | Board Frequency: High/Medium/Low

━━━ KEY CONCEPTS (5-7 bullet points) ━━━
• [Concept 1 — one line explanation]
• [Concept 2]
...

━━━ FORMULAS / KEY FACTS ━━━
[All formulas, equations, dates, or facts needed for this chapter]

━━━ DIAGRAMS TO REMEMBER ━━━
[List of diagrams you must be able to draw from memory]

━━━ COMMON MISTAKES ━━━
• [Mistake 1 and how to avoid it]
• [Mistake 2]

━━━ 5 MOST LIKELY EXAM QUESTIONS ━━━
1. [Question] — [marks] — [type: MCQ/SA/LA]
2. [Question] — [marks]
3. [Question] — [marks]
4. [Question] — [marks]
5. [Question] — [marks]

━━━ QUICK REVISION TIPS ━━━
• [Tip 1]
• [Tip 2]
```

## Examples

```
/chapter-summary math "quadratic equations"
→ Formulas, discriminant rules, 5 likely exam questions

/chapter-summary science "electricity"
→ Ohm's law, series/parallel, circuit diagrams, 5 board questions

/chapter-summary history "nationalism in india"
→ Timeline, key dates, movements, map work, 5 likely questions

/chapter-summary english "the necklace"
→ Theme, characters, key quotes, likely extract-based questions
```

## Chains To
**tutor** agent → exam-focused chapter summary
