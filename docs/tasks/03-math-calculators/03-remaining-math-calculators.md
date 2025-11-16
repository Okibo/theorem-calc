# Task: Implement Remaining Math Calculators (Slope, Std Dev, Sig Figs)

**Epic:** Math Calculators
**Estimated Duration:** 2 days
**Type:** Full Stack (Backend logic + Frontend UI)

## Overview
Implement the three remaining math calculators: Slope Calculator, Standard Deviation Calculator, and Significant Figures Calculator. These follow the same patterns as Quadratic and Percentage calculators.

## Scope: Slope Calculator

**Acceptance Criteria:**
- [ ] Calculate slope: m = (y₂ - y₁) / (x₂ - x₁)
- [ ] Classify slope type: positive, negative, zero, undefined
- [ ] Prevent division by zero (vertical line case)
- [ ] Optional line equation calculation (y = mx + b)
- [ ] Geometric interpretation (steepness description)
- [ ] Simple line visualization option
- [ ] Numeric accuracy: 6 decimal places
- [ ] 95%+ unit test coverage
- [ ] Component with 90%+ coverage
- [ ] E2E test covering all features

## Scope: Standard Deviation Calculator

**Acceptance Criteria:**
- [ ] Calculate mean: μ = Σx / n
- [ ] Calculate variance: σ² = Σ(x - μ)² / N (population) or n-1 (sample)
- [ ] Calculate standard deviation: σ = √variance
- [ ] Sample vs Population toggle working
- [ ] Handle datasets 1 to 10,000 points
- [ ] Identify outliers (±3σ threshold)
- [ ] Performance: < 500ms for 10,000 data points
- [ ] Min/Max value display
- [ ] Interpretation guide (low vs high variance)
- [ ] 95%+ unit test coverage
- [ ] Component with 90%+ coverage
- [ ] E2E test with sample data

## Scope: Significant Figures Calculator

**Acceptance Criteria:**
- [ ] Identify significant figures per IUPAC standards
- [ ] Round to target significant figure count (1-15)
- [ ] Handle scientific notation input/output
- [ ] Edge cases: zeros, trailing zeros, decimals
- [ ] Rounding rules: round half up or banker's rounding toggle
- [ ] Before/after comparison display
- [ ] Rule reference/explanations
- [ ] Precision indicator display
- [ ] 95%+ unit test coverage
- [ ] Component with 90%+ coverage
- [ ] E2E test with various inputs

## Technical Implementation Pattern

Follow the same pattern as Quadratic Solver:
1. Create calculation functions in `/lib/calculators/math/[name].ts`
2. Write comprehensive unit tests first (TDD)
3. Create React component in `/components/calculators/[Name].tsx`
4. Create pages: `/app/[locale]/[tool-slug]/input/page.tsx` and `results/page.tsx`
5. Implement responsive layout
6. Add comprehensive component tests
7. Create E2E tests

## Dependencies
- Task: `02-calculator-framework`
- Task: `02-page-templates`
- Task: `01-layout-components`
- Task: `02-form-components`
- Task: `03-result-display-components`

## File Structure
```
lib/calculators/math/
├── slope.ts
├── standardDeviation.ts
└── significantFigures.ts

components/calculators/
├── SlopeCalculator.tsx
├── StandardDeviation.tsx
└── SignificantFigures.tsx

app/[locale]/
├── slope-calculator/{input,results}/page.tsx
├── standard-deviation/{input,results}/page.tsx
└── significant-figures/{input,results}/page.tsx

tests/
├── unit/calculators/math/{slope,standardDeviation,significantFigures}.test.ts
└── components/{SlopeCalculator,StandardDeviation,SignificantFigures}.test.tsx
```

## Notes
- Use SolutionBuilder for step generation
- LaTeX formulas for all mathematical equations
- Accessibility: Proper ARIA labels for complex inputs
- Translations: English, Spanish, French
- Responsive: 320px to 2560px
- Consider pre-built samples (e.g., preset datasets for Std Dev)

## Testing Approach
- Unit tests: Edge cases, numerical accuracy
- Component tests: Form interactions, mode switching
- E2E tests: Complete calculator flow
- Visual regression: Screenshots at different breakpoints
