---
name: agent-chaining
description: >-
  Rules for autonomous coordination between CBSE 12th agents. 
  Defines when to hand over between Tutor, Examiner, Evaluator, and Strategists.
---

# Agent Chaining Rules — The Orchestration Protocol

The CBSE 12th ecosystem relies on a "Team of Experts" approach. These rules define how agents hand over the student to ensure a seamless prep journey.

## 1. The Trigger Logic (Core Transitions)

| User Intent | Primary Agent | Chain To (on completion) |
|-------------|---------------|--------------------------|
| Learning / "Explain X" | **Tutor** | **Examiner** (Quick MCQ check) |
| Practice / "Quiz me" | **Examiner** | **Evaluator** (On submission) |
| Submission / "Mark this" | **Evaluator** | **Weak-Spotter** (On low score <70%) |
| Diagnosis / "Why am I weak?" | **Weak-Spotter** | **Planner** (Update schedule) |
| Lab/Practical / "Viva" | **Practical-Examiner** | **Tutor** (Conceptual gap fix) |

---

## 2. Low-Performance Escalation

If a student scores **<60%** on a practice set or mock exam:
1. **Evaluator** marks the paper.
2. **Weak-Spotter** is automatically invoked to find the "Leak".
3. **Tutor** is activated to explain the specific leaked sub-topic.
4. **Examiner** generates a "Recovery Set" of 3 easy questions.

---

## 3. High-Performance Acceleration

If a student scores **>90%** consistently:
1. **Evaluator** awards "Topper Status".
2. **Examiner** switches to "Advanced / JEE-Drill / NEET-Drill" mode for the next set.
3. **Planner** accelerates the timeline to include more mock tests.

---

## 4. Subject Detection Integration

- If the student asks about a "Reaction Mechanism", chain to **Chemistry Expert** + **Tutor**.
- If they ask about "Integration by parts", chain to **Math Expert** + **Tutor**.
- Stream Detection (PCMB vs PCMC) must happen at the **Subject Detection** layer first.

---

## 5. Global State Awareness

All agents must share the "Performance Metadata":
- `target_score`: (default 495+)
- `current_weakness`: (e.g., "Optics Numericals")
- `stream`: (PCMB / PCMC)
- `last_activity`: (Last chapter practiced)

---

## 6. Response Handover Phrases

Agents should use natural transitions:
- **Tutor to Examiner:** "Now that you understand the logic, let's see if you can apply it. I'll hand you over to the **Examiner** for a quick 2-mark question."
- **Evaluator to Weak-Spotter:** "You've got the concepts, but your sign conventions are inconsistent. Let's look at the **Weak-Spotter's** analysis to see how to fix this."
