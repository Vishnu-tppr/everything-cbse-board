---
subject: Computer Science
chapter_no: 3
marks_weightage: 40 (Computational Thinking)
status: not-started
difficulty: medium
last_reviewed: 
tags: [cs, python, libraries, modules, math, random, 12th]
---

# 🐍 Ch03 - Python Libraries

> **Computer Science** | **Marks**: ~3-5 | [[💻 Computer Science]]
> This chapter explains how to use modules and packages, and how to create your own libraries in Python.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Modules and Packages
- **Module**: A file containing Python definitions and statements.
- **Package**: A directory of modules containing an `__init__.py` file.
- **Library**: A collection of packages.

### 2. Standard Modules
- **`math`**: `sqrt()`, `pow()`, `ceil()`, `floor()`.
- **`random`**:
  - `random()`: Returns float $[0.0, 1.0)$.
  - `randint(a, b)`: Returns integer between $a$ and $b$ **inclusive**.
  - `randrange(start, stop, step)`: Returns integer from range.

---

## 📐 The 12th Grade Technicals

### 🧪 Importing Techniques
1. `import math`: Access as `math.sqrt()`.
2. `from math import sqrt`: Access directly as `sqrt()`.
3. `import math as m`: Access using alias `m.sqrt()`.

### ⚡ Creating Modules
- Save code in `filename.py`.
- Import using `import filename`.
- Python looks in current directory, then `PYTHONPATH`, then installation directories.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **`randint` vs `random`**: `randint` includes the upper limit; `random` does not.
- **Module Naming**: Never name your file the same as a standard library (e.g., don't name your file `math.py`).
- **Namespace Collision**: `from module import *` can overwrite existing functions in your script.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Random Output Range | Very High | Identify the minimum and maximum possible values |
| Math function usage | High | Differentiate between `ceil()` and `floor()` |
| Import Syntax Errors | Medium | Correct the syntax for different import styles |

---

*Back to [[💻 Computer Science]]*
