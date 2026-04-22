---
name: question-bank
description: >-
  Build and manage a personal question bank organized by chapter, difficulty, and type.
  Supports spaced repetition and targeted practice for 495+ preparation.
---

# Personal Question Bank

## How to Build Your Question Bank

### Organization Structure
```
question-bank/
├── mathematics/
│   ├── algebra/
│   │   ├── easy.md
│   │   ├── medium.md
│   │   └── hard.md
│   ├── geometry/
│   └── ...
├── science/
│   ├── physics/
│   ├── chemistry/
│   └── biology/
├── social-science/
├── english/
└── tamil/
```

### Tagging System

Every question should be tagged with:
```
[Chapter]: e.g., "Quadratic Equations"
[Type]: MCQ | SA-2 | SA-3 | LA-5 | Case-Study-4
[Difficulty]: Easy | Medium | Hard
[Source]: NCERT | RD Sharma | Oswaal | KV-Paper | CBSE-Sample | Navodaya
[Status]: Not-Attempted | Attempted-Wrong | Attempted-Correct | Mastered
[Frequency]: How often this type appears in boards (High | Medium | Low)
```

### Question Entry Format
```markdown
## Q: [Question text]
- **Chapter**: Quadratic Equations
- **Type**: LA-5
- **Difficulty**: Hard
- **Source**: CBSE Sample Paper 2025
- **Board Frequency**: High
- **Status**: Not-Attempted
- **My Answer**: [leave blank until attempted]
- **Correct Answer**: [fill after checking]
- **Mistakes Made**: [note errors for review]
```

## Spaced Repetition Schedule

| Status | Review Interval |
|--------|----------------|
| Attempted-Wrong | Review in 1 day |
| Attempted-Correct (1st time) | Review in 3 days |
| Attempted-Correct (2nd time) | Review in 7 days |
| Attempted-Correct (3rd time) | Review in 14 days |
| Mastered (4 correct in a row) | Review in 30 days |

## How to Use with Commands
```
/practice math "quadratic equations" hard 5
→ Generates 5 hard questions, add them to your bank

/mark-my-answer science "Explain Ohm's law" "[your answer]"
→ Get evaluation, update question status based on score
```

## Building from Sources
1. **NCERT**: Every exercise question → add to bank
2. **RD Sharma**: Level 2 problems → hard category
3. **Sample Papers**: Every question you get wrong → add to bank with mistake analysis
4. **KV/Navodaya Papers**: Unique question patterns → add to bank
5. **Toppers' Answers**: Note their answer structure → add as reference
