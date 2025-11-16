'use client'

import { useCallback, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Locale = 'en' | 'es' | 'fr'

interface LocaleConfig {
  code: Locale
  label: string
  nativeLabel: string
}

const LOCALES: LocaleConfig[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'es', label: 'Español', nativeLabel: 'Spanish' },
  { code: 'fr', label: 'Français', nativeLabel: 'French' },
]

/**
 * LocaleSwitcher Component
 *
 * Allows users to switch between supported locales (en, es, fr).
 * Updates the URL to reflect the selected locale while preserving
 * the current path structure: /{newLocale}/{currentPath}
 *
 * Features:
 * - Automatically detects current locale from URL
 * - Updates URL on locale selection
 * - Mobile-responsive design using shadcn/ui Select
 * - Accessible with proper ARIA labels
 */
export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  // Extract current locale from pathname
  const currentLocale = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]

    // Check if first segment is a valid locale
    const isValidLocale = LOCALES.some((l) => l.code === firstSegment)
    return isValidLocale ? (firstSegment as Locale) : 'en'
  }, [pathname])

  // Get the path without the locale prefix
  const pathWithoutLocale = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)

    // Check if first segment is a valid locale
    const isValidLocale = LOCALES.some((l) => l.code === segments[0])

    if (isValidLocale) {
      // Remove locale from segments
      segments.shift()
    }

    // Reconstruct path with leading slash
    return segments.length > 0 ? `/${segments.join('/')}` : ''
  }, [pathname])

  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      const locale = newLocale as Locale

      // Don't navigate if selecting the same locale
      if (locale === currentLocale) {
        return
      }

      // Construct new path with new locale
      // pathWithoutLocale might be empty string, so we need to handle that
      const newPath = pathWithoutLocale ? `/${locale}${pathWithoutLocale}` : `/${locale}`

      // Use router.push for client-side navigation
      router.push(newPath)
    },
    [currentLocale, pathWithoutLocale, router]
  )

  const currentLocaleLabel = useMemo(
    () => LOCALES.find((l) => l.code === currentLocale)?.label || 'English',
    [currentLocale]
  )

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger
        className="w-fit"
        aria-label={`Select language. Current language: ${currentLocaleLabel}`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((locale) => (
          <SelectItem key={locale.code} value={locale.code}>
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
