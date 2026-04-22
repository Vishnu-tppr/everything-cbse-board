---
subject: Mathematics
chapter_no: 12
marks_weightage: 5
status: not-started
difficulty: medium
last_reviewed: 
tags: [math, linear-programming, optimization, feasible-region, corner-point, 12th]
---

# 📐 Ch12 - Linear Programming

> **Mathematics** | **Marks**: ~5 | [[📘 Mathematics]]
> This chapter covers the optimization of a linear function (Objective Function) subject to a set of linear constraints (Inequalities).

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Key Terminology
- **Objective Function ($Z$)**: The linear function $Z = ax + by$ which is to be maximized or minimized.
- **Constraints**: Linear inequalities or equations on the variables (e.g., $x+y \leq 4, x \geq 0$).
- **Feasible Region**: The common region determined by all constraints.
- **Feasible Solutions**: Points within or on the boundary of the feasible region.

### 2. Corner Point Method
- **Theorem**: The optimal value (maximum or minimum) of the objective function occurs at one of the **corner points** (vertices) of the feasible region.

---

## 📐 The 12th Grade Technicals

### 🧪 Solving Strategy (Step-by-Step)
1. **Convert Inequalities to Equations**: Plot the lines on a graph.
2. **Shade the Feasible Region**: Use test points (like $(0,0)$) to determine the side of the line to shade.
3. **Find Corner Points**: Identify vertices of the shaded region by solving pairs of line equations.
4. **Evaluate $Z$**: Construct a table to calculate $Z$ at each corner point.
5. **Identify Optima**: Select the highest/lowest $Z$ value.

### ⚡ Unbounded Region
- If the feasible region is **unbounded**, the max/min value found at a corner point $M$ may not be the final answer.
- **Check**: Draw the line $ax + by > M$ (for maxima) or $ax + by < M$ (for minima). If this open half-plane has no common point with the feasible region, then $M$ is the optimal value.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Non-negativity Constraints**: Always remember $x \geq 0, y \geq 0$. The feasible region is usually in the **First Quadrant**.
- **Dotted vs Solid Lines**: Use solid lines for $\leq, \geq$ and dotted for $<, >$.
- **Corner Point Omission**: Ensure you solve for the intersection points accurately.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Bounded Region Optimization | Very High | Graph + Corner Point Table + Conclusion |
| Manufacturing/Diet Problem | High | Formulate the LPP (Objective + Constraints) first |
| Unbounded Region Check | Medium | Must perform the extra $ax+by < M$ step |

---

*Back to [[📘 Mathematics]]*
