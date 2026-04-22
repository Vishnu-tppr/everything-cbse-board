---
subject: Computer Science
chapter_no: 11
marks_weightage: 20 (Database Unit)
status: not-started
difficulty: high
last_reviewed: 
tags: [cs, sql, queries, aggregation, joins, 12th]
---

# 🗄️ Ch11 - SQL Queries

> **Computer Science** | **Marks**: ~10-12 | [[💻 Computer Science]]
> This chapter covers advanced SQL queries, including filtering, grouping, and joining multiple tables.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. SELECT and Filtering
- **SELECT**: Retrieve data (`SELECT * FROM table`).
- **DISTINCT**: Eliminate duplicates.
- **WHERE**: Filtering condition.
- **Operators**: `=`, `<>`, `<`, `>`, `BETWEEN`, `IN`, `LIKE` (`%` for many chars, `_` for one).

### 2. Built-in Functions
- **Aggregate Functions**: `SUM()`, `AVG()`, `COUNT()`, `MAX()`, `MIN()`.
- **String Functions**: `LOWER()`, `UPPER()`, `SUBSTR()`, `LENGTH()`.
- **Math Functions**: `ROUND()`, `MOD()`, `POW()`.

---

## 📐 The 12th Grade Technicals

### 🧪 Grouping Data
- **GROUP BY**: Groups rows with same values.
- **HAVING**: Filtering condition for **groups** (cannot use `WHERE` with aggregate functions).

### ⚡ Joining Tables
- **Equi-Join**: `SELECT * FROM T1, T2 WHERE T1.key = T2.key`.
- **Natural Join**: Join based on same column name and domain.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **WHERE vs HAVING**: `WHERE` filters rows **before** grouping; `HAVING` filters groups **after** `GROUP BY`.
- **COUNT(*) vs COUNT(col)**: `COUNT(*)` counts all rows (including NULLs); `COUNT(col)` excludes NULLs.
- **LIKE Operator**: Use `%` for any number of characters and `_` for exactly one character.
- **ORDER BY**: Default is ascending (`ASC`). Use `DESC` for descending.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Write SQL Queries | Very High | Usually 4-6 queries based on a table |
| SQL Output Finding | High | Trace aggregate and join operations carefully |
| Aggregate Functions usage | High | Differentiate between `COUNT` and `SUM` |

---

*Back to [[💻 Computer Science]]*
