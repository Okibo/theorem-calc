# Task: Implement Remaining Chemistry Calculators (4 calculators)

**Epic:** Chemistry Calculators
**Estimated Duration:** 3 days
**Type:** Full Stack

## Overview
Implement the four remaining chemistry calculators: Chemical Equation Balancer, Molarity, Stoichiometry, and Percent Error. These follow similar patterns with varying complexity.

## Scope: Chemical Equation Balancer

**Acceptance Criteria:**
- [ ] Parse reactants and products (formula strings)
- [ ] Generate coefficient matrix for element balance
- [ ] Solve system to find smallest integer coefficients
- [ ] Verify element counts match both sides
- [ ] Support coefficients up to 20
- [ ] Handle multi-reactant/product equations
- [ ] Error handling for unbalanceable inputs
- [ ] Helpful guidance for formatting mistakes
- [ ] 95%+ unit test coverage
- [ ] Complex implementation - use linear algebra or algorithmic approach

## Scope: Molarity Calculator

**Acceptance Criteria:**
- [ ] Three modes: Calculate Molarity, Moles, or Volume
- [ ] Mode 1 (Molarity): M = moles / volume (L)
- [ ] Mode 2 (Moles): n = M × V
- [ ] Mode 3 (Volume): V = n / M
- [ ] Unit conversion (mL ↔ L)
- [ ] Formula display with substitution
- [ ] Unit verification and conversion explanation
- [ ] Visual representation option
- [ ] Real-world example interpretation
- [ ] 95%+ unit test coverage
- [ ] Component with 90%+ coverage

## Scope: Stoichiometry Calculator

**Acceptance Criteria:**
- [ ] Input balanced equation
- [ ] Select known and unknown substances
- [ ] Input amount of known substance with units (moles, grams, liters)
- [ ] Extract stoichiometric ratios from equation
- [ ] Convert between moles/grams/liters
- [ ] Calculate limiting reagent (if multi-reactant)
- [ ] Display molar masses used with sources
- [ ] Step-by-step conversion display
- [ ] Support for gas stoichiometry (molar volume 22.4 L/mol)
- [ ] 95%+ unit test coverage

## Scope: Percent Error Calculator

**Acceptance Criteria:**
- [ ] Inputs: Experimental and Theoretical values
- [ ] Calculate: |Experimental - Theoretical| / Theoretical × 100
- [ ] Error classification: low/medium/high (contextual)
- [ ] Handle zero theoretical value (error)
- [ ] Never negative percentage
- [ ] Common error sources explanation (educational)
- [ ] Result quality interpretation
- [ ] 95%+ unit test coverage
- [ ] Component with 90%+ coverage

## Technical Implementation

Follow established patterns:
1. Calculation logic with comprehensive tests (TDD)
2. Input validation framework
3. React components with form handling
4. Page routes for input and results
5. Responsive mobile-first design
6. E2E tests for complete flows

## Dependencies
- Task: `02-calculator-framework`
- Task: `01-molar-mass-calculator` (needed for stoichiometry)

## File Structure
```
lib/calculators/chemistry/
├── chemicalBalancer.ts
├── molarity.ts
├── stoichiometry.ts
└── percentError.ts

components/calculators/
├── ChemicalBalancer.tsx
├── Molarity.tsx
├── Stoichiometry.tsx
└── PercentError.tsx
```

## Notes
- Chemical Equation Balancer is most complex - consider algorithmic approach or library
- Stoichiometry depends on molar mass calculations
- All require periodic table reference
- Error handling critical for chemistry accuracy

## Testing Approach
- Comprehensive unit tests for chemistry formulas
- Edge case testing (zero values, large numbers)
- Component tests for form interactions
- E2E tests for each calculator
