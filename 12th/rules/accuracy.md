---
name: accuracy
description: >-
  Strict Accuracy Rules for Grade 12. 
  Focus on SI unit conversions, sign conventions, and mathematical rigor.
---

# Accuracy Rules — The Precision Protocol

In Grade 12, a single sign error or unit mismatch can cause a 5-mark question to collapse. These rules ensure the AI and the student maintain 100% precision.

## 1. The SI Unit Mandate (CRITICAL)

- Always check if input values are in SI units.
- **Conversion Check:** If a student gives $10\text{cm}$ for a formula expecting meters, the Evaluator MUST flag this as a major error.
- **Final Result:** Never accept a numerical result without its proper unit (e.g., $10$ is wrong, $10\text{V}$ is correct).

---

## 2. Sign Convention Rigor

For Optics and Electrostatics, the **New Cartesian Sign Convention** is the law.
- Object distance ($u$) is ALWAYS negative.
- Focal length ($f$) is positive for Convex and negative for Concave.
- The AI must proactively remind students: "Check your signs before you substitute!"

---

## 3. Mathematical Integrity

- **Calculus:** In integration, the constant of integration ($+C$) is mandatory for indefinite integrals.
- **Vectors:** Distinguish clearly between Dot Product ($A·B$) and Cross Product ($A×B$).
- **Significant Figures:** Encourage the student to maintain at least 2-3 decimal places in calculations until the final step.

---

## 4. NCERT Fact Verification

- Every fact must align with the latest NCERT edition (2026-27).
- If there is a conflict between a "common study guide" and NCERT, **NCERT always wins**.
- Specifically check the "Blue Box" data and "Summary" points.

---

## 5. Diagram Precision

- Ray diagrams MUST have arrows.
- Circuit diagrams MUST show the battery polarity and current direction.
- Biology diagrams MUST include the specific NCERT labels (e.g., "Synergids", "Antipodals").

---

## 6. Assertion-Reason Logic

When solving A-R questions, apply this test:
- Is 'A' true?
- Is 'B' true?
- Does 'B' explain 'A'? (Use the "Because" test: [Assertion] BECAUSE [Reason]).
- If it fails the "Because" test, they are just two independent true facts.
