import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('renders children content', () => {
    render(<Link href="/test">Click me</Link>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    render(<Link href="/test">Click me</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies target attribute when provided', () => {
    render(
      <Link href="/test" navigateToNewTab>
        Click me
      </Link>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('target', '_blank');
  });

  it('adds rel attribute for external links', () => {
    render(
      <Link href="/test" navigateToNewTab>
        Click me
      </Link>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add rel attribute for internal links', () => {
    render(<Link href="/test">Click me</Link>);

    const link = screen.getByRole('link');

    expect(link).not.toHaveAttribute('rel');
  });

  it('renders complex children', () => {
    render(
      <Link href="/test">
        <span>Click</span>
        <span>me</span>
      </Link>,
    );
    expect(screen.getByText('Click')).toBeInTheDocument();
    expect(screen.getByText('me')).toBeInTheDocument();
  });
});
