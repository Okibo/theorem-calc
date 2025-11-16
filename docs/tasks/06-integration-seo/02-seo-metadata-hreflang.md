# Task: Implement SEO Metadata, hreflang Tags, and Structured Data

**Epic:** Integration & SEO
**Estimated Duration:** 2 days
**Type:** SEO / Frontend

## Overview
Implement comprehensive SEO optimization including meta tags, hreflang tags for multi-language SEO, and Schema.org structured data for rich results. This enables search engine indexing and improves organic visibility.

## Acceptance Criteria

**Meta Tags:**
- [ ] Title tags optimized per calculator (keyword-focused)
- [ ] Meta descriptions (150-160 chars, compelling)
- [ ] Canonical URLs configured
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Mobile viewport meta tag
- [ ] Theme color meta tag
- [ ] All meta tags dynamic per page/locale

**hreflang Tags:**
- [ ] hreflang tags added to all pages
- [ ] Self-referential hreflang (each language points to itself)
- [ ] Cross-language alternates (each language links to others)
- [ ] x-default hreflang pointing to English
- [ ] All locale variants accounted for (en, es, fr)
- [ ] Correct URL format with locale prefix
- [ ] Validation: hreflang tags verified

**Structured Data (Schema.org):**
- [ ] WebApplication schema for calculator pages
- [ ] Creator/Organization schema on homepage
- [ ] Breadcrumb schema for navigation
- [ ] BreadcrumbList schema on result pages
- [ ] Schema validation passes (Google Rich Results Test)
- [ ] All schema properly formatted in JSON-LD
- [ ] Localized descriptions in schema

**Implementation Details:**
- [ ] Metadata utility functions created
- [ ] hreflang generation for all language variants
- [ ] SEO helper hooks for React components
- [ ] TypeScript types for SEO data
- [ ] No duplicate content issues
- [ ] robots.txt configured correctly

## Technical Details

### Metadata Generation Pattern
```typescript
// lib/seo/metadata.ts
interface CalculatorMetadata {
  title: string
  description: string
  keywords: string[]
  slug: string
  locale: string
  image?: string
}

export function generateMetadata(
  data: CalculatorMetadata
): Metadata & { other: Record<string, string> } {
  // Generate Next.js Metadata object
}

export function generateHreflang(
  slug: string,
  locales: string[] = ['en', 'es', 'fr']
): object {
  // Generate hreflang structure
}
```

### Example: Quadratic Calculator Meta Tags
```html
<!-- English Version -->
<title>Quadratic Equation Solver | TheoremCalc - Step-by-Step Solutions</title>
<meta name="description" content="Solve quadratic equations instantly. Get step-by-step solutions using the quadratic formula. Supports real and complex solutions.">
<meta name="keywords" content="quadratic equation solver, quadratic formula calculator, solve ax²+bx+c=0">
<link rel="canonical" href="https://theoremcalc.com/en/quadratic-solver/input">
<link rel="alternate" hreflang="en" href="https://theoremcalc.com/en/quadratic-solver/input">
<link rel="alternate" hreflang="es" href="https://theoremcalc.com/es/calculadora-cuadratica/input">
<link rel="alternate" hreflang="fr" href="https://theoremcalc.com/fr/resolveur-quadratique/input">
<link rel="alternate" hreflang="x-default" href="https://theoremcalc.com/en/quadratic-solver/input">

<meta property="og:title" content="Quadratic Equation Solver">
<meta property="og:description" content="Solve quadratic equations...">
<meta property="og:image" content="https://theoremcalc.com/og-quadratic.jpg">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="es_ES">
<meta property="og:locale:alternate" content="fr_FR">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Quadratic Equation Solver">
<meta name="twitter:description" content="Solve quadratic equations with step-by-step solutions">
```

### Schema.org WebApplication Example
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Quadratic Equation Solver",
  "url": "https://theoremcalc.com/en/quadratic-solver/input",
  "description": "Solve quadratic equations instantly with step-by-step solutions",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "TheoremCalc"
  },
  "inLanguage": ["en", "es", "fr"],
  "operatingSystem": "Web",
  "browserRequirements": "ES6 compatible"
}
```

## Dependencies
- All calculator implementations (need titles, descriptions)
- Task: `03-i18n-locale-routing` (locale structure needed)

## File Locations
- SEO utilities: `/lib/seo/metadata.ts`, `/lib/seo/structuredData.ts`
- hreflang generator: `/lib/seo/hreflang.ts`
- Configuration: `/lib/seo/siteConfig.ts`

## Notes
- Each calculator needs unique, keyword-optimized title
- Descriptions should be 150-160 characters
- Keywords should be 3-5 relevant search terms
- Schema validation essential before launch
- Monitor Search Console for indexing issues
- Spanish and French descriptions should be natural, not just translations

## Testing Approach
- Validation: Google Rich Results Test
- Validation: hreflang structure check (Semrush/Ahrefs)
- Manual: View page source and verify all tags present
- Automated: Check metadata generation with unit tests
- Visual: Verify OG preview on social platforms
