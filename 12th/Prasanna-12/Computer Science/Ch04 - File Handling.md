---
subject: Computer Science
chapter_no: 4
marks_weightage: 40 (Computational Thinking)
status: not-started
difficulty: high
last_reviewed: 
tags: [cs, python, file-handling, text-file, binary-file, csv, 12th]
---

# 🐍 Ch04 - File Handling

> **Computer Science** | **Marks**: ~10 | [[💻 Computer Science]]
> This chapter covers reading from and writing to Text files, Binary files (using pickle), and CSV files.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Text Files
- **Open**: `f = open("file.txt", "r")` (Modes: `r, w, a, r+, w+, a+`).
- **Read**: `read()`, `readline()`, `readlines()`.
- **Write**: `write()`, `writelines()`.
- **Close**: `f.close()`.

### 2. Binary Files (pickle)
- **Serialization**: Converting object to byte stream (`pickle.dump()`).
- **Deserialization**: Converting byte stream back to object (`pickle.load()`).
- **Mode**: Must use `rb` or `wb`.

---

## 📐 The 12th Grade Technicals

### 🧪 CSV Files (csv module)
- **Reader**: `csv.reader(file_obj)`.
- **Writer**: `csv.writer(file_obj)`.
- **Newline**: Always use `newline=''` in `open()` for CSV files to avoid blank lines.

### ⚡ File Pointer Manipulation
- **`tell()`**: Returns current position of the pointer.
- **`seek(offset, whence)`**: Moves the pointer.
  - `whence=0` (beginning), `1` (current), `2` (end).

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Relative vs Absolute Path**: `C:\Users\file.txt` (Absolute) vs `file.txt` (Relative).
- **Mode 'w' vs 'a'**: 'w' overwrites existing content; 'a' adds to it.
- **EOF Error**: `pickle.load()` on an empty or finished file raises an `EOFError`. Use `try-except` block.
- **`readline` vs `readlines`**: `readline` returns a **string**; `readlines` returns a **list of strings**.

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| Text File Word/Char Count | Very High | Use `split()` for word counting; filter for specific criteria |
| Binary File Search/Update | High | Use `pickle.load()` in a `while True` loop with `EOFError` |
| CSV Write/Append | Medium | Use `writerow()` and `newline=''` |

---

*Back to [[💻 Computer Science]]*
