import { AiOutlineSmile } from 'react-icons/ai';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fill: Story = {
	args: {
		fill: true,
	},
};

export const Icon: Story = {
	args: {
		icon: <AiOutlineSmile />,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};

export const Danger: Story = {
	args: {
		variant: 'danger',
	},
};

export const Text: Story = {
	args: {
		variant: 'text',
	},
};
