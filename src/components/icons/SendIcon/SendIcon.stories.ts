import type { Meta, StoryObj } from '@storybook/react';

import { SendIcon } from './SendIcon';

const meta = {
  title: 'Icons/Send Icon',
  component: SendIcon
} satisfies Meta<typeof SendIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
