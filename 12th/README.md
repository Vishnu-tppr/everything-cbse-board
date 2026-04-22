# CBSE 12th Tools Ecosystem Architecture

Below is the complete architectural map of the CBSE preparation ecosystem for Grade 12 (Batch 2026-27), including all orchestration layers, behavior rules, subject skills, autonomous agents, execution commands, the deployable package, and the personal Obsidian knowledge base (`Prasanna-12`).

```text
cbse-12th-tools/
├── CBSE12.md                            ← Master index (You are here)
├── AGENTS.md                            ← Autonomous orchestration brain
│
├── rules/                               ← Always-active (8 files)
│   ├── accuracy.md                      ← NCERT & standard reference fact-checking
│   ├── agent-chaining.md                ← Agent-to-agent auto-triggers
│   ├── answer-format.md                 ← CBSE 12th answer structure (step marking)
│   ├── derivation-first.md              ← Prioritize derivations/proofs
│   ├── session-hooks.md                 ← Context loading hooks
│   ├── subject-detection.md             ← Auto-load correct stream (PCMB/PCMC)
│   ├── teaching-style.md                ← Socratic method
│   └── word-budget.md                   ← Answer-length calibration
│
├── skills/                              ← PCMB and PCMC specialized skills
│   ├── shared/                          ← Common core subjects
│   │   ├── physics/SKILL.md             ← Derivations, Numericals, Optics, EM
│   │   ├── chemistry/SKILL.md           ← Organic Reactions, Physical, Inorganic
│   │   └── mathematics/SKILL.md         ← Calculus, Vectors, 3D Geometry
│   ├── pcmb/                            ← Medical/NEET stream focus
│   │   ├── biology/SKILL.md             ← Genetics, Reproduction, Biotechnology
│   │   └── neet-strategy/SKILL.md       ← Board + NEET balance
│   ├── pcmc/                            ← Engineering/JEE stream focus
│   │   ├── computer-science/SKILL.md    ← Python, SQL, Networking
│   │   └── jee-strategy/SKILL.md        ← Board + JEE balance
│   ├── common/                          ← General skills
│   │   ├── english-core/SKILL.md        ← Literature & Writing Skills
│   │   ├── cbq-engine/SKILL.md          ← Case Based Questions generator
│   │   ├── derivation-bank/SKILL.md     ← Master repository of derivations
│   │   ├── practical-guide/SKILL.md     ← 30-mark practical exams & viva
│   │   ├── ncert-mirror/SKILL.md        ← NCERT strict terminology
│   │   ├── keyword-bank/SKILL.md        ← Subject-wise examiner keywords
│   │   ├── formula-bank/SKILL.md        ← Master formula repository
│   │   ├── ia-optimizer/SKILL.md        ← 20 marks Internal Assessment optimizer
│   │   ├── exam-strategy/SKILL.md       ← 490+ Master Strategy
│   │   ├── answer-writing/SKILL.md      ← Structure for 1, 2, 3, 5 mark answers
│   │   ├── time-manager/SKILL.md        ← Pacing guide (Total 180 mins)
│   │   ├── revision-planner/SKILL.md    ← Multi-pass revision framework
│   │   ├── spaced-repetition/SKILL.md   ← Review intervals
│   │   ├── mistake-dna/SKILL.md         ← Error categorization
│   │   ├── weak-chapter-tracker/SKILL.md← Tracking sub-topics below 70%
│   │   ├── mental-balance/SKILL.md      ← Burnout prevention & stress management
│   │   └── topper-patterns/SKILL.md     ← Answer templates from toppers
│
├── agents/                              ← 8 agents
│   ├── tutor.md                         ← Socratic subject tutor
│   ├── examiner.md                      ← CBSE-style question generator
│   ├── evaluator.md                     ← Answer marker per CBSE scheme
│   ├── practical-examiner.md            ← Viva prep and practical check
│   ├── neet-drill.md                    ← NEET MCQ pattern generator
│   ├── jee-drill.md                     ← JEE Mains/Advanced pattern generator
│   ├── planner.md                       ← Revision schedule builder
│   └── weak-spotter.md                  ← Weak chapter identifier
│
├── commands/                            ← 22 commands
│   ├── practice.md                      ← /practice
│   ├── explain.md                       ← /explain
│   ├── mock-test.md                     ← /mock-test
│   ├── mark-my-answer.md                ← /mark-my-answer
│   ├── revision-plan.md                 ← /revision-plan
│   ├── chapter-summary.md               ← /chapter-summary
│   ├── derivation-drill.md              ← /derivation-drill
│   ├── practical-check.md               ← /practical-check
│   ├── neet-mcq.md                      ← /neet-mcq
│   ├── jee-mcq.md                       ← /jee-mcq
│   ├── cbq-practice.md                  ← /cbq-practice
│   ├── cbq-walkthrough.md               ← /cbq-walkthrough
│   ├── warm-up.md                       ← /warm-up
│   ├── pre-board.md                     ← /pre-board
│   ├── exam-hall.md                     ← /exam-hall
│   ├── generate-report.md               ← /generate-report
│   ├── ncertify.md                      ← /ncertify
│   ├── keyword-pass.md                  ← /keyword-pass
│   ├── paper-pacing.md                  ← /paper-pacing
│   ├── ia-plan.md                       ← /ia-plan
│   ├── check-in.md                      ← /check-in
│   └── graph-path.md                    ← /graph-path
│
├── claude-ai-upload/                    ← Unified payload
│   ├── skill-commands-and-rules.md      ← 🔴 ALL agents + commands + rules in ONE file
│   ├── vault-knowledge-base.md          ← 🔵 ALL Prasanna-12 vault notes in ONE file
│   └── skill-*.md                       ← Copied and flattened skill files
│
├── mcp-server/                         ← Claude Desktop bridge
│   ├── src/                             ← TypeScript logic
│   └── package.json                     ← Dependencies
│
├── generate_upload.py                   ← Skill/Agent/Command bundler
├── generate_vault_knowledge.py          ← Obsidian vault bundler
├── sync_upload_folder.py                ← 🟢 Master Orchestrator (Run this)
│
└── Prasanna-12/                         ← Personal Knowledge Base (Obsidian Wiki)
    ├── Physics/                         ← Chapters & Notes
    ├── Chemistry/                       ← Chapters & Notes
    ├── Mathematics/                     ← Chapters & Notes
    ├── Biology/                         ← Chapters & Notes
    ├── Computer-Science/                ← Chapters & Notes
    ├── English/                         ← Literature & Grammar
    ├── Templates/                       ← Note templates
    ├── All Diagrams.md                  ← Master Diagram Hub
    ├── All Formulas.md                  ← Master Formula Hub
    ├── All Derivations.md               ← Master Derivations List
    ├── Keywords Bank.md                 ← Master Keyword Hub
    ├── Strategy Hub.md                  ← Strategy Dashboard
    ├── Topper Answer Patterns.md        ← Best Practices Hub
    └── Home.md                          ← Main Dashboard
```
