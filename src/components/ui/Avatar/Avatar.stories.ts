import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Avatar',
	component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Image: Story = {
	args: {
		src: '/path-to-image',
		alt: 'alternative text',
	},
};

export const Text: Story = {
	args: {
		children: 'P',
	},
};
