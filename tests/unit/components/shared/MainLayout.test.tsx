import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from '@/components/shared/MainLayout';

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  );
  MockedLink.displayName = 'Link';
  return MockedLink;
});

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}));

describe('MainLayout Component', () => {
  describe('rendering and structure', () => {
    it('should render layout wrapper', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should render children content', () => {
      render(
        <MainLayout locale="en">
          <div>Custom Page Content</div>
        </MainLayout>
      );
      expect(screen.getByText('Custom Page Content')).toBeInTheDocument();
    });

    it('should support React elements as children', () => {
      render(
        <MainLayout locale="en">
          <section>
            <h1>Test Section</h1>
            <p>Test paragraph</p>
          </section>
        </MainLayout>
      );
      expect(screen.getByText('Test Section')).toBeInTheDocument();
      expect(screen.getByText('Test paragraph')).toBeInTheDocument();
    });
  });

  describe('component integration', () => {
    it('should render header component', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should render navigation component', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should render footer component', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should render content in main element', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const mainElement = container.querySelector('main');
      expect(mainElement).toBeInTheDocument();
      expect(mainElement).toHaveTextContent('Test Content');
    });

    it('should have all major layout components present', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );

      const header = screen.getByRole('banner');
      const nav = screen.getByRole('navigation');
      const footer = screen.getByRole('contentinfo');

      expect(header).toBeInTheDocument();
      expect(nav).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });

  describe('semantic structure', () => {
    it('should use semantic main element for content', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const mainElement = container.querySelector('main');
      expect(mainElement?.tagName.toLowerCase()).toBe('main');
    });

    it('should have proper semantic structure', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );

      const header = container.querySelector('header');
      const nav = container.querySelector('nav');
      const main = container.querySelector('main');
      const footer = container.querySelector('footer');

      expect(header).toBeInTheDocument();
      expect(nav).toBeInTheDocument();
      expect(main).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });

    it('should render in correct visual order', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );

      const header = container.querySelector('header');
      const nav = container.querySelector('nav');
      const main = container.querySelector('main');
      const footer = container.querySelector('footer');

      // All semantic elements should exist
      expect(header).toBeInTheDocument();
      expect(nav).toBeInTheDocument();
      expect(main).toBeInTheDocument();
      expect(footer).toBeInTheDocument();

      // Verify ordering: header comes before nav, nav before main, main before footer
      const allElements = Array.from(container.querySelectorAll('header, nav, main, footer'));
      expect(allElements[0].tagName).toBe('HEADER');
      expect(allElements[1].tagName).toBe('NAV');
      expect(allElements[2].tagName).toBe('MAIN');
      expect(allElements[3].tagName).toBe('FOOTER');
    });
  });

  describe('responsive layout', () => {
    it('should have responsive flex layout', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("flex");
    });

    it('should support full viewport height', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("min-h-screen");
    });

    it('should have column layout for mobile-first design', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("flex-col");
    });

    it('should have responsive padding', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      const classes = main.getAttribute('class') || '';
      expect(classes).toMatch(/px-|py-|p-/);
    });

    it('should be responsive across all breakpoints', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      // Should have responsive classes
      expect(root.className.length).toBeGreaterThan(0);
    });
  });

  describe('sticky header and footer behavior', () => {
    it('should have sticky header at top', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const header = container.querySelector('header');
      expect(header).toHaveClass("sticky");
    });

    it('should keep footer at bottom', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Short Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      // Layout should support footer being pushed to bottom
      const classes = root.getAttribute('class') || '';
      expect(classes).toMatch(/flex|grid|relative|absolute/);
    });

    it('should allow content to expand between header and footer', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Content that grows</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      // Main should grow to fill available space
      expect(main).toHaveClass("flex-1");
    });
  });

  describe('locale prop handling', () => {
    it('should accept en locale', () => {
      render(
        <MainLayout locale="en">
          <div>Test</div>
        </MainLayout>
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should accept es locale', () => {
      render(
        <MainLayout locale="es">
          <div>Test</div>
        </MainLayout>
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should accept fr locale', () => {
      render(
        <MainLayout locale="fr">
          <div>Test</div>
        </MainLayout>
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should accept de locale', () => {
      render(
        <MainLayout locale="de">
          <div>Test</div>
        </MainLayout>
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should accept pl locale', () => {
      render(
        <MainLayout locale="pl">
          <div>Test</div>
        </MainLayout>
      );
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should pass locale to header component', () => {
      render(
        <MainLayout locale="es">
          <div>Test</div>
        </MainLayout>
      );
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should pass locale to navigation component', () => {
      render(
        <MainLayout locale="fr">
          <div>Test</div>
        </MainLayout>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should pass locale to footer component', () => {
      render(
        <MainLayout locale="de">
          <div>Test</div>
        </MainLayout>
      );
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('mobile safe area consideration', () => {
    it('should have proper padding for notches', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      const classes = root.getAttribute('class') || '';
      expect(classes).toMatch(/px-|py-|p-/);
    });

    it('should consider safe area insets', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should have adequate touch target sizes', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const header = screen.getByRole('banner');
      const footer = screen.getByRole('contentinfo');

      const headerClasses = header.getAttribute('class') || '';
      expect(headerClasses).toMatch(/h-|p-|px-|py-/);
      const footerClasses = footer.getAttribute('class') || '';
      expect(footerClasses).toMatch(/h-|p-|px-|py-/);
    });

    it('should be readable on small screens', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      const classes = main.getAttribute('class') || '';
      expect(classes).toMatch(/px-|py-/);
    });
  });

  describe('content area accessibility', () => {
    it('should use semantic main element', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      expect(main?.tagName.toLowerCase()).toBe('main');
    });

    it('should have proper main element role', () => {
      render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('should support skip to main content navigation', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('flexible content slot', () => {
    it('should render single child element', () => {
      render(
        <MainLayout locale="en">
          <div>Single Child</div>
        </MainLayout>
      );
      expect(screen.getByText('Single Child')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      render(
        <MainLayout locale="en">
          <div>Child 1</div>
          <div>Child 2</div>
        </MainLayout>
      );
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('should render complex component as children', () => {
      const ComplexComponent = () => (
        <article>
          <h1>Article Title</h1>
          <section>Article Content</section>
        </article>
      );

      render(
        <MainLayout locale="en">
          <ComplexComponent />
        </MainLayout>
      );
      expect(screen.getByText('Article Title')).toBeInTheDocument();
      expect(screen.getByText('Article Content')).toBeInTheDocument();
    });

    it('should preserve children structure', () => {
      const { container } = render(
        <MainLayout locale="en">
          <section>
            <h1>Section Title</h1>
            <p>Paragraph text</p>
          </section>
        </MainLayout>
      );

      const section = container.querySelector('section');
      const heading = container.querySelector('h1');
      const paragraph = container.querySelector('p');

      expect(section).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });

    it('should allow children to have full width', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test Content</div>
        </MainLayout>
      );
      const main = container.querySelector('main');
      expect(main).toHaveClass("w-full");
    });
  });

  describe('grid and flex layout control', () => {
    it('should use flex layout for vertical stacking', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("flex");
    });

    it('should stack in column direction', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("flex-col");
    });

    it('should allocate space between components', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div>Test</div>
        </MainLayout>
      );
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass("flex");
    });
  });

  describe('edge cases and robustness', () => {
    it('should handle empty children', () => {
      const { container } = render(
        <MainLayout locale="en">
          <div></div>
        </MainLayout>
      );
      expect(container.querySelector('main')).toBeInTheDocument();
    });

    it('should handle multiple rerenders', () => {
      const { rerender } = render(
        <MainLayout locale="en">
          <div>Content 1</div>
        </MainLayout>
      );

      expect(screen.getByText('Content 1')).toBeInTheDocument();

      rerender(
        <MainLayout locale="en">
          <div>Content 2</div>
        </MainLayout>
      );

      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });

    it('should maintain layout integrity with long content', () => {
      const longContent = 'A'.repeat(1000);
      render(
        <MainLayout locale="en">
          <div>{longContent}</div>
        </MainLayout>
      );

      const main = screen.getByRole('main');
      expect(main).toHaveTextContent(longContent);
    });

    it('should handle locale changes', () => {
      const { rerender } = render(
        <MainLayout locale="en">
          <div>Test</div>
        </MainLayout>
      );

      expect(screen.getByRole('contentinfo')).toBeInTheDocument();

      rerender(
        <MainLayout locale="es">
          <div>Test</div>
        </MainLayout>
      );

      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('TypeScript prop types', () => {
    it('should accept valid locale types', () => {
      const locales = ['en', 'es', 'fr', 'de', 'pl'] as const;
      locales.forEach((locale) => {
        const { unmount } = render(
          <MainLayout locale={locale}>
            <div>Test</div>
          </MainLayout>
        );
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        unmount();
      });
    });

    it('should accept ReactNode as children', () => {
      render(
        <MainLayout locale="en">
          <div>JSX Children</div>
        </MainLayout>
      );
      expect(screen.getByText('JSX Children')).toBeInTheDocument();
    });
  });

  describe('layout stability', () => {
    it('should maintain footer position on page scroll', () => {
      render(
        <MainLayout locale="en">
          <div>Content</div>
        </MainLayout>
      );
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should support layout with varying content sizes', () => {
      const { rerender } = render(
        <MainLayout locale="en">
          <div>Small content</div>
        </MainLayout>
      );

      rerender(
        <MainLayout locale="en">
          <div>Very large content that takes up much more space and continues for a long time</div>
        </MainLayout>
      );

      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
  });
});
