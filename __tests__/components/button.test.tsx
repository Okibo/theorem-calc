import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  describe('rendering and content', () => {
    it('should render with text content', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render with children elements', () => {
      render(
        <Button>
          <span>Icon</span>
          Click me
        </Button>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Icon')).toBeInTheDocument();
    });

    it('should render button element', () => {
      const { container } = render(<Button>Test</Button>);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('onClick handler', () => {
    it('should call onClick handler when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should call onClick handler multiple times on multiple clicks', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('should not call onClick handler when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );
      const button = screen.getByRole('button', { name: /click me/i });

      await user.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('disabled prop', () => {
    it('should render disabled button when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button', { name: /disabled/i });
      expect(button).toBeDisabled();
    });

    it('should render enabled button when disabled prop is false', () => {
      render(<Button disabled={false}>Enabled</Button>);
      const button = screen.getByRole('button', { name: /enabled/i });
      expect(button).not.toBeDisabled();
    });

    it('should render enabled button when disabled prop is not provided', () => {
      render(<Button>Enabled</Button>);
      const button = screen.getByRole('button', { name: /enabled/i });
      expect(button).not.toBeDisabled();
    });

    it('should have opacity-50 style when disabled', () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('disabled:opacity-50');
    });
  });

  describe('variant prop', () => {
    it('should render with default variant by default', () => {
      const { container } = render(<Button>Default</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('bg-primary');
    });

    it('should render with destructive variant', () => {
      const { container } = render(<Button variant="destructive">Delete</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('bg-destructive');
    });

    it('should render with outline variant', () => {
      const { container } = render(<Button variant="outline">Outline</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('border', 'border-input');
    });

    it('should render with ghost variant', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('hover:bg-accent');
    });

    it('should render with secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('bg-secondary');
    });

    it('should render with link variant', () => {
      const { container } = render(<Button variant="link">Link</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('text-primary', 'underline-offset-4');
    });
  });

  describe('size prop', () => {
    it('should render with default size by default', () => {
      const { container } = render(<Button>Default</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('h-9', 'px-4', 'py-2');
    });

    it('should render with small size', () => {
      const { container } = render(<Button size="sm">Small</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('h-8', 'px-3', 'text-xs');
    });

    it('should render with large size', () => {
      const { container } = render(<Button size="lg">Large</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('h-10', 'px-8');
    });

    it('should render with icon size', () => {
      const { container } = render(<Button size="icon">X</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('h-9', 'w-9');
    });
  });

  describe('HTML attributes', () => {
    it('should accept arbitrary HTML button attributes', () => {
      render(
        <Button type="submit" aria-label="Submit button">
          Submit
        </Button>
      );
      const button = screen.getByRole('button', { name: /submit button/i });
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should accept data attributes', () => {
      const { container } = render(<Button data-testid="custom-button">Test</Button>);
      const button = container.querySelector('[data-testid="custom-button"]');
      expect(button).toBeInTheDocument();
    });

    it('should accept className and merge with variant classes', () => {
      const { container } = render(<Button className="custom-class">Custom</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveClass('bg-primary');
    });
  });

  describe('accessibility', () => {
    it('should be focusable when enabled', () => {
      const { container } = render(<Button>Focusable</Button>);
      const button = container.querySelector('button');
      button?.focus();
      expect(document.activeElement).toBe(button);
    });

    it('should have focus visible styling', () => {
      const { container } = render(<Button>Focus Visible</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-1');
    });

    it('should have proper pointer events when disabled', () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('disabled:pointer-events-none');
    });
  });
});
