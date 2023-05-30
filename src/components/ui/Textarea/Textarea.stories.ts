import { Textarea } from './Textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Textarea',
	component: Textarea,
	args: {
		placeholder: 'Example placeholder',
	},
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {
	args: {
		label: 'Example textarea',
	},
};

export const Required: Story = {
	args: {
		label: 'Example textarea',
		required: true,
	},
};

export const Error: Story = {
	args: {
		error: 'Example error!',
	},
};
