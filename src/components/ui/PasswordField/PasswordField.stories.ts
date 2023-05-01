import { PasswordField } from './PasswordField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'PasswordField',
	component: PasswordField,
	args: {
		placeholder: 'Example placeholder',
	},
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
