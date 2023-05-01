import { Container } from './Container';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Container',
	component: Container,
	args: {
		children: (
			<>
				<h1>Hello World!</h1>
				<p>container</p>
			</>
		),
	},
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
