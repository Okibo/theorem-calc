# Task: Create Calculator Input and Results Page Templates

**Epic:** Calculator Framework
**Estimated Duration:** 1 day
**Type:** Frontend / Page Templates

## Overview
Create reusable page templates for calculator input pages and results pages. These templates provide the structure, layout, ad placements, and routing logic that all 15 calculators will use.

## Acceptance Criteria

- [ ] InputPageTemplate component:
  - Header with tool name and breadcrumbs
  - Ad placement #1 (top)
  - Optional instructions section (collapsible)
  - Form area (content slot for calculator-specific inputs)
  - Calculate button (prominent CTA)
  - Ad placement #2 (bottom)
  - Footer
  - Fully responsive (mobile-first)
- [ ] ResultsPageTemplate component:
  - Back button for navigation
  - Tool name
  - Answer display card
  - Action buttons (Copy, Share, Print, New Calc - placeholders)
  - Ad placement #1 (top, high visibility)
  - Solution steps area (content slot)
  - Ad placement #2 (mid-page)
  - Footer
  - Fully responsive
- [ ] Calculator-specific page routes:
  - `/[locale]/[tool-slug]/input/page.tsx` pattern
  - `/[locale]/[tool-slug]/results/page.tsx` pattern
  - Proper TypeScript types for route params
- [ ] Ad placeholder components created (content integration in monetization task)
- [ ] Form submission handling pattern:
  - Client-side validation feedback
  - Loading state during submission
  - Redirect to results page with query params or URL state
- [ ] Results retrieval pattern:
  - URL parameters parsing
  - State management (React Context or Next.js Server Components)
  - Error handling for invalid inputs
- [ ] Mobile optimization:
  - Safe area padding for notched phones
  - Full-width buttons with appropriate padding
  - Touch-friendly spacing
  - No horizontal scrolling
- [ ] Accessibility features:
  - Semantic HTML structure
  - Proper heading hierarchy
  - Focus management
  - Skip to main content links
- [ ] All pages respond to locale parameter
- [ ] 85%+ test coverage for template logic

## Technical Details

### InputPageTemplate Structure
```typescript
interface InputPageTemplateProps {
  toolName: string
  description?: string
  instructions?: string | ReactNode
  children: ReactNode // Calculator form
  onSubmit: (data: any) => Promise<void> | void
  submitLabel?: string
}

export function InputPageTemplate({
  toolName,
  children,
  onSubmit,
  ...props
}: InputPageTemplateProps) {
  // Layout with Header, AdContainer, Form, Footer
}
```

### ResultsPageTemplate Structure
```typescript
interface ResultsPageTemplateProps {
  toolName: string
  answer: string | ReactNode
  answerLabel?: string
  answerUnit?: string
  children: ReactNode // Solution steps
  onNewCalculation: () => void
}

export function ResultsPageTemplate({
  toolName,
  answer,
  children,
  ...props
}: ResultsPageTemplateProps) {
  // Layout with results card, action buttons, steps
}
```

### Route Parameters Pattern
```typescript
// app/[locale]/[tool]/input/page.tsx
interface PageProps {
  params: {
    locale: string
    tool: string
  }
}

export default function CalculatorInputPage({ params }: PageProps) {
  const { locale, tool } = params
  // Render InputPageTemplate with calculator-specific form
}
```

## Dependencies
- Task: `01-layout-components` (Header, Footer components)
- Task: `02-form-components` (form inputs)
- Task: `03-result-display-components` (results display)
- Task: `01-calculator-architecture` (validation patterns)

## Notes
- Templates should be calculator-agnostic
- Ad placements are structural only (no actual ads yet)
- Form submission can be client-side or server-side (TBD per calculator)
- Results state management: consider Next.js Server Components vs React Context
- Template should handle loading states gracefully
- Error boundaries recommended for error handling

## Testing Approach
- Unit tests for template layout and responsive behavior
- Component tests for form submission handling
- Integration tests: Input → Submit → Results flow
- Mobile responsive testing at 375px width
- Accessibility: Tab navigation, heading hierarchy
- Visual regression: Compare snapshots across devices
