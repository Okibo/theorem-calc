# Task: Set Up GitHub Actions CI/CD Pipeline

**Epic:** Deployment & DevOps
**Estimated Duration:** 1 day
**Type:** DevOps / CI/CD

## Overview
Configure GitHub Actions workflow for continuous integration and continuous deployment. Automate testing, linting, building, and deployment to Vercel with quality gates.

## Acceptance Criteria

**CI Pipeline Stages:**
- [ ] Checkout code
- [ ] Setup Node.js environment
- [ ] Install dependencies (with caching)
- [ ] Lint code (ESLint)
- [ ] Type check (TypeScript)
- [ ] Run unit tests
- [ ] Run E2E tests
- [ ] Build application
- [ ] Run Lighthouse CI
- [ ] Report results

**Code Quality Gates:**
- [ ] Linting must pass (no warnings)
- [ ] Type checking must pass
- [ ] All tests must pass (unit + E2E)
- [ ] Build must succeed with no warnings
- [ ] Lighthouse score > 85 for Performance
- [ ] Lighthouse SEO score = 100

**Preview Deployments:**
- [ ] Triggered on pull requests
- [ ] Deploy to Vercel preview environment
- [ ] Comment on PR with preview URL
- [ ] Lighthouse CI report in PR comments
- [ ] Preview URL automatically updated on push

**Production Deployments:**
- [ ] Triggered on push to main/master branch
- [ ] Deploy to Vercel production
- [ ] Create Sentry release
- [ ] Tag commit with version
- [ ] Notify on successful deployment

**Workflow Triggers:**
- [ ] On push to main/master (production)
- [ ] On pull requests to main/master (preview)
- [ ] Manual trigger (workflow_dispatch)
- [ ] Scheduled runs optional (for monitoring)

## Technical Details

### GitHub Actions Workflow
```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run tests
        run: npm run test -- --coverage

      - name: Build
        run: npm run build

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          configPath: './lighthouserc.js'

  deploy-preview:
    needs: lint-test
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel Preview
        uses: vercel/action@v5
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          github-comment: true

  deploy-production:
    needs: lint-test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to Vercel Production
        uses: vercel/action@v5
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          prod: true

      - name: Create Sentry Release
        uses: getsentry/action-release@v1
        env:
          SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
          SENTRY_ORG: theoremcalc
          SENTRY_PROJECT: theoremcalc
        with:
          environment: production
```

### Lighthouse CI Configuration
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/en/quadratic-solver/input',
        'http://localhost:3000/en/quadratic-solver/results'
      ],
      numberOfRuns: 3,
      settings: {
        configPath: './lighthouserc-config.json'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.90 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'first-contentful-paint': ['error', { maxNumericValue: 3000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }]
      }
    }
  }
}
```

## Dependencies
- Task: `01-nextjs-typescript-setup` (base setup)
- Task: `04-jest-testing-setup` (testing framework)

## Environment Variables (Required)
```
VERCEL_TOKEN: Personal access token from Vercel
VERCEL_ORG_ID: Vercel organization ID
VERCEL_PROJECT_ID: Vercel project ID
SENTRY_AUTH_TOKEN: Sentry authentication token (optional)
```

## File Locations
- Workflow: `.github/workflows/ci-cd.yml`
- Lighthouse config: `lighthouserc.js`, `lighthouserc-config.json`

## Notes
- Cache npm dependencies for faster builds
- Run tests on multiple Node versions (18.x, 20.x)
- Lighthouse CI provides performance regression detection
- Sentry integration enables error tracking in production
- Preview deployments allow testing before merging
- Consider adding code coverage thresholds

## Testing Approach
- Manual trigger: Verify workflow runs successfully
- PR test: Create test PR and verify preview deployment
- Manual verification: Check Vercel preview URL
- Production test: Merge to main and verify production deployment
