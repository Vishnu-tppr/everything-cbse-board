---
subject: Mathematics
chapter_no: 9
marks_weightage: 35 (Calculus Block)
status: not-started
difficulty: high
last_reviewed: 
tags: [math, calculus, differential-equations, variable-separable, linear-DE, 12th]
---

# 📐 Ch09 - Differential Equations

> **Mathematics** | **Marks**: ~6-8 | [[📘 Mathematics]]
> This chapter focuses on equations involving derivatives of dependent variables, covering Order, Degree, and solving methods for first-order equations.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Order and Degree
- **Order**: Highest derivative present in the equation.
- **Degree**: Power of the highest order derivative (defined only if equation is a polynomial in derivatives).

### 2. General and Particular Solutions
- **General Solution**: Contains arbitrary constants ($C$).
- **Particular Solution**: Obtained by substituting specific values (initial conditions) to find $C$.

---

## 📐 The 12th Grade Technicals

### 🧪 Solving Methods (Mandatory)
1. **Variable Separable**: Group all $x$ terms with $dx$ and $y$ terms with $dy$. Integrate both sides.
2. **Homogeneous DE**: $\frac{dy}{dx} = f(x, y)$ where $f$ is homogeneous of degree 0. 
   - **Substitution**: $y = vx \implies \frac{dy}{dx} = v + x\frac{dv}{dx}$.
3. **Linear Differential Equations**: $\frac{dy}{dx} + Py = Q$ (where $P, Q$ are functions of $x$).
   - **Integrating Factor (IF)**: $e^{\int P dx}$.
   - **Solution**: $y \cdot (IF) = \int Q \cdot (IF) dx + C$.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Degree undefined**: If the derivative is inside a function (like $\sin(y')$ or $e^{y''}$), the degree is **Not Defined**.
- **Homogeneous Check**: Ensure all terms have the same total power of variables before using $y=vx$.
- **IF Error**: When calculating $IF = e^{\int P dx}$, ensure you don't forget the negative sign if $P$ is negative. $e^{\log f(x)} = f(x)$.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Linear DE Solving | Very High | Correct $IF$ + solution formula |
| Order and Degree (MCQ) | High | Identify highest derivative + its power |
| Particular Solution | Medium | Solve DE and use $x, y$ to find $C$ |

---

*Back to [[📘 Mathematics]]*
