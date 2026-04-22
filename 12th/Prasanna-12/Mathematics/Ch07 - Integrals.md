---
subject: Mathematics
chapter_no: 7
marks_weightage: 35 (Calculus Block)
status: not-started
difficulty: very-high
last_reviewed: 
tags: [math, calculus, integrals, substitution, parts, partial-fractions, 12th]
---

# 📐 Ch07 - Integrals

> **Mathematics** | **Marks**: ~10-12 | [[📘 Mathematics]]
> This chapter covers Indefinite and Definite integration, exploring various techniques like Substitution, Partial Fractions, and Integration by Parts.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Indefinite Integration
- **Substitution Method**: Replace part of the integrand with $t$ such that $f'(x) dx = dt$.
- **Partial Fractions**: For rational functions $\frac{P(x)}{Q(x)}$.
- **Integration by Parts (ILATE Rule)**: $\int uv \, dx = u \int v \, dx - \int (u' \int v \, dx) dx$.
  - Order: **I**nverse, **L**ogarithmic, **A**lgebraic, **T**rigonometric, **E**xponential.

### 2. Definite Integration
- **Fundamental Theorem of Calculus**: $\int_a^b f(x) dx = F(b) - F(a)$.
- **Properties (The 7 Pillars)**:
  - $P_4$ (King's Rule): $\int_a^b f(x) dx = \int_a^b f(a+b-x) dx$. (Most important).
  - $P_7$ (Even/Odd): $\int_{-a}^a f(x) dx = 2\int_0^a f(x) dx$ if $f(x)$ is even; $0$ if odd.

---

## 📐 The 12th Grade Technicals

### 🧪 Special Forms
- $\int e^x [f(x) + f'(x)] dx = e^x f(x) + C$.
- $\int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \log | \frac{x-a}{x+a} | + C$.
- $\int \sqrt{a^2 - x^2} dx = \frac{x}{2}\sqrt{a^2-x^2} + \frac{a^2}{2}\sin^{-1}\frac{x}{a} + C$.

### ⚡ Definite Integral Evaluation
- Always check if the property $P_4$ simplifies the expression by making the denominator invariant while changing the numerator.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Constant of Integration**: Forgetting $+C$ in Indefinite integrals.
- **Substitution Limits**: Forgetting to change the limits of integration ($a, b$) when changing the variable from $x$ to $t$.
- **ILATE Priority**: Choosing $u$ and $v$ incorrectly. Always prioritize $u$ as the function that is easier to differentiate.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Definite Integral using $P_4$ | Very High | $\int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x} dx$ type |
| Integration by Parts | High | $e^x \sin x$ or $\log x$ type |
| Partial Fraction Form | Medium | Linear and Quadratic factors |

---

*Back to [[📘 Mathematics]]*
