import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

const meta = {
  title: 'Forms/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: {
      action: "Sended Values"
    }
  }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      login: "",
      password: ""
    }
  }
};
