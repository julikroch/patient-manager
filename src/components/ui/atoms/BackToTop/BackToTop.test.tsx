import { render, screen } from '@testing-library/react';

import { BackToTop } from './BackToTop';

describe('BackToTop', () => {
  it('renders correctly', () => {
    render(<BackToTop />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has correct initial animation', () => {
    render(<BackToTop />);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ opacity: '0', y: '10px' });
  });

  it('has correct final animation', () => {
    render(<BackToTop />);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ opacity: '1', y: '0px' });
  });
});
