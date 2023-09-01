import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'Base Components/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Aboba"
  }
};
