---
name: book-navigator
description: >-
  Maps every CBSE Grade 10 chapter to specific book sections, exercises, and practice
  material. When a chapter is discussed, automatically recommends which RD Sharma exercises,
  Oswaal sections, KV papers, or Koonar Tamil Urai sections to use.
---

# Book Navigator — Chapter-to-Resource Mapping

## How This Works (Autonomous)

When ANY agent discusses a chapter, this skill AUTO-LOADS the right book reference.
The student never needs to ask "which book should I use?" — it's embedded in every response.

```
TRIGGER: Any chapter keyword detected
ACTION: Load relevant book section alongside subject SKILL.md
OUTPUT: Add "📚 Book Work:" section to every response
```

---

## My Assessment of Each Book

### RD Sharma — Mathematics
```
VERDICT: EXCELLENT for selective practice. NOT for cover-to-cover reading.
STRENGTHS:
  ✅ 3-4× more problems than NCERT per chapter
  ✅ Graded difficulty (Level 1, Level 2, VSA, MCQ)
  ✅ Covers every possible question pattern
  ✅ Step-by-step solved examples
WEAKNESSES:
  ⚠️ Many problems are ABOVE board level (waste of time if done blindly)
  ⚠️ Some solutions use non-NCERT methods (examiners prefer NCERT methods)
  ⚠️ Can be overwhelming — 50+ problems per exercise

STRATEGY: NCERT FIRST → then RD Sharma Level 1 + selected Level 2 only
  Skip Level 3 and "Revision" exercises (above board level)
  Focus on: VSA + MCQ sections (directly match board pattern)
```

### Oswaal — Science, Social Science, English
```
VERDICT: THE BEST book for final 3-4 months board prep. Period.
STRENGTHS:
  ✅ Chapter-wise previous year questions (PYQ) sorted by mark type
  ✅ Mind maps and concept maps (perfect for revision)
  ✅ Toppers' answer sheets reproduced (learn format)
  ✅ Solved sample papers matching CBSE pattern
  ✅ Competency-based questions (CBQ) section
  ✅ Self-assessment papers with answers
WEAKNESSES:
  ⚠️ Answers sometimes too detailed (examiners don't need that much)
  ⚠️ Not for first-time learning (assumes NCERT is done)

STRATEGY: Use AFTER completing NCERT
  Phase 1 (concept building): NCERT only
  Phase 2 (practice): Oswaal chapter-wise questions
  Phase 3 (revision): Oswaal mind maps + sample papers
```

### Koonar Tamil Urai
```
VERDICT: Standard reference for CBSE Tamil. Essential for literature.
STRENGTHS:
  ✅ Comprehensive prose and poetry explanations
  ✅ Grammar sections with exercises
  ✅ Question-answer format matching board pattern
  ✅ Supplementary reading material
WEAKNESSES:
  ⚠️ Grammar section needs supplementing with practice worksheets
  ⚠️ Creative writing section could be stronger

STRATEGY: Primary source for Tamil literature understanding
  Supplement with: SCERT TN Tamil textbook for grammar practice
  Use previous year papers for exam-specific prep
```

### KV (Kendriya Vidyalaya) Papers
```
VERDICT: GOLD STANDARD for pre-board stress testing.
STRENGTHS:
  ✅ Tougher than actual CBSE board papers (by design)
  ✅ More application-based questions
  ✅ Better CBQ scenarios
  ✅ Pan-India standard (not regional bias)
  ✅ Sets by experienced teachers who know examiner patterns
WEAKNESSES:
  ⚠️ Can be demoralizing if attempted too early (harder difficulty)
  ⚠️ Some schools' papers are better than others

STRATEGY: Use ONLY in last 2 months (Jan-Feb before March boards)
  If score on KV paper > 70/80 → board score will be 75-80/80
  Use for: identifying gaps, building exam stamina
```

### Navodaya (JNV) Papers
```
VERDICT: Excellent for analytical thinking practice.
STRENGTHS:
  ✅ Strong analytical and application questions
  ✅ Biology and SST questions are particularly challenging
  ✅ Tests deeper understanding than CBSE sample papers
WEAKNESSES:
  ⚠️ Slightly different paper pattern than CBSE
  ⚠️ Harder to find consistent quality sets

STRATEGY: Use for chapters where student is already strong (stretch practice)
  Best subjects for JNV papers: Science, Social Science
  Skip for: Tamil (not available), English (different pattern)
```

### CBSE Official Sample Papers
```
VERDICT: MANDATORY. This is what the actual paper will look like.
STRENGTHS:
  ✅ Released by CBSE itself — exact pattern match
  ✅ Includes marking scheme
  ✅ Shows CBQ/AR question format precisely
WEAKNESSES:
  ⚠️ Only 1-2 papers per year (not enough for full practice)

STRATEGY: Do these FIRST before any other sample papers
  Treat as a diagnostic: "Can I score 75+/80 on this?"
  If yes → move to KV papers for harder practice
  If no → go back to chapter-wise practice
```

### Toppers' Answer Sheets
```
VERDICT: Study for FORMAT, not content. Content comes from NCERT.
WHAT TO LEARN:
  ✅ How they structure 5-mark answers (intro → points → diagram → conclusion)
  ✅ How they underline keywords
  ✅ How they draw diagrams (clean, labeled, with ruler)
  ✅ How they manage space (not too much, not too little)
  ✅ How they present Math step-marking

WHERE TO FIND:
  - Oswaal includes reproduced topper sheets
  - Some CBSE regional offices publish them online
  - Ask school teachers for previous year best papers

STRATEGY: Study 3-5 topper sheets per subject → internalize format
  → Use our topper-patterns/SKILL.md as the extracted template
```

---

## Chapter → Book Mapping

### Mathematics (NCERT → RD Sharma selective)

| Chapter | NCERT Exercises | RD Sharma Focus | Skip |
|---------|----------------|-----------------|------|
| 1. Real Numbers | Ex 1.1-1.4 (all) | VSA + MCQ only | Level 2+ problems |
| 2. Polynomials | Ex 2.1-2.4 (all) | Level 1 + VSA | Level 2 Q15+ |
| 3. Pair of Linear Eq | Ex 3.1-3.7 (all) | Level 1 (all methods) | Graphical extra Qs |
| 4. Quadratic Eq | Ex 4.1-4.4 (all) | Level 1 + Level 2 (first 10) | Word problems 20+ |
| 5. AP | Ex 5.1-5.4 (all) | Level 1 + MCQ | Level 2 Q15+ |
| 6. Triangles | Ex 6.1-6.6 (all) | Level 1 + proof practice | Construction extras |
| 7. Coordinate Geo | Ex 7.1-7.4 (all) | Level 1 + MCQ | Section formula edge cases |
| 8. Trigonometry | Ex 8.1-8.4 (all) | Level 1 + Level 2 (first 15) | Identity proofs beyond NCERT |
| 9. Applications of Trig | Ex 9.1 (all) | Level 1 (all) | Complex 3-object problems |
| 10. Circles | Ex 10.1-10.2 (all) | Level 1 + proofs | Tangent constructions extras |
| 11. Constructions | Ex 11.1-11.2 (all) | Practice set only | Skip extras |
| 12. Areas (Circles) | Ex 12.1-12.3 (all) | Level 1 + MCQ | Segment area extras |
| 13. Surface Areas/Vol | Ex 13.1-13.5 (all) | Level 1 + Level 2 (first 10) | Frustum edge cases |
| 14. Statistics | Ex 14.1-14.4 (all) | Level 1 + MCQ | Ogive extras |
| 15. Probability | Ex 15.1-15.2 (all) | Level 1 + MCQ | Conditional probability |

### Science (NCERT → Oswaal chapter-wise)

| Chapter | NCERT Must-Do | Oswaal Section | KV Paper Focus |
|---------|-------------|----------------|----------------|
| Chemical Reactions | All intext + exercises | PYQ 2019-2025 + CBQ | Balancing equations |
| Acids Bases Salts | All intext + exercises | PYQ + mind map | pH numericals |
| Metals Non-Metals | All intext + exercises | PYQ + reactivity table | Ionic compound Qs |
| Carbon Compounds | All intext + exercises | PYQ + nomenclature | Functional group CBQ |
| Life Processes | All intext + exercises | PYQ + diagrams | Heart/nephron diagrams |
| Control & Coordination | All intext + exercises | PYQ + nerve diagram | Reflex arc CBQ |
| Reproduction | All intext + exercises | PYQ + diagrams | Flower diagram |
| Heredity & Evolution | All intext + exercises | PYQ + Mendel table | Genetics cross CBQ |
| Light | All intext + exercises | PYQ + ray diagrams | Lens numericals |
| Human Eye | All intext + exercises | PYQ + defect diagrams | Dispersion CBQ |
| Electricity | All intext + exercises | PYQ + circuit Qs | Ohm's law numericals |
| Magnetic Effects | All intext + exercises | PYQ + Fleming rules | Motor/generator CBQ |
| Environment | All intext + exercises | PYQ + food chain | Ozone/waste CBQ |

### Social Science (NCERT → Oswaal → KV)

| Subject | NCERT | Oswaal Focus | KV Paper |
|---------|-------|-------------|----------|
| History Ch 1-5 | Full text + dates | Source-based PYQ | Document analysis |
| Geography Ch 1-7 | Full text + data | Map work PYQ | Map identification |
| PolSci Ch 1-7 | Full text + articles | Case study PYQ | Scenario analysis |
| Economics Ch 1-5 | Full text + stats | Data table PYQ | HDI comparison CBQ |

### English (NCERT → Oswaal → Wren & Martin)

| Section | NCERT Text | Oswaal | Extra |
|---------|-----------|--------|-------|
| First Flight (prose) | Full text + Qs | PYQ per chapter | Topper answer format |
| First Flight (poems) | Full text + Qs | PYQ per poem | Quote-based answers |
| Footprints (supp.) | Full text + Qs | PYQ per chapter | Character analysis |
| Grammar | NCERT exercises | Oswaal grammar sec | Wren & Martin Ch 1-20 |
| Writing | NCERT formats | Oswaal templates | Letter/paragraph practice |

### Tamil (Koonar Tamil Urai → SCERT)

| Section | Koonar Tamil Urai | SCERT Supplement | Practice |
|---------|-------------------|-----------------|----------|
| Iyal 1-6 (prose) | Full explanation + Q&A | - | Previous year Qs |
| Ceyyul (poetry) | Meaning + context | - | Memorization drill |
| Ilakkanam (grammar) | Rules + examples | SCERT grammar exercises | 50+ practice Qs |
| Katturai (essay) | Format + samples | - | Write 2 per week |
| Kaditham (letter) | Format + samples | - | Write 1 per week |

---

## Auto-Integration Rule

```
EVERY TIME a chapter is discussed, the response MUST include:

📚 BOOK WORK FOR THIS CHAPTER:
  ├── NCERT: [specific exercise numbers]
  ├── [Book]: [specific section/exercise/page range]
  ├── Practice: [specific paper type — Oswaal/KV/Sample]
  └── Timeline: [when to do what — NCERT first → book → practice]

EXAMPLE (after explaining Quadratic Equations):
  📚 BOOK WORK:
  ├── NCERT: Complete Ex 4.1-4.4 (mandatory)
  ├── RD Sharma: Level 1 all + Level 2 Q1-10 (selective reinforcement)
  ├── Oswaal: Chapter-wise PYQ (2019-2025) — focus on 5M long answer pattern
  ├── KV Paper: Practice any 2 papers — Quadratic section
  └── Timeline: NCERT (2 days) → RD Sharma (1 day) → Oswaal PYQ (1 day)
```
