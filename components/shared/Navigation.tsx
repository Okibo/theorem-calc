'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'

interface NavigationProps {
  locale: string
}

interface NavLink {
  label: string
  href: string
}

const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Calculators', href: '/calculators' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Navigation Component
 *
 * Main navigation menu featuring:
 * - Navigation links with active route highlighting
 * - Mobile slide-out menu with Sheet component
 * - Keyboard navigation support (arrow keys, tab, enter, escape)
 * - ARIA labels for accessibility
 * - Semantic nav tag
 * - Responsive design
 */
export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([])

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Handle arrow key navigation
  const handleKeyNavigation = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      const links = linksRef.current.filter(Boolean)

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        const nextIndex = (index + 1) % links.length
        links[nextIndex]?.focus()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevIndex = (index - 1 + links.length) % links.length
        links[prevIndex]?.focus()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        // Link handles navigation naturally
        links[index]?.click()
      }
    },
    []
  )

  const isCurrentPage = (href: string) => {
    // Remove locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '')
    const hrefWithoutLocale = href

    if (href === '/') {
      return pathWithoutLocale === '' || pathWithoutLocale === '/'
    }

    return pathWithoutLocale.startsWith(hrefWithoutLocale)
  }

  const navLinkContent = (
    <ul className="flex flex-col gap-1 md:flex-row md:gap-6">
      {NAVIGATION_LINKS.map((link, index) => {
        const isCurrent = isCurrentPage(link.href)

        return (
          <li key={link.href}>
            <Link
              href={`/${locale}${link.href}`}
              ref={(el) => {
                if (el) linksRef.current[index] = el
              }}
              onKeyDown={(e) => handleKeyNavigation(e, index)}
              onClick={() => setIsOpen(false)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isCurrent
                  ? 'active bg-blue-100 text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      {/* Primary Navigation */}
      <nav
        ref={navRef}
        className="flex items-center border-b border-gray-200"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-12 items-center justify-center px-4 sm:px-6 lg:px-8">
          {navLinkContent}
        </div>
      </nav>

      {/* Mobile Navigation Toggle - Sheet (hidden on desktop) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation menu with links to main sections
          </SheetDescription>
          <div className="mt-8">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2">
                {NAVIGATION_LINKS.map((link, index) => {
                  const isCurrent = isCurrentPage(link.href)

                  return (
                    <li key={link.href}>
                      <Link
                        href={`/${locale}${link.href}`}
                        ref={(el) => {
                          if (el) linksRef.current[index] = el
                        }}
                        onKeyDown={(e) => handleKeyNavigation(e, index)}
                        onClick={() => setIsOpen(false)}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          isCurrent
                            ? 'active bg-blue-100 text-blue-700 border-l-4 border-blue-700'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
