# Task: Implement Molar Mass Calculator

**Epic:** Chemistry Calculators
**Estimated Duration:** 2 days
**Type:** Full Stack

## Overview
Implement the Molar Mass Calculator with chemical formula parsing, atomic mass lookup, and percentage composition calculation. Most complex parser in the MVP.

## Acceptance Criteria

**Formula Parsing:**
- [ ] Parse simple formulas: H2O, NaCl, O2
- [ ] Parse with parentheses: Ca(OH)2, Mg3(PO4)2
- [ ] Parse with hydrates: CuSO4·5H2O
- [ ] Handle nested parentheses
- [ ] Error messages for malformed formulas
- [ ] Support up to 99%+ of valid chemical formulas

**Calculation Logic:**
- [ ] Lookup atomic masses from periodic table
- [ ] Atomic mass accuracy: 4 decimal places
- [ ] Calculate total molar mass: Σ(element count × atomic mass)
- [ ] Calculate percentage composition: (element total / molar mass) × 100
- [ ] Significant figures handling
- [ ] Performance: < 200ms for typical formulas

**Component & UI:**
- [ ] Text input for chemical formula with validation
- [ ] Elemental breakdown table:
  - Element symbol, count, atomic mass, total mass
- [ ] Optional percentage composition table
- [ ] Formula validation and parsing explanation
- [ ] Educational explanation of molar mass concept
- [ ] Related compounds suggestion (optional)

**Testing:**
- [ ] Unit tests for formula parser (95%+ coverage):
  - Simple formulas
  - Parentheses
  - Hydrates
  - Edge cases
- [ ] Unit tests for calculation (95%+ coverage)
- [ ] Component tests (90%+ coverage)
- [ ] E2E test: Input formula → view results

## Technical Details

### Formula Parser Function
```typescript
interface ParsedFormula {
  elements: Array<{
    symbol: string
    count: number
    atomicMass: number
    totalMass: number
  }>
  totalMass: number
  isValid: boolean
  error?: string
}

export function parseChemicalFormula(formula: string): ParsedFormula
```

### Periodic Table Data
```typescript
// lib/constants/periodicTable.ts
const PERIODIC_TABLE = {
  'H': { atomicNumber: 1, atomicMass: 1.0079, name: 'Hydrogen' },
  'C': { atomicNumber: 6, atomicMass: 12.011, name: 'Carbon' },
  'N': { atomicNumber: 7, atomicMass: 14.007, name: 'Nitrogen' },
  'O': { atomicNumber: 8, atomicMass: 15.999, name: 'Oxygen' },
  // ... all elements
}
```

## Dependencies
- Task: `02-calculator-framework`
- Task: `02-page-templates`
- Task: `02-form-components`

## File Locations
- Parser: `/lib/calculators/chemistry/molarMass.ts`
- Periodic Table: `/lib/constants/periodicTable.ts`
- Tests: `/tests/unit/calculators/chemistry/molarMass.test.ts`
- Component: `/components/calculators/MolarMass.tsx`
- Pages: `/app/[locale]/molar-mass/{input,results}/page.tsx`

## Notes
- Regex pattern for formula parsing
- Recursive descent parser for parentheses
- Periodic table should be comprehensive (118 elements)
- Consider caching parsed formulas for performance
- Chemical formula formatting (subscripts in results)

## Testing Approach
- Unit test: Parser with various formula complexities
- Unit test: Calculation accuracy vs reference data
- Component test: Form submission, results display
- E2E test: Complete calculator flow
