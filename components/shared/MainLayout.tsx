'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

interface MainLayoutProps {
  locale: string
  children: ReactNode
}

/**
 * MainLayout Component
 *
 * Root layout composition featuring:
 * - Header component
 * - Navigation component
 * - Content slot (children)
 * - Footer component
 * - Responsive grid/flex layout
 * - Full page height with sticky footer
 * - Mobile-safe area consideration
 * - Proper semantic HTML structure
 */
export default function MainLayout({ locale, children }: MainLayoutProps) {
  return (
    <div
      className="flex min-h-screen w-full flex-col justify-between px-4 py-8 sm:px-6 lg:px-8"
      style={{
        paddingTop: `max(1rem, env(safe-area-inset-top))`,
      }}
    >
      {/* Header */}
      <Header locale={locale} />

      {/* Navigation */}
      <Navigation locale={locale} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-0 py-0">
        {children}
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  )
}
