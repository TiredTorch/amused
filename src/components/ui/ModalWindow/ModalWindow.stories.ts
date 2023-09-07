import type { Meta, StoryObj } from '@storybook/react';

import { ModalWindow } from './ModalWindow';

const meta = {
  title: 'Base Components/ModalWindow',
  component: ModalWindow
} satisfies Meta<typeof ModalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Modal content",
    onClose: () => console.log("close action!"),
    isOpen: true
  }
};
