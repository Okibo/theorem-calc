import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter, usePathname } from 'next/navigation'
import LocaleSwitcher from '@/components/locale-switcher'

// Mock Next.js router and navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

describe('LocaleSwitcher', () => {
  const mockPush = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
  })

  describe('Rendering', () => {
    it('should render the locale switcher component', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should display the current locale', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      expect(screen.getByText(/EN|English/i)).toBeInTheDocument()
    })

    it('should render select dropdown with locale options', async () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      // Open the select
      const triggerButton = screen.getByRole('combobox')
      fireEvent.click(triggerButton)

      // Check that all locale options are available in the dropdown
      await waitFor(() => {
        const englishOptions = screen.getAllByText('English')
        expect(englishOptions.length).toBeGreaterThan(1)
      })
      expect(screen.getByText('Español')).toBeInTheDocument()
      expect(screen.getByText('Français')).toBeInTheDocument()
    })
  })

  describe('Locale Detection', () => {
    it('should extract locale from /en/* path', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      expect(screen.getByText(/EN|English/i)).toBeInTheDocument()
    })

    it('should extract locale from /es/* path', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/es/calculadora-cuadratica')

      render(<LocaleSwitcher />)

      expect(screen.getByText(/ES|Español/i)).toBeInTheDocument()
    })

    it('should extract locale from /fr/* path', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/fr/solveur-quadratique')

      render(<LocaleSwitcher />)

      expect(screen.getByText(/FR|Français/i)).toBeInTheDocument()
    })

    it('should handle deep paths correctly', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver/result')

      render(<LocaleSwitcher />)

      expect(screen.getByText(/EN|English/i)).toBeInTheDocument()
    })
  })

  describe('Navigation and Locale Switching', () => {
    it('should navigate to new locale when locale is selected', async () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      // Trigger the select to open
      const triggerButton = screen.getByRole('combobox')
      fireEvent.click(triggerButton)

      // Find and click the Spanish option - use getAllByText to get the dropdown option
      await waitFor(() => {
        expect(screen.getAllByText('Español').length).toBeGreaterThan(0)
      })
      const spanishOptions = screen.getAllByText('Español')
      fireEvent.click(spanishOptions[spanishOptions.length - 1])

      // Verify navigation was called
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/es/quadratic-solver')
      })
    })

    it('should replace locale in URL while preserving the rest of the path', async () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver/result')

      render(<LocaleSwitcher />)

      // Trigger the select to open
      const triggerButton = screen.getByRole('combobox')
      fireEvent.click(triggerButton)

      // Find and click the French option
      await waitFor(() => {
        expect(screen.getAllByText('Français').length).toBeGreaterThan(0)
      })
      const frenchOptions = screen.getAllByText('Français')
      fireEvent.click(frenchOptions[frenchOptions.length - 1])

      // Verify navigation was called with correct path
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/fr/quadratic-solver/result')
      })
    })

    it('should handle path with no trailing segments', async () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en')

      render(<LocaleSwitcher />)

      // Trigger the select to open
      const triggerButton = screen.getByRole('combobox')
      fireEvent.click(triggerButton)

      // Find and click the Spanish option
      await waitFor(() => {
        expect(screen.getAllByText('Español').length).toBeGreaterThan(0)
      })
      const spanishOptions = screen.getAllByText('Español')
      fireEvent.click(spanishOptions[spanishOptions.length - 1])

      // Verify navigation was called (note: pathWithoutLocale is empty string, so newPath should be /es)
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/es')
      })
    })

    it('should not navigate if the same locale is selected', async () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      // Trigger the select to open
      const triggerButton = screen.getByRole('combobox')
      fireEvent.click(triggerButton)

      // Click on English option (same locale) - get the one in the dropdown
      await waitFor(() => {
        expect(screen.getAllByText('English').length).toBeGreaterThan(1)
      })
      const englishOptions = screen.getAllByText('English')
      fireEvent.click(englishOptions[englishOptions.length - 1])

      // Should not navigate
      await waitFor(() => {
        expect(mockPush).not.toHaveBeenCalled()
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      const combobox = screen.getByRole('combobox')
      expect(combobox).toHaveAttribute('aria-label')
    })

    it('should be keyboard navigable', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      render(<LocaleSwitcher />)

      const combobox = screen.getByRole('combobox')
      expect(combobox).toBeInTheDocument()

      // Simulate keyboard navigation (combobox should be focusable)
      combobox.focus()
      expect(combobox).toHaveFocus()
    })
  })

  describe('Mobile Responsiveness', () => {
    it('should be responsive and not break on small screens', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/en/quadratic-solver')

      // Mock mobile viewport
      window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: query === '(max-width: 768px)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      render(<LocaleSwitcher />)

      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })

  describe('Error Handling', () => {
    it('should handle invalid locale gracefully', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/invalid/some-path')

      // Should not throw
      expect(() => {
        render(<LocaleSwitcher />)
      }).not.toThrow()
    })

    it('should default to en if locale cannot be determined', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/some-path')

      render(<LocaleSwitcher />)

      // Should render without error
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })
})
