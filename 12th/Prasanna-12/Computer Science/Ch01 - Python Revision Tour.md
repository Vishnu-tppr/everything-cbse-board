---
subject: Computer Science
chapter_no: 1
marks_weightage: 40 (Computational Thinking)
status: not-started
difficulty: low
last_reviewed: 
tags: [cs, python, revision, basics, 12th]
---

# 🐍 Ch01 - Python Revision Tour

> **Computer Science** | **Marks**: Revision | [[💻 Computer Science]]
> This chapter revisits the core concepts of Python from Class XI, including data types, control flow, and basic data structures.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Data Types & Tokens
- **Tokens**: Smallest unit (Keywords, Identifiers, Literals, Operators, Punctuators).
- **Core Types**: 
  - Numbers (int, float, complex).
  - Sequences (string, list, tuple).
  - Mapping (dictionary).
  - None and Boolean.
- **Mutability**: 
  - **Mutable**: List, Dictionary, Set.
  - **Immutable**: String, Tuple, int, float.

### 2. Control Flow
- **Selection**: `if-elif-else`.
- **Iteration**: `for` (member-based) and `while` (condition-based).
- **Jump**: `break` (exit loop) and `continue` (skip iteration).

---

## 📐 The 12th Grade Technicals

### 🧪 List and Dictionary Methods
- **List**: `append()`, `extend()`, `insert()`, `pop()`, `remove()`.
- **Dictionary**: `keys()`, `values()`, `items()`, `get()`, `update()`.
- **Slicing**: `seq[start:stop:step]`.

### ⚡ Logical Operators
- `and`, `or`, `not` (Precedence: `not` > `and` > `or`).
- **Identity**: `is` and `is not`.
- **Membership**: `in` and `not in`.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Range Function**: `range(1, 5)` produces `[1, 2, 3, 4]`. It **excludes** the upper limit.
- **String Immutability**: You cannot do `s[0] = 'A'`. You must create a new string.
- **Floating Point Error**: `0.1 + 0.2` might not be exactly `0.3` due to binary precision.
- **Tuples with one element**: `(5)` is an integer; `(5,)` is a tuple.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Output Finding (Loops + Slicing) | Very High | Trace step-by-step; notice `end=' '` |
| Error Identification | High | Check indentation, colon, and keyword spelling |
| Mutable vs Immutable | High | List examples and explain why |

---

*Back to [[💻 Computer Science]]*
