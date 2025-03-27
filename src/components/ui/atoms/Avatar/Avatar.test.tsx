import { act, render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials when no src is provided', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders initials when src is provided but image fails to load', async () => {
    render(<Avatar src="invalid-image.jpg" alt="John Doe" />);

    const img = screen.getByRole('img');

    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });

    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders image when valid src is provided', () => {
    const src = 'https://example.com/avatar.jpg';

    render(<Avatar src={src} alt="John Doe" />);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', expect.stringContaining('avatar.jpg'));
    expect(img).toHaveAttribute('alt', 'John Doe');
  });

  it('applies custom size', () => {
    const size = 128;

    render(<Avatar alt="John Doe" size={size} />);

    const container = screen.getByText('JD').closest('div');

    expect(container).toHaveStyle(`width: ${size}px; height: ${size}px`);
  });

  it('applies custom className', () => {
    const className = 'custom-class';

    render(<Avatar alt="John Doe" className={className} />);

    const container = screen.getByText('JD').closest('div');

    expect(container).toHaveClass(className);
  });

  it('takes first two letters of multiple word names', () => {
    render(<Avatar alt="John Richard Doe" />);
    expect(screen.getByText('JR')).toBeInTheDocument();
  });
});
