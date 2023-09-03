import type { Meta, StoryObj } from '@storybook/react';

import { UsersIcon } from './UsersIcon';

const meta = {
  title: 'Icons/Users Icon',
  component: UsersIcon
} satisfies Meta<typeof UsersIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
