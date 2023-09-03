import type { Meta, StoryObj } from '@storybook/react';

import { OptionsIcon } from './OptionsIcon';

const meta = {
  title: 'Icons/Options Icon',
  component: OptionsIcon
} satisfies Meta<typeof OptionsIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
