import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta = {
  title: 'Base Components/Textarea',
  component: Textarea
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Textarea"
  }
};

export const LabelTextarea: Story = {
  args: {
    label: "Label example"
  }
};

