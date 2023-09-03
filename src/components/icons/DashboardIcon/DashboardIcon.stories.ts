import type { Meta, StoryObj } from '@storybook/react';

import { DashboardIcon } from './DashboardIcon';

const meta = {
  title: 'Icons/Dashboard Icon',
  component: DashboardIcon
} satisfies Meta<typeof DashboardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
