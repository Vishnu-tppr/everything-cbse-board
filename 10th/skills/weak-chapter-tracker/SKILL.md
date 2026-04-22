---
name: weak-chapter-tracker
description: >-
  Track mastery per chapter (0-100% scale). Triggers weak-spotter agent when chapters fall below 80%.
  Activate to help students track and improve weak areas.
---

# Weak Chapter Tracker

## How It Works

Maintain a mastery score for every chapter across all subjects. Update after each test, practice session, or self-assessment. When any chapter drops below 80%, the weak-spotter agent activates.

## Mastery Template

Copy and update this tracker regularly:

```
MATHEMATICS (Target: 100/100)
| Chapter | Mastery % | Last Test Score | Status | Priority |
|---------|-----------|-----------------|--------|----------|
| Real Numbers | __% | __/__ | 🟢🟡🔴 | Low/Med/High |
| Polynomials | __% | __/__ | | |
| Linear Equations | __% | __/__ | | |
| Quadratic Equations | __% | __/__ | | |
| Arithmetic Progressions | __% | __/__ | | |
| Triangles | __% | __/__ | | |
| Coordinate Geometry | __% | __/__ | | |
| Intro to Trigonometry | __% | __/__ | | |
| Applications of Trig | __% | __/__ | | |
| Circles | __% | __/__ | | |
| Areas Related to Circles | __% | __/__ | | |
| Surface Areas & Volumes | __% | __/__ | | |
| Statistics | __% | __/__ | | |
| Probability | __% | __/__ | | |

SCIENCE — Physics
| Light - Reflection & Refraction | __% | __/__ | | |
| Human Eye | __% | __/__ | | |
| Electricity | __% | __/__ | | |
| Magnetic Effects | __% | __/__ | | |

SCIENCE — Chemistry
| Chemical Reactions & Equations | __% | __/__ | | |
| Acids, Bases and Salts | __% | __/__ | | |
| Metals and Non-metals | __% | __/__ | | |
| Carbon and its Compounds | __% | __/__ | | |

SCIENCE — Biology
| Life Processes | __% | __/__ | | |
| Control and Coordination | __% | __/__ | | |
| How do Organisms Reproduce | __% | __/__ | | |
| Heredity | __% | __/__ | | |
| Our Environment | __% | __/__ | | |
```

*(Repeat for Social Science, English, Tamil)*

## Status Legend
- 🟢 **Green (80-100%)**: On track. Maintain with periodic revision.
- 🟡 **Yellow (60-79%)**: Needs attention. Schedule extra practice this week.
- 🔴 **Red (<60%)**: Critical. Trigger weak-spotter agent immediately.

## When to Update
1. After every chapter test or class test
2. After completing a sample paper (chapter-wise score breakdown)
3. Weekly self-assessment (can I solve 8/10 questions from this chapter?)
4. After pre-board exams (most important update)

## Triggering Weak-Spotter Agent
When 3+ chapters are 🔴 or 5+ chapters are 🟡, invoke:
```
/weak-spotter "math:quadratic-equations,science:electricity,sst:nationalism-in-india"
```
The agent will create a targeted recovery plan.
