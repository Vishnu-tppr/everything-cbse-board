---
name: computer-science
description: >-
  CBSE Grade 12 Computer Science (Python) — Full Syllabus Mastery (2026-27). 
  Covers Computational Thinking, Networking, and Database Management (SQL). 
  Target: 70/70 Theory + 30/30 Practical.
---

# Computer Science — CBSE Grade 12 (PCMC)

## Syllabus Blueprint (2026–27)

| Unit | Title | Marks |
|------|-------|-------|
| I | Computational Thinking and Programming – 2 | 40 |
| II | Computer Networks | 10 |
| III | Database Management (SQL) | 20 |
| **Total** | **Theory Exam** | **70** |

---

## Unit I: Programming with Python (40 Marks) - The Giant

### Key Concepts
- **Functions:** Scope (Global/Local), Parameter passing (Default, Positional, Keyword), Recursion.
- **Data Structures:** Stack (Push/Pop logic using lists), Queue (introductory).
- **File Handling:**
  - **Text Files:** read(), readline(), readlines(), write(), writelines().
  - **Binary Files:** pickle module (dump/load), Seek() and Tell() methods.
  - **CSV Files:** csv module (reader/writer/writerow).
- **Python Libraries:** Creating and importing modules.

### High-Yield Code snippets
```python
# Binary File Append
import pickle
def append_data(data):
    with open("data.dat", "ab") as f:
        pickle.dump(data, f)

# Stack Implementation
def push(stk, item):
    stk.append(item)
def pop(stk):
    if not stk: return "Underflow"
    return stk.pop()
```

---

## Unit II: Computer Networks (10 Marks)

### Key Concepts
- **Basics:** Evolution, Switching techniques (Circuit/Packet).
- **Transmission Media:** Wired (Twisted pair, Coaxial, Optical fiber) vs Wireless (Infrared, Radio, Microwave, Satellite).
- **Topology:** Star, Bus, Tree, Mesh.
- **Protocols:** TCP/IP, HTTP, FTP, SMTP, POP3, DNS.
- **Network Devices:** RJ45, NIC, Modem, Hub, Switch, Router, Gateway.

---

## Unit III: Database Management (20 Marks)

### Key Concepts
- **Relational Model:** Relation, Attribute, Tuple, Degree, Cardinality.
- **SQL Commands:**
  - **DDL:** CREATE, ALTER, DROP.
  - **DML:** SELECT, INSERT, UPDATE, DELETE.
- **Constraints:** PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY.
- **Aggregates:** COUNT(), SUM(), AVG(), MIN(), MAX().
- **Claus:** WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT.
- **Joins:** Cartesian product, Equi-Join, Natural Join.

---

## High-Yield Strategy (Target 495+)
1. **The Python 40:** Master **File Handling** (5-mark question) and **Stack/Queue** logic. Output questions from Ch 1 are guaranteed.
2. **SQL Precision:** One 5-mark question involves writing SQL queries for a given table. Master `GROUP BY` and `HAVING`.
3. **Network Layout:** A 5-mark Case Study involves suggesting a network layout (topology, server placement, device placement) for a company with multiple blocks.
4. **Dry Runs:** Practice tracing output for loops and recursion.

---

## Common Board Exam Traps
- **Pickle Module:** Forgetting to open binary files in `rb` or `ab` mode.
- **CSV Headers:** Forgetting to handle the newline character in CSV writing.
- **SQL syntax:** Confusing `DELETE` (DML) with `DROP` (DDL).
- **Networking:** Suggesting a "Switch" when a "Hub" is asked, or missing the distance-based topology logic.

---

## Answer Writing Framework
1. **Code Snippets:** Use proper indentation. Even on paper, show leading spaces.
2. **Output Questions:** Provide a **Trace Table** (Variable | Value) to prove your logic.
3. **Networking Case Study:** Draw the suggested topology and justify why you chose it (e.g., "Star topology is efficient for this block distance").
4. **SQL:** Write keywords in UPPERCASE for clarity.

---

## Internal Assessment (30 Marks)
- **Lab Test:** Python program + SQL query (7+5 Marks).
- **Report File:** 20+ Python programs + 5 SQL sets (7 Marks).
- **Project:** 8 Marks. Be ready to explain your logic in the Viva (5 Marks).
