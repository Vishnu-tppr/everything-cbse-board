---
subject: Mathematics
chapter_no: 5
marks_weightage: 35 (Calculus Block)
status: not-started
difficulty: high
last_reviewed: 
tags: [math, calculus, continuity, differentiability, chain-rule, logarithmic, 12th]
---

# 📐 Ch05 - Continuity and Differentiability

> **Mathematics** | **Marks**: ~8-10 | [[📘 Mathematics]]
> This chapter begins the Calculus block, defining continuity of functions and the rules of differentiation (Chain rule, Logarithmic, Parametric).

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Continuity
- A function is continuous at $x = c$ if:
  1. $f(c)$ is defined.
  2. $\lim_{x \to c} f(x)$ exists.
  3. $\lim_{x \to c} f(x) = f(c)$.
- **Checklist**: $LHL = RHL = f(c)$.

### 2. Differentiability
- A function is differentiable at $c$ if $LHD = RHD$.
- **Theorem**: Every differentiable function is continuous, but every continuous function is **NOT necessarily** differentiable (e.g., $f(x) = |x|$ at $x=0$).

---

## 📐 The 12th Grade Technicals

### 🧪 Differentiation Rules
1. **Chain Rule**: $\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)$.
2. **Implicit Differentiation**: Differentiating equations involving both $x$ and $y$ directly.
3. **Logarithmic Differentiation**: Useful for $[f(x)]^{g(x)}$ or complex products. Take $\log$ on both sides.
4. **Parametric Form**: If $x=f(t), y=g(t)$, then $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.
5. **Second Order Derivatives**: $\frac{d^2y}{dx^2} = \frac{d}{dx} \left( \frac{dy}{dx} \right)$.

### ⚡ Standard Derivatives
- $\frac{d}{dx}(\sin^{-1}x) = \frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\tan^{-1}x) = \frac{1}{1+x^2}$
- $\frac{d}{dx}(e^x) = e^x$, $\frac{d}{dx}(\log x) = 1/x$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Chain Rule Skipping**: Forgetting to differentiate the "inner" function.
- **Log properties**: $\log(a+b) \neq \log a + \log b$. You cannot take $\log$ across a sum directly; treat each term separately ($y = u + v$).
- **Modulus Differentiability**: $|x-a|$ is continuous everywhere but not differentiable at $x=a$ (the "corner" point).

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Find $k$ for Continuity | Very High | Set $LHL = RHL$ and solve for unknown |
| Logarithmic Differentiation | High | $[f(x)]^{g(x)}$ form questions |
| Second Order (Show that...) | High | Differentiate twice and substitute in equation |

---

*Back to [[📘 Mathematics]]*
