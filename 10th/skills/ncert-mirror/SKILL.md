---
name: ncert-mirror
description: >-
  Checks student answers against NCERT-style language and keywords. CBSE examiners
  mark based on NCERT phrasing — coaching-centre jargon or vague language loses marks.
  This skill enforces NCERT-first answer framing.
---

# NCERT Language Mirror

## Why NCERT Language Matters

CBSE examiners use NCERT textbooks as the marking reference. The examiner's value-point sheet uses exact NCERT phrases. If your answer uses different words — even if technically correct — you risk losing marks because the examiner can't find the expected keyword.

```
❌ "The heart pushes blood through tubes in the body"
✅ "The heart pumps blood through blood vessels (arteries, veins, capillaries)"

❌ "Plants make food using sunlight"
✅ "Autotrophic nutrition: plants synthesize food through photosynthesis
    using CO₂, H₂O, and sunlight in the presence of chlorophyll"

❌ "Gandhi did a protest walk to the sea"
✅ "Gandhi initiated the Dandi March (Salt Satyagraha) on 12 March 1930"
```

## NCERT Style Rules

### Rule 1: Use Exact Technical Terms
```
NCERT says "peristaltic movement" → write "peristaltic movement"
  NOT "wave-like squeezing" or "pushing motion"

NCERT says "biodegradable waste" → write "biodegradable waste"
  NOT "waste that rots" or "decomposable garbage"

NCERT says "power sharing" → write "power sharing"
  NOT "dividing authority" or "splitting governance"
```

### Rule 2: Use NCERT Definitions First
```
When defining a term:
  Step 1: Give the NCERT textbook definition (exact or very close)
  Step 2: Then add your own explanation/example if needed
  
EXAMPLE:
  "Corrosion is the process of eating away of metals by the action of
   air, moisture, or chemicals. For example, rusting of iron occurs
   when iron reacts with oxygen and moisture to form iron oxide (rust)."
  
  → Line 1 is almost verbatim NCERT. Line 2 is the student's example.
```

### Rule 3: Detect and Flag Non-NCERT Language
```
COACHING JARGON (flag these):
  ❌ "electromotive force" in Grade 10 → NCERT uses "potential difference"
  ❌ "redox reaction" without defining it → NCERT introduces as "oxidation-reduction"
  ❌ "GDP at factor cost" → NCERT uses simpler "GDP" with explanation
  
VAGUE LANGUAGE (flag these):
  ❌ "it happens because of chemicals" → WHICH chemicals?
  ❌ "there was a big movement" → WHICH movement? WHEN?
  ❌ "the result was good" → WHAT result? HOW good?
```

### Rule 4: Subject-Specific NCERT Phrasing

#### Science NCERT Keywords
```
Biology:
  "autotrophic nutrition" not "self-feeding"
  "heterotrophic nutrition" not "eating other things"
  "double circulation" not "blood goes around twice"
  "reflex arc" not "automatic nerve path"
  "analogous organs" not "same-function different-origin organs"

Chemistry:
  "exothermic reaction" not "heat-releasing reaction"
  "reactivity series" not "metal activity order"
  "saturated hydrocarbon" not "carbon chain with all single bonds"
  "saponification" not "soap-making reaction"

Physics:
  "potential difference" not "voltage" (though voltage is acceptable)
  "power of accommodation" not "eye's focusing ability"
  "electromagnetic induction" not "making electricity with magnets"
  "lateral inversion" not "mirror flip"
```

#### SST NCERT Keywords
```
History:
  "Civil Disobedience Movement" not "salt protest"
  "Rowlatt Act" not "the unfair law"
  "satyagraha" not "peaceful protest" (satyagraha has specific NCERT meaning)

Economics:
  "per capita income" not "average earning"
  "Human Development Index" not "development score"
  "tertiary sector" not "service jobs"

Political Science:
  "horizontal distribution of power" not "same-level sharing"
  "coalition government" not "alliance government"
  "secular" not "religion-neutral" (NCERT defines secular specifically)
```

## /ncertify Process

```
INPUT: Student's answer + subject + chapter

STEP 1: Identify all technical terms the answer SHOULD contain
  (from NCERT chapter content)

STEP 2: Check which NCERT keywords are PRESENT ✅
  and which are MISSING ❌

STEP 3: Flag any non-NCERT language or coaching jargon

STEP 4: Suggest minimal edits:
  - Replace vague words with NCERT terms
  - Add missing keywords at natural insertion points
  - Keep student's voice — don't rewrite entirely

OUTPUT FORMAT:
  ┌────────────────────────────────────────┐
  │ 📖 NCERT LANGUAGE CHECK               │
  │                                        │
  │ Keywords present: 5/8 (62%)            │
  │ ✅ photosynthesis                      │
  │ ✅ chlorophyll                         │
  │ ✅ carbon dioxide                      │
  │ ❌ MISSING: "autotrophic nutrition"    │
  │ ❌ MISSING: "stomata"                  │
  │ ❌ MISSING: "light-dependent reaction" │
  │                                        │
  │ ⚠️ Non-NCERT detected:               │
  │   "food factory" → use "chloroplast"  │
  │   "tiny holes" → use "stomata"        │
  │                                        │
  │ SUGGESTED EDIT:                        │
  │   Line 2: Add "This is called          │
  │   autotrophic nutrition."              │
  │   Line 4: Replace "tiny holes in       │
  │   leaves" with "stomata"              │
  └────────────────────────────────────────┘
```

## Strict Mode

When enabled, the system:
1. Refuses to introduce facts not in NCERT textbook
2. Flags any "extra" information as optional
3. Ensures the core answer is 100% NCERT-sourced
4. Only adds outside references when clearly labelled as "Additional"
