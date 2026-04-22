---
subject: Mathematics
chapter_no: 13
marks_weightage: 8
status: not-started
difficulty: high
last_reviewed: 
tags: [math, probability, bayes-theorem, conditional-probability, independent-events, 12th]
---

# 📐 Ch13 - Probability

> **Mathematics** | **Marks**: ~8 | [[📘 Mathematics]]
> This chapter advances probability theory, covering Conditional Probability, Bayes’ Theorem, and Random Variables.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Conditional Probability
- Probability of event $A$ given $B$ has occurred: $P(A|B) = \frac{P(A \cap B)}{P(B)}$.
- **Multiplication Rule**: $P(A \cap B) = P(A) P(B|A)$.

### 2. Independent Events
- $A$ and $B$ are independent if $P(A \cap B) = P(A) P(B)$.
- **Mutual Exclusivity vs Independence**: Mutually exclusive events are NEVER independent (unless one has $P=0$).

### 3. Bayes’ Theorem (Critical)
- Calculates the "reverse" probability. Given an outcome $E$ has occurred, what is the probability it was caused by event $A_i$?
- $P(A_i|E) = \frac{P(A_i) P(E|A_i)}{\sum_{j=1}^n P(A_j) P(E|A_j)}$.

---

## 📐 The 12th Grade Technicals

### 🧪 Total Probability Theorem
- If $A_1, A_2, \dots A_n$ form a partition of the sample space, then for any event $E$:
- $P(E) = \sum_{j=1}^n P(A_j) P(E|A_j)$.

### ⚡ Random Variables & Distribution
- **Probability Distribution**: A table of $x_i$ and $P(x_i)$ such that $\sum P(x_i) = 1$.
- **Mean (Expectation)**: $E(X) = \mu = \sum x_i P(x_i)$.
- **Variance**: $Var(X) = \sigma^2 = E(X^2) - [E(X)]^2$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Bayes' Denominator**: The denominator in Bayes' theorem is just the **Total Probability** of the observed outcome. Calculate it carefully.
- **$P(A|B)$ vs $P(B|A)$**: Don't confuse the condition with the event. $P(\text{Defective} | \text{Machine 1})$ is different from $P(\text{Machine 1} | \text{Defective})$.
- **Independence Check**: Don't assume independence unless stated; always verify $P(A \cap B) = P(A)P(B)$.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Bayes’ Theorem (5-Mark) | Very High | Define $A_1, A_2$ (events) and $E$ (outcome) clearly |
| Conditional Probability | High | Use the $\frac{P(A \cap B)}{P(B)}$ formula |
| Mean and Variance of RV | Medium | Construct the distribution table first |

---

*Back to [[📘 Mathematics]]*
