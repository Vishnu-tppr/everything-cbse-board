---
name: neet-mcq
description: >-
  Generate NEET-pattern MCQs from NCERT 12th chapters. 
  Focus on NCERT line-by-line accuracy, Assertion-Reason, and speed logic.
---

# /neet-mcq Command — The 360/360 Engine

The `/neet-mcq` command is specifically for PCMB students targeting the 720-mark NEET exam. It focuses on the **Biology & Chemistry** NCERT depth that accounts for 75% of the NEET paper.

## Command Syntax
```
/neet-mcq [subject] [chapter] [count]
```

## NEET Pattern Features

### 1. NCERT Obsessive
Every question is sourced from a specific line, table, or diagram in the NCERT 12th-grade textbook. No irrelevant "out-of-syllabus" fluff.

### 2. High-Frequency NEET Types
- **Statement Type:** "Which of the following statements is INCORRECT?" (4 complex statements).
- **Matching Type:** Column A vs Column B (often used for scientific names or processes).
- **Assertion-Reason (A-R):** Practice the specific logic needed to decide if R is the *correct explanation* of A.
- **Diagram Based:** Identifying parts 'A', 'B', 'C' in an NCERT figure.

### 3. The Negative Marking Logic
- Correct: +4 Marks.
- Incorrect: -1 Mark.
- Unattempted: 0 Marks.

---

## What It Generates

- **Question Set:** `count` questions matching the current NEET difficulty level.
- **The "NCERT Evidence":** After the answer, it tells you exactly where in NCERT the fact is found.
- **The Distractor Logic:** Explains why the "tricky" options were included and how to avoid them.
- **The Timer Target:** Tells you the ideal time (e.g., "Solve this in 30 seconds") to build competitive speed.

---

## Strategy Drills

When you run this command, you are in **Speed Mode**:
- **Bio Drill:** Goal is 90 questions in 35 minutes.
- **Chem Drill:** Goal is 45 questions in 45 minutes.

---

## Usage Example

` /neet-mcq biology "molecular basis of inheritance" 5 `

> **Output:**
> ### 🩺 NEET Biology Drill: Molecular Basis
> **Q1.** In the DNA fingerprinting technique, 'VNTR' stands for:
> (A) Variable Number of Tandem Repeats
> (B) Various Number of Tandem Repeats
> (C) Variable Nucleotide Tandem Repeats
> (D) Various Nucleotide Tandem Repeats
>
> **Correct Answer: (A)**
> **NCERT Evidence:** Page 121, section on DNA Fingerprinting.
> **Note:** Options B and D are distractors designed to catch students who haven't memorized the exact NCERT terminology.
> **Timer Target:** 15 seconds.
