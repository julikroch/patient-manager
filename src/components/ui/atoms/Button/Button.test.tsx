import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  describe('Primary Button', () => {
    it('renders with text', () => {
      render(<Button.Primary text="Click me" />);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('handles click events', () => {
      const handleClick = jest.fn();
      
      render(<Button.Primary text="Click me" onClick={handleClick} />);
      fireEvent.click(screen.getByText('Click me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies size classes correctly', () => {
      render(<Button.Primary text="Small" size="sm" />);
      expect(screen.getByText('Small')).toHaveClass('text-sm');

      render(<Button.Primary text="Large" size="lg" />);
      expect(screen.getByText('Large')).toHaveClass('text-lg');
    });

    it('applies disabled state', () => {
      render(<Button.Primary text="Disabled" disabled />);
      expect(screen.getByText('Disabled')).toBeDisabled();
    });
  });

  describe('Icon Button', () => {
    it('renders children content', () => {
      render(
        <Button.Icon aria-label="Close">
          <span data-testid="icon">×</span>
        </Button.Icon>,
      );
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('handles click events', () => {
      const handleClick = jest.fn();
      
      render(
        <Button.Icon aria-label="Close" onClick={handleClick}>
          <span>×</span>
        </Button.Icon>,
      );
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('has correct aria-label', () => {
      render(
        <Button.Icon aria-label="Close">
          <span>×</span>
        </Button.Icon>,
      );
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
    });

    it('applies size classes correctly', () => {
      render(
        <Button.Icon aria-label="Close" size="lg">
          <span>×</span>
        </Button.Icon>,
      );
      expect(screen.getByRole('button')).toHaveClass('text-lg');
    });
  });
});
