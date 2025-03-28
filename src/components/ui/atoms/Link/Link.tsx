import NextLink from 'next/link';
import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  navigateToNewTab?: boolean;
  children: ReactNode;
}

export const Link = ({ href, navigateToNewTab, children }: LinkProps) => (
  <NextLink href={href} legacyBehavior>
    <a
      target={navigateToNewTab ? '_blank' : undefined}
      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
      rel={navigateToNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  </NextLink>
);
