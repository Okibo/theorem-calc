# Task: Configure Jest Testing Framework and RTL

**Epic:** Project Setup & Infrastructure
**Estimated Duration:** 1 day
**Type:** Testing / Quality Assurance

## Overview
Set up Jest testing framework with React Testing Library for unit and component tests. Configure test infrastructure to support TDD approach throughout calculator development.

## Acceptance Criteria

- [ ] Jest installed and configured for Next.js
- [ ] React Testing Library installed and integrated
- [ ] Test configuration files created:
  - `jest.config.js`
  - `jest.setup.js`
- [ ] TypeScript support for test files
- [ ] `npm run test` command working
- [ ] `npm run test:watch` working for development
- [ ] Test files discover automatically (.test.ts, .test.tsx, .spec.ts)
- [ ] Coverage reporting configured
- [ ] Code coverage thresholds set (80% minimum)
- [ ] Sample calculator test created and passing
- [ ] Sample component test created and passing
- [ ] No TypeScript errors in test files
- [ ] Test output clear and readable

## Technical Details

### File Structure
```
theorem-calc/
├── tests/
│   ├── unit/
│   │   └── .gitkeep
│   ├── integration/
│   │   └── .gitkeep
│   └── setup.ts              # Shared test setup
│
├── jest.config.js            # Jest configuration
└── jest.setup.js             # Jest initialization
```

### Jest Configuration Essentials
- Transform TypeScript with `ts-jest` or SWC
- Module name mapping for path aliases (@/*)
- Setup files for RTL configuration
- Coverage reports in JSON, LCOV, and text formats
- Watch mode for development
- Test match patterns for .test.ts/.test.tsx files

### Sample Test (Calculator Logic)
```typescript
// tests/unit/calculators/percentage.test.ts
describe('Percentage Calculator', () => {
  test('calculates percentage of amount', () => {
    const result = calculatePercentage(100, 25)
    expect(result).toBe(25)
  })

  test('handles edge cases', () => {
    expect(() => calculatePercentage(0, 0)).not.toThrow()
  })
})
```

### Sample Test (React Component)
```typescript
// tests/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button Component', () => {
  test('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('calls onClick handler', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    screen.getByText('Click').click()
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## Dependencies
- Task: `01-nextjs-typescript-setup` (must complete first)

## Notes
- TDD mandatory: Write tests FIRST, then implementation
- Focus on behavioral testing, not implementation details
- Use data-testid sparingly - prefer semantic queries (getByRole, getByLabelText)
- Keep tests simple and focused on single behavior
- Mock external dependencies (APIs, contexts)
- Target coverage: >80% overall, >95% for calculation logic

## Testing Approach
- `npm run test` should run all tests
- `npm run test -- --coverage` should generate coverage report
- No console errors or warnings in test output
- All tests should complete in < 5 seconds total
- Watch mode should allow rapid test-driven development
