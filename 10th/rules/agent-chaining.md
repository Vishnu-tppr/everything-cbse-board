---
name: agent-chaining
description: >-
  Agent Chaining Rules
---

# Agent Chaining Rules

## Autonomous Agent-to-Agent Triggers

Agents don't work in isolation. They trigger each other based on outcomes.

### Chain Definitions

```
┌──────────────────────────────────────────────────────────────────┐
│                    CBSE TOOLS AGENT FLOW                        │
│                                                                  │
│  Student Question                                               │
│       │                                                          │
│       ▼                                                          │
│  ┌─────────────┐     "give me questions"     ┌──────────┐      │
│  │   TUTOR     │──────────────────────────────│ EXAMINER │      │
│  │ (explains)  │                              │(generates│      │
│  └─────────────┘                              │questions)│      │
│       │                                       └────┬─────┘      │
│       │ "check my answer"                          │             │
│       ▼                                            ▼             │
│  ┌─────────────┐     score < 60%            Student attempts     │
│  │ EVALUATOR   │──────────────────┐              │              │
│  │ (marks      │                  │              ▼              │
│  │  answers)   │                  │        ┌──────────┐         │
│  └─────────────┘                  │        │EVALUATOR │         │
│                                   ▼        │(auto-mark│         │
│                            ┌────────────┐  └──────────┘         │
│                            │WEAK-SPOTTER│                       │
│                            │(identifies │                       │
│                            │ gaps)      │                       │
│                            └─────┬──────┘                       │
│                                  │                               │
│                         3+ weak chapters                         │
│                                  │                               │
│                                  ▼                               │
│                           ┌──────────┐                          │
│                           │ PLANNER  │                          │
│                           │(builds   │                          │
│                           │schedule) │                          │
│                           └──────────┘                          │
└──────────────────────────────────────────────────────────────────┘
```

### Trigger Conditions

#### Chain 1: Evaluator → Weak-Spotter
```
WHEN: evaluator awards score < 60% on any answer
THEN: Automatically invoke weak-spotter for that chapter
OUTPUT: "[Student], it looks like [chapter] needs more practice.
  Let me analyze this and create a recovery plan..."
→ weak-spotter generates targeted plan
→ Suggest: "Would you like me to generate 5 practice questions for [chapter]?"
```

#### Chain 2: Weak-Spotter → Planner
```
WHEN: weak-spotter identifies 3 or more weak chapters (< 80% mastery)
THEN: Automatically invoke planner
OUTPUT: "I've found [N] chapters that need attention. Let me build
  a study plan that prioritizes these..."
→ planner generates recovery calendar
```

#### Chain 3: Weak-Spotter → Examiner
```
WHEN: weak-spotter completes analysis of any chapter
THEN: Automatically generate 5 practice questions from the weakest topic
OUTPUT: "Here are 5 targeted practice questions to start your recovery.
  Try them now and I'll evaluate your answers."
→ examiner generates questions
→ After student answers: evaluator auto-marks
```

#### Chain 4: Examiner → Evaluator
```
WHEN: examiner generates questions AND student provides answers
THEN: Automatically invoke evaluator
OUTPUT: Seamless transition — student doesn't need to use /mark-my-answer
→ evaluator marks the answer
→ If score < 60%: Chain 1 triggers (evaluator → weak-spotter)
```

#### Chain 5: Planner → Examiner (Warm-up)
```
WHEN: student begins a new study session following the revision plan
THEN: Generate 1 warm-up question from today's planned chapter
OUTPUT: "Today's plan: [Chapter Name]. Let's start with a quick
  warm-up question to activate your memory..."
→ examiner generates 1 question
```

#### Chain 6: Tutor → Examiner (Concept Check)
```
WHEN: tutor finishes explaining a concept
THEN: Generate 1 quick practice question to verify understanding
OUTPUT: "Now that we've understood [concept], let's test it.
  Try this quick question..."
→ examiner generates 1 targeted question
```

### Cross-Skill Loading

When an agent is invoked, it MUST load the relevant subject skill:
```
tutor + "electricity" → Load skills/science/physics/SKILL.md
examiner + "nationalism" → Load skills/social-science/history/SKILL.md
evaluator + any subject → Load corresponding SKILL.md for marking scheme
planner + weak chapters → Load ALL relevant subject SKILLs
weak-spotter + scores → Load ALL subject SKILLs for analysis
```

### Session Continuity

Maintain a mental model across the conversation:
```
TRACK:
  - Which subjects discussed this session
  - Which chapters the student struggled with
  - Which chapters the student aced
  - Overall estimated mastery level
  - Recommended next actions

AT END OF SESSION, suggest:
  "Based on today's session, I recommend:
   1. Review [chapter] — you had some gaps in [concept]
   2. Practice 5 more questions from [chapter] tomorrow
   3. Your next session should focus on [subject]"
```
