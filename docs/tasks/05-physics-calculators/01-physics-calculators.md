# Task: Implement All Physics Calculators (5 calculators)

**Epic:** Physics Calculators
**Estimated Duration:** 2 days
**Type:** Full Stack

## Overview
Implement all five physics calculators in parallel: Kinematics, Ohm's Law, Force (F=ma), Kinetic Energy, and Momentum. These are relatively straightforward formula implementations with good reusability patterns.

## Scope Summary

All five calculators follow similar pattern:
- Multi-mode implementation (find different variables)
- Unit handling (SI units)
- Step-by-step solution display
- Real-world interpretation
- 95%+ test coverage

## Scope: Kinematics Calculator

**Acceptance Criteria:**
- [ ] Four modes: Find Distance, Final Velocity, Time, or Acceleration
- [ ] Mode 1: d = v₀t + ½at²
- [ ] Mode 2: vf = v₀ + at
- [ ] Mode 3: vf² = v₀² + 2ad
- [ ] Mode 4: d = (v₀ + vf)t / 2
- [ ] Unit consistency (SI preferred)
- [ ] Negative values handled (deceleration, backward motion)
- [ ] Clear step-by-step breakdown
- [ ] Physical interpretation of results
- [ ] Performance: < 500ms

## Scope: Ohm's Law Calculator

**Acceptance Criteria:**
- [ ] Three modes: Calculate Voltage, Current, or Resistance
- [ ] Ohm's Law: V = I × R
- [ ] Calculate all three values
- [ ] Power calculation bonus: P = VI
- [ ] Unit verification (V, A, Ω)
- [ ] No zero denominators
- [ ] Practical interpretation (household current context)
- [ ] 95%+ unit test coverage

## Scope: Force Calculator (F=ma)

**Acceptance Criteria:**
- [ ] Three modes: Calculate Force, Mass, or Acceleration
- [ ] Newton's Second Law: F = m × a
- [ ] All three values calculated
- [ ] Weight calculation bonus: W = mg
- [ ] Unit handling (N, kg, m/s²)
- [ ] Practical context (gravitational force comparison)
- [ ] Prevents division by zero

## Scope: Kinetic Energy Calculator

**Acceptance Criteria:**
- [ ] Three modes: Calculate Energy, Mass, or Velocity
- [ ] KE = ½mv²
- [ ] All three values displayed
- [ ] Energy interpretation (joules equivalence)
- [ ] Velocity magnitude handling
- [ ] Edge cases: velocity = 0, mass = 0
- [ ] Clear physical interpretation

## Scope: Momentum Calculator

**Acceptance Criteria:**
- [ ] Three modes: Calculate Momentum, Mass, or Velocity
- [ ] p = m × v
- [ ] All three values displayed
- [ ] Negative momentum handling (direction)
- [ ] Real-world example (collision, vehicle impact)
- [ ] Impulse-momentum relationship (bonus context)
- [ ] Units: kg·m/s

## Technical Implementation

Generic multi-mode pattern for reusability:
```typescript
type PhysicsMode = 'distance' | 'velocity' | 'time' | 'acceleration'

interface KinematicsInput {
  mode: PhysicsMode
  // Dynamic fields based on mode
}

interface PhysicsResult {
  mode: PhysicsMode
  answer: number
  allValues: Record<string, number> // All calculated values
  formula: string
  steps: SolutionStep[]
  interpretation: string
}
```

## Dependencies
- Task: `02-calculator-framework`
- Task: `02-page-templates`
- Task: `02-form-components`

## File Structure
```
lib/calculators/physics/
├── kinematics.ts
├── ohmsLaw.ts
├── force.ts
├── kineticEnergy.ts
└── momentum.ts

components/calculators/
├── Kinematics.tsx
├── OhmsLaw.tsx
├── Force.tsx
├── KineticEnergy.tsx
└── Momentum.tsx

app/[locale]/
├── kinematics/{input,results}/page.tsx
├── ohms-law/{input,results}/page.tsx
├── force-calculator/{input,results}/page.tsx
├── kinetic-energy/{input,results}/page.tsx
└── momentum/{input,results}/page.tsx
```

## Testing Approach

For each calculator:
1. Unit tests: All modes, edge cases, numerical accuracy (95%+ coverage)
2. Component tests: Mode switching, form validation (90%+ coverage)
3. E2E tests: Complete flow for each mode
4. Manual verification: Compare results with physics textbooks/references

## Notes
- Use consistent unit handling (SI units by default)
- LaTeX formulas for all equations
- Physical interpretations enhance educational value
- Some may have bonus features (Power, Weight calculations)
- Translations: EN, ES, FR

## Priority
Can be implemented in parallel as they follow same patterns.
