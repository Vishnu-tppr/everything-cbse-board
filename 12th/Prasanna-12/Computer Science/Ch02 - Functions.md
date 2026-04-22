---
subject: Computer Science
chapter_no: 2
marks_weightage: 40 (Computational Thinking)
status: not-started
difficulty: medium
last_reviewed: 
tags: [cs, python, functions, scope, parameters, 12th]
---

# 🐍 Ch02 - Functions

> **Computer Science** | **Marks**: ~6-8 | [[💻 Computer Science]]
> This chapter covers user-defined functions, parameter passing, and the scope of variables in Python.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Function Basics
- **Definition**: `def function_name(parameters):`.
- **Return**: `return` statement sends a value back; if absent, `None` is returned.
- **Arguments vs Parameters**:
  - **Parameters**: Variables in function definition.
  - **Arguments**: Values passed during call.

### 2. Types of Arguments
- **Positional**: Order matters.
- **Default**: Parameters with pre-assigned values (e.g., `def area(r, pi=3.14)`).
- **Keyword**: Passing values using parameter names (e.g., `area(pi=3, r=10)`).

---

## 📐 The 12th Grade Technicals

### 🧪 Scope of Variables (LEGB Rule)
1. **L**ocal: Defined inside function.
2. **E**nclosing: In nested functions.
3. **G**lobal: Defined at top level.
4. **B**uilt-in: Python’s internal names.
- **`global` keyword**: Used to modify a global variable inside a function.

### ⚡ Execution Flow
- Functions are only executed when called.
- Python follows a top-down execution but skips function bodies until invoked.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Mutable Default Arguments**: Never use a list as a default argument (e.g., `def add(x=[])`). It persists across calls!
- **Global Variable Access**: You can *read* a global variable without the `global` keyword, but you cannot *modify* it.
- **Multiple Returns**: `return a, b` returns a **Tuple** `(a, b)`.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Scope Output (global/local) | Very High | Track variable changes inside and outside functions |
| Default Argument Logic | High | Default arguments must be at the end of the list |
| Function Definition Errors | Medium | Check syntax, colons, and return statements |

---

*Back to [[💻 Computer Science]]*
