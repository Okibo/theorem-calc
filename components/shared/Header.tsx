'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  locale: string
  onLanguageChange?: (locale: string) => void
}

const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pl: 'Polski',
}

/**
 * Header Component
 *
 * Main header for the application featuring:
 * - Logo/brand display as a link to home
 * - Language switcher button
 * - Hamburger menu toggle (for mobile)
 * - Sticky positioning on scroll
 * - Full responsive design
 * - Semantic HTML and accessibility features
 */
export default function Header({ locale, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLanguageClick = useCallback(() => {
    // For now, just call the callback if provided
    // Full language switching logic would be handled by parent component
    if (onLanguageChange) {
      onLanguageChange(locale)
    }
  }, [locale, onLanguageChange])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const currentLocaleLabel = LOCALE_LABELS[locale] || 'English'

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm"
      role="banner"
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-blue-600 sm:text-xl lg:text-2xl">
            TheoremCalc
          </h1>
        </Link>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLanguageClick}
            aria-label={`Select language. Current language: ${currentLocaleLabel}`}
          >
            {locale.toUpperCase()}
          </Button>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3 12h18M3 6h18M3 18h18'
                }
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
