# Task: Establish Calculator Architecture and Patterns

**Epic:** Calculator Framework
**Estimated Duration:** 1 day
**Type:** Backend / Architecture

## Overview
Create the foundational architecture, patterns, and utilities for all 15 calculators. This includes solution step builders, result formatters, input validation framework, and calculation result types.

## Acceptance Criteria

- [ ] Calculation result type defined with:
  - answer: The primary result value(s)
  - steps: Array of solution steps
  - formulas: Used formulas with substituted values
  - explanation: Educational context
  - units: Relevant units (optional)
  - metadata: Calculator-specific metadata
- [ ] SolutionStep interface with:
  - Step number
  - Description
  - Formula (LaTeX format)
  - Calculation details
  - Optional visual elements
- [ ] InputValidator class/functions:
  - Validate numeric inputs
  - Check ranges and constraints
  - Provide user-friendly error messages
  - Prevent division by zero
- [ ] SolutionBuilder class:
  - Build steps programmatically
  - Add formulas with LaTeX support
  - Format numbers to significant figures
  - Generate explanations
- [ ] ValidationRules enum/constants:
  - Required field rules
  - Numeric range rules
  - Custom validation rules
- [ ] Calculator configuration metadata:
  - Input requirements per calculator
  - Output format specifications
  - Units and conversions
  - Category (Math, Chemistry, Physics)
- [ ] Error handling strategy:
  - Custom error types for calculations
  - User-friendly error messages
  - No technical jargon in errors
  - Suggestion for correction
- [ ] All utilities with 95%+ test coverage
- [ ] TypeScript types properly exported

## Technical Details

### CalculationResult Type
```typescript
export interface CalculationResult<T = any> {
  success: boolean
  answer: T
  steps: SolutionStep[]
  formulas: Formula[]
  explanation: string
  units?: {
    input: string
    output: string
  }
  metadata?: Record<string, any>
  error?: {
    code: string
    message: string
    suggestion?: string
  }
}

export interface SolutionStep {
  number: number
  title?: string
  description: string
  formula?: string // LaTeX format
  calculation?: string
  result?: string
}

export interface Formula {
  latex: string
  description: string
  substitution?: Record<string, string | number>
}
```

### InputValidator Pattern
```typescript
class InputValidator {
  validateNumber(value: unknown, options?: {
    min?: number
    max?: number
    allowZero?: boolean
    allowNegative?: boolean
  }): { valid: boolean; error?: string }

  validateRequired(value: unknown, fieldName: string): { valid: boolean; error?: string }

  validateRange(value: number, min: number, max: number): { valid: boolean; error?: string }
}
```

### SolutionBuilder Pattern
```typescript
class SolutionBuilder {
  constructor(calculatorName: string)

  addStep(description: string, options?: {
    formula?: string
    calculation?: string
    result?: string
  }): this

  addFormula(latex: string, substitution?: Record<string, any>): this

  setExplanation(text: string): this

  build(): SolutionStep[]
}
```

## Dependencies
- Task: `01-nextjs-typescript-setup` (TypeScript setup)
- Task: `04-jest-testing-setup` (testing framework)

## Notes
- All calculation logic stays in `/lib/calculators/` directory
- Framework utilities in `/lib/` for reuse across calculators
- LaTeX format used for future MathJax integration
- Input validation must happen on both client and server
- Error messages should never expose technical details
- Performance: calculation results should render < 500ms

## Testing Approach
- Unit tests for InputValidator (edge cases, constraints)
- Unit tests for SolutionBuilder (step building, formatting)
- Unit tests for error handling (proper error messages)
- Integration test: Full validation and result generation flow
- Type safety: TypeScript compilation without errors
