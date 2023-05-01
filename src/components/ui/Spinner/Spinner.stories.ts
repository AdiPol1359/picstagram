import { Spinner } from './Spinner';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Spinner',
	component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
