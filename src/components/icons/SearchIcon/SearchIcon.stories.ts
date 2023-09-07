import type { Meta, StoryObj } from '@storybook/react';

import { SearchIcon } from './SearchIcon';

const meta = {
  title: 'Icons/Search Icon',
  component: SearchIcon
} satisfies Meta<typeof SearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
