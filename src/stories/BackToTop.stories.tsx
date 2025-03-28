import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { BackToTop } from '../components/ui/atoms/';

const meta: Meta<typeof BackToTop> = {
  title: 'Atoms/BackToTop',
  component: BackToTop,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button that appears when scrolling down and allows users to quickly return to the top of the page.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', paddingTop: '100vh' }}>
      <p>Scroll down to see the back to top button</p>
      <BackToTop />
    </div>
  ),
};
