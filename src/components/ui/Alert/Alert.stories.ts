import { Alert } from './Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Alert',
	component: Alert,
	args: {
		children: 'Example alert!',
	},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		variant: 'success',
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
	},
};
