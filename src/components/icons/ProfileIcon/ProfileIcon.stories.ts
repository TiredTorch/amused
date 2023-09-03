import type { Meta, StoryObj } from '@storybook/react';

import { ProfileIcon } from './ProfileIcon';

const meta = {
  title: 'Icons/Profile Icon',
  component: ProfileIcon
} satisfies Meta<typeof ProfileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
