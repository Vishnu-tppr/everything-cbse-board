---
name: commands
description: >-
  CBSE Tools - Command Registry
---

# CBSE Tools — Command Registry

All available commands for CBSE Grade 10 Board Exam preparation.

## Command Quick Reference

| Command | Description | Agent |
|---------|-------------|-------|
| `/practice` | Generate practice questions | examiner |
| `/explain` | Socratic concept explanation | tutor |
| `/mock-test` | Full CBSE-style test paper | examiner |
| `/mark-my-answer` | Evaluate answer per CBSE scheme | evaluator |
| `/revision-plan` | Day-by-day study calendar | planner |
| `/chapter-summary` | Exam-ready chapter summary | tutor |

## Usage Pattern

```
/command [subject] [parameters...]
```

### Subjects
- `math` / `mathematics`
- `science` / `physics` / `chemistry` / `biology`
- `sst` / `history` / `geography` / `polsci` / `economics`
- `english`
- `tamil`

### Examples
```
/practice math "quadratic equations" hard 5
/explain science "electromagnetic induction"
/mock-test english 3hr
/mark-my-answer science "State Ohm's law" "V=IR, voltage is proportional to current"
/revision-plan 2027-03-01 "trigonometry,heredity,nationalism-in-india"
/chapter-summary math "statistics"
```
