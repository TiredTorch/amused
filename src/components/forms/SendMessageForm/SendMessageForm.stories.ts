import type { Meta, StoryObj } from '@storybook/react';

import { SendMessageForm } from './SendMessageForm';

const meta = {
  title: 'Forms/SendMessageForm',
  component: SendMessageForm,
  argTypes: {
    onSubmit: {
      action: "Sended Values"
    }
  }
} satisfies Meta<typeof SendMessageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      message: ""
    }
  }
};
