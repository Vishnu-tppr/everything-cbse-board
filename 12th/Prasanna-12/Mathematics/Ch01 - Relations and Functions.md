---
subject: Mathematics
chapter_no: 1
marks_weightage: 8 (combined with Ch 2)
status: not-started
difficulty: medium
last_reviewed: 
tags: [math, relations, functions, equivalence, 12th]
---

# 📐 Ch01 - Relations and Functions

> **Mathematics** | **Marks**: ~4-5 | [[📘 Mathematics]]
> This chapter builds on the foundations of sets and relations, introducing Equivalence Relations and the classification of Functions.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Types of Relations
- **Reflexive**: $(a, a) \in R$ for every $a \in A$.
- **Symmetric**: $(a, b) \in R \implies (b, a) \in R$.
- **Transitive**: $(a, b) \in R$ and $(b, c) \in R \implies (a, c) \in R$.
- **Equivalence Relation**: A relation that is Reflexive, Symmetric, and Transitive.

### 2. Types of Functions
- **One-to-One (Injective)**: $f(x_1) = f(x_2) \implies x_1 = x_2$.
- **Onto (Surjective)**: Range = Codomain. Every element in codomain has a pre-image.
- **One-to-One and Onto (Bijective)**: Both Injective and Surjective. Bijective functions are **Invertible**.

---

## 📐 The 12th Grade Technicals

### 🧪 Proving Techniques
- **To prove Injective**: Assume $f(x_1) = f(x_2)$ and solve to show $x_1 = x_2$.
- **To prove Surjective**: Let $y \in \text{Codomain}$. Find $x$ in terms of $y$ ($x = g(y)$) and check if $x \in \text{Domain}$.
- **Equivalence Classes**: $[a] = \{x \in A : (x, a) \in R\}$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Domain/Codomain Check**: Forgetting to check if $x$ belongs to the specified set (e.g., $\mathbb{N}, \mathbb{Z}, \mathbb{R}$) when proving onto.
- **Transitive Trap**: If $(a, b) \in R$ but there is no $c$ such that $(b, c) \in R$, the relation is **Still Transitive** by default (Vacuously true).
- **Empty Set**: A relation on an empty set is reflexive? No, because there's no $a$ to check.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Proving Equivalence Relation | Very High | Show Reflexive, Symmetric, Transitive steps |
| Check Injectivity/Surjectivity | High | Step-by-step $f(x_1)=f(x_2)$ and $y=f(x)$ logic |
| Equivalence Classes | Medium | Set of elements related to a specific item |

---

*Back to [[📘 Mathematics]]*
