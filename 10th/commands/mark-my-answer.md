---
name: mark-my-answer
description: Evaluates a student's answer against CBSE marking scheme. Shows marks, missed keywords, and improvement tips. Chains to evaluator agent.
---

# /mark-my-answer Command

## Syntax
```
/mark-my-answer [subject] [question] [student-answer]
```

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| subject | Yes | math, science, physics, chemistry, biology, history, geography, polsci, economics, english, tamil |
| question | Yes | The question being answered (in quotes) |
| student-answer | Yes | The student's answer to evaluate (in quotes) |

## What It Does

1. Invokes the **evaluator** agent
2. Identifies the marking scheme for the question
3. Checks answer against each value point
4. Awards marks step-by-step
5. Lists missing keywords and concepts
6. Provides specific improvement suggestions
7. Gives examiner tip for future answers

## Output Includes
- **Score**: X / Total marks
- **Step-by-step breakdown**: which value points earned marks
- **Keywords missed**: specific terms that would earn marks
- **Diagram check**: was a diagram needed? was it provided?
- **Improvement suggestions**: exactly how to improve the answer
- **Examiner tip**: insider advice on what examiners look for

## Examples

```
/mark-my-answer math "Find the roots of x²-7x+12=0" "x²-7x+12=0, (x-3)(x-4)=0, x=3 or x=4"
→ Score: 2/2 ✅ — Perfect! Formula, factorization, both roots found.

/mark-my-answer science "Explain the process of photosynthesis" "Plants make food using sunlight and water. They take in CO2 and release O2."
→ Score: 1.5/3 — Missing: balanced equation, role of chlorophyll, site of reaction

/mark-my-answer history "Explain the Salt March" "Gandhi walked to Dandi to make salt"
→ Score: 1/5 — Missing: date (March 12, 1930), distance (240 miles), why (broke salt law), who joined, impact
```

## Chains To
**evaluator** agent → CBSE-standard value-point marking
