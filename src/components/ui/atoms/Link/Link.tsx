import NextLink from 'next/link';
import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  target?: string;
  children: ReactNode;
}

export const Link = ({ href, target, children }: LinkProps) => (
  <NextLink href={href} legacyBehavior>
    <a
      target={target}
      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  </NextLink>
);
