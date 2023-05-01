import { AiOutlineSmile } from 'react-icons/ai';

import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'IconButton',
	component: IconButton,
	args: {
		label: 'Click me!',
		icon: <AiOutlineSmile />,
	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
