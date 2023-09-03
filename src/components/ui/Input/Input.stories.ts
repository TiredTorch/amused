import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Base Components/Input',
  component: Input
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input"
  }
};

export const LabelInput: Story = {
  args: {
    label: "Label example"
  }
};

export const ErrorInput: Story = {
  args: {
    errorText: "Some error happend"
  }
};

export const FullInpuit: Story = {
  args: {
    errorText: "Some error happend",
    label: "Label example",
  }
};
