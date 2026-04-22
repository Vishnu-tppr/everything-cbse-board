---
name: practical-check
description: >-
  Prepare for 12th-grade Science Practicals (30 Marks). 
  Includes procedure verification, Viva-Voce simulation, and External Exam readiness.
---

# /practical-check Command — The Lab Readiness Hub

In CBSE Grade 12, the **Practical Component (30 Marks)** can be the difference between a 90% and a 95+%. The `/practical-check` command ensures you are fully prepared for the External Examiner's visit.

## Command Syntax
```
/practical-check [subject] [experiment_name]
```

## What It Covers

### 1. Procedure Verification
- Asks you to list the **Apparatus**, **Theory/Principle**, and **Circuit/Ray Diagram**.
- Checks if you know the **Precautions** (e.g., "Why should you use a clean resistance box?").

### 2. Viva-Voce Simulation
- Triggers a mock interview with the **Practical-Examiner** agent.
- Asks 3-5 "External Level" questions that test the depth of your understanding.

### 3. Error Analysis
- Guides you through the "Least Count" calculation.
- Explains how to handle "Zero Error" or "Backlash Error" in measurements.

---

## High-Frequency Practical Topics

### 🔭 Physics
- **Meter Bridge:** Determination of unknown resistance.
- **Potentiometer:** Comparing EMF of two cells / finding internal resistance.
- **Optics:** Finding focal length of a concave mirror or convex lens.
- **Semiconductors:** P-N junction characteristics (Forward/Reverse bias).

### 🧪 Chemistry
- **Volumetric Analysis:** Titration of KMnO4 vs Mohr's salt / Oxalic acid.
- **Salt Analysis:** Systematic identification of one cation and one anion.
- **Content Based:** Functional group detection (Alcohols, Phenols, etc.).

### 🧬 Biology
- **Megasporogenesis:** Pollen germination on a slide.
- **DNA Isolation:** Isolating DNA from plant materials (Spinach/Papaya).
- **Spotting:** Identification of specimens (Specimen logic).

---

## The Readiness Report

After checking your knowledge, the command generates a **Lab Readiness Report**:
- **Status:** [Incomplete / Lab-Ready / External-Ready]
- **Key Missing Fact:** The one thing the external examiner will definitely catch.
- **Viva Drill:** 3 questions for you to answer.

---

## Usage Example

` /practical-check chemistry "titration kmno4" `

> **Output:**
> ### 🥼 Practical Readiness: KMnO4 Titration
> **Principle Check:** Redox titration where KMnO4 acts as an oxidizing agent.
> **Warning:** You must use dilute H2SO4 to provide an acidic medium. 
> **Question:** Why can't we use HCl or HNO3 instead of H2SO4?
> [Student answers]
> **Practical Examiner:** Correct! HCl would be oxidized by KMnO4, and HNO3 is itself an oxidizing agent. You are 'External-Ready'!
