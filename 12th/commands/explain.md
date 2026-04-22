---
name: explain
description: >-
  Advanced conceptual breakdown of 12th-grade topics. 
  Chains to tutor agent for Socratic guidance, derivations, and board-exam context.
---

# /explain Command — The Conceptual Deep-Dive

The `/explain` command is your main gateway to understanding complex 12th-grade logic. It doesn't just "tell you the fact"; it triggers the **Socratic Tutor** to help you *derive* the understanding yourself.

## Command Syntax
```
/explain [subject] [topic] [depth]
```

## Parameter Guide

| Parameter | Required | Options | Default | Description |
|-----------|----------|---------|---------|-------------|
| **subject** | Yes | physics, chemistry, biology, math, computer-science, english | — | The subject of the query. |
| **topic** | Yes | Any concept name (e.g., "Huygens Principle", "Nernst Equation") | — | The specific concept to explain. |
| **depth** | No | beginner, advanced, topper | topper | beginner = basic intuition, topper = full technical depth + exam tips. |

---

## What It Does

1. **Context Mapping:** It searches the `skills/` directory and your personal `Prasanna-12` notes to find current progress and relevant definitions.
2. **Socratic Activation:** Invokes the **Tutor** agent with a "NCERT-First" instruction set.
3. **Logic Flow:**
   - **Phase 1 (Intuition):** Starts with a real-world analogy (e.g., "Think of potential like the pressure in a water pipe").
   - **Phase 2 (Mathematical Rigor):** Introduces the variables and the mathematical relationship (The Derivation).
   - **Phase 3 (Exam Alignment):** Highlights the "Value Points" needed to score full marks in the board exam.
   - **Phase 4 (Competitive Bridge):** Mentions how this concept is twisted in JEE/NEET questions.

---

## Explanation Hierarchy

### 🔬 Science (Physics/Chemistry/Bio)
- **Physics:** Focus on the "Direction" and "Units". Always includes a mental diagram description.
- **Chemistry:** Focus on "Electronic Effects" (Organic) or "Energy Shifts" (Physical).
- **Biology:** Focus on the "Biological Significance" and "Process Order".

### 📐 Mathematics
- **Concept:** Why do we use this specific method (e.g., "Why use integration by parts here?").
- **Property:** The underlying theorem (e.g., "The fundamental theorem of calculus").

### 💻 Computer Science
- **Dry Run:** Explains code by tracing variable values step-by-step.
- **Complexity:** Explains why one logic is faster than another.

---

## Usage Examples

### Example 1: Physics Concept
` /explain physics "huygens principle" topper `
> Result: Socratic guidance through the concept of wavefronts, secondary wavelets, and the proof of reflection/refraction laws.

### Example 2: Chemistry Reaction
` /explain chemistry "sn1 mechanism" advanced `
> Result: Step-by-step logic of carbocation formation, stability, and the role of polar protic solvents.

### Example 3: Math Property
` /explain math "definite integrals p4 property" `
> Result: Proof of the King Property ($∫ f(a-x)$) and 3 examples where it simplifies complex integrations.

---

## Related Commands
- `/derivation-drill` — If the explanation involves a major board derivation.
- `/practice` — To test your understanding immediately after the explanation.
- `/ncertify` — To ensure your own explanation of the concept matches board standards.
