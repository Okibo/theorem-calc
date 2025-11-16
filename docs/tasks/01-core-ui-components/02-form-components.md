# Task: Build Form Input Components (Input, Select, Toggle, FormSection)

**Epic:** Core UI Components
**Estimated Duration:** 1 day
**Type:** Frontend / UI Components

## Overview
Create reusable form components that will be used across all calculator input pages. These components provide consistent, accessible, touch-friendly input experiences across mobile and desktop.

## Acceptance Criteria

- [ ] Input component created with:
  - Text, number, decimal, email input types
  - Associated label (required for accessibility)
  - Helper text and error message display
  - Optional/required indicators
  - Clear button (mobile-optimized)
  - Min 44px height (mobile), 16px min font size
  - Full-width responsive
- [ ] NumberInput component (extends Input):
  - Decimal keyboard on mobile (type="number" with step)
  - Validation for numeric values
  - Min/max constraints
  - Step control (increment/decrement buttons optional)
- [ ] Select/Dropdown component:
  - Accessible dropdown with ARIA attributes
  - Keyboard navigation (arrow keys, enter)
  - Search/filter for large option lists (>5 items)
  - Touch-friendly option size (48px+ height)
  - Native select on mobile (platform picker)
- [ ] Toggle/Switch component:
  - Clear on/off visual states
  - Color-coded (not just position change)
  - 48px+ touch target
  - Keyboard support (Space/Enter)
  - Proper ARIA labels
- [ ] FormSection wrapper:
  - Groups related form fields
  - Consistent spacing between fields
  - Optional header/title
  - Error summary (optional)
- [ ] All components with TypeScript types
- [ ] Components support disabled state
- [ ] Error states display clearly
- [ ] 90%+ test coverage for form logic

## Technical Details

### Input Component Interface
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  required?: boolean
  type?: 'text' | 'number' | 'decimal' | 'email' | 'tel'
}

export function Input({ label, error, helper, required, ...props }: InputProps) {
  // Render label with required indicator
  // Render input with proper attributes
  // Display error message if present
  // Display helper text
}
```

### Select Component Interface
```typescript
interface SelectOption {
  value: string | number
  label: string
}

interface SelectProps {
  label?: string
  options: SelectOption[]
  value?: string | number
  onChange?: (value: string | number) => void
  error?: string
  required?: boolean
  placeholder?: string
}
```

### Toggle Component Interface
```typescript
interface ToggleProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  description?: string
  disabled?: boolean
}
```

## Dependencies
- Task: `02-tailwind-shadcn-setup` (base components to extend)
- Task: `04-jest-testing-setup` (testing framework)

## Notes
- Use shadcn/ui as foundation where possible
- Mobile-first: test on 375px width minimum
- Input validation happens client-side (real-time or on blur)
- Number inputs must show appropriate mobile keyboards
- All form components should work without JavaScript (progressive enhancement)
- Form components exported from `/components/ui/`

## Testing Approach
- Unit tests for input validation logic
- Component tests for rendering and interactions
- Visual tests for different states (focus, error, disabled)
- Mobile test: Ensure 48px+ touch targets
- Accessibility test: Tab navigation, ARIA labels
