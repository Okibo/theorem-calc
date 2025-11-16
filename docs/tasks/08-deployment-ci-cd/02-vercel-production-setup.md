# Task: Configure Vercel Production Deployment and Monitoring

**Epic:** Deployment & DevOps
**Estimated Duration:** 1 day
**Type:** DevOps / Infrastructure

## Overview
Set up Vercel production environment with proper configuration, environment variables, monitoring, and performance optimization for optimal deployment experience.

## Acceptance Criteria

**Vercel Project Configuration:**
- [ ] Project connected to GitHub repository
- [ ] Production branch set to `main` (or `master`)
- [ ] Preview deployments enabled for PRs
- [ ] Auto-deployment from main branch
- [ ] Deployment regions configured (IAD1 primary)
- [ ] Build settings validated
- [ ] Output directory: `.next`

**Environment Variables:**
- [ ] NEXT_PUBLIC_SITE_URL set correctly
- [ ] NEXT_PUBLIC_GA_ID configured
- [ ] GOOGLE_ADSENSE_PUB_ID set
- [ ] SENTRY_DSN configured (optional)
- [ ] All secrets properly stored (not in code)
- [ ] Preview and production vars separated

**Performance Optimization:**
- [ ] Edge Middleware optimized
- [ ] Serverless functions configured:
  - Memory: 1024 MB (if needed)
  - Max duration: 10 seconds
- [ ] Image optimization enabled
- [ ] Automatic static optimization (ISR)
- [ ] Code splitting verified

**Monitoring & Analytics:**
- [ ] Vercel Web Analytics enabled
- [ ] Core Web Vitals tracking active
- [ ] Error tracking configured
- [ ] Performance dashboard accessible
- [ ] Deployment notifications enabled
- [ ] Slack/email alerts configured (optional)

**Custom Domain:**
- [ ] Domain connected to Vercel project
- [ ] SSL certificate auto-provisioned
- [ ] Redirects configured (www vs non-www)
- [ ] DNS records validated
- [ ] Domain verification complete

**Security:**
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] API rate limiting (if applicable)
- [ ] No sensitive data in logs

## Technical Details

### Vercel Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci",
  "outputDirectory": ".next",
  "env": [
    {
      "key": "NEXT_PUBLIC_SITE_URL",
      "value": "@NEXT_PUBLIC_SITE_URL"
    },
    {
      "key": "NEXT_PUBLIC_GA_ID",
      "value": "@NEXT_PUBLIC_GA_ID"
    },
    {
      "key": "GOOGLE_ADSENSE_PUB_ID",
      "value": "@GOOGLE_ADSENSE_PUB_ID"
    }
  ],
  "regions": ["iad1"],
  "functions": {
    "api/**": {
      "memory": 1024,
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Environment Variables
```bash
# Production (.env.production in Vercel)
NEXT_PUBLIC_SITE_URL=https://theoremcalc.com
NEXT_PUBLIC_GA_ID=G-PRODUCTION_ID
GOOGLE_ADSENSE_PUB_ID=ca-pub-production-id
SENTRY_DSN=https://...@sentry.io/...

# Development (.env.local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-DEV_ID
```

### Performance Monitoring Setup
- Enable Vercel Web Analytics in Dashboard
- Configure alerts for:
  - LCP > 2.5s
  - CLS > 0.1
  - FID > 100ms
- Monitor deployment duration
- Track build performance

## Dependencies
- Task: `01-github-actions-cicd` (CI/CD pipeline)
- All code ready for production

## Notes
- Vercel handles SSL automatically
- Auto-scaling built-in
- CDN provided by Vercel Edge Network
- Zero-downtime deployments
- Automatic rollbacks available
- Regular monitoring recommended

## Checklist for Launch

- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] Analytics tracking live
- [ ] AdSense ads displaying
- [ ] Error tracking enabled
- [ ] Monitoring dashboards setup
- [ ] Deployment success verified
- [ ] Performance benchmarks met
- [ ] SEO verification (robots.txt, sitemap)

## Testing Approach
- Manual test: Visit production URL
- Performance test: Run Lighthouse on production
- Core Web Vitals: Verify "Good" status
- Functionality test: Complete calculator flows
- Mobile test: Test on various devices
