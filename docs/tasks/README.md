# TheoremCalc Task Breakdown & Implementation Guide

**Document Date:** November 16, 2025
**Status:** Ready for Development
**Total Tasks:** 32 tasks across 8 epics
**Estimated Duration:** 12-16 weeks (28-32 days of focused work)

---

## Quick Start

1. **Start Here:** Read [PROGRESS.md](./PROGRESS.md) for current status
2. **Begin with Epic 00:** [Project Setup Tasks](./00-project-setup/)
3. **Track Progress:** Update PROGRESS.md as you complete tasks
4. **Reference:** Each task file contains detailed acceptance criteria and technical specifications

---

## Project Overview

TheoremCalc is a multi-language educational calculator portal targeting 10,000+ MAU within 6 months. The MVP includes 15 specialized calculators (5 per subject: Math, Chemistry, Physics) in 3 languages (English, Spanish, French).

### Key Success Metrics
- Pages per session: 2+ (input → results flow)
- Bounce rate: < 50%
- Return visitor rate: > 40%
- Core Web Vitals: All "Good"
- Mobile traffic: > 70%
- Organic search: > 80% of traffic

---

## Directory Structure

```
docs/tasks/
├── PROGRESS.md                          # Status tracker - UPDATE THIS!
├── README.md                            # This file
├── 00-project-setup/                    # Foundation (4 tasks)
│   ├── 01-nextjs-typescript-setup.md
│   ├── 02-tailwind-shadcn-setup.md
│   ├── 03-i18n-locale-routing.md
│   └── 04-jest-testing-setup.md
├── 01-core-ui-components/               # UI Components (3 tasks)
│   ├── 01-layout-components.md
│   ├── 02-form-components.md
│   └── 03-result-display-components.md
├── 02-calculator-framework/             # Architecture (2 tasks)
│   ├── 01-calculator-architecture.md
│   └── 02-page-templates.md
├── 03-math-calculators/                 # 5 Calculators (3 tasks)
│   ├── 01-quadratic-solver.md
│   ├── 02-percentage-calculator.md
│   └── 03-remaining-math-calculators.md
├── 04-chemistry-calculators/            # 5 Calculators (2 tasks)
│   ├── 01-molar-mass-calculator.md
│   └── 02-remaining-chemistry-calculators.md
├── 05-physics-calculators/              # 5 Calculators (1 task)
│   └── 01-physics-calculators.md
├── 06-integration-seo/                  # Integration (3 tasks)
│   ├── 01-mathjax-integration.md
│   ├── 02-seo-metadata-hreflang.md
│   └── 03-sitemap-robots-redirects.md
├── 07-monetization-analytics/           # Revenue & Tracking (2 tasks)
│   ├── 01-google-adsense-integration.md
│   └── 02-analytics-event-tracking.md
└── 08-deployment-ci-cd/                 # DevOps (2 tasks)
    ├── 01-github-actions-cicd.md
    └── 02-vercel-production-setup.md
```

**Total: 32 tasks across 8 epics**

---

## Task Breakdown by Epic

### Epic 00: Project Setup & Infrastructure (4 tasks, 4 days)
Foundation tasks that must complete first. Establishes development environment, testing framework, and multi-language support.

| Task | Duration | Dependencies |
|------|----------|--------------|
| NextJS + TypeScript Setup | 1 day | None (START HERE) |
| Tailwind + shadcn/ui Setup | 1 day | Epic 00-01 |
| i18n Routing (EN/ES/FR) | 2 days | Epic 00-01 |
| Jest Testing Setup | 1 day | Epic 00-01 |

**Blocker Resolution:** These 4 tasks must complete before moving to Epic 01.

---

### Epic 01: Core UI Components (3 tasks, 3 days)
Reusable component library providing foundation for all pages and calculators.

| Task | Duration | Dependencies |
|------|----------|--------------|
| Layout Components (Header, Footer, Nav) | 1 day | Epic 00 |
| Form Components (Input, Select, Toggle) | 1 day | Epic 00, Epic 01-01 |
| Results Display (Card, Steps, Formula) | 1 day | Epic 00, Epic 01-01 |

**Key Outputs:** Reusable component library in `/components/`

---

### Epic 02: Calculator Framework (2 tasks, 2 days)
Architecture and patterns enabling rapid calculator development.

| Task | Duration | Dependencies |
|------|----------|--------------|
| Calculator Architecture | 1 day | Epic 00, Epic 01 |
| Page Templates (Input/Results) | 1 day | Epic 00, Epic 01, Epic 02-01 |

**Key Outputs:** Calculation result types, validation framework, page templates

---

### Epic 03: Math Calculators (3 tasks, 6 days total)
Implementation of 5 mathematical calculators following TDD approach.

| Task | Duration | Calculators | Dependencies |
|------|----------|-------------|--------------|
| Quadratic Solver | 2 days | 1 | Epic 02 |
| Percentage Calculator | 2 days | 1 | Epic 02 |
| Remaining Math (Slope, Std Dev, Sig Figs) | 2 days | 3 | Epic 02 |

**Quadratic Solver:** Reference implementation - all others follow same pattern
**Testing:** 95%+ unit coverage, 90%+ component coverage

---

### Epic 04: Chemistry Calculators (2 tasks, 5 days total)
Implementation of 5 chemistry calculators with complex formula parsing.

| Task | Duration | Calculators | Dependencies |
|------|----------|-------------|--------------|
| Molar Mass Calculator | 2 days | 1 | Epic 02, Epic 03 |
| Remaining Chemistry (4 calcs) | 3 days | 4 | Epic 02, Epic 04-01 |

**Most Complex:** Chemical Equation Balancer (matrix algebra)
**Dependencies:** Molar Mass needed for Stoichiometry

---

### Epic 05: Physics Calculators (1 task, 2 days)
Implementation of 5 physics calculators (can be parallel with Epic 04).

| Task | Duration | Calculators | Dependencies |
|------|----------|-------------|--------------|
| All Physics Calculators | 2 days | 5 | Epic 02, Epic 03 |

**Can Start Immediately After:** Epic 02 completes
**Pattern:** Multi-mode calculators (similar structure)

---

### Epic 06: Integration & SEO (3 tasks, 4 days)
Integration of external libraries and SEO optimization.

| Task | Duration | Focus | Dependencies |
|------|----------|-------|--------------|
| MathJax Integration | 1 day | Mathematical notation | All calculators |
| SEO Metadata & hreflang | 2 days | Multi-language SEO | All calculators |
| Sitemap, robots.txt | 1 day | Search engine crawling | Epics 03-05 |

**Impact:** Enables organic traffic generation

---

### Epic 07: Monetization & Analytics (2 tasks, 3 days)
Ad integration and analytics setup for revenue and monitoring.

| Task | Duration | Focus | Dependencies |
|------|----------|-------|--------------|
| Google AdSense | 1 day | Ad placement & revenue | Epic 02 |
| Analytics & Event Tracking | 2 days | User behavior & metrics | Epic 02, Epic 07-01 |

**Can Start:** As soon as page templates (Epic 02-02) complete

---

### Epic 08: Deployment & CI/CD (2 tasks, 2 days)
Deployment infrastructure and quality gates.

| Task | Duration | Focus | Dependencies |
|------|----------|-------|--------------|
| GitHub Actions CI/CD | 1 day | Automated testing & deployment | All code ready |
| Vercel Production Setup | 1 day | Production deployment | CI/CD configured |

**Final Step:** Complete after all features implemented

---

## Implementation Timeline

### Recommended Weekly Breakdown

**Week 1-2: Foundation**
- Complete all Epic 00 tasks
- Complete all Epic 01 tasks
- Start Epic 02 (framework)
- **Deliverable:** Ready to build first calculator

**Week 3-4: First Calculators**
- Complete Epic 02
- Complete Epic 03 (5 math calculators)
- **Deliverable:** Reference implementation proven

**Week 5-8: Full Calculator Suite**
- Epic 04 (5 chemistry) - parallel
- Epic 05 (5 physics) - parallel
- **Deliverable:** All 15 calculators complete

**Week 9-10: Integration & Launch Prep**
- Epic 06 (SEO & MathJax)
- Epic 07 (Analytics & Ads)
- Final QA and testing
- **Deliverable:** Ready for production launch

**Week 11-12: Deployment**
- Epic 08 (CI/CD & Vercel)
- Final testing and verification
- **Deliverable:** Live on production

---

## Critical Path Analysis

**Minimum 18 days required** (no blockers, focused work):
- Epic 00: 4 days
- Epic 01: 3 days
- Epic 02: 2 days
- Epic 03: 6 days
- Epic 04: 5 days
- Epic 06: 4 days (can overlap with 04-05)
- Epic 07: 3 days (can overlap)
- Epic 08: 2 days

**Parallelization Opportunities:**
- Epics 03, 04, 05 can run in parallel (3-4 week window)
- Epics 06, 07 can start after Epic 02 completes
- Epic 08 can integrate during development

---

## Quality Gates

### Per-Task Requirements
- All unit tests pass (95% coverage target)
- All component tests pass (90% coverage target)
- TypeScript compilation without errors
- ESLint and Prettier formatting compliance
- Responsive design at 320px, 768px, 1024px
- WCAG AA accessibility compliance

### Pre-Launch Requirements (Epic 08)
- All 32 tasks complete
- 95% calculator logic coverage
- 90% component coverage
- Lighthouse score > 85 (Performance, Accessibility)
- Lighthouse SEO score = 100
- Core Web Vitals all "Good" on mobile
- E2E tests for all calculator flows
- Security headers configured

---

## Getting Started

### Step 1: Begin with Epic 00
```bash
cd /Users/pawelkalkun/Projects/private/theorem-calc

# Read the first task
cat docs/tasks/00-project-setup/01-nextjs-typescript-setup.md

# Start implementing...
```

### Step 2: Track Progress
1. Open `docs/tasks/PROGRESS.md`
2. Update task status as you work
3. Record start/end dates
4. Note any blockers

### Step 3: Follow Task Checklists
Each task file includes:
- Acceptance Criteria (checkbox list)
- Technical Details (implementation patterns)
- Dependencies (prerequisite tasks)
- Testing Approach (how to verify completion)

---

## Collaboration Guidelines

### Git Workflow
- Use feature branches: `feature/task-name`
- Commit message: Task number and description
- Example: `Task 01-01: Initialize Next.js project`

### Task Dependencies
Before starting a task:
1. Verify all dependencies complete
2. Check PROGRESS.md for status
3. Review task's "Dependencies" section

### Parallel Work
- Math (Epic 03), Chemistry (Epic 04), and Physics (Epic 05) calculators can be built in parallel
- Assign each calculator to different developer if team available
- All use same framework (Epic 02) so coordination minimal

---

## FAQ

**Q: Can I start with a specific calculator instead of foundations?**
A: No. Epic 00 and Epic 01 provide essential infrastructure. Skip them and you'll have to rework everything.

**Q: Can I skip some calculators?**
A: The task structure groups similar calculators together for efficiency. You could skip individual ones, but the grouped tasks (3/3, 4/2, 5/1) are designed for batch implementation.

**Q: How long is each task really?**
A: 2-day estimates assume focused, uninterrupted work by experienced developer. Real timeline will likely be longer with meetings, reviews, debugging.

**Q: What if I find a blocker?**
A: Update PROGRESS.md with blocker status, document the issue, and consider what can be done in parallel.

**Q: How do I handle calculator variants?**
A: Each calculator's task references the multi-mode pattern (e.g., Percentage's 3 modes). Follow the pattern in the reference implementation (Quadratic Solver).

---

## Support & References

**Technology Stack:**
- Framework: Next.js 14+ (docs: https://nextjs.org/docs)
- Language: TypeScript (https://www.typescriptlang.org)
- Styling: Tailwind CSS (https://tailwindcss.com)
- Components: shadcn/ui (https://ui.shadcn.com)
- Testing: Jest + React Testing Library
- Deployment: Vercel (https://vercel.com/docs)

**Project Documentation:**
- CLAUDE.md (in repo root) - Project guidelines
- PRD.md - Complete product requirements
- PROGRESS.md - Status tracking
- Individual task files - Detailed specifications

---

## Version History

- **v1.0** - November 16, 2025 - Initial task breakdown for MVP

---

**Ready to get started? Begin with [Epic 00 - Project Setup](./00-project-setup/)!**
