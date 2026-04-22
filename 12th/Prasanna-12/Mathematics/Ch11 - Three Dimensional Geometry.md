---
subject: Mathematics
chapter_no: 11
marks_weightage: 14 (combined with Ch 10)
status: not-started
difficulty: high
last_reviewed: 
tags: [math, 3d-geometry, line-equations, shortest-distance, 12th]
---

# 📐 Ch11 - Three Dimensional Geometry

> **Mathematics** | **Marks**: ~7-8 | [[📘 Mathematics]]
> This chapter covers the geometry of lines in 3D space, focusing on Cartesian and Vector equations and the distance between lines.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Equations of a Line
- **Passes through a point ($\vec{a}$) and parallel to a vector ($\vec{b}$)**:
  - Vector: $\vec{r} = \vec{a} + \lambda \vec{b}$.
  - Cartesian: $\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}$.
- **Passes through two points ($\vec{a}, \vec{b}$)**:
  - Vector: $\vec{r} = \vec{a} + \lambda(\vec{b} - \vec{a})$.
  - Cartesian: $\frac{x-x_1}{x_2-x_1} = \frac{y-y_1}{y_2-y_1} = \frac{z-z_1}{z_2-z_1}$.

---

## 📐 The 12th Grade Technicals

### 🧪 Shortest Distance (High Yield)
1. **Between Skew Lines** ($\vec{r} = \vec{a}_1 + \lambda \vec{b}_1$ and $\vec{r} = \vec{a}_2 + \mu \vec{b}_2$):
   - $d = \left| \frac{(\vec{b}_1 \times \vec{b}_2) \cdot (\vec{a}_2 - \vec{a}_1)}{|\vec{b}_1 \times \vec{b}_2|} \right|$.
2. **Between Parallel Lines** ($\vec{b}_1 = \vec{b}_2 = \vec{b}$):
   - $d = \left| \frac{\vec{b} \times (\vec{a}_2 - \vec{a}_1)}{|\vec{b}|} \right|$.

### ⚡ Angle between Two Lines
- $\cos \theta = \left| \frac{\vec{b}_1 \cdot \vec{b}_2}{|\vec{b}_1| |\vec{b}_2|} \right|$ or $\left| \frac{a_1a_2 + b_1b_2 + c_1c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}} \right|$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Standard Cartesian Form**: Ensure the coefficients of $x, y, z$ are **+1**. If it is $\frac{3-x}{2}$, rewrite as $\frac{x-3}{-2}$.
- **Skew vs Parallel**: Always check if $\vec{b}_1$ is a multiple of $\vec{b}_2$ before choosing the distance formula.
- **Direction Ratios**: DRs of a line are the coefficients of $\lambda$ in vector form or the denominators in Cartesian form.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Shortest Distance (5-Mark) | Very High | Show cross product and dot product steps clearly |
| Intersection of two lines | High | Equate $\vec{r}$ components and solve for $\lambda, \mu$ |
| Foot of Perpendicular | Medium | Find point $P$ on line such that $AP \cdot \vec{b} = 0$ |

---

*Back to [[📘 Mathematics]]*
