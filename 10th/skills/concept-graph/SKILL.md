---
name: concept-graph
description: >-
  NCERT chapter dependency graph for Math and Science. Shows prerequisite chains so
  students fix ROOT causes of weakness, not symptoms. "I can't do Trig" often means
  "I didn't master Similar Triangles."
---

# Concept Graph Navigator

## The Prerequisite Problem

```
Student says: "I don't understand Trigonometric Identities"
Real issue:   Didn't master algebraic manipulation in Polynomials
              → Can't simplify trig expressions
              → Identities feel impossible

Without graph: Practice 100 trig problems (still stuck)
With graph:    Fix Polynomials first → Trig becomes easy
```

## Mathematics Dependency Graph

```
REAL NUMBERS
  └──→ POLYNOMIALS
        ├──→ PAIR OF LINEAR EQUATIONS
        │     └──→ QUADRATIC EQUATIONS
        │           └──→ ARITHMETIC PROGRESSIONS
        └──→ TRIGONOMETRY (algebraic manipulation needed)
              └──→ HEIGHTS & DISTANCES (apply trig ratios)

TRIANGLES (similarity, BPT)
  ├──→ COORDINATE GEOMETRY (distance, section formula)
  ├──→ TRIGONOMETRY (right triangle ratios)
  └──→ CIRCLES (tangent theorems use triangle properties)
        └──→ CONSTRUCTIONS (tangent + similar triangle constructions)

MENSURATION (independent — but needs arithmetic skills)
  └──→ SURFACE AREAS & VOLUMES (combination of solids)

STATISTICS (independent)
  └──→ PROBABILITY (basic probability uses counting)
```

## Science Dependency Graphs

### Physics
```
ELECTRICITY (Ohm's law, circuits)
  └──→ MAGNETIC EFFECTS (electromagnetic induction needs circuit knowledge)
  
LIGHT — REFLECTION & REFRACTION (independent — mirrors, lenses)
  └──→ HUMAN EYE (applies lens concepts to biology)
```

### Chemistry
```
CHEMICAL REACTIONS (balancing, types)
  ├──→ ACIDS, BASES & SALTS (neutralization = reaction type)
  ├──→ METALS & NON-METALS (reactivity = reaction patterns)
  └──→ CARBON COMPOUNDS (organic reactions build on reaction types)
```

### Biology
```
LIFE PROCESSES (nutrition, respiration, circulation, excretion)
  ├──→ CONTROL & COORDINATION (nervous + endocrine systems)
  ├──→ REPRODUCTION (cell division, DNA)
  │     └──→ HEREDITY & EVOLUTION (genes, Mendel, speciation)
  └──→ ENVIRONMENT (ecosystem, food chains, biodiversity)
```

## /graph-path Command

```
/graph-path math trigonometry

OUTPUT:
  📊 PREREQUISITE CHAIN FOR: Trigonometry

  Level 0 (Foundation):
    ✅ Real Numbers → assumed mastered
  
  Level 1 (Must know first):
    ⚠️ Polynomials → algebraic manipulation skills
    ⚠️ Triangles → similar triangles, Pythagoras
  
  Level 2 (Target chapter):
    🎯 Trigonometry → ratios, identities, complementary angles
  
  Level 3 (Builds on this):
    ⏳ Heights & Distances → application of trig ratios

  RECOMMENDED PATH:
    1. Verify: Can you solve polynomial factorization? [quick test]
    2. Verify: Do you know Pythagoras theorem? [quick test]
    3. If YES to both → proceed to Trigonometry
    4. If NO → /fix-foundation math trigonometry
```

## /fix-foundation Command

```
/fix-foundation math trigonometry

OUTPUT:
  🔧 FOUNDATION FIX FOR: Trigonometry

  Your weak foundation is likely in:
  
  1. POLYNOMIALS (2 days):
     - Practice: Factorization of quadratic expressions
     - Practice: Simplifying algebraic fractions
     - Test: 10 questions — must score 8+/10
  
  2. TRIANGLES (1 day):
     - Review: Pythagoras theorem + 5 numerical problems
     - Review: Similar triangles (AA, SAS, SSS criteria)
     - Test: 5 questions — must score 4+/5
  
  THEN: Start Trigonometry with solid foundation
  ESTIMATED TIME: 3 days to fix → then Trig in 4 days = 1 week total
```
