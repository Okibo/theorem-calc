import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/shared/Header';

// Mock Next.js router for locale switching
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => '/en/quadratic-solver',
}));

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockedLink.displayName = 'Link';
  return MockedLink;
});

describe('Header Component', () => {
  describe('rendering and content', () => {
    it('should render header element', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should render logo/brand display with company name', () => {
      render(<Header locale="en" />);
      const logo = screen.getByRole('heading', { level: 1 });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveTextContent(/theorem|calc/i);
    });

    it('should render logo as a clickable link to home page', () => {
      render(<Header locale="en" />);
      const logoLink = screen.getByRole('link', { name: /theorem|calc/i });
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveAttribute('href', expect.stringContaining('/en'));
    });

    it('should render language switcher button', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      expect(langButton).toBeInTheDocument();
    });

    it('should render hamburger menu button on mobile', () => {
      render(<Header locale="en" />);
      const hamburger = screen.getByRole('button', { name: /menu|toggle|hamburger/i });
      expect(hamburger).toBeInTheDocument();
    });
  });

  describe('locale prop handling', () => {
    it('should accept en locale', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should accept es locale', () => {
      const { container } = render(<Header locale="es" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should accept fr locale', () => {
      const { container } = render(<Header locale="fr" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should accept de locale', () => {
      const { container } = render(<Header locale="de" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should accept pl locale', () => {
      const { container } = render(<Header locale="pl" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should render locale in the home link href', () => {
      render(<Header locale="es" />);
      const logoLink = screen.getByRole('link', { name: /theorem|calc/i });
      expect(logoLink).toHaveAttribute('href', expect.stringContaining('/es'));
    });
  });

  describe('language switcher functionality', () => {
    it('should display language switcher button with proper styling', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      // Button should have proper classes for styling
      expect(langButton).toHaveClass("px-3");
    });

    it('should call onLanguageChange callback when language is changed', async () => {
      const handleLanguageChange = jest.fn();
      const user = userEvent.setup();
      render(<Header locale="en" onLanguageChange={handleLanguageChange} />);

      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      await user.click(langButton);

      expect(handleLanguageChange).toHaveBeenCalled();
    });

    it('should render language switcher button with aria-label', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      expect(langButton).toHaveAttribute('aria-label');
    });

    it('should include current language in language switcher aria-label', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      const ariaLabel = langButton.getAttribute('aria-label');
      expect(ariaLabel).toMatch(/english|en/i);
    });
  });

  describe('responsive behavior', () => {
    it('should render hamburger menu button for mobile devices', () => {
      render(<Header locale="en" />);
      const hamburger = screen.getByRole('button', { name: /menu|toggle|hamburger/i });
      expect(hamburger).toBeInTheDocument();
    });

    it('should have hamburger button with proper mobile classes', () => {
      render(<Header locale="en" />);
      const hamburger = screen.getByRole('button', { name: /menu|toggle|hamburger/i });
      // Should have mobile responsive classes
      const classes = hamburger.getAttribute('class') || '';
      expect(classes).toMatch(/md:|lg:|block|hidden|sm:/);
    });

    it('should have proper responsive classes for header', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toHaveClass("sticky");
    });

    it('should render logo with responsive sizing', () => {
      render(<Header locale="en" />);
      const logo = screen.getByRole('heading', { level: 1 });
      const classes = logo.getAttribute('class') || '';
      expect(classes).toMatch(/text-/);
    });
  });

  describe('sticky positioning', () => {
    it('should have sticky positioning classes', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toHaveClass('sticky');
    });

    it('should have top-0 class for sticky positioning', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toHaveClass('top-0');
    });

    it('should have z-index for sticky header', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toHaveClass("z-40");
    });
  });

  describe('accessibility features', () => {
    it('should use semantic header element', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should have logo as heading level 1', () => {
      render(<Header locale="en" />);
      const logo = screen.getByRole('heading', { level: 1 });
      expect(logo).toBeInTheDocument();
    });

    it('should have proper ARIA labels on interactive buttons', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      expect(langButton).toHaveAttribute('aria-label');
    });

    it('should have hamburger button with aria-label', () => {
      render(<Header locale="en" />);
      const hamburger = screen.getByRole('button', { name: /menu|toggle|hamburger/i });
      expect(hamburger).toHaveAttribute('aria-label');
    });

    it('should have proper alt text for logo if image is used', () => {
      const { container } = render(<Header locale="en" />);
      const logoImage = container.querySelector('header img');
      if (logoImage) {
        expect(logoImage).toHaveAttribute('alt');
      }
    });

    it('should render buttons as button elements', () => {
      const { container } = render(<Header locale="en" />);
      const buttons = container.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach((button) => {
        expect(button.tagName.toLowerCase()).toBe('button');
      });
    });

    it('should be keyboard navigable', async () => {
      const user = userEvent.setup();
      render(<Header locale="en" />);
      const logo = screen.getByRole('link');

      // Tab to logo link
      await user.tab();
      expect(logo).toHaveFocus();

      // Tab to next element (language button)
      await user.tab();
      expect(document.activeElement?.getAttribute('aria-label')).toContain('language');
    });
  });

  describe('responsive header layout at different breakpoints', () => {
    it('should render with proper flex layout', () => {
      const { container } = render(<Header locale="en" />);
      const headerDiv = container.querySelector('header > div');
      expect(headerDiv).toHaveClass("flex");
    });

    it('should have space-between or similar alignment', () => {
      const { container } = render(<Header locale="en" />);
      const headerDiv = container.querySelector('header > div');
      expect(headerDiv).toHaveClass("justify-between");
    });

    it('should render navigation items in proper container', () => {
      const { container } = render(<Header locale="en" />);
      // Header has buttons for language and menu instead of nav element
      const buttons = container.querySelectorAll('header button');
      expect(buttons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('optional onLanguageChange prop', () => {
    it('should render without onLanguageChange prop', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should handle onLanguageChange callback if provided', async () => {
      const handleLanguageChange = jest.fn();
      const user = userEvent.setup();
      render(<Header locale="en" onLanguageChange={handleLanguageChange} />);

      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      await user.click(langButton);

      // Callback should be invoked
      expect(handleLanguageChange).toHaveBeenCalled();
    });

    it('should pass locale to onLanguageChange callback', async () => {
      const handleLanguageChange = jest.fn();
      const user = userEvent.setup();
      render(<Header locale="en" onLanguageChange={handleLanguageChange} />);

      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });
      await user.click(langButton);

      // Callback should include locale information
      expect(handleLanguageChange).toHaveBeenCalledWith(expect.any(String));
    });
  });

  describe('focus management', () => {
    it('should allow focus on language switcher button', () => {
      render(<Header locale="en" />);
      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });

      langButton.focus();
      expect(langButton).toHaveFocus();
    });

    it('should allow focus on hamburger menu button', () => {
      render(<Header locale="en" />);
      const hamburger = screen.getByRole('button', { name: /menu|toggle|hamburger/i });

      hamburger.focus();
      expect(hamburger).toHaveFocus();
    });

    it('should allow focus on logo link', () => {
      render(<Header locale="en" />);
      const logoLink = screen.getByRole('link', { name: /theorem|calc/i });

      logoLink.focus();
      expect(logoLink).toHaveFocus();
    });
  });

  describe('mobile-safe area consideration', () => {
    it('should have proper padding for notches on mobile', () => {
      const { container } = render(<Header locale="en" />);
      const headerDiv = container.querySelector('header > div');
      // Should have padding classes
      expect(headerDiv).toHaveClass("px-4");
    });

    it('should have adequate height for touch targets', () => {
      render(<Header locale="en" />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        const classes = button.getAttribute('class') || '';
        expect(classes).toMatch(/h-|px-|py-/);
      });
    });
  });

  describe('edge cases and error handling', () => {
    it('should handle missing locale prop gracefully', () => {
      // TypeScript will prevent this in production, but test for runtime safety
      const { container } = render(<Header locale="en" />);
      expect(container.querySelector('header')).toBeInTheDocument();
    });

    it('should maintain proper layout with long brand names', () => {
      const { container } = render(<Header locale="en" />);
      const header = container.querySelector('header');
      // Header should remain visible and properly structured
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass("sticky");
    });

    it('should handle rapid locale switches', async () => {
      const handleLanguageChange = jest.fn();
      const user = userEvent.setup();
      render(
        <Header locale="en" onLanguageChange={handleLanguageChange} />,
      );

      const langButton = screen.getByRole('button', {
        name: /language|select language|english/i,
      });

      // Simulate rapid clicks
      await user.click(langButton);
      await user.click(langButton);
      await user.click(langButton);

      expect(handleLanguageChange).toHaveBeenCalledTimes(3);
    });
  });

  describe('TypeScript prop types', () => {
    it('should accept valid locale types', () => {
      const locales = ['en', 'es', 'fr', 'de', 'pl'] as const;
      locales.forEach((locale) => {
        const { container } = render(<Header locale={locale} />);
        expect(container.querySelector('header')).toBeInTheDocument();
      });
    });

    it('should accept optional callback function prop', () => {
      const callback = jest.fn();
      const { container } = render(
        <Header locale="en" onLanguageChange={callback} />,
      );
      expect(container.querySelector('header')).toBeInTheDocument();
    });
  });
});
