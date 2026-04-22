---
name: explain
description: Explains a concept using Socratic method with real-world examples and CBSE exam relevance. Chains to tutor agent.
---

# /explain Command

## Syntax
```
/explain [subject] [concept]
```

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| subject | Yes | math, science, physics, chemistry, biology, history, geography, polsci, economics, english, tamil |
| concept | Yes | Any concept, topic, or term (in quotes if multi-word) |

## What It Does

1. Invokes the **tutor** agent in Socratic mode
2. Asks what the student already knows
3. Guides understanding through questions (not direct answers)
4. Uses real-world analogies and CBSE-aligned examples
5. Connects to board exam relevance (which question type, how many marks)
6. Ends with a quick self-check question

## Examples

```
/explain science "electromagnetic induction"
→ Tutor guides through: magnets → current → Faraday → generators → board exam tips

/explain math "arithmetic progressions"
→ Tutor asks about sequences → pattern → formula derivation → word problems

/explain history "civil disobedience movement"
→ Tutor links to Salt March → Gandhi → Irwin Pact → timeline

/explain english "reported speech"
→ Tutor explains direct→indirect rules with examples → practice exercise
```

## Chains To
**tutor** agent → Socratic explanation with exam relevance
