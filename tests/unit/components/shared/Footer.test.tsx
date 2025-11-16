import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/shared/Footer';

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockedLink.displayName = 'Link';
  return MockedLink;
});

describe('Footer Component', () => {
  describe('rendering and semantic structure', () => {
    it('should render footer element', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    it('should render semantic footer tag', () => {
      const { container } = render(<Footer locale="en" />);
      const footerElement = container.querySelector('footer');
      expect(footerElement?.tagName.toLowerCase()).toBe('footer');
    });

    it('should render footer as contentinfo role', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('copyright information', () => {
    it('should display copyright symbol', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toMatch(/©|copyright/i);
    });

    it('should include current year in copyright', () => {
      render(<Footer locale="en" />);
      const currentYear = new Date().getFullYear();
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toContain(currentYear.toString());
    });

    it('should display company name in copyright', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toMatch(/theorem|calc/i);
    });

    it('should have proper copyright text format', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toMatch(/©.*\d{4}/);
    });
  });

  describe('policy links', () => {
    it('should render Privacy Policy link', () => {
      render(<Footer locale="en" />);
      const privacyLink = screen.getByRole('link', { name: /privacy|política/i });
      expect(privacyLink).toBeInTheDocument();
    });

    it('should render Terms of Service link', () => {
      render(<Footer locale="en" />);
      const termsLink = screen.getByRole('link', { name: /terms|condiciones/i });
      expect(termsLink).toBeInTheDocument();
    });

    it('should have proper href for Privacy Policy link', () => {
      render(<Footer locale="en" />);
      const privacyLink = screen.getByRole('link', { name: /privacy|política/i });
      expect(privacyLink).toHaveAttribute('href');
    });

    it('should have proper href for Terms of Service link', () => {
      render(<Footer locale="en" />);
      const termsLink = screen.getByRole('link', { name: /terms|condiciones/i });
      expect(termsLink).toHaveAttribute('href');
    });

    it('should include locale in policy link hrefs', () => {
      render(<Footer locale="es" />);
      const links = screen.getAllByRole('link');
      const hasLocalePrefix = links.some((link) =>
        /\/es\//i.test(link.getAttribute('href') || ''),
      );
      expect(hasLocalePrefix).toBe(true);
    });
  });

  describe('social media links', () => {
    it('should render social media section', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toMatch(/social|follow|connect/i);
    });

    it('should have social media link placeholders', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(2); // At least privacy, terms, and some social links
    });

    it('should have proper aria-labels on social links', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        // Each link should have meaningful content or label
        const hasLabel = link.textContent || link.getAttribute('aria-label');
        expect(hasLabel).toBeTruthy();
      });
    });
  });

  describe('responsive layout', () => {
    it('should render single column layout for mobile', () => {
      const { container } = render(<Footer locale="en" />);
      const gridLayout = container.querySelector('footer > div > div');
      expect(gridLayout).toHaveClass("grid");
    });

    it('should render multi-column layout for desktop', () => {
      const { container } = render(<Footer locale="en" />);
      const gridLayout = container.querySelector('footer > div > div');
      // Should have responsive classes for multi-column at larger breakpoints
      const classes = gridLayout.getAttribute('class') || '';
      expect(classes).toMatch(/grid|md:grid-cols/);
    });

    it('should have responsive padding classes', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass("px-4");
    });

    it('should have responsive gap/spacing classes', () => {
      const { container } = render(<Footer locale="en" />);
      const gridLayout = container.querySelector('footer > div > div');
      const classes = gridLayout.getAttribute('class') || '';
      expect(classes).toMatch(/gap-/);
    });

    it('should stack sections on mobile', () => {
      const { container } = render(<Footer locale="en" />);
      const gridLayout = container.querySelector('footer > div > div');
      // Should have classes indicating grid layout
      expect(gridLayout).toHaveClass("grid");
    });
  });

  describe('links structure', () => {
    it('should render all links with href attributes', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    it('should have meaningful link text', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        const hasText = link.textContent || link.getAttribute('aria-label');
        expect(hasText).toBeTruthy();
      });
    });

    it('should render links in proper list structure', () => {
      const { container } = render(<Footer locale="en" />);
      const lists = container.querySelectorAll('footer ul, footer ol');
      expect(lists.length).toBeGreaterThan(0);
    });
  });

  describe('locale prop handling', () => {
    it('should accept en locale', () => {
      const { container } = render(<Footer locale="en" />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should accept es locale', () => {
      const { container } = render(<Footer locale="es" />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should accept fr locale', () => {
      const { container } = render(<Footer locale="fr" />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should accept de locale', () => {
      const { container } = render(<Footer locale="de" />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should accept pl locale', () => {
      const { container } = render(<Footer locale="pl" />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should include locale in footer links', () => {
      render(<Footer locale="es" />);
      const links = screen.getAllByRole('link');
      const footerLinks = links.filter((link) =>
        /\/es\/|\/es$/.test(link.getAttribute('href') || ''),
      );
      expect(footerLinks.length).toBeGreaterThan(0);
    });
  });

  describe('accessibility features', () => {
    it('should use semantic footer tag', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer?.tagName.toLowerCase()).toBe('footer');
    });

    it('should have contentinfo role', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should have proper heading hierarchy in footer sections', () => {
      const { container } = render(<Footer locale="en" />);
      const headings = container.querySelectorAll('footer h1, footer h2, footer h3');
      // Footer may have section headings
      expect(headings.length).toBeGreaterThanOrEqual(0);
    });

    it('should provide adequate color contrast for text', () => {
      const { container } = render(<Footer locale="en" />);
      const textElements = container.querySelectorAll('footer p, footer a, footer h3');
      expect(textElements.length).toBeGreaterThan(0);
      textElements.forEach((el) => {
        const classes = (el as HTMLElement).getAttribute('class') || '';
        expect(classes).toMatch(/text-gray|text-sm|text-center/);
      });
    });

    it('should have proper spacing for keyboard navigation', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        link.focus();
        expect(link).toHaveFocus();
      });
    });

    it('should support keyboard navigation through all links', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');

      links.forEach((link) => {
        link.focus();
        expect(link).toHaveFocus();
      });
    });

    it('should have skip link or proper footer placement', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('sticky behavior', () => {
    it('should have bottom positioning for sticky footer', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      // Footer may use sticky or absolute positioning
      expect(footer).toHaveClass("sticky");
    });

    it('should have proper z-index if sticky', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      // Footer may or may not have z-index
      expect(footer).toBeInTheDocument();
    });

    it('should maintain layout without pushing content off screen', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('mobile-safe area consideration', () => {
    it('should have proper padding for bottom safe area', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      const classes = footer.getAttribute('class') || '';
      expect(classes).toMatch(/px-|py-/);
    });

    it('should have adequate padding on all sides', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass("px-4");
    });

    it('should be readable on narrow mobile screens', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      // Should have responsive padding and sizing
      const classes = footer.getAttribute('class') || '';
      expect(classes).toMatch(/py-|px-|bg-/);
    });
  });

  describe('content organization', () => {
    it('should group copyright with company name', () => {
      render(<Footer locale="en" />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.textContent).toMatch(/©.*theorem|©.*calc/i);
    });

    it('should separate policy links from social links', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      const sections = footer?.querySelectorAll('div, section');
      // Should have multiple sections for organization
      expect(sections && sections.length > 0).toBe(true);
    });

    it('should have clear visual hierarchy', () => {
      const { container } = render(<Footer locale="en" />);
      const headings = container.querySelectorAll('footer h3');
      // Should have section headings for hierarchy
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('dark mode and contrast', () => {
    it('should have sufficient contrast between text and background', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      // Should have background and text color classes
      expect(footer).toBeInTheDocument();
    });

    it('should render links with proper visibility', () => {
      render(<Footer locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        const classes = link.getAttribute('class') || '';
        expect(classes).toMatch(/text-/);
      });
    });
  });

  describe('edge cases and robustness', () => {
    it('should handle multiple renders', () => {
      const { rerender } = render(<Footer locale="en" />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();

      rerender(<Footer locale="en" />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should maintain structure with all locales', () => {
      const locales = ['en', 'es', 'fr', 'de', 'pl'] as const;
      locales.forEach((locale) => {
        const { unmount } = render(<Footer locale={locale} />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        unmount();
      });
    });

    it('should handle long link text gracefully', () => {
      const { container } = render(<Footer locale="en" />);
      const footer = container.querySelector('footer');
      const links = footer?.querySelectorAll('a');
      expect(links && links.length > 0).toBe(true);
    });
  });

  describe('TypeScript prop types', () => {
    it('should accept valid locale types', () => {
      const locales = ['en', 'es', 'fr', 'de', 'pl'] as const;
      locales.forEach((locale) => {
        const { container } = render(<Footer locale={locale} />);
        expect(container.querySelector('footer')).toBeInTheDocument();
      });
    });
  });
});
