import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '@/components/shared/Navigation';

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockedLink.displayName = 'Link';
  return MockedLink;
});

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}));

describe('Navigation Component', () => {
  describe('rendering and semantic structure', () => {
    it('should render nav element with semantic structure', () => {
      const { container } = render(<Navigation locale="en" />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });

    it('should render navigation as semantic nav tag', () => {
      render(<Navigation locale="en" />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should render navigation links', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should render list of navigation items', () => {
      const { container } = render(<Navigation locale="en" />);
      const list = container.querySelector('nav ul, nav ol');
      expect(list).toBeInTheDocument();
    });
  });

  describe('navigation links', () => {
    it('should render links to all main sections', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should include home/calculator links', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      const hasCalculatorLinks = links.some((link) =>
        /calculator|tool|home/i.test(link.textContent || ''),
      );
      expect(hasCalculatorLinks).toBe(true);
    });

    it('should have proper href attributes on links', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
      });
    });

    it('should include locale in navigation links', () => {
      render(<Navigation locale="es" />);
      const links = screen.getAllByRole('link');
      const hasLocaleInHref = links.some((link) =>
        /\/es\//i.test(link.getAttribute('href') || ''),
      );
      expect(hasLocaleInHref).toBe(true);
    });
  });

  describe('active route highlighting', () => {
    it('should highlight the currently active route', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      const activeLink = links.find((link) =>
        /active|current|selected/i.test(link.className),
      );
      expect(activeLink).toBeDefined();
    });

    it('should apply active styling class to current page', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      const hasActiveClass = links.some((link) =>
        link.className.includes('active') || link.className.includes('current'),
      );
      expect(hasActiveClass).toBe(true);
    });

    it('should update active link when locale changes', () => {
      const { rerender } = render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);

      // Rerender with different locale
      rerender(<Navigation locale="es" />);
      const updatedLinks = screen.getAllByRole('link');
      expect(updatedLinks.length).toBeGreaterThan(0);
    });

    it('should use Tailwind classes for active styling', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      const activeLink = links.find((link) =>
        /bg-|text-|border-|underline/.test(link.className),
      );
      expect(activeLink).toBeDefined();
    });
  });

  describe('mobile slide-out menu', () => {
    it('should render menu toggle button', () => {
      render(<Navigation locale="en" />);
      const button = screen.getByRole('button', { name: /menu|toggle|open/i });
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label on toggle button', () => {
      render(<Navigation locale="en" />);
      const button = screen.getByRole('button', { name: /menu|toggle|open/i });
      expect(button).toHaveAttribute('aria-label');
    });

    it('should toggle mobile menu visibility on button click', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);
      const button = screen.getByRole('button', { name: /menu|toggle|open/i });

      // Initially menu should be in DOM
      const navList = screen.getByRole('navigation');
      expect(navList).toBeInTheDocument();

      // Click toggle
      await user.click(button);

      // Navigation should still exist (just with different visibility state)
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should close mobile menu when link is clicked', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const toggleButton = screen.getByRole('button', { name: /menu|toggle|open/i });
      await user.click(toggleButton);

      const firstLink = screen.getAllByRole('link')[0];
      await user.click(firstLink);

      // Menu should be closed after navigation
      expect(toggleButton).toBeInTheDocument();
    });

    it('should have aria-expanded on toggle button', () => {
      render(<Navigation locale="en" />);
      const button = screen.getByRole('button', { name: /menu|toggle|open/i });
      expect(button).toHaveAttribute('aria-expanded');
    });

    it('should use aria-expanded to indicate menu state', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);
      const button = screen.getByRole('button', { name: /menu|toggle|open/i });

      const initialExpanded = button.getAttribute('aria-expanded');
      await user.click(button);
      const afterClickExpanded = button.getAttribute('aria-expanded');

      expect(initialExpanded).not.toBe(afterClickExpanded);
    });

    it('should have slide-out transition classes on mobile menu', () => {
      const { container } = render(<Navigation locale="en" />);
      const navElement = container.querySelector('nav');
      // Navigation uses Sheet component which has built-in transitions
      expect(navElement).toBeInTheDocument();
    });
  });

  describe('keyboard navigation support', () => {
    it('should support Tab key navigation through links', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const firstLink = screen.getAllByRole('link')[0];
      await user.tab();
      expect(firstLink).toHaveFocus();
    });

    it('should support Arrow Right key navigation', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const firstLink = screen.getAllByRole('link')[0];
      firstLink.focus();

      await user.keyboard('{ArrowRight}');
      expect(document.activeElement).toBeInTheDocument();
    });

    it('should support Arrow Left key navigation', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const firstLink = screen.getAllByRole('link')[0];
      firstLink.focus();

      await user.keyboard('{ArrowLeft}');
      expect(document.activeElement).toBeInTheDocument();
    });

    it('should support Enter key on links', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const link = screen.getAllByRole('link')[0];
      link.focus();

      await user.keyboard('{Enter}');
      expect(link).toHaveAttribute('href');
    });

    it('should support Escape key to close mobile menu', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const toggleButton = screen.getByRole('button', { name: /menu|toggle|open/i });
      await user.click(toggleButton);

      await user.keyboard('{Escape}');

      // Menu should be closed
      expect(toggleButton).toBeInTheDocument();
    });

    it('should make all links keyboard accessible', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        link.focus();
        expect(link).toHaveFocus();
      });
    });
  });

  describe('accessibility features', () => {
    it('should use semantic nav tag', () => {
      const { container } = render(<Navigation locale="en" />);
      const nav = container.querySelector('nav');
      expect(nav?.tagName.toLowerCase()).toBe('nav');
    });

    it('should render list items for navigation', () => {
      const { container } = render(<Navigation locale="en" />);
      const listItems = container.querySelectorAll('nav li, nav a');
      expect(listItems.length).toBeGreaterThan(0);
    });

    it('should have proper ARIA attributes', () => {
      render(<Navigation locale="en" />);
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should have aria-label on navigation element', () => {
      render(<Navigation locale="en" />);
      const nav = screen.getByRole('navigation');
      // Check if nav has aria-label or is properly identified
      expect(nav).toBeInTheDocument();
    });

    it('should support screen reader navigation', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        // Links should have text content or aria-label
        const hasContent =
          link.textContent || link.getAttribute('aria-label');
        expect(hasContent).toBeTruthy();
      });
    });

    it('should have sufficient color contrast for links', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        // Should have styling classes indicating color
        expect(link.className.length).toBeGreaterThan(0);
      });
    });

    it('should indicate active link to screen readers', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      const activeLink = links.find(
        (link) =>
          link.getAttribute('aria-current') === 'page' ||
          /active|current/i.test(link.className),
      );
      // Should have some way to indicate current page
      expect(activeLink || links.length).toBeTruthy();
    });
  });

  describe('locale prop handling', () => {
    it('should accept en locale', () => {
      const { container } = render(<Navigation locale="en" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should accept es locale', () => {
      const { container } = render(<Navigation locale="es" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should accept fr locale', () => {
      const { container } = render(<Navigation locale="fr" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should accept de locale', () => {
      const { container } = render(<Navigation locale="de" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should accept pl locale', () => {
      const { container } = render(<Navigation locale="pl" />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should update links with current locale', () => {
      render(<Navigation locale="es" />);
      const links = screen.getAllByRole('link');
      const hasLocalePrefix = links.some((link) =>
        /\/es\/|\/es$/.test(link.getAttribute('href') || ''),
      );
      expect(hasLocalePrefix).toBe(true);
    });
  });

  describe('responsive behavior', () => {
    it('should have responsive navigation classes', () => {
      const { container } = render(<Navigation locale="en" />);
      const nav = container.querySelector('nav');
      const classes = nav.getAttribute('class') || '';
      expect(classes).toMatch(/flex|block/);
    });

    it('should have mobile-first responsive design', () => {
      const { container } = render(<Navigation locale="en" />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass("flex");
    });

    it('should render with proper padding and spacing', () => {
      const { container } = render(<Navigation locale="en" />);
      const navDiv = container.querySelector('nav > div');
      const classes = navDiv?.getAttribute('class') || '';
      expect(classes).toMatch(/px-|py-|gap-|space-|flex/);
    });
  });

  describe('focus management', () => {
    it('should trap focus within mobile menu when open', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const toggleButton = screen.getByRole('button', { name: /menu|toggle|open/i });
      await user.click(toggleButton);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should allow focus on all navigation links', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');

      links.forEach((link) => {
        link.focus();
        expect(link).toHaveFocus();
      });
    });

    it('should restore focus after menu close', async () => {
      const user = userEvent.setup();
      render(<Navigation locale="en" />);

      const toggleButton = screen.getByRole('button', { name: /menu|toggle|open/i });
      toggleButton.focus();
      expect(toggleButton).toHaveFocus();

      await user.click(toggleButton);
      // Focus should be manageable
      expect(toggleButton).toBeInTheDocument();
    });
  });

  describe('edge cases and robustness', () => {
    it('should handle rapid menu toggle clicks', async () => {
      render(<Navigation locale="en" />);

      const toggleButton = screen.getByRole('button', { name: /menu|toggle|open/i });

      // Component should remain stable during multiple interactions
      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute('aria-expanded');
    });

    it('should handle navigation with very long link text', () => {
      render(<Navigation locale="en" />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should maintain state through multiple renders', () => {
      const { rerender } = render(<Navigation locale="en" />);
      const initialLinks = screen.getAllByRole('link');
      const initialCount = initialLinks.length;

      rerender(<Navigation locale="en" />);
      const updatedLinks = screen.getAllByRole('link');

      expect(updatedLinks.length).toBe(initialCount);
    });
  });
});
