---
name: spaced-repetition
description: >-
  Spaced repetition engine for long-term retention of formulas, dates, equations, and
  definitions. Review intervals: Day 1, 3, 7, 14, 30. Proven science for 10-month prep.
---

# Spaced Repetition Engine

## Why Spaced Repetition

```
WITHOUT spaced repetition:
  Learn Chapter 1 in April → forget 80% by December → re-learn from scratch

WITH spaced repetition:
  Learn Chapter 1 in April → review Day 3, 7, 14, 30 → remember 90%+ in March
  Total extra time: ~30 minutes of reviews over a month
  Time saved: ~3 hours of re-learning before boards
```

## Review Schedule

```
Day 0:  LEARN (full study session)
Day 1:  QUICK REVIEW (10 min — scan notes, recall key points)
Day 3:  ACTIVE RECALL (15 min — close book, write from memory)
Day 7:  PRACTICE TEST (20 min — 5 questions without notes)
Day 14: MIXED REVIEW (15 min — mix with other chapters)
Day 30: FINAL CHECK (10 min — if 90%+ recall, mark as "locked")

If recall < 70% at any stage → reset to Day 0 (re-learn)
```

## What to Space-Repeat Per Subject

### Mathematics
```
MUST RETAIN:            REVIEW METHOD:
All formulas            Write from memory, verify
Trigonometric ratios    Flash-quiz (sin30°=? cos45°=?)
Mensuration formulas    Draw shapes + write formula
AP formulas             Quick 2-problem drill
Quadratic formula       Solve 1 problem using it
```

### Science
```
MUST RETAIN:            REVIEW METHOD:
Chemical equations      Write + balance from memory
Reactivity series       Recite order: K Na Ca Mg Al Zn Fe...
Physics formulas        V=IR, P=VI, R=ρl/A — write all
Biology diagrams        Draw from memory (heart, nephron, neuron)
Process steps           Photosynthesis steps, digestion flow
```

### Social Science
```
MUST RETAIN:            REVIEW METHOD:
Historical dates        Timeline quiz (year → event)
Map locations           Blank map marking drill
Economic data           GDP%, HDI values, sector contributions
Constitutional articles Article numbers → what they say
Movement chronology     Gandhi's movements in order
```

### English
```
MUST RETAIN:            REVIEW METHOD:
Poem summaries          2-line recall per poem
Author names            Title → Author quick quiz
Grammar rules           1 exercise per rule type
Letter formats          Write format skeleton from memory
```

## Spaced Repetition Calendar Generator

```
/spaced-repeat [subject] [chapter] [learn-date]

INPUT: science "electricity" 2026-07-15

OUTPUT:
  📅 SPACED REPETITION SCHEDULE: Electricity

  Day 0  (Jul 15): LEARN — full chapter study ✅
  Day 1  (Jul 16): Quick review — scan notes (10 min)
  Day 3  (Jul 18): Active recall — write V=IR, P=VI from memory
  Day 7  (Jul 22): Practice test — 5 questions without notes
  Day 14 (Jul 29): Mixed review — combine with Light chapter
  Day 30 (Aug 14): Final check — quick 3-question test

  After Aug 14: If 90%+ recall → chapter "LOCKED" ✅
  Monthly maintenance: 1 question in /warm-up rotation
```

## Integration with Other Skills

```
spaced-repetition feeds into:
  → /warm-up: includes spaced-repeat items automatically
  → planner: schedules review days in the revision calendar
  → weak-spotter: flags chapters that failed recall checks
  → keyword-bank: review chapter keywords during recall sessions
```
