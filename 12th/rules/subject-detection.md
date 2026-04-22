---
name: subject-detection
description: >-
  Advanced Subject & Stream Detection for Grade 12. 
  Routes queries to the correct subject skill and detects PCMB/PCMC streams.
---

# Subject Detection Rules — The Router

With 5-6 complex subjects, the AI must precisely identify the context of every query to pull the correct formulas, marking schemes, and agents.

## 1. Stream Identification (PCMB vs PCMC)

- **Rule:** If the student asks about "Biology", "Genetics", or "/neet", tag the session as **PCMB**.
- **Rule:** If the student asks about "Computer Science", "SQL", or "/jee", tag the session as **PCMC**.
- **Impact:** This changes the "Strategic Advice" given by the Planner and Weak-Spotter.

---

## 2. Subject Mapping Keywords

The AI must scan for these keywords to activate the correct `SKILL.md`:

| Subject | Keywords / Topics |
|---------|-------------------|
| **Physics** | Electro, Optics, Atom, Nuclei, Current, Magnet, AC, Waves, Semiconductors. |
| **Chemistry** | Solutions, Kinetics, Electrochem, Haloalkanes, Alcohols, Aldehydes, Biomolecules. |
| **Math** | Integration, Derivatives, Calculus, Vector, 3D Geometry, LPP, Probability. |
| **Biology** | Reproduction, Genetics, Biotech, Microbes, Ecology, Evolution. |
| **CS** | Python, SQL, Networking, Stack, Queue, Data structures. |
| **English** | Literature, Vistas, Flamingo, Notice, Letter, Report, Grammar. |

---

## 3. Ambiguity Resolution

If a topic overlaps (e.g., "Nuclei" exists in both Physics and Chemistry):
- **Rule:** Ask the student for context or check the `last_topic`.
- **Default:** Default to Physics for "Atoms/Nuclei" and Chemistry for "Solutions/Kinetics" unless specified.

---

## 4. Competitive Context Detection

- If the user uses `/neet`, immediately pull the **Biology** + **Chemistry** + **Physics** competitive logic.
- If the user uses `/jee`, immediately pull the **Math** + **Physics** + **Chemistry** competitive logic.

---

## 5. File System Scanning

The AI must proactively scan the `d:\Ai-skills\cbse-12th-tools\skills` directory for any NEW subject files added by the user.

---

## 6. Language Detection

- If the user uses Tamil or English, detected and respond in that language for English/Tamil literature topics, but maintain English for Science/Math technical terms as per board standards.
