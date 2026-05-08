import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'success'],
    },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click me' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Click me' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Click me' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Delete' },
};

export const Loading: Story = {
  args: { variant: 'primary', children: 'Saving…', loading: true },
};

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Disabled', disabled: true },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      {(['primary', 'secondary', 'ghost', 'danger', 'success'] as const).map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div className="flex items-center gap-4 p-4">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Button key={s} size={s}>
          Size {s}
        </Button>
      ))}
    </div>
  ),
};
