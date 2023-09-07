import type { Meta, StoryObj } from '@storybook/react';

import { NewPostIcon } from './NewPostIcon';

const meta = {
  title: 'Icons/New Post Icon',
  component: NewPostIcon
} satisfies Meta<typeof NewPostIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
