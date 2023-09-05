import type { Meta, StoryObj } from '@storybook/react';

import { EditProfileForm } from './EditProfileForm';

const meta = {
  title: 'Forms/EditProfileForm',
  component: EditProfileForm,
  argTypes: {
    onSubmit: {
      action: "Sended Values"
    }
  }
} satisfies Meta<typeof EditProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      login: "",
      password: "",
      image: "",
      userName: "",
      description: ""
    }
  }
};
