import { fireEvent, render, screen } from '@testing-library/react';

import { BackToTop } from './BackToTop';

describe('BackToTop', () => {
  it('renders correctly', () => {
    render(<BackToTop />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(<BackToTop />);
    
    const button = screen.getByRole('button');

    expect(button).toHaveClass(
      'fixed',
      'bottom-4',
      'right-4',
      'z-50',
      'bg-white',
      'text-gray-700',
      'shadow-lg',
      'rounded-full',
      'p-2',
      'cursor-pointer',
      'hover:bg-gray-100'
    );
  });

  it('contains the up arrow icon', () => {
    render(<BackToTop />);

    const svg = screen.getByRole('button').querySelector('svg');
    
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('w-6', 'h-6');
  });

  it('scrolls to top when clicked', () => {
    // Mock window.scrollTo
    const scrollToMock = jest.fn();

    window.scrollTo = scrollToMock;

    render(<BackToTop />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
