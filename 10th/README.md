# CBSE Tools Ecosystem Architecture

Below is the complete architectural map of the CBSE preparation ecosystem, including all orchestration layers, behavior rules, subject skills, autonomous agents, execution commands, the deployable package, and the personal Obsidian knowledge base (`Prasanna`).

```text
cbse-tools/
├── CBSE.md                              ← Master index (You are here)
├── AGENTS.md                            ← Autonomous orchestration brain
│
├── rules/                               ← Always-active (8 files)
│   ├── accuracy.md                      ← NCERT fact-checking
│   ├── agent-chaining.md                ← Agent-to-agent auto-triggers
│   ├── answer-format.md                 ← CBSE answer structure
│   ├── session-hooks.md                 ← Context loading hooks
│   ├── subject-detection.md             ← Auto-load correct skill
│   ├── teaching-style.md                ← Socratic method + encouragement
│   └── word-budget.md                   ← Answer-length calibration
│
├── skills/                              ← 48 skill files
│   ├── mathematics/SKILL.md             ← Full Math syllabus + formulas
│   ├── science/
│   │   ├── physics/SKILL.md             ← Light, Electricity, Magnetism
│   │   ├── chemistry/SKILL.md           ← Reactions, Acids, Carbon, Metals
│   │   └── biology/SKILL.md             ← Life Processes, Heredity, Environment
│   ├── social-science/
│   │   ├── history/SKILL.md             ← Nationalism, Movements, Print Culture
│   │   ├── geography/SKILL.md           ← Resources, Agriculture, Industry
│   │   ├── political-science/SKILL.md   ← Power Sharing, Federalism, Parties
│   │   └── economics/SKILL.md           ← Development, Sectors, Globalisation
│   ├── english/SKILL.md                 ← First Flight + Footprints + Grammar
│   ├── tamil/SKILL.md                   ← Iyal 1-6 + Ilakkanam + Writing
│   │
│   ├── cbq-engine/SKILL.md              ← 🔴 50% of paper — CBQ format mastery
│   ├── assertion-reason/SKILL.md        ← 🔴 AR decision matrix trainer
│   ├── geography-maps/SKILL.md          ← 🟢 5 free marks — 50+ locations
│   ├── topper-patterns/SKILL.md         ← Answer templates from toppers
│   ├── mistake-dna/SKILL.md             ← WHY mistakes happen (C/R/P/X/A)
│   ├── ncert-mirror/SKILL.md            ← NCERT language compliance checker
│   ├── keyword-bank/SKILL.md            ← Chapter-specific examiner keywords
│   ├── ia-optimizer/SKILL.md            ← Silent 100 marks (20/subj × 5)
│   ├── time-manager/SKILL.md            ← Per-section pacing blueprints
│   ├── exam-hall-mode/SKILL.md          ← Strict simulation rules
│   ├── mental-balance/SKILL.md          ← Burnout prevention
│   ├── concept-graph/SKILL.md           ← Prerequisite dependency chains
│   ├── spaced-repetition/SKILL.md       ← Review intervals (1/3/7/14/30 days)
│   ├── exam-strategy/SKILL.md           ← 495+ master strategy
│   ├── answer-writing/SKILL.md          ← Board exam answer craft
│   ├── question-bank/SKILL.md           ← Personal question bank builder
│   ├── revision-planner/SKILL.md        ← Multi-pass revision framework
│   ├── weak-chapter-tracker/SKILL.md    ← Mastery tracking
│   └── [30 Other Topic-Specific Skills]
│
├── agents/                              ← 7 agents
│   ├── tutor.md                         ← Socratic subject tutor
│   ├── examiner.md                      ← CBSE-style question generator
│   ├── evaluator.md                     ← Answer marker per CBSE scheme
│   ├── math-step-evaluator.md           ← Math partial-credit step marking
│   ├── case-builder.md                  ← CBQ scenario generator
│   ├── planner.md                       ← Revision schedule builder
│   └── weak-spotter.md                  ← Weak chapter identifier
│
├── commands/                            ← 20 commands
│   ├── commands.md                      ← Master command registry
│   ├── practice.md                      ← /practice
│   ├── explain.md                       ← /explain
│   ├── mock-test.md                     ← /mock-test
│   ├── mark-my-answer.md                ← /mark-my-answer
│   ├── revision-plan.md                 ← /revision-plan
│   ├── chapter-summary.md               ← /chapter-summary
│   ├── cbq-practice.md                  ← /cbq-practice
│   ├── cbq-walkthrough.md               ← /cbq-walkthrough (thinking process)
│   ├── warm-up.md                       ← /warm-up (daily 20-min habit)
│   ├── map-drill.md                     ← /map-drill (geography)
│   ├── pre-board.md                     ← /pre-board (KV/Navodaya difficulty)
│   ├── exam-hall.md                     ← /exam-hall (strict simulation)
│   ├── generate-report.md               ← /generate-report (mentor view)
│   ├── ncertify.md                      ← /ncertify (NCERT language check)
│   ├── keyword-pass.md                  ← /keyword-pass (keyword coverage)
│   ├── paper-pacing.md                  ← /paper-pacing (time budget)
│   ├── ia-plan.md                       ← /ia-plan (IA 20/20 optimizer)
│   ├── check-in.md                      ← /check-in (burnout prevention)
│   └── graph-path.md                    ← /graph-path (prerequisites)
│
└── Prasanna/                            ← Personal Knowledge Base (Obsidian Wiki)
    ├── English/                         ← Chapters & Grammar (25 notes)
    ├── Math/                            ← Chapters 1-14 (14 notes)
    ├── Science/                         ← Physics, Chemistry, Biology (13 notes)
    ├── SST/                             ← Hist, Geo, Civics, Eco (21 notes)
    ├── Tamil/                           ← Iyal 1-6 & Ilakkanam (8 notes)
    ├── Templates/                       ← Note templates (5 files)
    ├── All Diagrams.md                  ← Master Diagram Hub
    ├── All Formulas.md                  ← Master Formula Hub
    ├── Keywords Bank.md                 ← Master Keyword Hub
    ├── Topper Answer Patterns.md        ← Best Practices Hub
    └── ?? Home.md                       ← Main Dashboard
```
