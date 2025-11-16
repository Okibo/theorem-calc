# Calculator UI Patterns with Tailwind CSS

Ready-to-use patterns for TheoremCalc calculator interfaces.

## Page Structure Pattern

```tsx
export function CalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with title and description */}
      <header className="bg-white border-b border-border">
        <div className="container-padding py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Quadratic Formula Solver
          </h1>
          <p className="mt-2 text-text-secondary">
            Find the roots of ax² + bx + c = 0
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="container-padding py-8 sm:py-12">
        {/* Two-column layout: input on left, results on right (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Input panel */}
          <div>
            <InputForm />
          </div>

          {/* Results panel */}
          <div>
            <ResultsPanel />
          </div>
        </div>
      </div>
    </main>
  );
}
```

## Input Form Pattern

```tsx
interface InputFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export function InputForm({ onSubmit, isLoading }: InputFormProps) {
  const [formData, setFormData] = React.useState({
    a: '',
    b: '',
    c: '',
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }} className="space-y-6">
      {/* Form title */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Enter Values
        </h2>
      </div>

      {/* Input fields group */}
      <div className="space-y-4">
        {/* Field 1 */}
        <div>
          <label htmlFor="a" className="block text-sm font-medium text-text-primary mb-2">
            Coefficient <span className="text-blue-600">a</span>
          </label>
          <input
            id="a"
            type="number"
            step="0.01"
            placeholder="e.g., 1"
            value={formData.a}
            onChange={(e) => setFormData({ ...formData, a: e.target.value })}
            className="input-base"
            required
          />
          <p className="mt-1 text-xs text-text-tertiary">
            Cannot be zero (1, 2, -1, etc.)
          </p>
        </div>

        {/* Field 2 */}
        <div>
          <label htmlFor="b" className="block text-sm font-medium text-text-primary mb-2">
            Coefficient <span className="text-blue-600">b</span>
          </label>
          <input
            id="b"
            type="number"
            step="0.01"
            placeholder="e.g., -5"
            value={formData.b}
            onChange={(e) => setFormData({ ...formData, b: e.target.value })}
            className="input-base"
            required
          />
          <p className="mt-1 text-xs text-text-tertiary">
            Linear coefficient (-5, 0, 3, etc.)
          </p>
        </div>

        {/* Field 3 */}
        <div>
          <label htmlFor="c" className="block text-sm font-medium text-text-primary mb-2">
            Coefficient <span className="text-blue-600">c</span>
          </label>
          <input
            id="c"
            type="number"
            step="0.01"
            placeholder="e.g., 6"
            value={formData.c}
            onChange={(e) => setFormData({ ...formData, c: e.target.value })}
            className="input-base"
            required
          />
          <p className="mt-1 text-xs text-text-tertiary">
            Constant term (6, -3, 0, etc.)
          </p>
        </div>
      </div>

      {/* Action button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full py-3 font-semibold disabled:opacity-50"
      >
        {isLoading ? 'Calculating...' : 'Calculate'}
      </button>

      {/* Footer hint */}
      <p className="text-xs text-text-tertiary text-center">
        Formula: x = (-b ± √(b² - 4ac)) / 2a
      </p>
    </form>
  );
}
```

## Results Display Pattern

```tsx
interface CalculationResult {
  roots: number[];
  discriminant: number;
  steps: string[];
}

interface ResultsPanelProps {
  result?: CalculationResult;
  isLoading?: boolean;
  error?: string;
}

export function ResultsPanel({ result, isLoading, error }: ResultsPanelProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="card-base flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <div className="animate-pulse inline-block">
            <div className="h-8 w-8 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-text-secondary">Calculating...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error-card space-y-3">
        <h3 className="font-semibold text-red-900">Error</h3>
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  // No result yet
  if (!result) {
    return (
      <div className="card-base py-12 text-center text-text-tertiary">
        <p>Enter values above and click "Calculate" to see results</p>
      </div>
    );
  }

  // Success result
  return (
    <div className="space-y-6">
      {/* Main result card */}
      <div className="result-card space-y-4">
        <h2 className="text-sm font-semibold text-green-700 uppercase tracking-wide">
          Solution Found
        </h2>

        {/* Roots display */}
        <div>
          <p className="text-text-tertiary text-sm mb-3">Roots:</p>
          <div className="space-y-2">
            {result.roots.map((root, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="font-mono text-2xl font-bold text-green-900">
                  x{result.roots.length > 1 ? i + 1 : ''} = {root.toFixed(4)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Discriminant info */}
        <div className="pt-4 border-t border-green-200">
          <p className="text-sm text-green-800">
            <span className="font-medium">Discriminant (Δ):</span> {result.discriminant.toFixed(4)}
          </p>
          <p className="text-xs text-green-700 mt-1">
            {result.discriminant > 0 && 'Two distinct real roots'}
            {result.discriminant === 0 && 'One repeated real root'}
            {result.discriminant < 0 && 'Two complex conjugate roots'}
          </p>
        </div>
      </div>

      {/* Step-by-step solution */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Step-by-Step Solution
        </h3>

        <div className="space-y-3">
          {result.steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 card-base hover:shadow-md transition-shadow"
            >
              {/* Step number */}
              <div className="flex-center h-8 w-8 min-w-8 rounded-full bg-blue-100 font-semibold text-blue-600 text-sm">
                {index + 1}
              </div>

              {/* Step content */}
              <div className="flex-1 py-1">
                <p className="text-text-primary font-mono text-sm">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-2">
        <button className="btn-secondary flex-1 py-3 rounded-md">
          New Calculation
        </button>
        <button className="btn-primary flex-1 py-3 rounded-md">
          Save Result
        </button>
      </div>
    </div>
  );
}
```

## Input Validation Messages

```tsx
interface ValidationMessageProps {
  type: 'error' | 'warning' | 'info';
  message: string;
  details?: string;
}

export function ValidationMessage({ type, message, details }: ValidationMessageProps) {
  const className = {
    error: 'error-card',
    warning: 'warning-card',
    info: 'card-base border-l-4 border-l-blue-600 bg-blue-50',
  }[type];

  const iconColor = {
    error: 'text-red-600',
    warning: 'text-orange-600',
    info: 'text-blue-600',
  }[type];

  const icon = {
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }[type];

  return (
    <div className={className}>
      <div className="flex gap-3">
        <span className={`font-bold text-lg ${iconColor}`}>{icon}</span>
        <div>
          <p className="font-medium">{message}</p>
          {details && (
            <p className="text-sm mt-1 opacity-75">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Usage
<ValidationMessage
  type="error"
  message="Invalid input"
  details="Coefficient 'a' cannot be zero"
/>
```

## Step Progress Indicator

```tsx
interface StepProgressProps {
  currentStep: 1 | 2;
  title: string;
}

export function StepProgress({ currentStep, title }: StepProgressProps) {
  return (
    <div className="space-y-4">
      {/* Step indicator */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-blue-600"></div>
        <span className="text-sm font-medium text-text-secondary">
          Step {currentStep} of 2
        </span>
        <div className="flex-1 h-1 bg-border"></div>
      </div>

      {/* Step title */}
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
    </div>
  );
}

// Usage
<StepProgress currentStep={1} title="Enter Values" />
```

## Calculator Grid/Menu

```tsx
interface Calculator {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
}

export function CalculatorGrid({ calculators }: { calculators: Calculator[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-text-primary mb-6">
        Popular Calculators
      </h2>

      <div className="grid-auto-fit">
        {calculators.map((calc) => (
          <a
            key={calc.id}
            href={`/calculators/${calc.id}`}
            className="group card-base hover:shadow-md hover:border-blue-600 transition-all"
          >
            {/* Icon */}
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
              {calc.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-blue-600 transition-colors">
              {calc.name}
            </h3>

            <p className="text-sm text-text-secondary mt-2 group-hover:text-text-primary transition-colors">
              {calc.description}
            </p>

            {/* Category badge */}
            <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
              <span className="text-xs font-medium text-text-tertiary uppercase">
                {calc.category}
              </span>
              <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
```

## Informational Alert Boxes

```tsx
// Info box
<div className="card-base border-l-4 border-l-blue-600 bg-blue-50">
  <h3 className="font-semibold text-blue-900">Pro Tip</h3>
  <p className="text-blue-800 text-sm mt-1">
    You can use the quadratic formula even if the discriminant is negative.
  </p>
</div>

// Success box
<div className="result-card">
  <h3 className="font-semibold text-green-900">Success!</h3>
  <p className="text-green-800 text-sm mt-1">
    Your calculation has been saved.
  </p>
</div>

// Error box
<div className="error-card">
  <h3 className="font-semibold text-red-900">Error</h3>
  <p className="text-red-800 text-sm mt-1">
    Please check your input and try again.
  </p>
</div>

// Warning box
<div className="warning-card">
  <h3 className="font-semibold text-orange-900">Warning</h3>
  <p className="text-orange-800 text-sm mt-1">
    This value seems unusually large. Please verify.
  </p>
</div>
```

## Responsive Two-Page Flow

```tsx
export function TwoPageCalculatorFlow() {
  const [page, setPage] = React.useState<'input' | 'results'>('input');

  return (
    <div className="min-h-screen bg-white">
      {/* Page 1: Input Form */}
      <div className={page === 'input' ? 'block' : 'hidden'}>
        <main className="container-padding py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Calculator Title
          </h1>

          <div className="max-w-md">
            <InputForm onSubmit={() => setPage('results')} />
          </div>
        </main>
      </div>

      {/* Page 2: Results */}
      <div className={page === 'results' ? 'block' : 'hidden'}>
        <main className="container-padding py-8 sm:py-12">
          <div className="mb-6">
            <button
              onClick={() => setPage('input')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Input
            </button>
          </div>

          <div className="max-w-2xl">
            <ResultsPanel />
          </div>
        </main>
      </div>

      {/* Ad spaces (on both pages) */}
      <aside className="container-padding py-8 border-t border-border">
        <div className="bg-gray-100 h-32 rounded-lg flex-center text-text-tertiary">
          Advertisement Space
        </div>
      </aside>
    </div>
  );
}
```

## Responsive Input Layout

```tsx
export function ResponsiveInputLayout() {
  return (
    <div className="space-y-6">
      {/* Single column on mobile, two columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Field 1
          </label>
          <input className="input-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Field 2
          </label>
          <input className="input-base" />
        </div>
      </div>

      {/* Full width field */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Full Width Field
        </label>
        <textarea className="input-base" rows={4}></textarea>
      </div>

      {/* Button group */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <button className="btn-secondary flex-1">Cancel</button>
        <button className="btn-primary flex-1">Submit</button>
      </div>
    </div>
  );
}
```

## Mobile-Optimized Number Input

```tsx
export function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  step = 0.01,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
      <input
        type="number"
        inputMode="decimal"
        pattern="[0-9.-]*"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-base"
      />
    </div>
  );
}
```

## Conclusion

These patterns provide a complete foundation for building calculator interfaces in TheoremCalc. They demonstrate:

1. **Responsive design** - Mobile-first with breakpoint variants
2. **Semantic structure** - Proper HTML hierarchy
3. **Component composition** - Reusable, maintainable components
4. **State management** - Handling input, loading, and error states
5. **Accessibility** - Labels, focus indicators, semantic elements
6. **Visual hierarchy** - Typography, spacing, and color usage
7. **Tailwind utilities** - Practical use of custom and default classes

Adapt these patterns to specific calculator requirements while maintaining the design system consistency.
