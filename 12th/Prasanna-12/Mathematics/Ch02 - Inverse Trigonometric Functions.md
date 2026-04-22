---
subject: Mathematics
chapter_no: 2
marks_weightage: 8 (combined with Ch 1)
status: not-started
difficulty: medium
last_reviewed: 
tags: [math, inverse-trig, principal-value, 12th]
---

# 📐 Ch02 - Inverse Trigonometric Functions

> **Mathematics** | **Marks**: ~3-4 | [[📘 Mathematics]]
> This chapter defines the inverse of trigonometric functions by restricting their domains to make them bijective.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Principal Value Branches
| Function | Domain | Range (Principal Value Branch) |
|----------|--------|-------------------------------|
| $\sin^{-1}x$ | $[-1, 1]$ | $[-\pi/2, \pi/2]$ |
| $\cos^{-1}x$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}x$ | $\mathbb{R}$ | $(-\pi/2, \pi/2)$ |
| $\cot^{-1}x$ | $\mathbb{R}$ | $(0, \pi)$ |
| $\sec^{-1}x$ | $\mathbb{R} - (-1, 1)$ | $[0, \pi] - \{\pi/2\}$ |
| $\csc^{-1}x$ | $\mathbb{R} - (-1, 1)$ | $[-\pi/2, \pi/2] - \{0\}$ |

---

## 📐 The 12th Grade Technicals

### 🧪 Basic Properties
- **Inverse Property**: $\sin(\sin^{-1}x) = x$ for $x \in [-1, 1]$.
- **Reciprocal Relations**: $\csc^{-1}x = \sin^{-1}(1/x)$, $\sec^{-1}x = \cos^{-1}(1/x)$, $\cot^{-1}x = \tan^{-1}(1/x)$ (for $x>0$).
- **Complementary Relations**:
  - $\sin^{-1}x + \cos^{-1}x = \pi/2$.
  - $\tan^{-1}x + \cot^{-1}x = \pi/2$.
  - $\csc^{-1}x + \sec^{-1}x = \pi/2$.

### ⚡ Negative Argument Identities
- $\sin^{-1}(-x) = -\sin^{-1}x$.
- $\tan^{-1}(-x) = -\tan^{-1}x$.
- $\csc^{-1}(-x) = -\csc^{-1}x$.
- $\cos^{-1}(-x) = \pi - \cos^{-1}x$.
- $\cot^{-1}(-x) = \pi - \cot^{-1}x$.
- $\sec^{-1}(-x) = \pi - \sec^{-1}x$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Range Constraint**: $\sin^{-1}(\sin \frac{2\pi}{3}) \neq \frac{2\pi}{3}$ because $2\pi/3$ is NOT in $[-\pi/2, \pi/2]$. You must convert it: $\sin(2\pi/3) = \sin(\pi - \pi/3) = \sin(\pi/3)$. Result is $\pi/3$.
- **$\cos^{-1}$ and $\pi$**: Forgetting the $\pi - \cos^{-1}x$ for negative inputs.
- **Domain Errors**: Evaluating $\sin^{-1}(2)$ is impossible as it is outside $[-1, 1]$.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Principal Value Calculation | Very High | Final result must lie in the branch |
| Simplifying Trig Expressions | High | Use substitution (e.g., $x = \tan \theta$) |
| Complementary Sum Identities | Medium | Direct application of $\pi/2$ properties |

---

*Back to [[📘 Mathematics]]*
