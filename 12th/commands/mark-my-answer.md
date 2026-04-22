---
name: mark-my-answer
description: >-
  Evaluate a submitted answer based on CBSE 12th marking schemes. 
  Provides step-marking, keyword analysis, and topper feedback.
---

# /mark-my-answer Command — The Evaluation Hub

The `/mark-my-answer` command is your professional feedback loop. It transforms the AI into a **Senior CBSE Moderator** who marks your work with the same rigor (and marking scheme) as an official board examiner.

## Command Syntax
```
/mark-my-answer [subject] [chapter] [answer_text_or_image]
```

## How It Works

1. **OCR/Text Analysis:** The command processes your submitted answer (via text or uploaded image).
2. **Context Retrieval:** It pulls the official "Value Points" for the specific topic from the `SKILL.md` and `keyword-bank` files.
3. **Agent Handshake:** Triggers the **Evaluator** agent.
4. **Scoring Logic:**
   - **Step 1 (Formula):** Awards 0.5m if the correct formula is stated.
   - **Step 2 (Substitution):** Awards 1.0m if values are correctly put into the formula.
   - **Step 3 (SI Units):** Checks if all units (e.g., $cm$ to $m$) were converted.
   - **Step 4 (Keywords):** Scans for technical terms (e.g., "Inductive Effect", "Megasporogenesis").
   - **Step 5 (Diagram):** Checks for labeling and arrows (essential for Physics/Biology).
5. **Report Generation:** Delivers a structured evaluation report including a final score and "Topper Tips."

---

## The Marking Philosophy

This command follows the **Strict Marking Policy** of CBSE:
- **No Grace Marks:** If the logic is correct but the math is wrong, you lose marks. 
- **Keyword Dependency:** Even if your explanation is 5 paragraphs long, if it doesn't contain the 3 key "Value Points" from the marking scheme, you will lose 1.5 - 2 marks.
- **Presentation Matters:** Points for boxing the final answer and using clear headings.

---

## Evaluation Output Sections

### 📊 The Scoreboard
A clear breakdown of marks earned vs. total marks.

### 🔍 The Micro-Audit
A step-by-step table showing exactly *where* a mark was awarded or deducted.
- *Example:* "Step 2: -0.5m. Correct substitution but failed to convert 10cm to 0.1m."

### 🎯 The Keyword Match
A comparison of the keywords in your answer vs. the keywords expected by the examiner.
- *Found:* [X], [Y]
- *MISSING:* [Z] (Examiner would deduct here!)

### 💡 The Senior Sibling Feedback
Strategic advice on how to improve.
- "Your handwriting in the subscript is confusing the 'n' and 'm'. Be careful!"
- "Always draw the circuit diagram for this question, even if not asked."

---

## Usage Example

### Scenario: Physics Numerical on Capacitance
` /mark-my-answer physics "electrostatics" [Student's Answer Text] `

> **Output:** 
> ### 📊 Result: 3.5 / 5 Marks
> **Status:** Step-marking applied.
> **Critical Error:** You forgot the 'Micro' ($10^{-6}$) conversion in the substitution step.
> **Topper Tip:** Always write the given values in SI units at the TOP of your answer sheet to avoid this mistake!

---

## Related Commands
- `/ncertify` — Check if your answer aligns with the specific language used in NCERT.
- `/explain` — Use this if the Evaluator identifies a conceptual gap in your answer.
