# Task: Integrate Google AdSense and Configure Ad Placements

**Epic:** Monetization & Analytics
**Estimated Duration:** 1 day
**Type:** Monetization / Integration

## Overview
Integrate Google AdSense with properly configured ad placements on input and results pages. Set up ad containers, responsive formats, and tracking for ad impressions.

## Acceptance Criteria

**AdSense Setup:**
- [ ] Google AdSense account verified
- [ ] Publisher ID obtained (ca-pub-xxxxxxxxxxxxxxxx)
- [ ] AdSense code properly inserted
- [ ] Auto ads disabled (manual placement preferred)
- [ ] Ad review and approval from Google

**Ad Container Component:**
- [ ] AdContainer component created
- [ ] Responsive ad formats:
  - Mobile: 320x50 banner, 300x250 rectangle
  - Tablet: 728x90 banner, 300x250 rectangle
  - Desktop: 728x90 banner, 300x600 sidebar
- [ ] Data attributes for ad slots
- [ ] Error handling for failed ad loads
- [ ] No CLS (Cumulative Layout Shift) from ads

**Placements Configuration:**
- [ ] Input page, Top: Ad slot below title, above form (728x90 → 320x50 mobile)
- [ ] Input page, Bottom: Ad slot below Calculate button (300x250)
- [ ] Results page, Top: Ad slot below answer card (728x90 → 320x50 mobile)
- [ ] Results page, Middle: Ad slot between steps and footer (300x250)
- [ ] All placements responsive to viewport
- [ ] Proper spacing/padding around ads (16-24px)
- [ ] Ads don't cause layout shift on mobile

**Ad Tracking:**
- [ ] Ad impression events tracked per placement
- [ ] Separate tracking for mobile vs desktop
- [ ] Device type recorded (mobile, tablet, desktop)
- [ ] Tool slug associated with impressions
- [ ] Locale recorded for regional analysis

**Quality & Compliance:**
- [ ] No intrusive interstitials on mobile
- [ ] Ads sized appropriately (no tiny or distorted)
- [ ] Ad-to-content ratio reasonable
- [ ] Mobile-friendly ad experience
- [ ] Compliance with AdSense policies
- [ ] No invalid traffic patterns

## Technical Details

### AdContainer Component
```typescript
interface AdProps {
  placement: 'input-top' | 'input-bottom' | 'results-top' | 'results-middle'
  className?: string
}

export function AdContainer({ placement, className }: AdProps) {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <div
        className={`ad-container ad-${placement} ${className || ''}`}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={getAdSlot(placement)}
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

function getAdSlot(placement: string): string {
  const slots: Record<string, string> = {
    'input-top': process.env.NEXT_PUBLIC_ADSENSE_SLOT_INPUT_TOP || '',
    'input-bottom': process.env.NEXT_PUBLIC_ADSENSE_SLOT_INPUT_BOTTOM || '',
    'results-top': process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULTS_TOP || '',
    'results-middle': process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULTS_MIDDLE || ''
  }
  return slots[placement] || ''
}
```

### CSS for Responsive Ads
```css
.ad-container {
  text-align: center;
  margin: 16px 0;
}

@media (max-width: 767px) {
  .ad-container {
    width: 100%;
    max-width: 320px;
    margin: 16px auto;
  }

  .ad-banner {
    height: 50px;
  }

  .ad-rectangle {
    height: 250px;
    max-width: 300px;
  }
}

@media (min-width: 768px) {
  .ad-container {
    margin: 24px 0;
  }

  .ad-banner {
    height: 90px;
    width: 728px;
  }

  .ad-sidebar {
    height: 600px;
    width: 300px;
  }
}
```

## Dependencies
- Task: `02-page-templates` (page structure for ad placement)
- All calculator implementations (need pages for ad placement)

## File Locations
- AdContainer: `/components/shared/AdContainer.tsx`
- Configuration: Environment variables

## Notes
- Use lazy loading strategy for ad scripts
- Monitor AdSense dashboard for revenue metrics
- RPM target: > $5 USD
- Avoid ad placement near clickable elements (accidental clicks)
- Test on real devices with slow networks
- A/B test ad placements monthly

## Environment Variables
```
NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT_INPUT_TOP=1234567890
NEXT_PUBLIC_ADSENSE_SLOT_INPUT_BOTTOM=1234567891
NEXT_PUBLIC_ADSENSE_SLOT_RESULTS_TOP=1234567892
NEXT_PUBLIC_ADSENSE_SLOT_RESULTS_MIDDLE=1234567893
```

## Testing Approach
- Manual test: AdSense code loads without errors
- Mobile test: Verify responsive ad formats at different widths
- Performance test: Monitor CLS with ads present
- Network test: Verify no CLS from ad loading
- Compliance check: Review AdSense policies
