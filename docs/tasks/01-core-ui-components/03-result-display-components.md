# Task: Build Results Display Components (ResultCard, SolutionSteps, MathDisplay)

**Epic:** Core UI Components
**Estimated Duration:** 1 day
**Type:** Frontend / UI Components

## Overview
Create specialized components for displaying calculator results, step-by-step solutions, and mathematical notation. These components will be reused across all 15 calculators to present answers prominently with educational explanations.

## Acceptance Criteria

- [ ] ResultCard component:
  - Prominent answer display (28-36px font, color-highlighted)
  - Answer always visible above fold
  - Card styling with shadow/border
  - Flexible content layout for different calculator types
  - Copy/Share/Print buttons integration area
- [ ] SolutionSteps component:
  - Numbered step display
  - Clear spacing between steps
  - Each step has: number, description, formula/calculation
  - Collapsible for long solutions (optional)
  - Mobile-friendly layout (vertical stack)
- [ ] FormulaDisplay component:
  - Render mathematical notation (placeholder for MathJax integration)
  - Support for superscripts, subscripts, fractions
  - Greek letters and mathematical symbols
  - Fallback text for accessibility
  - Clear readability on all screen sizes
- [ ] ActionButton group (Copy, Share, Print, New Calc):
  - Full-width on mobile (stacked or 2 per row)
  - Horizontal layout on desktop
  - Touch-friendly (48px+ height)
  - Clear visual feedback on click
- [ ] StepMarker component:
  - Number or checkmark indicator
  - Consistent styling across solutions
  - Accessibility: proper semantic markup
- [ ] All components fully responsive
- [ ] TypeScript types exported and documented
- [ ] 85%+ test coverage

## Technical Details

### ResultCard Component Interface
```typescript
interface ResultCardProps {
  answer: string | number | ReactNode
  answerLabel?: string
  answerUnit?: string
  children?: ReactNode
  highlight?: boolean
}

export function ResultCard({ answer, answerLabel, answerUnit, children }: ResultCardProps) {
  // Display answer prominently
  // Render children (steps, additional info)
  // Action buttons slot
}
```

### SolutionSteps Component Interface
```typescript
interface Step {
  number: number
  title?: string
  description: string
  formula?: string
  calculation?: string
}

interface SolutionStepsProps {
  steps: Step[]
  collapsible?: boolean
  maxVisibleSteps?: number
}
```

### FormulaDisplay Component Interface
```typescript
interface FormulaDisplayProps {
  formula: string  // LaTeX format for future MathJax integration
  description?: string
  inline?: boolean
}
```

## Dependencies
- Task: `02-tailwind-shadcn-setup` (styling)
- Task: `04-jest-testing-setup` (testing)

## Notes
- MathJax integration happens in separate task (not yet implemented)
- Formula display uses LaTeX format for compatibility with MathJax 3
- Result components should be agnostic to calculator type
- Action buttons (Copy, Share, Print) are placeholders here - functionality in separate task
- Colors follow design system: primary blue for highlights, success green for correct results
- No animations required but CSS transitions allowed

## Testing Approach
- Unit tests for data transformation (steps formatting)
- Component tests for rendering with various data
- Visual tests for different content lengths
- Accessibility: Verify semantic structure, heading hierarchy
- Responsive: Test at 320px, 768px, 1024px breakpoints
- Content test: Verify all step content renders
