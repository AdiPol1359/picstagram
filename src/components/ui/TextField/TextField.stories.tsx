import { AiOutlineEye } from 'react-icons/ai';

import { TextField } from './TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'TextField',
	component: TextField,
	args: {
		type: 'text',
		placeholder: 'Example placeholder',
	},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
	args: {
		icon: <AiOutlineEye />,
	},
};

export const Label: Story = {
	args: {
		label: 'Example input',
	},
};

export const Required: Story = {
	args: {
		label: 'Example input',
		required: true,
	},
};

export const Error: Story = {
	args: {
		error: 'Example error!',
	},
};
