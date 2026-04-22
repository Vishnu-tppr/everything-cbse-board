---
subject: Computer Science
chapter_no: 7
marks_weightage: 40 (Computational Thinking)
status: not-started
difficulty: medium
last_reviewed: 
tags: [cs, python, data-structures, stack, LIFO, 12th]
---

# 🐍 Ch07 - Data Structures (Stack)

> **Computer Science** | **Marks**: ~5-8 | [[💻 Computer Science]]
> This chapter focuses on the linear data structure 'Stack' and its implementation using Python lists.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Introduction to Stack
- **Definition**: A linear data structure that follows the **LIFO** (Last In First Out) principle.
- **Top**: The end from which all operations (insertion and deletion) occur.

### 2. Stack Operations
- **Push**: Adding an element to the top.
- **Pop**: Removing the top element.
- **Peek/Inspect**: Viewing the top element without removing it.
- **IsEmpty**: Checking if the stack is empty.

---

## 📐 The 12th Grade Technicals

### 🧪 Implementation using List
```python
stack = []
# Push
stack.append(element)
# Pop
if not isEmpty(stack):
    element = stack.pop()
else:
    print("Underflow")
```

### ⚡ Underflow and Overflow
- **Underflow**: Attempting to pop from an empty stack.
- **Overflow**: Attempting to push into a full stack (generally not an issue with Python lists as they are dynamic).

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **LIFO vs FIFO**: Stack is LIFO; Queue is FIFO (FIFO is generally not in the current 12th CS core syllabus for boards, but concept is important).
- **Index Error**: Always check `if len(stack) == 0` before popping.
- **Function Parameters**: Ensure the stack is passed to functions or used as a global variable correctly.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Push/Pop Function Implementation | Very High | Write clear code for both functions |
| Trace Stack State | High | Show the stack content after a series of operations |
| Real-world Application | Medium | Undo operation, Back button in browser |

---

*Back to [[💻 Computer Science]]*
