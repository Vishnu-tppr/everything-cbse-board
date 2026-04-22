---
name: subject-detection
description: >-
  Subject Detection Rules
---

# Subject Detection Rules

## Auto-Load Skills Based on Context

When a student message is received, scan for subject-related keywords and AUTOMATICALLY load the relevant SKILL.md file before responding.

### Detection Priority

If multiple subjects are detected, prioritize in this order:
1. Explicitly mentioned subject ("In math..." / "For science...")
2. Chapter name detected ("quadratic equations" → Math)
3. Concept keyword detected ("photosynthesis" → Biology)
4. Previous conversation context (continue same subject)

### Keyword → Skill Mapping

```
MATHEMATICS → skills/mathematics/SKILL.md
  Triggers: equation, polynomial, triangle, circle, AP, arithmetic progression,
  trigonometry, sin, cos, tan, probability, statistics, mean, median, mode,
  coordinate, algebra, geometry, mensuration, real numbers, HCF, LCM,
  quadratic, linear, bisector, tangent, sector, volume, surface area

PHYSICS → skills/science/physics/SKILL.md
  Triggers: light, reflection, refraction, mirror, lens, convex, concave,
  electricity, current, voltage, resistance, ohm, circuit, magnetic, motor,
  generator, electromagnetic, human eye, power, dioptre, focal length

CHEMISTRY → skills/science/chemistry/SKILL.md
  Triggers: chemical reaction, acid, base, salt, metal, carbon, compound,
  pH, oxidation, reduction, displacement, corrosion, ionic, covalent,
  ethanol, ethanoic, soap, detergent, reactivity, balancing equation

BIOLOGY → skills/science/biology/SKILL.md
  Triggers: life process, nutrition, respiration, digestion, heart, blood,
  excretion, nephron, kidney, reproduction, heredity, mendel, gene, DNA,
  evolution, ecosystem, food chain, environment, ozone, photosynthesis

HISTORY → skills/social-science/history/SKILL.md
  Triggers: nationalism, french revolution, gandhi, non-cooperation,
  civil disobedience, salt march, dandi, bismarck, mazzini, garibaldi,
  industrialisation, print culture, global world, world war

GEOGRAPHY → skills/social-science/geography/SKILL.md
  Triggers: resource, soil, agriculture, crop, mineral, industry,
  manufacturing, transport, dam, map work, forest, water, railway,
  port, iron ore, coal, alluvial, black soil, kharif, rabi

POLITICAL SCIENCE → skills/social-science/political-science/SKILL.md
  Triggers: power sharing, federalism, democracy, political party,
  BJP, congress, constitution, amendment, panchayat, municipality,
  belgium, sri lanka, communalism, secularism, caste

ECONOMICS → skills/social-science/economics/SKILL.md
  Triggers: development, GDP, HDI, per capita, sector, primary, secondary,
  tertiary, money, credit, bank, loan, globalisation, MNC, consumer,
  WTO, NREGA, organized, unorganized, SHG, microfinance

ENGLISH → skills/english/SKILL.md
  Triggers: first flight, footprints, poem, letter writing, grammar, tense,
  reported speech, passage, comprehension, mandela, anne frank, lencho,
  custard, amanda, fog, dust of snow, necklace, bholi, thief's story

TAMIL → skills/tamil/SKILL.md
  Triggers: tamil, ilakkanam, ceyyul, iyal, katturai, kaditham,
  eluthu, chol, ani, vetrrumai, urai, peyarchchol, vinaichol

CROSS-CUTTING (load alongside subject skill):
  "how to write answer" → skills/answer-writing/SKILL.md
  "exam strategy" / "how to score" → skills/exam-strategy/SKILL.md
  "revision plan" / "study schedule" → skills/revision-planner/SKILL.md
  "weak chapter" / "low marks" → skills/weak-chapter-tracker/SKILL.md
  "question bank" / "practice questions" → skills/question-bank/SKILL.md
```

### Multi-Skill Loading

When a question spans multiple subjects (e.g., "compare pH scale in chemistry with environmental impact in biology"), load BOTH relevant skills.

### Context Persistence

Once a subject is detected, maintain that context for the conversation until:
- Student explicitly switches ("now let's do math")
- A different subject keyword is detected
- Student uses a command with a different subject parameter
