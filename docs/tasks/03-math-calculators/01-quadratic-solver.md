# Task: Implement Quadratic Equation Solver Calculator

**Epic:** Math Calculators
**Estimated Duration:** 2 days
**Type:** Full Stack (Backend logic + Frontend UI)

## Overview
Implement the Quadratic Equation Solver - the first complete calculator implementation. This serves as the reference implementation for all subsequent calculators. Includes: calculation logic, input validation, component UI, page routes, and comprehensive tests.

## Acceptance Criteria

**Calculation Logic:**
- [ ] `solveQuadratic()` function handles all cases:
  - Two real solutions
  - One repeated root
  - Two complex solutions
  - Edge case: a = 0 (error)
- [ ] Discriminant calculated correctly: Δ = b² - 4ac
- [ ] Complex numbers in a + bi format
- [ ] Numeric accuracy to 8 significant figures
- [ ] Performance: calculation < 100ms

**Input Validation:**
- [ ] Coefficient a ≠ 0 validation
- [ ] Numeric input validation for a, b, c
- [ ] Clear error messages for invalid inputs
- [ ] Real vs Complex solution toggle works

**Component & Pages:**
- [ ] QuadraticSolver input component with:
  - Three number inputs (a, b, c coefficients)
  - Toggle for "Real Solutions Only" / "Include Complex"
  - Responsive layout (mobile-first)
  - Clear labels and helper text
- [ ] Input page: `/[locale]/quadratic-solver/input`
- [ ] Results page: `/[locale]/quadratic-solver/results`
- [ ] Solution display shows:
  - Answer prominently (x = ...)
  - Discriminant value and interpretation
  - Complete quadratic formula with substitution
  - Step-by-step solution (5-7 steps)
  - Educational explanation
- [ ] Responsive on all screen sizes (320px to 2560px)
- [ ] Accessibility: WCAG AA compliant
- [ ] No TypeScript errors

**Testing:**
- [ ] Unit tests for quadratic.ts:
  - Real roots cases
  - Complex roots cases
  - Edge cases (a=0, very large numbers)
  - 95%+ coverage
- [ ] Component tests for QuadraticSolver:
  - Input validation feedback
  - Toggle functionality
  - Form submission
  - 90%+ coverage
- [ ] E2E test:
  - Complete flow: input → calculate → results
  - Works on mobile (375px) and desktop (1024px)
  - All interactive elements functional

## Technical Details

### solveQuadratic Function Signature
```typescript
interface QuadraticCoefficients {
  a: number
  b: number
  c: number
  includeComplex?: boolean
}

interface RealRoot {
  type: 'real'
  value: number
}

interface ComplexRoot {
  type: 'complex'
  real: number
  imaginary: number
}

interface QuadraticSolution {
  roots: (RealRoot | ComplexRoot)[]
  discriminant: number
  steps: SolutionStep[]
  formulas: Formula[]
}

export function solveQuadratic(
  coefficients: QuadraticCoefficients
): QuadraticSolution
```

### Solution Steps Example
```
Step 1: Identify coefficients (a=1, b=-3, c=2)
Step 2: Calculate discriminant (Δ = b² - 4ac = 9 - 8 = 1)
Step 3: Apply quadratic formula (x = (-b ± √Δ) / 2a)
Step 4: Calculate first root (x₁ = 2)
Step 5: Calculate second root (x₂ = 1)
Step 6: Verify solutions
```

## Dependencies
- Task: `02-calculator-framework` (architecture patterns)
- Task: `01-layout-components` (page layout)
- Task: `02-form-components` (input fields)
- Task: `03-result-display-components` (results display)
- Task: `01-calculator-architecture` (validation)
- Task: `02-page-templates` (page structure)
- Task: `04-jest-testing-setup` (testing framework)

## File Locations
- Calculation: `/lib/calculators/math/quadratic.ts`
- Tests: `/tests/unit/calculators/math/quadratic.test.ts`
- Component: `/components/calculators/QuadraticSolver.tsx`
- Component tests: `/tests/components/QuadraticSolver.test.tsx`
- Pages: `/app/[locale]/quadratic-solver/input/page.tsx` and `results/page.tsx`

## Notes
- TDD approach: Write tests first, then implementation
- Use SolutionBuilder from framework for step generation
- Verify complex number formatting matches PRD (a + bi)
- Consider numerical stability for very large/small coefficients
- LaTeX formulas for MathJax integration
- French translation: "Calculateur d'Équations Quadratiques" or similar

## Testing Approach
- Unit test coverage: >95% for calculation logic
- Component tests: Form inputs, validation, submission
- E2E test: Complete calculator flow
- Manual test: Compare with WolframAlpha results
