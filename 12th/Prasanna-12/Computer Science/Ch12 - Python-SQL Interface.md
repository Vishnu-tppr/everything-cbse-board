---
subject: Computer Science
chapter_no: 12
marks_weightage: 20 (Database Unit)
status: not-started
difficulty: high
last_reviewed: 
tags: [cs, python, sql, mysql-connector, cursor, 12th]
---

# 🐍 Ch12 - Python-SQL Interface

> **Computer Science** | **Marks**: ~5 | [[💻 Computer Science]]
> This chapter covers how to connect a Python application to a MySQL database using `mysql-connector`.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Connection Steps
1. **Import Module**: `import mysql.connector`.
2. **Establish Connection**: `db = mysql.connector.connect(host, user, password, database)`.
3. **Create Cursor**: `cur = db.cursor()`.
4. **Execute Query**: `cur.execute(query)`.
5. **Fetch Data**: `cur.fetchone()` or `cur.fetchall()`.
6. **Commit/Close**: `db.commit()` (for changes) and `db.close()`.

### 2. Fetching Results
- **`fetchone()`**: Returns the next row as a **tuple**.
- **`fetchall()`**: Returns all remaining rows as a **list of tuples**.
- **`rowcount`**: Property that returns the number of rows affected/fetched.

---

## 📐 The 12th Grade Technicals

### 🧪 Error Handling
- Use `try-except` blocks to handle connection errors or SQL syntax errors.
- **`is_connected()`**: Method to check if the connection is alive.

### ⚡ Parameterized Queries
- Use `%s` placeholders to prevent SQL injection.
- `cur.execute("INSERT INTO table VALUES (%s, %s)", (val1, val2))`.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Commit**: If you perform `INSERT`, `UPDATE`, or `DELETE`, you **must** call `db.commit()`, otherwise changes won't be saved.
- **Cursor State**: You cannot execute a new query until the results of the previous `fetchall()` are cleared or handled.
- **Data Type**: `fetchall()` always returns a list of tuples, even if there is only one column or one row.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Fill in the Blanks (Code) | Very High | Know the sequence: connect $\to$ cursor $\to$ execute |
| Difference between `fetchone` and `fetchall` | High | Explain the return types (Tuple vs List of Tuples) |
| SQL Interface Code Writing | Medium | Write a function to fetch or insert data |

---

*Back to [[💻 Computer Science]]*
