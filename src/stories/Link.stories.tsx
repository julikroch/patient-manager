import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../components/ui/atoms/';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
  args: {
    href: '/dashboard',
    children: 'Go to Dashboard',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    navigateToNewTab: true,
    children: 'Visit External Site',
  },
};
