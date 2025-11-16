# Task: Implement Percentage Calculator

**Epic:** Math Calculators
**Estimated Duration:** 2 days
**Type:** Full Stack (Backend logic + Frontend UI)

## Overview
Implement the Percentage Calculator with three modes: Percentage of Amount, Percentage Change, and Reverse Percentage. Demonstrates dynamic input/output switching based on calculator mode.

## Acceptance Criteria

**Calculation Logic:**
- [ ] Mode 1 (Percentage of Amount): Result = Amount × (Percentage / 100)
- [ ] Mode 2 (Percentage Change): % Change = ((New - Original) / Original) × 100
- [ ] Mode 3 (Reverse Percentage): Original = Result / (Percentage / 100)
- [ ] All modes handle edge cases:
  - Negative values
  - Zero inputs
  - Division by zero (Mode 2 & 3)
- [ ] Numeric accuracy to 2 decimal places (currency) or 4 decimal places
- [ ] Performance: calculation < 100ms

**Component & UI:**
- [ ] Mode selector toggle with three options
- [ ] Dynamic input fields based on selected mode
- [ ] Input validation specific to each mode
- [ ] Clear labeling of which value is being calculated
- [ ] Results show all related percentage values (if applicable)
- [ ] Mobile-first responsive design
- [ ] Real-world interpretation/example in results

**Testing:**
- [ ] Unit tests for all three calculation modes (95%+ coverage)
- [ ] Edge case tests (zero, negative, large numbers)
- [ ] Component tests for mode switching (90%+ coverage)
- [ ] E2E test: Complete flow for each mode
- [ ] Integration test: Mode switching with form clearing

## Technical Details

### calculatePercentage Function Signatures
```typescript
type PercentageMode = 'amount' | 'change' | 'reverse'

interface PercentageInput {
  mode: PercentageMode
  amount?: number      // Mode 1
  percentage?: number  // Mode 1, 2, 3
  original?: number    // Mode 2
  newValue?: number    // Mode 2
  result?: number      // Mode 3
}

interface PercentageResult {
  mode: PercentageMode
  answer: number
  formula: string
  allValues: Record<string, number> // Show all related values
  interpretation: string
  steps: SolutionStep[]
}
```

## Dependencies
- Task: `02-calculator-framework` (architecture)
- Task: `02-page-templates` (page structure)
- Task: `02-form-components` (dynamic form fields)

## File Locations
- Calculation: `/lib/calculators/math/percentage.ts`
- Tests: `/tests/unit/calculators/math/percentage.test.ts`
- Component: `/components/calculators/PercentageCalculator.tsx`
- Pages: `/app/[locale]/percentage-calculator/input/page.tsx` and `results/page.tsx`

## Notes
- TDD approach: Write tests first
- Mode switching should clear/reset form values
- Real-world examples (discount calculations, profit margins, etc.)
- Translations needed for all three modes

## Testing Approach
- Unit test: All three modes with various inputs
- Component test: Mode switching, input validation
- E2E test: Complete flow for each mode separately
