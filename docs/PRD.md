# Product Requirements Document (PRD)
## TheoremCalc: Multi-Language Educational Calculator Web Portal

**Document Version:** 1.0
**Last Updated:** November 16, 2025
**Status:** For Development
**Prepared For:** Development Team, Stakeholders, Product Leadership

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Vision & Objectives](#product-vision--objectives)
3. [User Personas & Use Cases](#user-personas--use-cases)
4. [Core Feature Specifications](#core-feature-specifications)
5. [Technical Architecture](#technical-architecture)
6. [Mobile-First Design System](#mobile-first-design-system)
7. [Responsive Design Specifications](#responsive-design-specifications)
8. [SEO & Internationalization Strategy](#seo--internationalization-strategy)
9. [Monetization & Ad Strategy](#monetization--ad-strategy)
10. [Performance Requirements & Budgets](#performance-requirements--budgets)
11. [Accessibility Requirements](#accessibility-requirements)
12. [Analytics & Monitoring](#analytics--monitoring)
13. [Testing Strategy](#testing-strategy)
14. [Deployment & CI/CD Pipeline](#deployment--cicd-pipeline)
15. [Implementation Roadmap](#implementation-roadmap)
16. [Out of Scope](#out-of-scope)
17. [Success Metrics & KPIs](#success-metrics--kpis)
18. [Dependencies & Assumptions](#dependencies--assumptions)
19. [Risks & Mitigation](#risks--mitigation)

---

## Executive Summary

**TheoremCalc** is a high-performance, multi-language educational calculator web portal designed to serve students, educators, and professionals requiring fast, reliable calculations for Mathematics, Physics, and Chemistry. The product launches with 15 specialized calculators (5 per subject) across three initial language versions (English, Spanish, French).

### Product Value Proposition
- **Speed & Simplicity:** Blazingly fast, distraction-free calculation experience
- **Educational Quality:** Step-by-step solutions with formulas and methodology explanations
- **Globally Accessible:** Native multi-language support with SEO optimization for international reach
- **Mobile-First:** Optimized for mobile users, the platform's primary audience demographic
- **Monetization:** Ad-supported model leveraging high-traffic utility demand

### Business Case
TheoremCalc targets the substantial, recurring demand for specialized educational calculators. By combining superior UX, comprehensive explanations, and SEO optimization, the platform aims to achieve competitive search visibility and become users' bookmarked calculation resource. Revenue generation through strategic ad placement on both input and results pages creates multiple monetization opportunities per user session.

### Key Success Indicators (Launch Target)
- 10,000+ Monthly Active Users (MAU) within 6 months
- 2+ pages per session (input → results flow)
- < 50% bounce rate
- > 40% return visitor rate
- Core Web Vitals: LCP < 2.5s (mobile), CLS < 0.1, FID < 100ms
- Mobile traffic > 70% of total

---

## Product Vision & Objectives

### Primary Objectives

**1. Revenue Generation Through Ad Monetization**
- Establish a sustainable ad-supported business model via Google AdSense
- Optimize two-page user flow to maximize ad impressions per session
- Target RPM (Revenue Per Mille) > $5 USD across all markets
- Achieve positive unit economics by month 12

**2. Market Dominance Through Superior UX**
- Become the fastest-loading educational calculator portal in target categories
- Achieve Lighthouse scores: Performance 90+, SEO 100, Accessibility 90+
- Deliver results in < 2 seconds on desktop, < 3 seconds on mobile
- Maintain sub-50% bounce rate through frictionless UX

**3. Global Reach Via Multi-Language Support**
- Capture non-English speaking markets through native language implementations
- Achieve hreflang SEO optimization for all language variants
- Support 3+ languages at launch, expandable to 10+ languages by year 2
- Drive international organic traffic to achieve 50%+ of total from non-English queries

**4. Sustainable Growth Through Organic Search**
- Achieve top 3 rankings for primary keywords in each calculator category (target: 100+ keywords)
- Build authority through comprehensive, educational content
- Generate 80%+ of traffic from organic search by end of year 1
- Create evergreen content with minimal maintenance requirements

### Secondary Objectives
- Establish brand trust and authority in educational technology
- Create platform for future monetization expansion (API, premium features, etc.)
- Build data foundation for international market analysis
- Develop repeatable calculator architecture for rapid expansion

---

## User Personas & Use Cases

### Persona 1: Sarah, High School Math Student
**Demographics:** 16 years old, uses mobile devices primarily, studies in US/UK/Spanish-speaking countries
**Goal:** Complete homework quickly and understand step-by-step solutions
**Pain Points:** Confusing calculator interfaces, slow loading on mobile, lack of explanations
**Usage Pattern:** Sessions during evenings/weekends, 2-3 times per week, uses 2-5 calculators per session
**Device Profile:** 85% mobile (iPhone/Android), 15% tablet; very limited desktop usage

**Use Case 1: Quadratic Equation Help**
> Sarah needs to solve 3x² + 5x - 2 = 0 for her algebra homework. She opens the Quadratic Equation Solver on her mobile phone, enters the coefficients, and receives: the exact solutions, the quadratic formula shown with substituted values, an explanation of the methodology, and the ability to share or print the solution.

**Use Case 2: Multiple Homework Problems**
> Sarah solves 4 different quadratic equations in succession within 15 minutes. The platform's quick input/result flow and ability to solve new problems without navigation friction are critical to retention.

---

### Persona 2: Miguel, Chemistry Educator
**Demographics:** 35 years old, Spanish-speaking educator in Mexico City, uses desktop primarily for planning
**Goal:** Create educational materials and demonstrate calculations to students
**Pain Points:** Need for bilingual content, desire for printable solutions, complex chemistry math
**Usage Pattern:** Sessions during class preparation (weekday mornings), 5-10 calculators per session, needs to save/share results
**Device Profile:** 40% desktop (preparation), 50% mobile (classroom demos), 10% tablet

**Use Case 3: Stoichiometry Calculation with Class**
> Miguel uses the Stoichiometry Calculator to demonstrate problem-solving to his class. He inputs a chemical reaction and amounts, and displays the step-by-step calculation on the projector. He needs clear, large typography, printable results, and explanations in Spanish.

**Use Case 4: Curriculum Material Preparation**
> Miguel prepares class materials by solving 15 chemistry problems in his office desktop browser. He needs to efficiently input data, quickly get results, and generate printable PDFs or images for course handouts.

---

### Persona 3: James, Physics Student & Competitive Exam Prep
**Demographics:** 19 years old, engineering student preparing for entrance exams, uses both mobile and desktop
**Goal:** Quickly solve complex physics problems during problem sets and exams
**Pain Points:** Need for accuracy verification, complex multi-step calculations, need for formula references
**Usage Pattern:** Daily usage during exam preparation phase (intensive: 50+ calculator uses per week during prep), needs offline access
**Device Profile:** 60% mobile, 40% desktop (problem sets)

**Use Case 5: Rapid Physics Problem Solving**
> James needs to solve 20 physics problems in 30 minutes during timed practice. The Kinematics, Force, and Kinetic Energy calculators must provide instant results with clear methodology. He needs visual confirmation that his manual calculations are correct.

---

### Persona 4: Zainab, Casual Non-Native English Speaker
**Demographics:** 24 years old, Arabic/French speaker, occasional user for work calculations
**Goal:** Use calculators occasionally for work-related percentage and unit calculations
**Pain Points:** Limited English proficiency, need for clear UI with minimal text, mobile-first usage
**Usage Pattern:** Sporadic, 1-2 times per month, uses 1-2 calculators per session
**Device Profile:** 95% mobile, 5% desktop

**Use Case 6: Quick Percentage Calculation in Native Language**
> Zainab needs to calculate a 15% discount on a purchase for her job. She accesses the Percentage Calculator in French via a Google search, immediately understands the interface (minimal text, visual form), enters her values, and gets the result in seconds.

---

### Primary Use Cases Summary

| Use Case | Device | Speed Requirement | Result Type | Session Duration |
|----------|--------|-------------------|-------------|------------------|
| Homework solving | Mobile | < 3s per result | Visual display | 10-30 min |
| Exam prep (rapid) | Mobile/Desktop | < 2s per result | Verification | 20-60 min |
| Educational material prep | Desktop | < 2s per result | Printable | 30-120 min |
| Casual calculation | Mobile | < 3s per result | Visual | 2-5 min |
| Classroom demonstration | Desktop | < 2s per result | Large display | 5-15 min |

---

## Core Feature Specifications

### Feature Overview: 15 MVP Calculators

The product launches with 15 specialized calculators across three subject domains, each providing:
1. Fast computation of mathematical values
2. Step-by-step solution breakdown
3. Formula display with variable substitution
4. Clear methodology explanation
5. Input validation and error handling

### Mathematics (5 Calculators)

#### 1. Quadratic Equation Solver
**Purpose:** Solve second-degree polynomial equations (ax² + bx + c = 0)

**Inputs:**
- Coefficient a (decimal, non-zero validation)
- Coefficient b (decimal)
- Coefficient c (decimal)
- Radio button toggle: "Real Solutions Only" / "Include Complex Solutions"

**Processing:**
- Calculate discriminant: Δ = b² - 4ac
- Determine real vs. complex solutions
- Calculate roots using quadratic formula: x = (-b ± √Δ) / 2a
- Handle edge cases: repeated roots, complex roots

**Outputs:**
- Solution(s) as exact decimal values (8 significant figures)
- Complete quadratic formula with substituted values
- Discriminant value and interpretation
- Step-by-step solution breakdown
- Graph visualization (optional enhancement)

**Acceptance Criteria:**
- Accurately solve all valid quadratic equations
- Clearly distinguish between real and complex solutions
- Display complex numbers in a + bi format
- Input validation prevents division by zero (a ≠ 0)
- All outputs render within < 1 second on target devices

---

#### 2. Standard Deviation Calculator
**Purpose:** Calculate mean, variance, and standard deviation for datasets

**Inputs:**
- Data point array (comma or newline-separated numbers)
- Toggle: "Sample" or "Population" standard deviation
- Toggle: Show calculation steps / Hide for quick reference

**Processing:**
- Calculate mean: μ = Σx / n
- Calculate variance: σ² = Σ(x - μ)² / N (population) or n-1 (sample)
- Calculate standard deviation: σ = √variance
- Identify outliers (±3σ threshold)

**Outputs:**
- Mean (x̄)
- Variance (σ²)
- Standard deviation (σ)
- Count of data points (n)
- Min/Max values
- Step-by-step calculation display
- Interpretation guide (low vs. high variance meaning)

**Acceptance Criteria:**
- Handle datasets of 1 to 10,000 points
- Accurately calculate all statistical measures
- Sample vs. population distinction clear in results
- Input validation for numeric-only values
- Performance: < 500ms for 10,000 data points

---

#### 3. Slope Calculator
**Purpose:** Calculate slope (gradient) between two coordinate points

**Inputs:**
- Point 1: x₁ (decimal) and y₁ (decimal)
- Point 2: x₂ (decimal) and y₂ (decimal)
- Option: Display line equation (y = mx + b form)

**Processing:**
- Calculate slope: m = (y₂ - y₁) / (x₂ - x₁)
- Determine line classification: positive, negative, zero, or undefined slope
- (Optional) Calculate y-intercept (b) for line equation
- (Optional) Generate line equation in slope-intercept form

**Outputs:**
- Slope value (m)
- Slope classification (positive/negative/zero/undefined)
- Detailed formula substitution
- Line equation (if selected)
- Geometric interpretation (steepness description)
- Simple visualization of the line

**Acceptance Criteria:**
- Prevent division by zero (x₁ = x₂ scenario)
- Clearly show undefined slope case
- Numeric accuracy to 6 decimal places
- Visual representation on all devices

---

#### 4. Percentage Calculator
**Purpose:** Calculate percentage changes, percentage of amounts, and related values

**Inputs:**
- Toggle: "Percentage of Amount" / "Percentage Change" / "Reverse Percentage"
- Dynamic input fields based on selected mode:
  - Mode 1: Amount + Percentage → Result
  - Mode 2: Original Value + New Value → Percentage Change
  - Mode 3: Percentage + Result → Original Amount

**Processing:**
- Mode 1: Result = Amount × (Percentage / 100)
- Mode 2: % Change = ((New - Original) / Original) × 100
- Mode 3: Original = Result / (Percentage / 100)

**Outputs:**
- Calculated value in selected mode
- Step-by-step formula display
- All related percentage values (if applicable)
- Real-world interpretation/example

**Acceptance Criteria:**
- All three calculation modes function flawlessly
- Input validation prevents division by zero
- Results accurate to 2 decimal places (currency) or 4 (standard)
- Clear labeling of which value is being calculated

---

#### 5. Significant Figures Calculator
**Purpose:** Round numbers to a specified number of significant figures

**Inputs:**
- Number to round (decimal or scientific notation)
- Target number of significant figures (1-15)
- Display option: Regular decimal or scientific notation for result

**Processing:**
- Identify all significant figures in input number
- Round to target significant figure count
- Handle edge cases: zeros, scientific notation, trailing zeros
- Maintain precision indicators

**Outputs:**
- Rounded number
- Count of significant figures (original vs. target)
- Detailed breakdown of which digits are significant
- Before/after comparison
- Rule reference (sig figs rules explanation)

**Acceptance Criteria:**
- Correct identification of significant figures per IUPAC standards
- Proper rounding logic (round half up / banker's rounding toggle)
- Scientific notation support
- Clear rule explanations for educational value

---

### Chemistry (5 Calculators)

#### 6. Molar Mass Calculator
**Purpose:** Calculate molar mass of chemical compounds

**Inputs:**
- Chemical formula (text input with format validation)
  - Format examples: H2O, NaCl, C6H12O6, Ca(OH)2, CuSO4·5H2O (hydrates)
- Option: Show atomic breakdown
- Option: Show percentage composition by element

**Processing:**
- Parse chemical formula into element symbols and counts
- Lookup atomic mass for each element (from periodic table data)
- Calculate total molar mass: Σ(element count × atomic mass)
- Calculate percentage composition: (element total mass / molar mass) × 100

**Outputs:**
- Molar mass (g/mol) with appropriate significant figures
- Elemental breakdown table (symbol, count, atomic mass, total mass)
- Percentage composition (if selected)
- Formula validation and parsing explanation
- Significant figures calculation rationale

**Acceptance Criteria:**
- Parse complex formulas including hydrates (·nH2O)
- Support parentheses nesting (e.g., Ca(OH)2)
- Atomic mass data accurate to 4 decimal places
- Clear error messages for malformed formulas
- Calculate molar mass for 99%+ of possible chemical formulas

---

#### 7. Chemical Equation Balancer
**Purpose:** Balance chemical equations to satisfy conservation of mass

**Inputs:**
- Reactants (formula input, + separated)
- Products (formula input, + separated)
- Optional: Specify equation type (synthesis, decomposition, redox, etc.)

**Processing:**
- Parse chemical formulas for reactants and products
- Generate matrix of element coefficients
- Solve system to find smallest integer coefficients
- Verify balanced equation (element counts match both sides)
- Identify reaction type if requested

**Outputs:**
- Balanced chemical equation
- Coefficient values for each compound
- Element-by-element balance verification table
- Step-by-step balancing methodology
- Reaction type classification (if applicable)

**Acceptance Criteria:**
- Successfully balance equations with coefficients up to 20
- Support complex multiproduct/multireactant equations
- Clear display of balanced equation
- Error handling for unbalanceable user input (typos)
- Provide helpful guidance for common formatting mistakes

---

#### 8. Molarity Calculator
**Purpose:** Calculate molarity, moles, or volume in solution concentration problems

**Inputs:**
- Toggle mode: Calculate "Molarity" / "Moles" / "Volume"
- Dynamic inputs based on mode:
  - Mode 1 (Molarity): Moles + Volume (L) → Molarity (M)
  - Mode 2 (Moles): Molarity (M) + Volume (L) → Moles
  - Mode 3 (Volume): Molarity (M) + Moles → Volume (L)
- Volume unit selector (mL, L, etc.)

**Processing:**
- Molarity definition: M = moles / volume (in liters)
- Solve for unknown variable in selected mode
- Handle unit conversions automatically (mL to L, etc.)

**Outputs:**
- Calculated value (Molarity, Moles, or Volume)
- Formula display with substituted values
- Unit verification and conversion explanation
- Visual representation (if selected)
- Real-world example interpretation

**Acceptance Criteria:**
- All three modes calculate correctly
- Unit conversions fully automated and accurate
- Input validation prevents negative values
- Results display with appropriate units and significant figures

---

#### 9. Stoichiometry Calculator
**Purpose:** Solve stoichiometry problems involving chemical reactions

**Inputs:**
- Balanced chemical equation (auto-balancer integration possible)
- Select "known substance" (dropdown of reactants/products in equation)
- Amount of known substance (numeric + unit)
- Unit selector (moles, grams, liters for gases)
- Select "unknown substance" (dropdown of reactants/products)

**Processing:**
- Parse balanced equation to extract stoichiometric ratios
- Convert given amount to moles (if needed using molar mass)
- Apply stoichiometric ratio to find moles of unknown substance
- Convert to requested unit for unknown (using molar mass or gas law constants)

**Outputs:**
- Amount of unknown substance in requested units
- Stoichiometric ratio from balanced equation
- Step-by-step calculation with all conversions shown
- Molar masses used in conversion (with sources)
- Limiting reagent identification (if multi-reactant problem)

**Acceptance Criteria:**
- Correctly identify stoichiometric ratios from equations
- Accurately convert between moles/grams/liters
- Handle gas stoichiometry (using molar volume 22.4 L/mol)
- Clear labeling of all conversion steps
- Support for both reactant and product calculations

---

#### 10. Percent Error Calculator
**Purpose:** Calculate percent error between experimental and theoretical values

**Inputs:**
- Experimental value (numeric)
- Theoretical/Accepted value (numeric)
- Option: Show as percentage with 2 decimal places

**Processing:**
- Calculate absolute error: |Experimental - Theoretical|
- Calculate percent error: (|Error| / Theoretical) × 100
- Interpretation: Low error = accurate experiment, High error = systematic/random error

**Outputs:**
- Percent error (%)
- Absolute error value
- Error classification (low/medium/high based on % value)
- Interpretation of result quality
- Common sources of error explanation (educational)

**Acceptance Criteria:**
- Accurate to 4 decimal places in percentage
- Clear interpretation guidance
- Handle zero theoretical value edge case (error message)
- Result makes sense contextually (never negative percentage)

---

### Physics (5 Calculators)

#### 11. Kinematics Calculator
**Purpose:** Solve kinematics problems involving position, velocity, acceleration, and time

**Inputs:**
- Toggle mode selector:
  - Mode 1: Find "Distance" (given: initial velocity, acceleration, time)
  - Mode 2: Find "Final Velocity" (given: initial velocity, acceleration, time)
  - Mode 3: Find "Time" (given: initial velocity, acceleration, distance)
  - Mode 4: Find "Acceleration" (given: initial/final velocity, time)
- Dynamic input fields based on mode

**Processing:**
- Kinematic equations:
  - d = v₀t + ½at²
  - vf = v₀ + at
  - vf² = v₀² + 2ad
  - d = (v₀ + vf)t / 2
- Solve selected equation for unknown variable

**Outputs:**
- Calculated kinematic value
- Formula used with variable substitution
- Units verification and conversion
- Solution steps explained physically
- Common interpretation (e.g., "object reaches 25 m/s after 3 seconds")

**Acceptance Criteria:**
- All four calculation modes work correctly
- Unit systems consistent (SI preferred, convertible)
- Negative values handled appropriately (deceleration, backward motion)
- Clear step-by-step breakdown
- Performance < 500ms

---

#### 12. Ohm's Law Calculator (V=IR)
**Purpose:** Calculate voltage, current, or resistance using Ohm's Law

**Inputs:**
- Toggle mode: Calculate "Voltage" / "Current" / "Resistance"
- Dynamic inputs based on mode:
  - Mode 1: Current (A) + Resistance (Ω) → Voltage (V)
  - Mode 2: Voltage (V) + Resistance (Ω) → Current (A)
  - Mode 3: Voltage (V) + Current (A) → Resistance (Ω)

**Processing:**
- Ohm's Law: V = I × R
- Solve for unknown in selected mode
- Validate inputs (no zero denominators)

**Outputs:**
- Calculated electrical value
- Voltage, Current, Resistance (all three values calculated)
- Formula display with substitution
- Power consumption (bonus: P = VI)
- Practical interpretation (e.g., "current in household circuit")

**Acceptance Criteria:**
- All three calculation modes accurate
- No division by zero scenarios
- Results display in appropriate units (V, A, Ω)
- Clear practical context provided

---

#### 13. Force Calculator (F=ma)
**Purpose:** Calculate force, mass, or acceleration using Newton's Second Law

**Inputs:**
- Toggle mode: Calculate "Force" / "Mass" / "Acceleration"
- Dynamic inputs:
  - Mode 1: Mass (kg) + Acceleration (m/s²) → Force (N)
  - Mode 2: Force (N) + Acceleration (m/s²) → Mass (kg)
  - Mode 3: Force (N) + Mass (kg) → Acceleration (m/s²)

**Processing:**
- Newton's Second Law: F = m × a
- Solve for unknown in selected mode
- Unit consistency check

**Outputs:**
- Calculated value (Force, Mass, or Acceleration)
- All three values in standard units
- Formula with substitution
- Practical context (gravitational force comparison, etc.)
- Weight calculation (W = mg) as bonus

**Acceptance Criteria:**
- All modes calculate correctly
- Unit handling robust (supports N, kg, m/s²)
- Prevents division by zero
- Real-world context provided

---

#### 14. Kinetic Energy Calculator
**Purpose:** Calculate kinetic energy, mass, or velocity from kinetic energy equation

**Inputs:**
- Toggle mode: Calculate "Energy" / "Mass" / "Velocity"
- Dynamic inputs based on mode:
  - Mode 1: Mass (kg) + Velocity (m/s) → Kinetic Energy (J)
  - Mode 2: Energy (J) + Velocity (m/s) → Mass (kg)
  - Mode 3: Energy (J) + Mass (kg) → Velocity (m/s)

**Processing:**
- Kinetic Energy: KE = ½mv²
- Solve for unknown in selected mode
- Handle edge cases (velocity = 0, mass = 0)

**Outputs:**
- Calculated value (Energy, Mass, or Velocity)
- All three values calculated and displayed
- Formula with substitution
- Energy interpretation (joules equivalence: food calories, etc.)
- Velocity significance (speed interpretation)

**Acceptance Criteria:**
- All modes produce correct results
- Energy values in joules with appropriate scale
- Velocity calculation handles both positive/negative
- Clear physical interpretation

---

#### 15. Momentum Calculator
**Purpose:** Calculate momentum, mass, or velocity using momentum equation

**Inputs:**
- Toggle mode: Calculate "Momentum" / "Mass" / "Velocity"
- Dynamic inputs:
  - Mode 1: Mass (kg) + Velocity (m/s) → Momentum (kg·m/s)
  - Mode 2: Momentum (kg·m/s) + Velocity (m/s) → Mass (kg)
  - Mode 3: Momentum (kg·m/s) + Mass (kg) → Velocity (m/s)

**Processing:**
- Momentum: p = m × v
- Solve for unknown in selected mode
- Conservation of momentum context

**Outputs:**
- Calculated value
- All three values displayed
- Formula with substitution
- Real-world example (collision, vehicle impact)
- Impulse-momentum relationship (bonus context)

**Acceptance Criteria:**
- All modes calculate correctly
- Units consistent (kg·m/s)
- Negative momentum handled (direction indication)
- Physical interpretation provided

---

### Feature Cross-Cutting Requirements

**For All Calculators:**

1. **Input Validation & Error Handling:**
   - Validate all numeric inputs (non-null, appropriate range)
   - Provide clear error messages (not technical jargon)
   - Show which field has the error
   - Suggest correction strategies
   - Prevent form submission with invalid data

2. **Results Display Standards:**
   - Display answer prominently at top of results page (minimum 24px font)
   - Show complete step-by-step solution with line numbers or step markers
   - Include all formulas with variable substitution
   - Provide educational explanation of methodology
   - Ensure mathematical notation renders correctly (MathJax or similar)

3. **Mathematical Notation Rendering:**
   - Superscripts for exponents (x², x³)
   - Subscripts for indices (x₁, x₂)
   - Proper fraction display (not just a/b)
   - Greek letters and mathematical symbols (Σ, Δ, θ, π, etc.)
   - Test rendering on all target devices and browsers

4. **Result Interaction Options:**
   - Copy result to clipboard (one-tap on mobile, one-click on desktop)
   - Share result functionality (mobile share sheet, social icons on desktop)
   - Print result page (optimized for paper, includes all steps)
   - Start new calculation (prominent button, maintains tool selection)
   - History toggle (if available)

5. **Accessibility for All Calculators:**
   - Semantic HTML structure (proper label associations)
   - ARIA labels for all interactive elements
   - Keyboard navigation fully functional
   - Screen reader friendly mathematical notation
   - Color not sole information conveyer
   - Minimum contrast ratio 4.5:1 (text), 3:1 (large text)

---

## Technical Architecture

### Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend Framework | Next.js 14+ (latest stable) | SSG/SSR capabilities, built-in i18n support, excellent performance, Vercel integration |
| Language | TypeScript | Type safety, better IDE support, refactoring confidence |
| Styling | Tailwind CSS | Mobile-first utilities, consistent design system, excellent performance |
| Component Library | Headless UI / Radix UI | Accessible unstyled components for custom designs |
| Internationalization | next-intl | Native Next.js i18n, excellent TypeScript support |
| Icons | Heroicons | Lightweight, accessible, Tailwind-compatible |
| Math Rendering | MathJax 3 | Comprehensive mathematical notation support |
| Analytics | Vercel Web Analytics + Plausible | Privacy-respecting, GDPR compliant, mobile-optimized |
| Ad Management | Google AdSense | Primary monetization, native support via google-adsense package |
| Deployment | Vercel | Optimal Next.js hosting, edge functions, analytics |
| Testing | Vitest + React Testing Library | Fast unit/component tests, Playwright for E2E |
| CI/CD | GitHub Actions | Native Git integration, free tier sufficient |
| Version Control | Git on GitHub | Standard practice, full history tracking |

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Browsers                            │
│        (Mobile: 70%, Desktop: 25%, Tablet: 5%)                  │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTPS/HTTP2
                         │
┌─────────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                           │
│              (Global CDN, Image Optimization)                    │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js Application                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Frontend Layer (React Components)                       │  │
│  │  ├─ Layout Components (Navigation, Header, Footer)       │  │
│  │  ├─ Input Pages (15 calculator-specific forms)           │  │
│  │  ├─ Results Pages (solution display)                     │  │
│  │  ├─ UI Component Library (Buttons, Inputs, Cards)        │  │
│  │  └─ Mobile-first Responsive Components                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Page Layer (App Router)                                 │  │
│  │  ├─ Dynamic routes: /[locale]/[tool-slug]/input          │  │
│  │  ├─ Dynamic routes: /[locale]/[tool-slug]/results        │  │
│  │  ├─ Static routes: /[locale]/ (tool listing)             │  │
│  │  ├─ Static routes: /[locale]/about, /privacy, etc.       │  │
│  │  └─ Middleware for locale detection & redirection        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Calculation Engine (Server/Client)                      │  │
│  │  ├─ Math functions (quadratic, statistics, etc.)         │  │
│  │  ├─ Physics functions (kinematics, force, etc.)          │  │
│  │  ├─ Chemistry functions (molar mass, balancing, etc.)    │  │
│  │  ├─ Solution step builders                               │  │
│  │  └─ Result formatters (MathJax-compatible)               │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Internationalization (i18n)                             │  │
│  │  ├─ Translation files (EN, ES, FR)                       │  │
│  │  ├─ Locale detection & routing                           │  │
│  │  ├─ Date/number/currency formatting                      │  │
│  │  └─ hreflang metadata generation                         │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  SEO & Metadata                                          │  │
│  │  ├─ Dynamic meta tags per tool/language                  │  │
│  │  ├─ Schema.org structured data                           │  │
│  │  ├─ Sitemap generation (all locales)                     │  │
│  │  ├─ robots.txt configuration                             │  │
│  │  └─ Open Graph for social sharing                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Analytics & Monetization                                │  │
│  │  ├─ Vercel Web Analytics SDK                             │  │
│  │  ├─ Plausible Analytics (alternative)                    │  │
│  │  ├─ Google AdSense integration                           │  │
│  │  ├─ Ad impression tracking                               │  │
│  │  └─ Session tracking (input page → results page)         │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                         │
                         │
┌─────────────────────────────────────────────────────────────────┐
│                 External Services                                │
│  ├─ Google Analytics (optional secondary analytics)             │
│  ├─ Google Search Console (SEO monitoring)                      │
│  ├─ Google AdSense (ad server)                                  │
│  └─ Vercel Analytics & Monitoring                               │
└─────────────────────────────────────────────────────────────────┘
```

### Directory Structure

```
theorem-calc/
├── app/                               # Next.js App Router
│   ├── [locale]/                      # Dynamic locale segment
│   │   ├── layout.tsx                 # Locale-specific layout
│   │   ├── page.tsx                   # Tool listing page
│   │   ├── [tool]/
│   │   │   ├── input/
│   │   │   │   └── page.tsx           # Calculator input page
│   │   │   ├── results/
│   │   │   │   └── page.tsx           # Calculator results page
│   │   │   └── layout.tsx             # Tool-specific layout
│   │   ├── about/
│   │   │   └── page.tsx               # About page (localized)
│   │   ├── privacy/
│   │   │   └── page.tsx               # Privacy policy (localized)
│   │   └── terms/
│   │       └── page.tsx               # Terms of service (localized)
│   ├── api/                           # API routes
│   │   └── [tool]/
│   │       └── calculate/
│   │           └── route.ts           # Calculation API endpoint
│   ├── layout.tsx                     # Root layout
│   ├── page.tsx                       # Root redirect page
│   └── sitemap.ts                     # Dynamic sitemap generation
│
├── components/                        # React components
│   ├── calculators/                   # Calculator-specific components
│   │   ├── QuadraticSolver.tsx
│   │   ├── StandardDeviation.tsx
│   │   ├── SlopeCalculator.tsx
│   │   ├── PercentageCalculator.tsx
│   │   ├── SignificantFigures.tsx
│   │   ├── MolarMass.tsx
│   │   ├── ChemicalBalancer.tsx
│   │   ├── Molarity.tsx
│   │   ├── Stoichiometry.tsx
│   │   ├── PercentError.tsx
│   │   ├── Kinematics.tsx
│   │   ├── OhmsLaw.tsx
│   │   ├── Force.tsx
│   │   ├── KineticEnergy.tsx
│   │   └── Momentum.tsx
│   │
│   ├── shared/                        # Shared UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── AdContainer.tsx
│   │   ├── ResultCard.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Toggle.tsx
│   │   └── FormSection.tsx
│   │
│   ├── results/                       # Results display components
│   │   ├── SolutionSteps.tsx
│   │   ├── FormulaDisplay.tsx
│   │   ├── StepByStep.tsx
│   │   ├── CopyButton.tsx
│   │   ├── ShareButton.tsx
│   │   └── PrintButton.tsx
│   │
│   ├── layouts/                       # Layout wrappers
│   │   ├── MainLayout.tsx
│   │   ├── CalculatorLayout.tsx
│   │   └── ToolLayout.tsx
│   │
│   └── providers/                     # Context providers
│       ├── IntlProvider.tsx
│       ├── AnalyticsProvider.tsx
│       └── ThemeProvider.tsx
│
├── lib/                               # Utility functions
│   ├── calculators/                   # Calculation logic
│   │   ├── math/
│   │   │   ├── quadratic.ts
│   │   │   ├── standardDeviation.ts
│   │   │   ├── slope.ts
│   │   │   ├── percentage.ts
│   │   │   └── significantFigures.ts
│   │   ├── chemistry/
│   │   │   ├── molarMass.ts
│   │   │   ├── chemicalBalancer.ts
│   │   │   ├── molarity.ts
│   │   │   ├── stoichiometry.ts
│   │   │   └── percentError.ts
│   │   └── physics/
│   │       ├── kinematics.ts
│   │       ├── ohmsLaw.ts
│   │       ├── force.ts
│   │       ├── kineticEnergy.ts
│   │       └── momentum.ts
│   │
│   ├── formatters/                    # Output formatting
│   │   ├── mathNotation.ts
│   │   ├── solutionBuilder.ts
│   │   ├── stepFormatter.ts
│   │   └── resultFormatter.ts
│   │
│   ├── constants/                     # Constants & data
│   │   ├── periodicTable.ts
│   │   ├── calculatorConfig.ts
│   │   ├── toolMetadata.ts
│   │   └── routes.ts
│   │
│   ├── i18n/                          # Internationalization
│   │   ├── config.ts
│   │   ├── translations/
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── fr.json
│   │   └── utils.ts
│   │
│   ├── seo/                           # SEO utilities
│   │   ├── metadata.ts
│   │   ├── structuredData.ts
│   │   ├── siteConfig.ts
│   │   └── hreflang.ts
│   │
│   ├── analytics/                     # Analytics tracking
│   │   ├── events.ts
│   │   ├── tracking.ts
│   │   └── pageEvents.ts
│   │
│   └── utils/                         # General utilities
│       ├── validation.ts
│       ├── errorHandling.ts
│       ├── formatting.ts
│       └── helpers.ts
│
├── middleware.ts                      # Next.js middleware for locale
├── next.config.js                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Dependencies
└── public/                            # Static assets
    ├── images/
    ├── icons/
    └── data/
        └── periodicTable.json
```

### Data Flow Diagrams

**Calculator Input Flow:**
```
User opens calculator input page
    ↓
Locale & tool determined from URL
    ↓
Input form rendered with:
  - Localized labels
  - Input validation rules
  - Mobile-optimized layout
    ↓
User enters values
    ↓
Client-side validation (instant feedback)
    ↓
Submit button clicked
    ↓
Ad impression tracked (input page view)
    ↓
Redirect to results page
```

**Calculation Processing Flow:**
```
Results page loaded
    ↓
Calculation engine receives input values
    ↓
Execute calculation function:
  1. Validate inputs
  2. Perform mathematical operations
  3. Store intermediate results
  4. Prepare all outputs (answer + steps)
    ↓
Format results for display:
  1. Generate step-by-step solution
  2. Render mathematical notation
  3. Apply localization (units, formatting)
  4. Create printable version
    ↓
Results page renders with:
  - Answer prominently displayed
  - Complete solution steps
  - Share/Copy/Print options
  - Ad impression tracked (results page view)
    ↓
User interacts: Copy/Share/Print/New Calculation
```

---

## Mobile-First Design System

### Design Philosophy

TheoremCalc follows a **mobile-first, progressive enhancement** approach:

1. **Design Primary Experience for Mobile (320px+)**
   - All features and functionality must work on smallest screens
   - Touch interactions optimized for fingers (44-48px targets)
   - Content hierarchy clear with limited viewport space
   - Performance optimized for mobile networks (4G/LTE)

2. **Enhance for Larger Screens**
   - Tablet (768px+): Multi-column layouts, expanded spacing
   - Desktop (1024px+): Full feature richness, hover states, complex layouts

3. **Performance First**
   - Minimal JavaScript bundles for mobile networks
   - Critical CSS inlined
   - Images optimized and lazy-loaded
   - Web fonts strategically loaded

### Color System

**Primary Colors:**
- **Primary Action:** #2563eb (Blue - calls to action, active states)
- **Secondary Action:** #64748b (Slate - secondary buttons, links)
- **Success:** #16a34a (Green - correct results, validation)
- **Warning:** #f97316 (Orange - caution, alerts)
- **Error:** #dc2626 (Red - errors, invalid input)

**Neutral Colors:**
- **Background:** #ffffff (White - primary background)
- **Surface:** #f8fafc (Light Slate - cards, sections)
- **Border:** #e2e8f0 (Light Gray - dividers, borders)
- **Text Primary:** #1e293b (Dark Slate - primary text)
- **Text Secondary:** #64748b (Medium Slate - secondary text)
- **Text Tertiary:** #94a3b8 (Light Slate - tertiary text)

**Accessibility Considerations:**
- All color combinations meet WCAG AA (4.5:1 contrast for text)
- Color never sole information conveyer (icons, text labels required)
- Colorblind-safe palette verified with WCAG color contrast checker

### Typography System

```
Font Stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

Size Scale (using rem units, 16px base):
  xs: 0.75rem (12px) - small labels, captions
  sm: 0.875rem (14px) - body text (mobile)
  base: 1rem (16px) - primary body text (minimum for inputs)
  lg: 1.125rem (18px) - emphasized body text
  xl: 1.25rem (20px) - section headings
  2xl: 1.5rem (24px) - page headings
  3xl: 1.875rem (30px) - calculator answer display
  4xl: 2.25rem (36px) - main page headings (desktop only)

Weight Distribution:
  400 (Regular) - body text
  500 (Medium) - labels, secondary headings
  600 (Semibold) - section headings
  700 (Bold) - page headings, emphasis

Line Heights:
  Tight: 1.25 (headings)
  Normal: 1.5 (body text)
  Relaxed: 1.75 (long-form content)
  Loose: 2 (rarely used, special contexts)
```

### Spacing System

```
Base Unit: 4px (rem/4)

Scale:
  0.5: 2px (micro-spacing)
  1: 4px (minimal spacing)
  2: 8px (small spacing between elements)
  3: 12px (form fields, small sections)
  4: 16px (standard spacing)
  6: 24px (section spacing)
  8: 32px (major section spacing)
  12: 48px (large spacing)
  16: 64px (very large spacing)

Application:
  - Padding inside containers: 1-2 (mobile), 2-4 (desktop)
  - Margin between sections: 4-6 (mobile), 6-8 (desktop)
  - Gap in flex/grid: 2-4
  - Touch target minimum: 11-12 (48-56px)
```

### Component Library Specifications

All components must be:
- Fully responsive (mobile-first implementation)
- Accessible (WCAG 2.1 AA minimum)
- Touch-friendly (48px+ targets)
- TypeScript-typed
- Exported from `/components` directory

#### Core Components

**1. Button Component**

Variants:
- `primary` (blue background, white text) - main CTAs
- `secondary` (slate background, slate text) - secondary actions
- `ghost` (no background, blue text) - tertiary actions
- `outline` (border only) - alternative to ghost
- `danger` (red background, white text) - destructive actions

Sizes:
- `sm` (32px height, 0.875rem text) - mobile secondary buttons
- `md` (40px height, 1rem text) - standard mobile buttons
- `lg` (48px height, 1.125rem text) - primary mobile CTAs
- `xl` (56px height, 1.25rem text) - prominent actions

States:
- Default, Hover, Active, Disabled, Loading

Mobile Requirements:
- Full-width or near-full-width (at least 90% of container)
- Minimum height: 48px for touch targets
- Bottom safe-area padding on mobile (for notched phones)
- Clear tap feedback (visual state change)

**2. Input Component**

Field Types:
- `text` - general text input
- `number` - numeric input (shows numeric keyboard on mobile)
- `decimal` - decimal number (shows decimal keyboard)
- `email` - email validation
- `tel` - phone number (tel keyboard)
- `password` - hidden text

Features:
- Associated label (required for accessibility)
- Helper text / description
- Error state with message display
- Optional/required indicator
- Clear button (especially mobile)
- Input validation (real-time or on blur)
- Cursor position indicator

Mobile Specifications:
- Minimum height: 44px (48px preferred)
- Base font size: 16px minimum (prevents iOS zoom)
- Full-width or nearly full-width on mobile
- Clear contrast between input and background
- Error messages visible (not requiring scroll)
- Appropriate keyboard type per input_type

**3. Select / Dropdown Component**

Features:
- Accessible aria-labels and descriptions
- Keyboard navigation (arrow keys, enter to select)
- Search/filter capability (if > 5 options)
- Visual focus indicator
- Option grouping support

Mobile Specifications:
- Native select element on mobile (platform picker)
- Larger touch targets for options
- No hover states (not applicable to touch)
- Keyboard-accessible alternative
- Landscape orientation support

**4. Toggle / Switch Component**

Features:
- Clear on/off states
- Color-coded (not just visual position)
- Accessible name/description
- Keyboard support (Space/Enter to toggle)

Mobile Specifications:
- Minimum 48px height touch target
- Clear visual feedback on toggle
- Appropriate color contrast in both states
- Works in landscape orientation

**5. Card Component**

Features:
- Flexible content layout
- Optional header, footer
- Shadow/border for definition
- Internal padding (responsive)

Mobile Specifications:
- Full-width with safe margins (8-16px gutter)
- Single column on mobile
- Clear visual separation from background
- Touch-friendly tap targets if interactive

**6. Mathematical Notation Display**

Features:
- Render via MathJax v3 (native, no copy bugs)
- Proper superscripts/subscripts
- Fraction notation (not just a/b)
- Greek letters and symbols
- Clear readability at all sizes

Mobile Specifications:
- Scale appropriately for small screens
- No horizontal scrolling for equations
- Touch-friendly formula display (not required, but possible)
- Fallback text for math-disabled users

**7. Results Card**

Features:
- Large, prominent answer display
- Step-by-step solution sections
- Formula highlighting
- Copy/Share/Print buttons
- Related calculations suggestion

Mobile Specifications:
- Answer text: 28-32px minimum
- Steps vertically stacked
- Full-width cards with padding
- Copy button always visible
- One action per line (not grouped buttons)

---

## Responsive Design Specifications

### Breakpoint Strategy

```
Mobile First Approach:
- Base styles: 320px+
- Tablet: 768px+ (min-width)
- Desktop: 1024px+ (min-width)
- Large Desktop: 1280px+ (max-width optimization)

Tailwind Breakpoints (defaults overridden if needed):
- sm: 640px - rarely used, mostly base → md jump
- md: 768px - tablet layout changes
- lg: 1024px - desktop layout changes
- xl: 1280px - large desktop optimization
```

### Mobile Layouts (320px - 767px)

**Input Pages:**
```
┌─────────────────────────┐
│ Header                  │  40px (safe area)
├─────────────────────────┤
│ Tool Name / Breadcrumbs │  Collapsible breadcrumbs
├─────────────────────────┤
│ [AD PLACEMENT #1]       │  320x50 or 300x250 mobile banner
├─────────────────────────┤
│ Instructions (optional) │  Body text, collapsible details
├─────────────────────────┤
│ Input Form:             │
│ ┌─────────────────────┐ │
│ │ Label               │ │
│ │ [Input field]       │ │  48px height, full width - 32px padding
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Label               │ │
│ │ [Input field]       │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ [Calculate Button]  │ │  56px height, full width - 16px margins
│ └─────────────────────┘ │
├─────────────────────────┤
│ [AD PLACEMENT #2]       │  320x50 or 300x250 mobile banner
├─────────────────────────┤
│ Footer                  │  Static or sticky
└─────────────────────────┘
```

**Results Pages:**
```
┌─────────────────────────┐
│ Header                  │  With back button
├─────────────────────────┤
│ Tool Name               │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │   ANSWER: 42.5      │ │  28-32px text, highlighted card
│ │   (prominent)       │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ [COPY] [SHARE]          │  Full-width stacked buttons
│ [PRINT] [NEW CALC]      │  (two per row max)
├─────────────────────────┤
│ [AD PLACEMENT #1]       │  320x50 or 300x250 mobile banner
├─────────────────────────┤
│ Step-by-Step Solution   │
│ Step 1:                 │  Numbered, clear spacing
│ Description text here   │
│ Formula display         │  MathJax rendered
│                         │
│ Step 2:                 │
│ Description text here   │
│ Formula / Calculation   │
│                         │
│ [Further steps...]      │  Collapsible for long solutions
├─────────────────────────┤
│ [AD PLACEMENT #2]       │  320x50 or 300x250 mobile banner
├─────────────────────────┤
│ Footer                  │
└─────────────────────────┘
```

### Tablet Layouts (768px - 1023px)

**Input Pages:**
```
┌──────────────────────────────────────┐
│ Header with Navigation               │
├──────────────────────────────────────┤
│ Breadcrumbs (expanded, visible)      │
├──────────────────────────────────────┤
│ ┌──────────────────┬──────────────┐  │
│ │ Input Form       │ [AD #1]      │  │  300x250 sidebar ad
│ │ ┌──────────────┐ │              │  │
│ │ │ Label        │ │ (728x90 or   │  │
│ │ │ [Input]      │ │  300x250)    │  │
│ │ └──────────────┘ │              │  │
│ │ ┌──────────────┐ │              │  │
│ │ │ Label        │ │              │  │
│ │ │ [Input]      │ │              │  │
│ │ └──────────────┘ │              │  │
│ │ [Calculate]      │              │  │
│ └──────────────────┴──────────────┘  │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

### Desktop Layouts (1024px+)

**Input Pages:**
```
┌──────────────────────────────────────────────────────────┐
│ Header with Full Navigation                              │
├──────────────────────────────────────────────────────────┤
│ Breadcrumbs                                              │
├────────────────────────┬────────────────────────────────┤
│ Left Sidebar           │ Main Content                   │
│ (Related tools)        │ [AD PLACEMENT #1]              │
│                        │ (728x90 top banner)            │
│ Related:               ├────────────────────────────────┤
│ • Tool A               │ Input Form (centered, max 600px)
│ • Tool B               │ ┌──────────────────────────┐   │
│ • Tool C               │ │ Label                    │   │
│ • Tool D               │ │ [Input] [Input]          │   │
│ • Tool E               │ └──────────────────────────┘   │
│                        │ ┌──────────────────────────┐   │
│ Tips & Tricks:         │ │ Label                    │   │
│ • Remember...          │ │ [Input] [Input]          │   │
│ • Common mistakes...   │ └──────────────────────────┘   │
│                        │ [Calculate Button]             │
├────────────────────────┤────────────────────────────────┤
│ Ad Placement           │ [AD PLACEMENT #2] (sidebar ad) │
│ (300x600)              │ or footer banner               │
│                        │                                │
├────────────────────────┴────────────────────────────────┤
│ Footer                                                   │
└──────────────────────────────────────────────────────────┘
```

### Responsive Typography

```
Mobile (320px):
  Page Heading: 24px (2xl, semibold)
  Section Heading: 20px (xl, semibold)
  Body Text: 16px (base, regular)
  Small Text: 14px (sm, regular)

Tablet (768px):
  Page Heading: 28px (1.75rem, semibold)
  Section Heading: 22px (1.375rem, semibold)
  Body Text: 16px (base, regular)
  Small Text: 14px (sm, regular)

Desktop (1024px+):
  Page Heading: 32px (2xl, semibold)
  Section Heading: 24px (1.5rem, semibold)
  Body Text: 16px (base, regular)
  Small Text: 14px (sm, regular)

Answer Display (all screen sizes):
  Mobile: 28px (1.75rem)
  Tablet: 32px (2rem)
  Desktop: 36px (2.25rem)
  Always visible without scroll (above the fold)
```

### Image Optimization

**Responsive Image Strategy:**

```html
<!-- Example: For calculator icons or illustrations -->
<picture>
  <!-- Mobile first -->
  <source media="(max-width: 767px)" srcSet="/img/calculator-mobile.webp" />
  <!-- Tablet -->
  <source media="(max-width: 1023px)" srcSet="/img/calculator-tablet.webp" />
  <!-- Desktop -->
  <source media="(min-width: 1024px)" srcSet="/img/calculator-desktop.webp" />
  <!-- Fallback -->
  <img src="/img/calculator.png" alt="Calculator icon" />
</picture>
```

**Image Specifications:**

- Format: WebP with PNG fallback
- Mobile images: max 600px width, <= 100KB
- Tablet images: max 900px width, <= 150KB
- Desktop images: max 1200px width, <= 200KB
- Use CSS `object-fit` for consistent aspect ratios
- Lazy load non-critical images (`loading="lazy"`)
- Preload critical above-the-fold images

---

## SEO & Internationalization Strategy

### URL Structure for Multi-Language Support

**Convention:**
```
/[locale]/[tool-slug]/[page]

Examples:
/en/quadratic-solver/input
/es/calculadora-cuadratica/input
/fr/resolveur-quadratique/input

/en/molar-mass/input
/es/masa-molar/input
/fr/masse-molaire/input
```

**Tool Slug Standards:**
- English slugs: hyphen-separated, lowercase (e.g., `quadratic-solver`)
- Spanish slugs: translated to Spanish (e.g., `calculadora-cuadratica`)
- French slugs: translated to French (e.g., `resolveur-quadratique`)
- Slugs must be keyword-optimized (include primary search term)

**Supported Locales:**
- `en` - English (default)
- `es` - Spanish
- `fr` - French
- [Future expansion to: `de`, `pt`, `ja`, `zh`, `ru`, `ar`, `hi`]

### Metadata & SEO Optimization

**Meta Tags (Every Page):**

```html
<!-- English version -->
<title>Quadratic Equation Solver | TheoremCalc - Step-by-Step Solutions</title>
<meta name="description" content="Solve quadratic equations instantly. Get step-by-step solutions using the quadratic formula. Supports real and complex solutions." />
<meta name="keywords" content="quadratic equation solver, quadratic formula calculator, solve ax²+bx+c=0" />

<!-- Spanish version -->
<title>Calculadora de Ecuaciones Cuadraticas | TheoremCalc - Soluciones Paso a Paso</title>
<meta name="description" content="Resuelve ecuaciones cuadraticas al instante. Obtén soluciones paso a paso usando la fórmula cuadrática. Soporta soluciones reales y complejas." />

<!-- Open Graph (for social sharing) -->
<meta property="og:title" content="Quadratic Equation Solver | TheoremCalc" />
<meta property="og:description" content="Solve quadratic equations with step-by-step solutions..." />
<meta property="og:image" content="https://theoremcalc.com/og-quadratic.jpg" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="fr_FR" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Quadratic Equation Solver" />
<meta name="twitter:description" content="Solve quadratic equations with step-by-step solutions..." />

<!-- Mobile / Responsive -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="theme-color" content="#2563eb" />
```

**hreflang Tags (Critical for Multi-Language SEO):**

```html
<!-- On English page: /en/quadratic-solver/input -->
<link rel="canonical" href="https://theoremcalc.com/en/quadratic-solver/input" />
<link rel="alternate" hreflang="en" href="https://theoremcalc.com/en/quadratic-solver/input" />
<link rel="alternate" hreflang="es" href="https://theoremcalc.com/es/calculadora-cuadratica/input" />
<link rel="alternate" hreflang="fr" href="https://theoremcalc.com/fr/resolveur-quadratique/input" />
<link rel="alternate" hreflang="x-default" href="https://theoremcalc.com/en/quadratic-solver/input" />
```

### Structured Data (Schema.org)

**Calculator Tool Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Quadratic Equation Solver",
  "url": "https://theoremcalc.com/en/quadratic-solver/input",
  "description": "Solve quadratic equations instantly with step-by-step solutions using the quadratic formula.",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "TheoremCalc",
    "url": "https://theoremcalc.com"
  },
  "inLanguage": ["en", "es", "fr"],
  "operatingSystem": "Web",
  "browserRequirements": "ES6-compatible browser"
}
```

**Organization Schema (homepage):**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TheoremCalc",
  "url": "https://theoremcalc.com",
  "logo": "https://theoremcalc.com/logo.png",
  "description": "Multi-language educational calculator portal for Mathematics, Physics, and Chemistry.",
  "sameAs": [
    "https://twitter.com/theoremcalc",
    "https://facebook.com/theoremcalc"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@theoremcalc.com"
  }
}
```

### Internationalization Implementation

**Translation File Structure:**

```typescript
// lib/i18n/translations/en.json
{
  "navigation": {
    "tools": "Tools",
    "about": "About",
    "language": "Language"
  },
  "calculators": {
    "quadratic_solver": {
      "title": "Quadratic Equation Solver",
      "description": "Solve second-degree polynomial equations",
      "instructions": "Enter coefficients a, b, and c, then click Calculate."
    }
  },
  "common": {
    "calculate": "Calculate",
    "results": "Results",
    "steps": "Step-by-Step Solution",
    "copy": "Copy to Clipboard",
    "share": "Share"
  }
}
```

**Locale Detection & Routing:**

```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es', 'fr']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if locale in pathname
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Detect user language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  const userLocale = acceptLanguage
    ?.split(',')[0]
    .split('-')[0]
    .toLowerCase() || defaultLocale

  const locale = locales.includes(userLocale) ? userLocale : defaultLocale

  // Redirect to locale-prefixed URL
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|_next|public|favicon|robots|sitemap).*)']
}
```

---

## Monetization & Ad Strategy

### Google AdSense Integration

**Implementation Strategy:**

```typescript
// components/AdContainer.tsx
import Script from 'next/script'
import React from 'react'

interface AdProps {
  placement: 'input-top' | 'input-bottom' | 'results-top' | 'results-bottom'
  style?: React.CSSProperties
}

export function AdContainer({ placement, style }: AdProps) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <div
        className={`ad-container ad-${placement}`}
        style={style}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={getAdSlotId(placement)}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        strategy="lazyOnload"
        onLoad={() => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
          } catch (e) {
            console.error('AdSense error:', e)
          }
        }}
      />
    </>
  )
}

function getAdSlotId(placement: string): string {
  const slots: Record<string, string> = {
    'input-top': '1234567890',
    'input-bottom': '1234567891',
    'results-top': '1234567892',
    'results-bottom': '1234567893'
  }
  return slots[placement] || ''
}
```

### Ad Placement Strategy

**Input Pages (Page 1):**
- **Ad Placement #1 (Top):** After form title, before instructions
  - Format: 728x90 (desktop), 320x50 (mobile), responsive
  - Position: Below tool title, above form
  - Purpose: Initial impression, captures attention

- **Ad Placement #2 (Bottom):** After Calculate button, before footer
  - Format: 300x250 (desktop), 320x250 (mobile)
  - Position: Bottom of page, low distraction
  - Purpose: Secondary exposure before user submits

**Results Pages (Page 2):**
- **Ad Placement #1 (Top):** Immediately below answer display
  - Format: 728x90 (desktop), 320x50 (mobile)
  - Position: High visibility, after user sees answer
  - Purpose: Major impression opportunity
  - Spacing: 24px padding from answer card

- **Ad Placement #2 (Mid):** Between solution steps and footer
  - Format: 300x250 (desktop), 320x250 (mobile)
  - Position: Mid-page, natural reading pause
  - Purpose: Secondary high-value impression

### Responsive Ad Formats

```css
/* Mobile-optimized ad placements */
@media (max-width: 767px) {
  .ad-container {
    width: 100%;
    max-width: 320px;
    margin: 16px auto;
    text-align: center;
  }

  /* Banner ad (320x50) */
  .ad-banner {
    height: 50px;
  }

  /* Medium rectangle (300x250) */
  .ad-rectangle {
    height: 250px;
    max-width: 300px;
  }
}

@media (min-width: 768px) {
  .ad-container {
    margin: 24px 0;
    text-align: center;
  }

  /* Desktop banner (728x90) */
  .ad-banner {
    height: 90px;
    width: 728px;
  }

  /* Sidebar ad (300x600) */
  .ad-sidebar {
    height: 600px;
    width: 300px;
  }
}
```

### Ad Quality & UX Preservation

**Mobile Ad Optimization:**
- Use non-intrusive, in-content ad formats
- Avoid pop-ups, interstitials, or expandable ads on mobile
- Ensure adequate spacing around ads (minimize accidental clicks)
- Monitor Cumulative Layout Shift (CLS) from ads
- Ads must not cause page scrolling/jumping

**Desktop Ad Optimization:**
- Sidebar ads on wider screens
- Synchronize ad display with content (not blocking content)
- Premium ad placements for better RPM

**Monitoring & Compliance:**
- Track ad impression count per session (target: 2-4)
- Monitor bounce rate impact from ad placement
- Verify compliance with AdSense policies
- A/B test ad placements monthly
- Set up fraud detection alerts

---

## Performance Requirements & Budgets

### Core Web Vitals Targets

**Mobile Targets (Critical Priority):**
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100 milliseconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to First Byte (TTFB):** < 600ms

**Desktop Targets:**
- **LCP:** < 2 seconds
- **FID:** < 100ms
- **CLS:** < 0.1
- **TTFB:** < 500ms

**Lighthouse Score Targets:**
- **Performance:** > 90
- **Accessibility:** > 90
- **Best Practices:** > 85
- **SEO:** 100

### Performance Budget

**JavaScript Bundle Size:**

```
Mobile:
  Initial JS (critical path): < 100 KB gzipped
  Total JS (with calculator logic): < 250 KB gzipped
  Per calculator: < 20 KB gzipped

Desktop:
  Initial JS: < 120 KB gzipped
  Total JS: < 280 KB gzipped

Tools to monitor:
  - Next.js bundle analysis (`next/bundle-analyzer`)
  - WebPageTest monthly audits
  - Lighthouse CI integration
```

**CSS Bundle Size:**
- Global styles: < 30 KB gzipped
- Per-page styles: < 15 KB gzipped
- Total: < 50 KB gzipped

**Image Budget:**
- Hero images: < 80 KB (mobile), < 150 KB (desktop)
- UI icons: < 1 KB each (SVG)
- Illustrations: < 100 KB
- Screenshots: < 200 KB

**Network Request Budget:**
- Input page: < 10 requests
- Results page: < 12 requests
- Max request timeout: 5 seconds

### Optimization Strategies

**Image Optimization:**

```typescript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/calculator-icon.svg"
  alt="Quadratic Solver"
  width={64}
  height={64}
  loading="lazy"
  quality={80}
/>
```

**Code Splitting & Lazy Loading:**

```typescript
// Split calculator code per tool
const QuadraticSolver = dynamic(() => import('@/lib/calculators/quadratic'), {
  loading: () => <div>Loading...</div>,
  ssr: true // Server-side render for initial page
})
```

**Static Generation & ISR:**

```typescript
// Generate all locale + tool combinations at build time
export async function generateStaticParams() {
  const locales = ['en', 'es', 'fr']
  const tools = [
    'quadratic-solver',
    'standard-deviation',
    // ... all 15 tools
  ]

  return locales.flatMap(locale =>
    tools.flatMap(tool => [
      { locale, tool, page: 'input' },
      { locale, tool, page: 'results' }
    ])
  )
}

// Revalidate every 7 days
export const revalidate = 7 * 24 * 60 * 60
```

**Critical CSS Inlining:**

```typescript
// Inline critical path CSS in <head>
<style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
```

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Color & Contrast:**
- Minimum contrast ratio 4.5:1 for normal text
- Minimum contrast ratio 3:1 for large text (18px+)
- All interactive elements have sufficient contrast
- Color not sole conveyer of information

**Keyboard Navigation:**
- All functionality keyboard accessible
- Tab order logical and intuitive
- Skip navigation links (skip to main content)
- No keyboard traps
- Focus indicators visible (min 3px, bright color)

**Screen Reader Support:**
- Semantic HTML structure (proper heading hierarchy)
- ARIA labels for form inputs
- ARIA descriptions for complex content
- Math notation accessible via text alternatives
- Images have descriptive alt text

**Mobile Accessibility:**
- Touch target size minimum 44px (WCAG 2.1 Enhanced)
- Input labels associated via `<label>` element
- Clear focus indicators for touch navigation
- Voice control compatible

### Implementation Checklist

```typescript
// Form accessibility example
<div className="form-group">
  <label htmlFor="coefficient-a" className="block mb-2 font-medium">
    Coefficient a *
    <span aria-label="required">*</span>
  </label>
  <input
    id="coefficient-a"
    type="number"
    step="0.01"
    required
    aria-required="true"
    aria-describedby="coefficient-a-desc"
    className="w-full px-3 py-2 border rounded"
  />
  <p id="coefficient-a-desc" className="text-sm text-gray-600 mt-1">
    Enter the coefficient of x² (must not be zero)
  </p>
  {errors.a && (
    <span role="alert" className="text-red-600 text-sm mt-1">
      {errors.a}
    </span>
  )}
</div>

// Math notation accessibility
<div role="img" aria-label="quadratic formula: x equals negative b plus or minus square root of b squared minus 4ac, all divided by 2a">
  <MathDisplay formula="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
</div>
```

### Accessibility Testing

**Automated Testing:**
- Axe DevTools (chrome extension)
- Lighthouse accessibility audit
- WAVE (WebAIM tool)
- Vitest with accessibility matchers

**Manual Testing:**
- Keyboard-only navigation (no mouse)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Mobile VoiceOver/TalkBack testing
- Color contrast verification
- Focus indicator verification

---

## Analytics & Monitoring

### Analytics Events to Track

**Session Events:**
```typescript
// Track calculator access
trackEvent('calculator_view', {
  tool_slug: 'quadratic-solver',
  locale: 'en',
  device_type: 'mobile', // or 'desktop', 'tablet'
  timestamp: new Date().toISOString()
})

// Track calculation submission
trackEvent('calculation_submitted', {
  tool_slug: 'quadratic-solver',
  locale: 'en',
  session_duration_ms: 45000,
  number_of_inputs: 3,
  validation_errors: 0,
  timestamp: new Date().toISOString()
})

// Track results page view
trackEvent('results_viewed', {
  tool_slug: 'quadratic-solver',
  locale: 'en',
  device_type: 'mobile',
  results_display_time_ms: 234,
  timestamp: new Date().toISOString()
})
```

**User Interaction Events:**
```typescript
// Copy result
trackEvent('result_copied', {
  tool_slug: 'quadratic-solver',
  result_type: 'full_solution' // or 'answer_only'
})

// Share result
trackEvent('result_shared', {
  tool_slug: 'quadratic-solver',
  share_method: 'copy_link', // or 'social', 'email'
})

// Print result
trackEvent('result_printed', {
  tool_slug: 'quadratic-solver',
  page_count: 2
})

// Start new calculation
trackEvent('new_calculation', {
  previous_tool: 'quadratic-solver',
  new_tool: 'quadratic-solver', // could be same
  session_duration_ms: 120000
})
```

**Ad Performance Events:**
```typescript
// Track ad impressions
trackEvent('ad_impression', {
  placement: 'input-top',
  tool_slug: 'quadratic-solver',
  ad_format: '728x90',
  locale: 'en',
  device_type: 'desktop'
})

// Track ad clicks (if applicable)
trackEvent('ad_click', {
  placement: 'input-top',
  tool_slug: 'quadratic-solver'
})
```

### Key Metrics Dashboard

**Primary Metrics:**
- Monthly Active Users (MAU)
- Mobile MAU / Desktop MAU (target: 70/30 split)
- Pages per Session (target: 2+)
- Bounce Rate (target: < 50%)
- Return Visitor Rate (target: > 40%)
- Average Session Duration (target: > 3 minutes)

**Performance Metrics:**
- LCP (target: < 2.5s mobile, < 2s desktop)
- FID (target: < 100ms)
- CLS (target: < 0.1)
- Page Load Time P95
- Core Web Vitals "Good" percentage

**Monetization Metrics:**
- Ad Impressions per Session (target: 2-4)
- Total Ad Impressions per Day
- RPM (Revenue Per Mille)
- Estimated Monthly Revenue

**Traffic Metrics:**
- Organic Search % (target: > 80%)
- Organic Keywords Ranking (track top 50)
- Click-Through Rate from SERP
- Traffic by Top Countries (target: top 5)

**Engagement Metrics:**
- Top 10 Tools by Usage
- Mobile vs Desktop Bounce Rate
- Mobile vs Desktop Session Duration
- Language Distribution
- Device Model Distribution (top 20 devices)

### Analytics Tools & Setup

**Primary: Vercel Web Analytics**
- Built-in, no additional configuration
- Real-time performance metrics
- Device and browser breakdowns
- Geographic distribution

**Secondary: Plausible Analytics (Optional)**
- Privacy-respecting (no cookies)
- GDPR compliant
- Google Analytics alternative
- Custom events easy to track

**Monitoring: Sentry**
- JavaScript error tracking
- Performance monitoring
- Source map support
- Alert on increased error rates

---

## Testing Strategy

### Unit Tests (Calculation Logic)

**Coverage Target:** > 95% for calculator functions

```typescript
// tests/lib/calculators/quadratic.test.ts
import { solveQuadratic } from '@/lib/calculators/quadratic'

describe('Quadratic Equation Solver', () => {
  test('solves simple quadratic with two real roots', () => {
    const result = solveQuadratic({ a: 1, b: -3, c: 2 })
    expect(result.roots).toEqual([2, 1])
    expect(result.discriminant).toBe(1)
  })

  test('solves quadratic with negative discriminant (complex roots)', () => {
    const result = solveQuadratic({ a: 1, b: 0, c: 1 })
    expect(result.roots).toHaveLength(2)
    expect(result.roots[0].real).toBe(0)
    expect(result.roots[0].imaginary).toBe(1)
  })

  test('throws error when a = 0', () => {
    expect(() => solveQuadratic({ a: 0, b: 1, c: 1 })).toThrow()
  })

  test('handles very large coefficients', () => {
    const result = solveQuadratic({ a: 1e10, b: 1e10, c: 1e10 })
    expect(result.roots).toBeDefined()
    expect(result.roots).toHaveLength(2)
  })

  test('generates correct step-by-step solution', () => {
    const result = solveQuadratic({ a: 1, b: -3, c: 2 })
    expect(result.steps).toBeDefined()
    expect(result.steps.length).toBeGreaterThan(0)
    expect(result.steps[0].description).toContain('discriminant')
  })
})
```

### Component Tests

**Coverage Target:** > 90% for UI components

```typescript
// tests/components/PercentageCalculator.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import PercentageCalculator from '@/components/calculators/PercentageCalculator'

describe('PercentageCalculator Component', () => {
  test('renders all input fields', () => {
    render(<PercentageCalculator />)
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Percentage/i)).toBeInTheDocument()
  })

  test('validates empty inputs', async () => {
    render(<PercentageCalculator />)
    fireEvent.click(screen.getByText(/Calculate/i))
    expect(screen.getByText(/required/i)).toBeInTheDocument()
  })

  test('calculates percentage correctly', async () => {
    render(<PercentageCalculator />)
    fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } })
    fireEvent.change(screen.getByLabelText(/Percentage/i), { target: { value: '25' } })
    fireEvent.click(screen.getByText(/Calculate/i))
    expect(screen.getByText(/25/)).toBeInTheDocument()
  })

  test('shows copy button on mobile', () => {
    // Mock mobile viewport
    global.innerWidth = 375
    render(<PercentageCalculator />)
    // ... test mobile functionality
  })
})
```

### E2E Tests (Playwright)

**Test Scenarios:**
```typescript
// tests/e2e/quadratic.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Quadratic Calculator E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/quadratic-solver/input')
  })

  test('complete calculator flow on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 })

    // Find input fields
    const inputA = page.locator('input[id="coefficient-a"]')
    const inputB = page.locator('input[id="coefficient-b"]')
    const inputC = page.locator('input[id="coefficient-c"]')

    // Fill values
    await inputA.fill('1')
    await inputB.fill('-3')
    await inputC.fill('2')

    // Submit
    await page.locator('button:has-text("Calculate")').click()

    // Wait for navigation and verify results
    await page.waitForURL('**/results')
    await expect(page.locator('text=2')).toBeVisible()
    await expect(page.locator('text=1')).toBeVisible()
  })

  test('language switching works', async ({ page }) => {
    // Switch to Spanish
    await page.locator('button[aria-label="Change language"]').click()
    await page.locator('text=Español').click()

    // Verify URL changed
    await expect(page).toHaveURL(/\/es\//)

    // Verify content in Spanish
    await expect(page.locator('text=Calculadora de Ecuaciones Cuadraticas')).toBeVisible()
  })

  test('ad placements load correctly', async ({ page }) => {
    // Wait for ad containers
    const adContainers = page.locator('[data-ad-client]')
    const count = await adContainers.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('copy button works on results page', async ({ page }) => {
    await fillAndSubmitForm(page)
    const copyButton = page.locator('button:has-text("Copy")')
    await copyButton.click()
    // Verify toast/feedback shown
    await expect(page.locator('text=Copied')).toBeVisible()
  })

  test('print button opens print dialog', async ({ page }) => {
    await fillAndSubmitForm(page)
    const printButton = page.locator('button:has-text("Print")')

    // Listen for print event
    page.once('popup', popup => {
      expect(popup.url()).toBe('about:blank')
      popup.close()
    })

    await printButton.click()
  })
})

async function fillAndSubmitForm(page: any) {
  await page.locator('input[id="coefficient-a"]').fill('1')
  await page.locator('input[id="coefficient-b"]').fill('-3')
  await page.locator('input[id="coefficient-c"]').fill('2')
  await page.locator('button:has-text("Calculate")').click()
  await page.waitForURL('**/results')
}
```

### Mobile Device Testing Matrix

**Required Testing (Real Devices Preferred):**

| Device | OS | Screen Size | Browser | Priority |
|--------|----|----|---------|----------|
| iPhone 14 | iOS 17 | 390px | Safari | P0 |
| iPhone SE | iOS 17 | 375px | Safari | P0 |
| iPhone 12 | iOS 17 | 390px | Safari | P0 |
| Samsung Galaxy S24 | Android 14 | 412px | Chrome | P0 |
| Samsung Galaxy A14 | Android 13 | 412px | Chrome | P0 |
| Google Pixel 8 | Android 14 | 412px | Chrome | P0 |
| OnePlus 12 | Android 14 | 412px | Chrome | P1 |
| iPad Air | iPadOS 17 | 820px | Safari | P1 |
| Samsung Tab S9 | Android 14 | 824px | Chrome | P1 |

**Browser Testing (Desktop):**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Performance Testing

**Lighthouse CI Integration:**
```yaml
# lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/en/quadratic-solver/input'],
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
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }]
      }
    }
  }
}
```

---

## Deployment & CI/CD Pipeline

### GitHub Actions CI/CD Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy

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
      - uses: actions/checkout@v3

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint code
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run unit tests
        run: npm run test:unit

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Build application
        run: npm run build

      - name: Run Lighthouse CI
        run: npx lhci autorun

  deploy-preview:
    needs: lint-test
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

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
      - uses: actions/checkout@v3

      - name: Deploy to Vercel Production
        uses: vercel/action@v5
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          prod: true

      - name: Create Sentry release
        uses: getsentry/action-release@v1
        env:
          SENTRY_AUTH_TOKEN: ${{ secrets.SENTRY_AUTH_TOKEN }}
          SENTRY_ORG: theoremcalc
          SENTRY_PROJECT: theoremcalc
        with:
          environment: production
```

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next",
  "env": [
    {
      "key": "NEXT_PUBLIC_SITE_URL",
      "value": "https://theoremcalc.com"
    },
    {
      "key": "NEXT_PUBLIC_GA_ID",
      "value": "@{NEXT_PUBLIC_GA_ID}"
    }
  ],
  "regions": ["iad1"],
  "functions": {
    "api/**": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

### Environment Variables

```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GOOGLE_ADSENSE_PUB_ID=ca-pub-xxxxxxxxxxxxxxxx

# .env.production (Vercel)
NEXT_PUBLIC_SITE_URL=https://theoremcalc.com
NEXT_PUBLIC_GA_ID=G-PRODUCTION_ID
GOOGLE_ADSENSE_PUB_ID=ca-pub-production-id
SENTRY_DSN=https://...@sentry.io/...
```

---

## Implementation Roadmap

### Phase 1: Foundation & MVP (Weeks 1-4)
**Objective:** Build core platform infrastructure and 5 foundational calculators

**Deliverables:**
- Next.js project setup with TypeScript
- Multi-language routing & i18n structure (English, Spanish, French)
- Mobile-first responsive design system
- Component library (Button, Input, Select, Toggle, Cards)
- Three Math calculators MVP:
  1. Quadratic Equation Solver
  2. Percentage Calculator
  3. Slope Calculator
- Input page template + Results page template
- Basic SEO setup (meta tags, hreflang, sitemap)
- Google AdSense integration (placeholder)
- Vercel deployment setup
- GitHub Actions CI/CD pipeline

**Success Criteria:**
- Lighthouse score > 85 across all metrics
- LCP < 3s on mobile
- All tests passing
- Two-language support fully functional (EN/ES)

**Testing:**
- Unit tests for 3 calculators (75%+ coverage)
- Component tests for core UI
- Mobile device testing (iPhone, Android)
- Lighthouse CI integration passing

---

### Phase 2: Calculator Expansion (Weeks 5-8)
**Objective:** Complete remaining 12 calculators, optimize performance

**Deliverables:**
- Remaining Math calculators:
  4. Standard Deviation Calculator
  5. Significant Figures Calculator
- Chemistry calculators (all 5):
  6. Molar Mass Calculator
  7. Chemical Equation Balancer
  8. Molarity Calculator
  9. Stoichiometry Calculator
  10. Percent Error Calculator
- Physics calculators (all 5):
  11. Kinematics Calculator
  12. Ohm's Law Calculator
  13. Force Calculator
  14. Kinetic Energy Calculator
  15. Momentum Calculator
- Mathematical notation rendering (MathJax 3 integration)
- Solution step generators for all calculators
- Input validation framework completion
- French language support completion

**Success Criteria:**
- All 15 calculators fully functional
- 95%+ test coverage for calculation logic
- Lighthouse performance > 90
- Mobile Core Web Vitals all "Good"
- Three-language support fully tested

**Testing:**
- Unit tests for all calculators (95%+ coverage)
- E2E tests for each calculator flow
- Accessibility audit (WCAG AA compliance)
- Performance testing on low-end mobile devices

---

### Phase 3: Mobile Optimization & Monetization (Weeks 9-12)
**Objective:** Maximize mobile performance and ad revenue

**Deliverables:**
- Mobile UI refinement (touch targets, spacing, fonts)
- Image optimization pipeline
- Code splitting & lazy loading optimization
- Ad placement optimization & A/B testing
- Analytics setup (Vercel + Plausible)
- Ad impression tracking & RPM monitoring
- Mobile PWA features (installable, offline support ready)
- Copy/Share/Print functionality for all calculators
- Mobile-specific CTAs and UX improvements

**Success Criteria:**
- Mobile LCP < 2.5s consistently
- CLS < 0.1 on all pages
- Ad impression tracking working
- Analytics dashboard live
- Mobile conversion rate baseline established

**Testing:**
- Real device testing on top 10 devices
- Ad layout testing (no CLS from ads)
- Mobile-specific E2E tests
- Analytics event verification

---

### Phase 4: SEO & Traffic Launch (Weeks 13-16)
**Objective:** Prepare for launch and organic traffic generation

**Deliverables:**
- SEO content optimization per calculator
- Keyword research & target identification
- XML sitemap optimization
- robots.txt configuration
- Schema.org structured data for all tools
- Open Graph meta tags for social sharing
- Backlink strategy (if applicable)
- Blog/content strategy planning
- Launch marketing materials
- Google Search Console setup & monitoring
- Analytics baseline reporting

**Success Criteria:**
- SEO audit score 100/100
- Sitemap includes all 45+ URL variants
- Structured data validation passing
- All language variants hreflang configured correctly
- Ready for organic traffic growth

**Testing:**
- SEO audits with Semrush/Ahrefs
- Search Console testing
- hreflang validation
- Structured data validation (Google Rich Results Test)

---

### Phase 5: Launch & Monitoring (Week 17)
**Objective:** Launch to production and establish monitoring

**Deliverables:**
- Final production deployment
- Monitoring & alerting setup (Sentry, Vercel)
- Analytics dashboards live
- Status page setup (if needed)
- Support/feedback mechanism
- Launch announcement

**Success Criteria:**
- Zero critical errors in production
- All monitoring alerts functioning
- Analytics data flowing correctly
- User feedback mechanism operational

**Metrics Tracking:**
- Daily MAU tracking
- Bounce rate monitoring
- Mobile vs desktop split
- Ad impression volume
- Page performance baselines

---

### Phase 6+: Continuous Optimization (Ongoing)
**Objective:** Iterate based on user data and market feedback

**Activities:**
- Monthly performance review (Lighthouse, CWV, analytics)
- Quarterly calculator expansion based on keyword research
- A/B testing ad placements
- Mobile UX refinement based on user feedback
- SEO content expansion
- Language expansion (German, Portuguese, Japanese, etc.)
- Advanced features (user accounts, calculation history, API)

---

## Out of Scope

**Features explicitly excluded from MVP:**

1. **User Accounts & Authentication**
   - Calculation history saving
   - User preferences/settings
   - Social login

2. **Advanced Monetization**
   - Premium/Pro tiers
   - Subscription features
   - Affiliate marketing

3. **Native Mobile Apps**
   - iOS app
   - Android app
   - (PWA considered for Phase 3+)

4. **Community Features**
   - User forums
   - Comment sections
   - User-generated content

5. **API & Third-Party Integration**
   - Public API
   - Embed functionality
   - WordPress plugins

6. **Advanced Features**
   - Graphing/visualization (except basic)
   - Calculator combinations
   - Batch calculations
   - Offline functionality (MVP, PWA phase)

7. **Backend Database**
   - User database (Phase 2)
   - Logging database
   - Content management system

8. **Additional Languages (Phase 1)**
   - Only English, Spanish, French in MVP
   - Future: German, Portuguese, Russian, Arabic, Hindi, Japanese, Simplified Chinese

---

## Success Metrics & KPIs

### Launch Target Metrics (Month 0-6)

**Traffic & Engagement:**
- Target 10,000+ Monthly Active Users (MAU) by Month 6
- Target 2.5+ pages per session (input → results)
- Target < 50% bounce rate
- Target 35%+ return visitor rate

**Performance:**
- Lighthouse Performance > 90 (90th percentile)
- Mobile LCP < 2.5s (90th percentile)
- CLS < 0.1 (90th percentile)
- FID < 100ms (95th percentile)

**Mobile Metrics:**
- Mobile traffic > 70% of total
- Mobile bounce rate < 55%
- Mobile session duration > 2 minutes
- Mobile conversion rate (input→results) > 75%

**Monetization:**
- Ad impressions > 20k per day
- Estimated RPM > $3-5 USD
- Estimated monthly revenue > $1,500

**SEO:**
- Organic traffic > 60% of total
- Ranking for 50+ keywords (position 1-20)
- Ranking for 5+ keywords in top 3
- 0.1%+ CTR average from search results

### Year 1 Target Metrics

**Traffic & Engagement:**
- 50,000+ MAU
- 3+ pages per session average
- 40%+ return visitor rate
- 30% increase month-over-month growth

**Performance:**
- Maintain Lighthouse scores > 90
- Mobile LCP < 2.0s (90th percentile)
- Zero critical performance regressions

**Monetization:**
- Ad impressions > 100k per day
- RPM > $5-8 USD
- Monthly revenue > $10,000

**SEO & Traffic:**
- Organic traffic > 80% of total
- Ranking for 200+ keywords
- Ranking for 50+ keywords in top 10
- Ranking for 10+ keywords in top 3

**International Reach:**
- Non-English traffic > 40% of total
- Spanish-language searches > 25% of organic
- French-language searches > 15% of organic

---

## Dependencies & Assumptions

### External Dependencies

**Technology:**
- Next.js 14+ availability and API stability
- Vercel platform availability and SLA compliance
- Google AdSense API and payment processing
- TypeScript compiler and toolchain stability
- React ecosystem stability (including hooks API)

**Services:**
- Google Search Console availability
- Google PageSpeed Insights API
- Lighthouse API availability
- GitHub Actions CI/CD reliability

### Key Assumptions

**User Behavior:**
- Users will submit multiple calculator queries per session (2+ page views)
- Mobile users represent 60-75% of total user base
- Users' primary intent is fast, accurate calculations (not community/social)
- Educational/student segment will grow seasonally (school year peaks)

**Market Conditions:**
- Educational calculator demand remains stable and high
- Ad market RPM remains $3-8 USD range
- Google AdSense program remains available with stable terms
- International users have similar conversion patterns as English speakers

**Technical Feasibility:**
- Calculation engines can be accurately replicated in JavaScript
- Mathematical notation can be reliably rendered with MathJax
- Web performance targets (LCP < 2.5s) are achievable on mobile
- Next.js SSG/ISR is sufficient for SEO needs (no CMS required)

**Resource Availability:**
- Development team of 1-2 frontend engineers available
- Designer/UX resource for mobile-first design
- QA resource for manual testing on real devices
- 1-2 engineer weeks per month available for Phase 1-2 work

---

## Risks & Mitigation

### Risk 1: Mobile Performance Degradation
**Risk Level:** HIGH
**Impact:** Mobile LCP > 3s, bounce rate > 60%
**Probability:** MEDIUM

**Mitigation:**
- Implement performance budget from Day 1
- Use Lighthouse CI to catch regressions early
- Minimize dependencies (especially large calculation libraries)
- Test on low-end mobile devices (Galaxy A14, iPhone SE)
- Establish performance testing checklist for all PRs

---

### Risk 2: Ad-Related Layout Shifts
**Risk Level:** MEDIUM
**Impact:** CLS > 0.1, user experience degradation
**Probability:** MEDIUM

**Mitigation:**
- Reserve fixed space for all ad containers (width & height)
- Use aspect-ratio CSS for responsive ad sizing
- Monitor CLS separately per ad placement
- Implement lazy ad loading (with reserved space)
- Test ad loading on slow 3G networks

---

### Risk 3: Internationalization Complexity
**Risk Level:** MEDIUM
**Impact:** Broken hreflang, duplicate content, SEO penalties
**Probability:** LOW

**Mitigation:**
- Implement hreflang validation in tests
- Use next-intl proven patterns
- Test all locale variants in Lighthouse
- Google Search Console monitoring for coverage/duplicate content
- Content duplication audit monthly

---

### Risk 4: Insufficient Ad Revenue
**Risk Level:** MEDIUM
**Impact:** Business model unsustainable
**Probability:** MEDIUM

**Mitigation:**
- Track ad impressions and RPM from Day 1
- A/B test ad placements monthly
- Monitor competitive RPM benchmarks
- Plan alternative monetization (affiliate, APIs, premium)
- Scale to 100k+ MAU before assessing sustainability

---

### Risk 5: Low Organic Search Visibility
**Risk Level:** HIGH
**Impact:** Primarily direct/referral traffic, slow growth
**Probability:** MEDIUM

**Mitigation:**
- Keyword research before Phase 1
- SEO content optimization per tool
- Backlink strategy (if resources allow)
- Google Search Console monitoring from Day 1
- Monthly SEO audit and adjustment
- Consider blog/content expansion if rankings plateau

---

### Risk 6: Browser/Device Compatibility Issues
**Risk Level:** MEDIUM
**Impact:** Broken calculations on some devices
**Probability:** LOW

**Mitigation:**
- Comprehensive device testing matrix (real devices)
- Polyfills for older browsers (if needed)
- Cross-browser testing in CI/CD
- User feedback mechanism for compatibility issues
- Regular device compatibility audit

---

### Risk 7: Mathematical Accuracy Errors
**Risk Level:** HIGH
**Impact:** Incorrect results, loss of user trust
**Probability:** LOW

**Mitigation:**
- Extensive unit tests for all calculation functions (95%+ coverage)
- Compare outputs against known scientific calculators
- Peer review of all calculation logic
- Precision/rounding guidelines documented
- User feedback mechanism for suspected calculation errors
- Monthly accuracy audit against reference sources

---

## Document Sign-Off

**PRD Version:** 1.0
**Date:** November 16, 2025
**Status:** Ready for Development

This PRD serves as the authoritative specification for the TheoremCalc platform. All development, design, and product decisions should align with this document. Changes to scope, features, or requirements should be documented as amendments to this PRD with stakeholder approval.

**Key Contacts:**
- Product Lead: [Contact]
- Engineering Lead: [Contact]
- Designer: [Contact]

---

**End of PRD Document**
