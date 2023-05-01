import { ErrorMessage } from './ErrorMessage';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'ErrorMessage',
	component: ErrorMessage,
	args: {
		message: 'Example error!',
	},
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
