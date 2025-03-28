import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/ui/atoms/';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 64,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'John Doe',
    size: 64,
  },
};

export const WithInitials: Story = {
  args: {
    alt: 'John Doe',
    size: 64,
  },
};
