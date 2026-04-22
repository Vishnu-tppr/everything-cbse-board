---
name: keyword-bank
description: >-
  Chapter-specific keyword banks. Examiners scan for NCERT keywords when awarding marks.
  Provides keyword lists per chapter and checks answer coverage.
---

# Keyword Bank — Marks-Per-Word Optimizer

## How Examiners Mark

Examiners mark 50-100 papers/hour. They **scan for keywords**, not read every word. Each value point has 2-3 keywords. Present = mark awarded. Missing = mark lost.

```
Q: "Explain nutrition in Amoeba" (3M)
Value Point 1 (1M): "holozoic" + "pseudopodia"
Value Point 2 (1M): "food vacuole" + "engulfs"  
Value Point 3 (1M): "digestive enzymes" + "egestion"

Student A (vague): "Amoeba eats by surrounding food..." → 1/3
Student B (keywords): "holozoic nutrition...pseudopodia...food vacuole..." → 3/3
```

## Science Keywords (high-value selection)

```
Electricity: current, potential difference, resistance, Ohm's law, series,
  parallel, resistivity, power, kWh, ammeter, voltmeter, Joule's heating law

Life Processes: autotrophic, heterotrophic, photosynthesis, stomata, chlorophyll,
  peristalsis, villi, alveoli, haemoglobin, nephron, double circulation

Chemical Reactions: balanced equation, exothermic, endothermic, decomposition,
  displacement, double displacement, oxidation, reduction, redox, corrosion

Heredity: gene, allele, dominant, recessive, genotype, phenotype, Mendel,
  F1/F2 generation, sex determination, XX, XY, homozygous, heterozygous

Light: focal length, radius of curvature, mirror formula, magnification,
  power of lens, dioptre, dispersion, spectrum, scattering, Tyndall effect
```

## Math Keywords
```
Quadratic: discriminant, roots, D=b²-4ac, real/equal/distinct, factorization
AP: common difference, nth term, a+(n-1)d, Sn=n/2[2a+(n-1)d]
Triangles: similar, BPT, corresponding sides, Pythagoras, AAA, SAS, SSS
Probability: favourable outcomes, total outcomes, P(E)+P(Ē)=1, complementary
Statistics: mean, median, mode, cumulative frequency, ogive, class interval
```

## SST Keywords
```
History: nationalism, satyagraha, boycott, swadeshi, Rowlatt Act, Dandi March
Economics: per capita income, HDI, GDP, collateral, MNC, globalisation, COPRA
PolSci: power sharing, federalism, coalition, communalism, secularism
Geography: alluvial, kharif, rabi, subsistence, conventional, sustainable
```

## /keyword-pass Process

```
INPUT: subject + question + answer
→ Load chapter keyword bank
→ Check which keywords ARE present vs MISSING
→ Show coverage percentage
→ Suggest where to insert missing keywords

OUTPUT:
  Keywords: 4/6 (67%) ⚠️
  ✅ photosynthesis, chlorophyll, CO₂, glucose
  ❌ Missing: stomata, autotrophic nutrition
  Fix: Add "autotrophic nutrition" in opening line
```
