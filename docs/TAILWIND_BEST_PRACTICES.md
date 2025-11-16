# Tailwind CSS Best Practices for TheoremCalc

This guide provides practical patterns and best practices for using Tailwind CSS in TheoremCalc components.

## Core Principles

### 1. Composition Over Custom CSS

Use utility composition instead of creating custom CSS classes for most components:

```tsx
// Good: Reusable, maintainable, discoverable
export function CalculatorCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
      {children}
    </div>
  );
}

// Less ideal: Creates unnecessary custom classes
const CalculatorCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid rgb(226, 232, 240);
  background: white;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
```

### 2. Mobile-First Responsive Design

Always design for mobile first, then enhance for larger screens:

```tsx
// Good: Mobile-first
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {calculators.map((calc) => (
    <CalculatorCard key={calc.id}>{calc.name}</CalculatorCard>
  ))}
</div>

// Avoid: Desktop-first (confusing)
<div className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
  ...
</div>
```

### 3. Semantic Class Names

Use meaningful names that express intent in custom component classes:

```tsx
// Good: Clear semantic meaning
<div className="result-card">
  <p className="text-2xl font-bold">42.5</p>
</div>

// Less clear: No semantic meaning
<div className="bg-green-50 border-l-4 border-l-green-600 rounded-lg border p-4">
  <p className="text-2xl font-bold">42.5</p>
</div>
```

### 4. Consistent Spacing

Use the spacing scale consistently for predictable layouts:

```tsx
// Good: Uses spacing scale (4, 6, 8, 12, 16)
<div className="space-y-4 p-6">
  <h1 className="text-2xl font-bold">Quadratic Solver</h1>
  <form className="space-y-4">
    <input className="w-full border border-border rounded-md px-3 py-2" />
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Solve</button>
  </form>
</div>

// Avoid: Arbitrary/inconsistent spacing
<div className="space-y-7 p-5">
  <h1 className="text-2xl font-bold">Quadratic Solver</h1>
  <form className="space-y-3">
    ...
  </form>
</div>
```

### 5. Group-Based Styling

Use group utilities for interactive parent-child styling:

```tsx
// Good: Hover affects card and text together
<div className="group card-base hover:shadow-md transition-shadow">
  <h3 className="group-hover:text-blue-600">Calculator Name</h3>
  <p className="text-text-secondary">Description</p>
</div>

// More verbose alternative
<div className="card-base hover:shadow-md">
  <h3 className="hover:text-blue-600">Calculator Name</h3>
  <p className="text-text-secondary">Description</p>
</div>
```

## Calculator-Specific Patterns

### Input Form Pattern

```tsx
export function InputForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 p-6">
      {/* Form Title */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          Quadratic Formula Solver
        </h1>
        <p className="mt-2 text-text-secondary">
          Find roots of ax² + bx + c = 0
        </p>
      </div>

      {/* Input Group */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Coefficient a
          </label>
          <input
            type="number"
            className="input-base"
            placeholder="e.g., 1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Coefficient b
          </label>
          <input
            type="number"
            className="input-base"
            placeholder="e.g., -5"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Coefficient c
          </label>
          <input
            type="number"
            className="input-base"
            placeholder="e.g., 6"
            required
          />
        </div>
      </div>

      {/* Action Button */}
      <button
        type="submit"
        className="btn-primary w-full py-3 font-semibold"
      >
        Calculate Roots
      </button>
    </form>
  );
}
```

### Results Display Pattern

```tsx
export function ResultsDisplay({ result, steps }: Props) {
  return (
    <div className="space-y-6 p-6">
      {/* Main Result */}
      <div className="result-card">
        <h2 className="text-sm font-semibold text-green-700 uppercase">
          Solution Found
        </h2>
        <p className="mt-2 text-4xl font-bold text-green-900">{result}</p>
      </div>

      {/* Step-by-step */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Step-by-step Solution
        </h3>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 card-base hover:shadow-md transition-shadow"
            >
              <span className="flex-center h-8 w-8 min-w-8 rounded-full bg-blue-100 font-semibold text-blue-600">
                {index + 1}
              </span>
              <p className="text-text-primary">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button className="btn-secondary flex-1 py-3">
          New Calculation
        </button>
        <button className="btn-primary flex-1 py-3">
          Save Result
        </button>
      </div>
    </div>
  );
}
```

### Error State Pattern

```tsx
export function FormError({ message, field }: Props) {
  return (
    <div className="error-card">
      <h3 className="font-semibold text-red-900">Validation Error</h3>
      <p className="mt-1 text-red-800">{message}</p>
      {field && (
        <p className="mt-2 text-sm text-red-700">Field: {field}</p>
      )}
    </div>
  );
}
```

### Warning Pattern

```tsx
export function WarningAlert({ message }: { message: string }) {
  return (
    <div className="warning-card">
      <p className="font-medium text-orange-900">{message}</p>
    </div>
  );
}
```

## Responsive Patterns

### Responsive Navigation Layout

```tsx
export function Header() {
  return (
    <header className="bg-white border-b border-border">
      <div className="container-padding flex items-center justify-between h-16">
        {/* Logo - always visible */}
        <h1 className="text-xl font-bold text-blue-600">TheoremCalc</h1>

        {/* Mobile menu button */}
        <button className="sm:hidden">
          <MenuIcon />
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden sm:flex gap-6">
          <a href="#" className="text-text-secondary hover:text-blue-600">
            Calculators
          </a>
          <a href="#" className="text-text-secondary hover:text-blue-600">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
```

### Responsive Grid Layout

```tsx
export function CalculatorGrid({ calculators }: Props) {
  return (
    <div className="container-padding py-12">
      <div className="grid-auto-fit">
        {calculators.map((calc) => (
          <CalculatorCard key={calc.id} {...calc} />
        ))}
      </div>
    </div>
  );
}

// The .grid-auto-fit utility handles responsive columns:
// - 1 column on mobile (320px+)
// - Auto-fit columns (min 250px) with growing on larger screens
```

### Two-Column Responsive Layout

```tsx
export function CalculatorLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Input Panel - full width on mobile, left column on tablet+ */}
      <div className="card-base">
        <InputForm />
      </div>

      {/* Results Panel - full width on mobile, right column on tablet+ */}
      <div className="card-base">
        <ResultsDisplay />
      </div>
    </div>
  );
}
```

## Color Usage Guidelines

### Text Colors

```tsx
// Primary text (headings, important text)
<h1 className="text-text-primary">Main Heading</h1>

// Secondary text (descriptions, labels)
<p className="text-text-secondary">Description</p>

// Tertiary text (hints, placeholders)
<span className="text-text-tertiary">Helper text</span>
```

### Background Colors

```tsx
// Page background
<body className="bg-white">

// Card/container background
<div className="bg-white border border-border">

// Alternative section background
<section className="bg-surface">

// Interactive states
<button className="bg-blue-600 hover:bg-blue-700">Action</button>
```

### State Colors

```tsx
// Success state (green)
<div className="result-card">✓ Success</div>

// Error state (red)
<div className="error-card">✗ Error</div>

// Warning state (orange)
<div className="warning-card">⚠ Warning</div>

// Info state (blue)
<div className="card-base border-l-4 border-l-blue-600 bg-blue-50">
  ℹ Information
</div>
```

## Accessibility Patterns

### Keyboard Navigation

```tsx
// Good: Always include focus indicators
<button className="focus-visible:outline-2 focus-visible:outline-offset-2 outline-blue-600">
  Calculate
</button>

// Skip to main content link
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Color Contrast

```tsx
// Good: Sufficient contrast on backgrounds
<button className="bg-blue-600 text-white">
  Calculate
</button>

// Bad: Insufficient contrast
<button className="bg-blue-100 text-blue-200">
  Calculate
</button>
```

### Semantic HTML with Tailwind

```tsx
// Good: Semantic HTML + Tailwind utilities
<form className="space-y-4">
  <fieldset className="space-y-3">
    <legend className="font-semibold text-text-primary">
      Input Values
    </legend>
    <label className="block">
      <span className="text-sm font-medium text-text-primary">Value A</span>
      <input className="input-base" />
    </label>
  </fieldset>
</form>

// Bad: Non-semantic
<div className="space-y-4">
  <div className="font-semibold text-text-primary">Input Values</div>
  <div>
    <div className="text-sm font-medium text-text-primary">Value A</div>
    <input className="input-base" />
  </div>
</div>
```

## Performance Considerations

### 1. Class String Composition

```tsx
// Good: Static strings, easy to purge
<div className="px-4 py-2 bg-blue-600 text-white rounded-md">
  Button
</div>

// Less ideal: Dynamic class names (still purged, but harder to detect)
<div className={`px-4 py-2 bg-${color}-600 text-white`}>
  Button
</div>

// Bad: Completely dynamic (won't be purged!)
<div className={dynamicClassString}>
  Button
</div>
```

### 2. Component Extraction

```tsx
// Good: Extracted component reuses styles
const Button = ({ variant = 'primary', ...props }) => (
  <button className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'} {...props} />
);

// Less efficient: Repeated styles
<button className="btn-primary">Calculate</button>
<button className="btn-primary">Submit</button>
<button className="btn-primary">Confirm</button>
```

### 3. Avoid Over-nesting

```tsx
// Good: Flat utility combinations
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-border shadow-sm">
  Content
</div>

// Avoid: Excessive nesting with no benefit
<div className="flex">
  <div className="flex-1">
    <div className="flex items-center justify-between">
      <div className="p-4">
        <div className="bg-white rounded-lg border border-border shadow-sm">
          Content
        </div>
      </div>
    </div>
  </div>
</div>
```

## Common Patterns Summary

| Pattern | Class | Use Case |
|---------|-------|----------|
| Input field | `.input-base` | Text/number inputs |
| Primary button | `.btn-primary` | Main actions |
| Secondary button | `.btn-secondary` | Alternative actions |
| Card container | `.card-base` | Content cards |
| Success message | `.result-card` | Success/results |
| Error message | `.error-card` | Error states |
| Warning message | `.warning-card` | Warnings |
| Responsive padding | `.container-padding` | Page margins |
| Responsive grid | `.grid-auto-fit` | Item grids |
| Flexbox center | `.flex-center` | Centered layouts |
| Flex between | `.flex-between` | Space-between layouts |
| Text truncate | `.truncate-line` | Long text (1 line) |
| Text truncate multi | `.truncate-lines-2` | Long text (2 lines) |

## Debugging Tips

### Finding Unused Classes

```bash
# Build includes PurgeCSS to remove unused classes
npm run build

# Check build output for CSS size
# Should be < 50KB gzipped for optimal performance
```

### Testing Responsive Classes

```html
<!-- Use browser DevTools responsive design mode -->
<!-- Or test specific breakpoints -->
<div class="bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500">
  Changes color at each breakpoint
</div>
```

### Verifying Class Application

Use browser DevTools to inspect computed styles:
1. Right-click element
2. Select "Inspect"
3. Check "Computed" tab to see applied Tailwind utilities
4. Look for Tailwind CSS in styles panel

## Version Compatibility

This guide is written for **Tailwind CSS v4** with the following notes:

- Uses native CSS custom properties for custom colors
- `@tailwindcss/postcss` plugin for PostCSS integration
- Modern color opacity syntax: `blue-600/10` instead of `opacity-10`
- All utilities available in modern browsers (Chrome 88+, Firefox 87+, Safari 14+)
