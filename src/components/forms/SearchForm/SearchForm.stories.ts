import type { Meta, StoryObj } from '@storybook/react';

import { SearchForm } from './SearchForm';

const meta = {
  title: 'Forms/SearchForm',
  component: SearchForm,
  argTypes: {
    onSubmit: {
      action: "Sended Values"
    }
  }
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValues: {
      searchField: ""
    }
  }
};
