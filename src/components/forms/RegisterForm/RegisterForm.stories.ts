import type { Meta, StoryObj } from '@storybook/react';

import { RegisterForm } from './RegisterForm';

const meta = {
  title: 'Forms/RegisterForm',
  component: RegisterForm,
  argTypes: {
    onSubmit: {
      action: "Sended Values"
    }
  }
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      login: "",
      password: "",
      confirmPassword: ""
    }
  }
};
