# Task: Generate Sitemap, robots.txt, and Configure Redirects

**Epic:** Integration & SEO
**Estimated Duration:** 1 day
**Type:** SEO / DevOps

## Overview
Create dynamic XML sitemap including all 45+ URL variants (3 locales × 15 calculators × 2 pages + static pages), configure robots.txt for search engines, and implement proper URL redirects.

## Acceptance Criteria

**Sitemap Generation:**
- [ ] Dynamic sitemap.xml generated at build time
- [ ] Includes all locale variants (en, es, fr)
- [ ] All 15 calculators × 2 pages (input + results) = 60 URLs per locale
- [ ] Static pages: /, /about, /privacy, /terms (all locales)
- [ ] Proper lastmod dates
- [ ] Priority and change frequency set appropriately
  - Calculators: priority 0.8, weekly
  - Static pages: priority 0.5, monthly
- [ ] Sitemap validates against W3C schema
- [ ] Sitemap submitted to search engines

**robots.txt Configuration:**
- [ ] robots.txt generated or static
- [ ] Allow crawling of all public pages
- [ ] Disallow: /api/* (if applicable)
- [ ] Disallow: /_next/*
- [ ] Sitemap.xml URL declared
- [ ] User-agent: * (all crawlers welcome)
- [ ] Proper location: /public/robots.txt

**Redirects & Rewrites:**
- [ ] Root redirect: / → /en/ (or detected locale)
- [ ] Trailing slash handling (consistent)
- [ ] Old URLs redirect to new format (if any)
- [ ] Mobile redirects not needed (responsive design)
- [ ] Redirect chains avoided (< 2 hops)

**URL Structure Verification:**
- [ ] All URLs follow pattern: `/[locale]/[tool-slug]/[page]`
- [ ] Tool slugs are keyword-optimized
- [ ] URL slugs match in all languages
  - Example: `/en/quadratic-solver`, `/es/calculadora-cuadratica`, `/fr/resolveur-quadratique`
- [ ] No duplicate content via URL variations

## Technical Details

### Sitemap Generation (Next.js)
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es', 'fr']
  const tools = [
    'quadratic-solver',
    'percentage-calculator',
    // ... all 15 tools
  ]

  const urls: MetadataRoute.Sitemap = []

  // Add all calculator pages
  locales.forEach(locale => {
    tools.forEach(tool => {
      urls.push({
        url: `https://theoremcalc.com/${locale}/${tool}/input`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8
      })
      urls.push({
        url: `https://theoremcalc.com/${locale}/${tool}/results`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7
      })
    })

    // Add static pages
    urls.push({
      url: `https://theoremcalc.com/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    })
  })

  return urls
}
```

### robots.txt
```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/
Disallow: /?utm_

Sitemap: https://theoremcalc.com/sitemap.xml
```

### Tool Slug Mapping
```typescript
// lib/constants/toolMetadata.ts
const TOOL_SLUGS = {
  en: {
    'quadratic-solver': 'Quadratic Equation Solver',
    'percentage-calculator': 'Percentage Calculator',
    'slope-calculator': 'Slope Calculator',
    // ...
  },
  es: {
    'calculadora-cuadratica': 'Calculadora de Ecuaciones Cuadráticas',
    'calculadora-porcentaje': 'Calculadora de Porcentaje',
    // ...
  },
  fr: {
    'resolveur-quadratique': 'Résolveur d\'Équations Quadratiques',
    'calculateur-pourcentage': 'Calculateur de Pourcentage',
    // ...
  }
}
```

## Dependencies
- Task: `03-i18n-locale-routing` (locale structure)
- All calculator pages (need URLs to include)

## File Locations
- Sitemap: `/app/sitemap.ts`
- Robots: `/public/robots.txt`
- Tool metadata: `/lib/constants/toolMetadata.ts`

## Notes
- Sitemap should be regenerated at build time
- robots.txt can be static or dynamic
- Spanish tool names should use proper accents (cuadráticas, porcentaje)
- French tool names may use different structure
- Monitor crawl stats in Google Search Console post-launch

## Testing Approach
- Manual test: Download and validate sitemap XML
- Manual test: Verify robots.txt syntax
- Automated: Parse sitemap and verify all URLs are valid
- Manual: Check Google Search Console crawl statistics
