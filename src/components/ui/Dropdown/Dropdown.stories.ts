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
    label: "Default dropdown",
    options: [
      "Option 1",
      "Option 2",
      "Option 3"
    ]
  }
};

export const OptionLabel: Story = {
  args: {
    label: "Option as label dropdown",
    options: [
      "Option 1",
      "Option 2",
      "Option 3"
    ],
    placeOptionAsLabel: true
  }
};
