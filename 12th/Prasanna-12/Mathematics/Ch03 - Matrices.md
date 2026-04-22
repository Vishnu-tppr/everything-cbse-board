---
subject: Mathematics
chapter_no: 3
marks_weightage: 10 (combined with Ch 4)
status: not-started
difficulty: medium
last_reviewed: 
tags: [math, matrices, symmetric, skew-symmetric, invertible, 12th]
---

# 📐 Ch03 - Matrices

> **Mathematics** | **Marks**: ~5 | [[📘 Mathematics]]
> This chapter introduces the algebra of matrices, their types, and operations like Addition, Multiplication, and Transpose.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Types of Matrices
- **Column/Row**: One column/row respectively.
- **Square Matrix**: $m = n$.
- **Diagonal Matrix**: All non-diagonal elements are zero.
- **Scalar Matrix**: Diagonal matrix where all diagonal elements are equal.
- **Identity Matrix ($I$)**: Scalar matrix where diagonal elements are 1.

### 2. Matrix Operations
- **Equality**: $A = B \iff a_{ij} = b_{ij}$ for all $i, j$.
- **Addition/Subtraction**: Same order required. $A + B = [a_{ij} + b_{ij}]$.
- **Multiplication**: $AB$ defined if **Columns of $A$ = Rows of $B$**. 
  - Note: $AB \neq BA$ in general (Non-commutative).
- **Transpose ($A^T$ or $A'$)**: Interchanging rows and columns.
  - $(AB)^T = B^T A^T$ (Reversal Law).

---

## 📐 The 12th Grade Technicals

### 🧪 Special Matrices
- **Symmetric Matrix**: $A^T = A$.
- **Skew-Symmetric Matrix**: $A^T = -A$. (Diagonal elements are always zero).
- **Theorem**: Every square matrix can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix: $A = \frac{1}{2}(A + A^T) + \frac{1}{2}(A - A^T)$.

### ⚡ Invertible Matrices
- If $AB = BA = I$, then $B$ is the inverse of $A$ ($B = A^{-1}$).
- A matrix is invertible **if and only if** it is non-singular ($|A| \neq 0$).

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Multiplication Order**: Don't treat matrix multiplication like numbers. $AB \neq BA$.
- **Skew-Symmetric Diagonals**: If you calculate a skew-symmetric matrix and the diagonals aren't zero, check your arithmetic.
- **Transpose Law**: $(A+B)^T = A^T + B^T$ is straightforward, but $(AB)^T = B^T A^T$ is a trap.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Sum of Symmetric/Skew-Symmetric | Very High | Use the $\frac{1}{2}(A+A^T) + \frac{1}{2}(A-A^T)$ form |
| Matrix Equation Verification | High | Verify $A^2 - 5A + 7I = O$ |
| Construction of Matrix | Medium | Given $a_{ij} = |i - 2j| / 2$ |

---

*Back to [[📘 Mathematics]]*
