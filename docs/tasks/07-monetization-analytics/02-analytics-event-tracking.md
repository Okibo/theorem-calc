# Task: Set Up Analytics and Event Tracking

**Epic:** Monetization & Analytics
**Estimated Duration:** 2 days
**Type:** Analytics / Monitoring

## Overview
Configure Vercel Web Analytics and event tracking infrastructure to monitor user behavior, traffic sources, and monetization metrics. Enable data-driven optimization.

## Acceptance Criteria

**Vercel Analytics:**
- [ ] Vercel Web Analytics enabled in project
- [ ] Core Web Vitals tracked automatically
- [ ] Device type detection (mobile, desktop, tablet)
- [ ] Browser and OS breakdown
- [ ] Geographic distribution data
- [ ] Real-time performance metrics visible
- [ ] No performance overhead (< 1KB gzip)

**Custom Event Tracking:**
- [ ] Analytics events utility created
- [ ] Event tracking function with proper types
- [ ] Session tracking established
- [ ] User identification (anonymous, cookie-based)
- [ ] Timestamp on all events

**Session Events:**
- [ ] calculator_view: Locale, device, timestamp
- [ ] calculation_submitted: Tool, locale, session duration, errors
- [ ] results_viewed: Tool, locale, device, render time
- [ ] form_error: Error type, field, message
- [ ] validation_failed: Field name, error type

**Interaction Events:**
- [ ] result_copied: Tool, result type (full/answer-only)
- [ ] result_shared: Tool, share method (copy, social, email)
- [ ] result_printed: Tool, page count
- [ ] new_calculation: Previous tool, new tool, session duration
- [ ] language_changed: From locale, to locale

**Monetization Events:**
- [ ] ad_impression: Placement, tool, format, locale, device
- [ ] ad_click: Placement, tool (if trackable)
- [ ] session_revenue_potential: Session metrics for RPM calculation

**Performance Monitoring:**
- [ ] Page load times tracked
- [ ] LCP, FID, CLS metrics in custom dashboard
- [ ] Time to first calculation result
- [ ] Error rates and types
- [ ] Network request performance

**Dashboard & Reporting:**
- [ ] Key metrics dashboard created
- [ ] Monthly Active Users (MAU)
- [ ] Pages per Session
- [ ] Bounce rate
- [ ] Return visitor rate
- [ ] Average session duration
- [ ] Top 10 tools by usage
- [ ] Traffic by language/locale
- [ ] Mobile vs desktop split
- [ ] Core Web Vitals "Good" percentage
- [ ] Ad impressions and RPM estimates

## Technical Details

### Analytics Utility
```typescript
// lib/analytics/events.ts
export interface AnalyticsEvent {
  name: string
  timestamp: number
  locale?: string
  deviceType?: 'mobile' | 'tablet' | 'desktop'
  data: Record<string, any>
}

export function trackEvent(name: string, data: Record<string, any> = {}) {
  const event: AnalyticsEvent = {
    name,
    timestamp: Date.now(),
    locale: getCurrentLocale(),
    deviceType: detectDeviceType(),
    data
  }

  // Send to Vercel Analytics
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('event', { name, data })
  }

  // Send to custom endpoint if needed
  // sendToAnalytics(event)
}

export function trackPageView(pageName: string, properties: Record<string, any> = {}) {
  trackEvent('page_view', {
    page: pageName,
    ...properties
  })
}
```

### Event Tracking Implementation Examples
```typescript
// Track calculator usage
import { trackEvent } from '@/lib/analytics/events'

// On calculator page load
trackEvent('calculator_view', {
  tool_slug: 'quadratic-solver',
  locale: locale,
  device_type: 'mobile'
})

// On calculation submission
trackEvent('calculation_submitted', {
  tool_slug: 'quadratic-solver',
  locale: locale,
  session_duration_ms: sessionDuration,
  number_of_inputs: 3,
  validation_errors: errors.length
})

// On results display
trackEvent('results_viewed', {
  tool_slug: 'quadratic-solver',
  locale: locale,
  device_type: 'mobile',
  results_display_time_ms: renderTime
})

// On ad impression (integration with AdSense)
trackEvent('ad_impression', {
  placement: 'input-top',
  tool_slug: 'quadratic-solver',
  ad_format: '728x90',
  locale: locale,
  device_type: 'desktop'
})
```

## Dependencies
- Task: `01-google-adsense-integration` (ad impression tracking)
- All calculator pages (need event tracking implementation)

## File Locations
- Analytics utilities: `/lib/analytics/events.ts`, `/lib/analytics/tracking.ts`
- Dashboard: Vercel built-in + custom implementation if needed

## Notes
- Vercel Analytics is free with Vercel hosting
- Event data should be anonymized (GDPR compliant)
- Use cookies or local storage for session tracking
- Performance monitoring should not impact page performance
- RPM estimation: multiply ad impressions by CPM estimate
- Monthly reporting recommended for business decisions

## Key Metrics to Monitor

**Primary Metrics:**
- Monthly Active Users (target: 10,000+ by month 6)
- Pages per Session (target: 2+)
- Bounce Rate (target: < 50%)
- Return Visitor Rate (target: > 40%)
- Average Session Duration (target: > 3 min)

**Performance Metrics:**
- LCP < 2.5s mobile, < 2s desktop
- FID < 100ms
- CLS < 0.1
- Core Web Vitals "Good" percentage

**Monetization:**
- Ad impressions per day
- CPM (Cost Per Mille)
- RPM (Revenue Per Mille, target: > $5)
- Estimated monthly revenue

**Traffic Analysis:**
- Organic vs Direct
- Top countries
- Mobile vs desktop split
- Top 10 tools by usage

## Testing Approach
- Manual test: Events fire correctly in browser console
- Integration test: Events captured in analytics dashboard
- Verification: Cross-check event data with manual user flows
- Monitoring: Regular review of analytics dashboard
