import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/ui/atoms/';

type ButtonType = typeof Button.Primary | typeof Button.Icon;

const meta: Meta<ButtonType> = {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button.Primary> = {
  render: args => <Button.Primary {...args} />,
  args: {
    text: 'Primary Button',
    size: 'md',
  },
};

export const SmallPrimary: StoryObj<typeof Button.Primary> = {
  render: args => <Button.Primary {...args} />,
  args: {
    text: 'Small Button',
    size: 'sm',
  },
};

export const LargePrimary: StoryObj<typeof Button.Primary> = {
  render: args => <Button.Primary {...args} />,
  args: {
    text: 'Large Button',
    size: 'lg',
  },
};

export const IconButton: StoryObj<typeof Button.Icon> = {
  render: args => (
    <Button.Icon {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </Button.Icon>
  ),
  args: {
    'aria-label': 'Bookmark',
  },
};
