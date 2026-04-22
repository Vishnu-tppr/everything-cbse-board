---
name: jee-mcq
description: >-
  Generate JEE-pattern MCQs and Numerical questions. 
  Focus on Multi-Concept integration, Calculus shortcuts, and logical speed. 
  PCMC stream only.
---

# /jee-mcq Command — The IIT-JEE Engine

The `/jee-mcq` command is designed for PCMC students targeting JEE Mains and Advanced. It focuses on the **Mathematics & Physics** logic needed to solve complex problems in under 2 minutes.

## Command Syntax
```
/jee-mcq [subject] [chapter] [complexity] [count]
```

## JEE Pattern Features

### 1. Multi-Concept Integration (Mains/Advanced)
Questions that require you to link two different chapters (e.g., "Finding the electric field (Physics) of a shape defined by a rotating curve (Calculus)").

### 2. Logical Shortcuts
- Teaches you how to use symmetry, unit-checking (dimensional analysis), and value-substitution to eliminate 2-3 options in seconds.
- Focuses on the **King Property** in Integrals and **L'Hopital's Rule** in Limits.

### 3. Question Formats
- **MCQ:** Single correct option.
- **Numerical Type:** No options; you must calculate the final integer/decimal value.
- **Multiple Correct:** (Advanced mode) Select all correct statements.

---

## What It Generates

- **Question Set:** `count` questions at the specified `complexity` (Mains or Advanced).
- **The "Logical Bridge":** A short hint explaining the *first* step needed to crack the problem.
- **The Shortcut:** A "Topper Method" that avoids long manual calculations.
- **The Pitfall:** Common calculation errors or "traps" in the question (e.g., "Forgot to check the sign of the determinant").

---

## Evaluation Logic

- **Correct:** +4 Marks.
- **Incorrect:** -1 Mark.
- **Unattempted:** 0 Marks.

---

## Usage Example

` /jee-mcq math "definite integrals" mains 3 `

> **Output:**
> ### 🚀 JEE Mathematics Drill: Definite Integrals
> **Q1.** The value of $\int_{-\pi/2}^{\pi/2} \sin^7(x) \cos^4(x) dx$ is:
> (A) $\pi/2$
> (B) $1$
> (C) $0$
> (D) $2\pi$
>
> **Correct Answer: (C)**
> **The Logical Bridge:** Check if the function is Odd or Even before integrating.
> **The Shortcut:** The function is Odd ( $\sin^7(-x) = -\sin^7(x)$ ). For symmetric limits $-a$ to $a$, the integral of an odd function is always ZERO. 
> **Time Saved:** 4 minutes of manual integration.
