---
subject: Computer Science
chapter_no: 10
marks_weightage: 20 (Database Unit)
status: not-started
difficulty: low
last_reviewed: 
tags: [cs, sql, database, keys, RDBMS, 12th]
---

# 🗄️ Ch10 - Relational Databases (SQL)

> **Computer Science** | **Marks**: ~5 | [[💻 Computer Science]]
> This chapter introduces Database concepts, Relational Data Models, and the basic structure of SQL.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Database Concepts
- **DBMS**: Software to manage databases (e.g., MySQL, Oracle).
- **RDBMS**: DBMS based on the relational model (Tables).
- **Table (Relation)**: Rows (Tuples) and Columns (Attributes).
- **Domain**: Pool of values for an attribute.
- **Degree**: Number of columns.
- **Cardinality**: Number of rows.

### 2. Keys in SQL
- **Primary Key**: Uniquely identifies a row.
- **Candidate Key**: Minimal set of attributes that can be a Primary Key.
- **Alternate Key**: Candidate keys not chosen as Primary Key.
- **Foreign Key**: A column that refers to the primary key of another table.

---

## 📐 The 12th Grade Technicals

### 🧪 SQL Categories
1. **DDL (Data Definition Language)**: `CREATE`, `ALTER`, `DROP`. (Structural changes).
2. **DML (Data Manipulation Language)**: `INSERT`, `UPDATE`, `DELETE`, `SELECT`. (Data changes).

### ⚡ Integrity Constraints
- **NOT NULL**: Cannot have empty values.
- **UNIQUE**: All values must be different.
- **DEFAULT**: Assigns value if none is provided.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Degree vs Cardinality**: Degree is **Columns**; Cardinality is **Rows**. (Hint: D**C** - Degree is Column).
- **Primary Key**: Can NEVER be NULL.
- **Candidate Keys**: There can be multiple Candidate keys, but only ONE Primary key.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Identify Degree and Cardinality | Very High | Count accurately; usually 1-mark |
| Key Definitions (Foreign/Primary) | High | Explain with examples from a given table |
| DDL vs DML commands | Medium | Categorize given SQL commands |

---

*Back to [[💻 Computer Science]]*
