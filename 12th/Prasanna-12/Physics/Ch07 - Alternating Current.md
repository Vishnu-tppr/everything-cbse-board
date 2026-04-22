---
subject: Physics
chapter_no: 7
marks_weightage: 17 (combined with Ch 4-6)
status: not-started
difficulty: high
last_reviewed: 
tags: [physics, ac, lcr-circuit, resonance, transformer, 12th]
---

# ⚡ Ch07 - Alternating Current

> **Physics** | **Marks**: ~7-9 | [[🔬 Physics]]
> This chapter analyzes circuits with time-varying voltages (AC), focusing on Reactance, Impedance, Resonance in LCR circuits, and Transformers.

---

## 🎯 Conceptual Core (NCERT Mirror)

### 1. Basic AC Quantities
- **Peak Value** ($I_0, V_0$) vs **RMS Value** ($I_{rms}, V_{rms}$):
  - $I_{rms} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$.
  - $V_{rms} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$.
- **Average Power**: $P_{avg} = V_{rms} I_{rms} \cos \phi$.

### 2. Reactance & Impedance
- **Inductive Reactance** ($X_L$): $X_L = \omega L = 2\pi f L$. (Current lags by $90^\circ$).
- **Capacitive Reactance** ($X_C$): $X_C = \frac{1}{\omega C}$. (Current leads by $90^\circ$).
- **Impedance** ($Z$): In series LCR, $Z = \sqrt{R^2 + (X_L - X_C)^2}$.

### 3. Resonance in LCR Circuit
- Occurs when $X_L = X_C \implies \omega_0 = \frac{1}{\sqrt{LC}}$.
- At resonance, $Z = R$ (minimum), so current $I$ is maximum.
- **Power Factor** ($\cos \phi$): At resonance, $\cos \phi = 1$.

---

## 📐 The 12th Grade Technicals

### ⚡ Mandatory Derivations
1. **Average Power in AC Circuit**: $P = V_{rms} I_{rms} \cos \phi$.
2. **Sharpness of Resonance (Q-Factor)**: $Q = \frac{\omega_0 L}{R} = \frac{1}{R} \sqrt{\frac{L}{C}}$.
3. **Phasor Diagram for LCR**: Showing vector relations of $V_L, V_C, V_R$.

### 🔧 Devices: The Transformer
- **Principle**: Mutual Induction.
- **Equations**: $\frac{V_s}{V_p} = \frac{N_s}{N_p} = K$.
- **Efficiency**: $\eta = \frac{P_{out}}{P_{in}}$.
- **Energy Losses**: Flux leakage, Resistance of windings, Eddy currents, Hysteresis.

---

## ⚠️ The "Mistake DNA" Alert (Common Traps)
- **Phase Angles**: Pure $L \to +90^\circ$ (V leads), Pure $C \to -90^\circ$ (V lags). Don't swap them.
- **RMS vs Peak**: In numericals, unless "peak" is mentioned, assume given values ($220V, 50Hz$) are **RMS**.
- **Wattless Current**: Current in a circuit with only $L$ or $C$, where power consumption is zero ($\cos \phi = 0$).

---

## 📋 Board Mastery (PYQ Patterns)
| Question Type | Frequency | Value Points |
|---------------|-----------|--------------|
| LCR Impedance & Phasor | Very High | Diagram + Vector logic + Resonance |
| Transformer Principles/Losses | High | Theory + Efficiency formula |
| Power Factor Logic | Medium | Conceptual explanation of $\cos \phi$ |

---

*Back to [[🔬 Physics]]*
