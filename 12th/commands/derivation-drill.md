---
name: derivation-drill
description: >-
  Practice high-stakes CBSE 12th derivations (Physics/Math). 
  Scaffolds the derivation step-by-step to ensure 100% accuracy in Section C/E.
---

# /derivation-drill Command — The Proof Master

In CBSE Grade 12 Physics and Mathematics, derivations account for nearly **15-20% of the total theory marks**. The `/derivation-drill` command is designed to ensure you never lose a single mark in these high-stakes proofs.

## Command Syntax
```
/derivation-drill [subject] [topic_or_law] [mode]
```

## Parameter Guide

| Parameter | Required | Options | Default | Description |
|-----------|----------|---------|---------|-------------|
| **subject** | Yes | physics, mathematics | physics | Only applicable to these two. |
| **topic** | Yes | e.g., "Gauss Law", "Lens Maker", "Integration by Parts" | — | The specific derivation to practice. |
| **mode** | No | hint, scaffold, test | scaffold | hint = just the start, scaffold = step-by-step, test = full proof. |

---

## How It Works (Scaffold Mode)

Instead of just showing the derivation, the command guides you through it like an interactive tutor:

1. **The Starting Statement:** "Consider a point charge $q$ at the center of a Gaussian sphere..."
2. **The Visual/Diagram:** Describes what you should be drawing.
3. **The First Equation:** Asks you to state the governing law (e.g., "Write the formula for electric flux").
4. **The Logical Jump:** Guides you through the calculus (e.g., "Now, what is the surface integral of $dA$ for a sphere?").
5. **The Conclusion:** Reaching the final boxed formula.

---

## High-Frequency Derivation List (495+ Target)

### 🔭 Physics (The Big 10)
1. **Electric Field of Dipole** (Axial and Equatorial).
2. **Gauss's Law Applications** (Infinite wire, Thin sheet, Spherical shell).
3. **Capacitance of Parallel Plate** (With and without dielectric).
4. **Drift Velocity and Current Relation** ($I = neAv_d$).
5. **Biot-Savart Law application** (Field on the axis of a circular loop).
6. **Ampere's Circuital Law application** (Solenoid).
7. **Lens Maker's Formula** (Guaranteed high-frequency).
8. **Huygens' Principle** (Proof of Reflection/Refraction).
9. **Fringe Width in YDSE** (Young's Double Slit).
10. **Bohr's Model** (Radius and Energy of nth orbit).

### 📐 Mathematics (The Proof Core)
1. **Inverse Trigonometric Properties.**
2. **Integration by Parts** (UV Rule).
3. **Shortest Distance between Skew Lines.**
4. **Equation of a Plane** (Normal form / passing through 3 points).
5. **Bayes' Theorem** (Logical proof).

---

## Marking Strategy (The Examiner's Eye)
- **1 Mark:** Correct starting diagram and "Consider..." statement.
- **2 Marks:** Correct mathematical progression with logical steps.
- **1 Mark:** Final formula with proper notation.
- **1 Mark:** Stating the conditions/assumptions (e.g., "Small aperture", "Paraxial rays").

---

## Usage Example

` /derivation-drill physics "gauss law thin sheet" scaffold `

> **Output:**
> ### ⚡ Derivation Drill: Gauss Law (Infinite Plane Sheet)
> **Step 1:** Draw an infinite plane sheet of charge with density $\sigma$.
> **Step 2:** Imagine a cylindrical Gaussian surface passing through it.
> **Question:** What is the total flux through the two end caps of the cylinder?
> [Student answers]
> **Tutor:** Correct! $Φ = 2EA$. Now, apply Gauss's Law...
