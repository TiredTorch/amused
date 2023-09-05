import type { Meta, StoryObj } from '@storybook/react';

import { FileInput } from './FileInput';

const meta = {
  title: 'Base Components/FileInput',
  component: FileInput,
  argTypes: {
    onChange: {
      action: "loaded"
    }
  }
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p 
          className="mb-2 text-sm flex flex-col justify-center items-center text-text-primary"
        >
          <span
            className="font-semibold"
          >
            Click to upload
          </span> 
          <span>
            or drag and drop
          </span>
          </p>
          <p 
            className="text-xs text-gray-500 dark:text-gray-400"
          >
            SVG, PNG, JPG
          </p>
      </>
    )
  }
};

