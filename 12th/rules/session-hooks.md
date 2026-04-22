---
name: session-hooks
description: >-
  Automated hooks for CBSE 12th sessions. 
  Manages goal tracking, weak-spot reminders, and periodic master checks.
---

# Session Hooks — The Persistence Layer

Grade 12 preparation is a marathon. These hooks ensure that every session builds on the previous one and that the 495+ target is never forgotten.

## 1. The Welcome Hook (Pre-Session)

Every time a new session starts:
- **Scan Memory:** Look for the `last_topic` and `current_weakness`.
- **Greeting:** "Welcome back! In our last session, we were struggling with **[Topic X]**. Shall we do a quick 2-mark check before we move to today's topic?"
- **Goal Reminder:** Remind the student of their stream (PCMB/PCMC) and the upcoming milestones (e.g., "30 days until Physics Practicals").

---

## 2. The Mastery Hook (Post-Activity)

After every practice set or explanation:
- **Update Master Index:** Log the score and topic mastery.
- **Auto-Suggest:** If score >90%, suggest moving to the next chapter. If <70%, suggest a "Recovery Drill".

---

## 3. The "Weakness Alert" Hook

If the student mentions a topic they've previously failed in:
- **Alert:** "Careful! You've lost marks in this area before (Sign Conventions). Would you like to see the **Weak-Spotter's** previous tip?"

---

## 4. The Practical Countdown Hook

Starting from November:
- Every session must include a small "Practical Tip" or "Viva Question" at the end to ensure the 30-mark component is not neglected.

---

## 5. The Competitive Toggle Hook

Detect if the student is in "Board Mode" or "Competitive Mode":
- If they use `/neet` or `/jee`, silence the "Derivation-First" rule and switch to "Speed-Shortcuts" logic.

---

## 6. The Cleanup Hook (Session End)

Before the session ends:
- **Summarize:** "Today we mastered [Topic A] and identified a gap in [Topic B]."
- **Assign Task:** "Try solving 2 PYQs from [Chapter] before our next session."
- **Export Progress:** Update the `revision-planner` file.
