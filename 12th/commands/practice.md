---
name: practice
description: >-
  Generate N practice questions from a specified 12th-grade chapter. 
  Chains to examiner agent. Supports Easy (NCERT), Medium (PYQ), and Hard (Topper) levels.
---

# /practice Command — The Question Engine

The `/practice` command is your primary tool for generating board-aligned questions. It leverages the **Examiner** agent to create content that matches the latest CBSE Grade 12 blueprint (Batch 2026-27).

## Command Syntax
```
/practice [subject] [chapter] [difficulty] [count]
```

## Parameter Guide

| Parameter | Required | Values | Default | Description |
|-----------|----------|--------|---------|-------------|
| **subject** | Yes | physics, chemistry, biology, mathematics, computer-science, english | — | The 12th-grade subject. |
| **chapter** | Yes | Any chapter name (e.g., "Optics", "Integration") | — | Use quotes for multi-word chapters. |
| **difficulty** | No | easy, medium, hard | medium | easy = NCERT, medium = Boards, hard = Topper. |
| **count** | No | 1-20 | 5 | Number of questions to generate. |

---

## What Happens Behind the Scenes

1. **Context Loading:** The command pulls data from the relevant `SKILL.md` file to identify high-yield topics and mark weightage for the specified chapter.
2. **Agent Handshake:** It triggers the **Examiner** agent with a specific "Persona Prompt" matching the difficulty level.
3. **Question Synthesis:**
   - **MCQ (1M):** Focused on properties and conceptual traps.
   - **SA-I (2M):** Focused on definitions and short "Why?" questions.
   - **SA-II (3M):** Focused on core derivations and standard numericals.
   - **CBQ (4M):** Focused on case studies (diagram/text based).
   - **LA (5M):** Focused on long derivations + complex multi-step numericals.
4. **Marking Scheme Generation:** Every question is delivered with a "Senior Moderator" marking scheme, including **Value Points** and **SI Unit** requirements.

---

## Difficulty Level Details

### 🟢 Easy (NCERT Direct)
- Direct questions from the NCERT back exercises.
- Simple formula substitutions (e.g., direct use of $V = IR$).
- Goal: Ensure basic conceptual literacy.

### 🟡 Medium (Board Exam / PYQ)
- Questions from previous year board papers (2015-2025).
- Combined conceptual and numerical tasks (e.g., "Derive X and find Y for these values").
- Goal: Ensure the student is "Board Ready" for a 90+ score.

### 🔴 Hard (Topper / HOTS)
- "Higher Order Thinking Skills" questions.
- Combines concepts from two different units (e.g., "Electrostatic force on a particle in simple harmonic motion").
- Goal: Secure the final 5 marks needed for a 495+/500 score.

---

## Usage Examples

### Example 1: High-Yield Physics practice
` /practice physics "optics" hard 3 `
> Result: Generates 3 complex questions on Lens Maker's Formula, Huygens Principle, and a multi-lens numerical.

### Example 2: Quick Chemistry Organic check
` /practice chemistry "aldehydes" medium 5 `
> Result: Generates 5 board-level questions including name reactions (Aldol/Cannizzaro) and distinction tests (Tollens).

### Example 3: Math Calculus Drill
` /practice math "integrals" medium 10 `
> Result: A mix of 10 definite and indefinite integrals, focusing on properties P4 and P7.

---

## Related Commands
- `/mark-my-answer` — Use this after solving the practice questions to get a professional evaluation.
- `/derivation-drill` — Specifically for the 3-5 mark derivations.
- `/cbq-practice` — Focus only on the 4-mark case-based questions.
