---
subject: Mathematics
chapter_no: 4
marks_weightage: 10 (combined with Ch 3)
status: not-started
difficulty: high
last_reviewed: 
tags: [math, determinants, adjoint, inverse, cramers-rule, 12th]
---

# 📐 Ch04 - Determinants

> **Mathematics** | **Marks**: ~5 | [[📘 Mathematics]]
> This chapter covers the scalar value associated with square matrices, its properties, and its application in solving linear equations.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Calculation
- **$2 \times 2$**: $|A| = ad - bc$.
- **$3 \times 3$**: Expansion along any row/column (usually Row 1). 
- **Singular Matrix**: $|A| = 0$.
- **Non-Singular Matrix**: $|A| \neq 0$.

### 2. Properties of Determinants (NCERT Focus)
- $|AB| = |A| |B|$.
- $|kA| = k^n |A|$ (where $n$ is the order of the matrix).
- $|A^T| = |A|$.
- If any two rows/columns are identical, $|A| = 0$.

---

## 📐 The 12th Grade Technicals

### 🧪 Adjoint & Inverse
- **Minor ($M_{ij}$)**: Determinant of matrix left after deleting $i^{th}$ row and $j^{th}$ column.
- **Cofactor ($A_{ij}$)**: $A_{ij} = (-1)^{i+j} M_{ij}$.
- **Adjoint ($adj \, A$)**: Transpose of the cofactor matrix.
- **Inverse ($A^{-1}$)**: $A^{-1} = \frac{1}{|A|} adj \, A$.

### ⚡ Applications
- **Area of Triangle**: $\frac{1}{2} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$. 
- **Solving Linear Equations** ($AX = B$):
  - $X = A^{-1} B$.
  - If $|A| \neq 0$, unique solution (Consistent).
  - If $|A| = 0$ and $(adj \, A)B \neq O$, No solution (Inconsistent).
  - If $|A| = 0$ and $(adj \, A)B = O$, Infinite solutions or No solution.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **$|kA|$ Constant**: Most common error is $|2A| = 2|A|$. For order 3, it is $|2A| = 2^3 |A| = 8|A|$.
- **Adjoint Property**: $A(adj \, A) = (adj \, A)A = |A|I$.
- **$|adj \, A|$**: $|adj \, A| = |A|^{n-1}$.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Solving $AX=B$ (3 vars) | Very High | 5-Mark staple. Find $A^{-1}$ then multiply with $B$. |
| $|adj \, A|$ Properties | High | MCQs based on $|A|^{n-1}$ |
| Area of Triangle/Collinearity | Medium | If Area=0, points are collinear |

---

*Back to [[📘 Mathematics]]*
