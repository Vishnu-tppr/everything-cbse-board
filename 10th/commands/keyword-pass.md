---
name: keyword-pass
description: Check answer for chapter-specific keyword coverage. Shows which examiner-expected keywords are present vs missing. Suggests where to add them.
---

# /keyword-pass Command

## Syntax
```
/keyword-pass [subject] [question] [answer]
```

## Parameters
| Parameter | Required | Options | Default |
|-----------|----------|---------|---------|
| subject | Yes | math, science, sst, english, tamil | — |
| question | Yes | The question being answered (in quotes) | — |
| answer | Yes | Student's answer (in quotes) | — |

## What It Does
1. Loads `skills/keyword-bank/SKILL.md`
2. Identifies chapter and extracts expected keywords
3. Scans answer for keyword presence
4. Shows coverage % and suggests insertions
5. Marks keywords for underline practice

## Also Available: Keyword Quiz
```
/keyword-quiz [subject] [chapter] [count]
→ Quick recall drill: "Give the NCERT keyword for: [description]"
```
