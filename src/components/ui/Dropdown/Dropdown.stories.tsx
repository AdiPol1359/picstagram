import { AiOutlineSmile } from 'react-icons/ai';

import { Dropdown } from './Dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Dropdown',
	component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<Dropdown>
				<Dropdown.Button>Open menu</Dropdown.Button>
				<Dropdown.Items>
					<Dropdown.Item>foo</Dropdown.Item>
					<Dropdown.Item>bar</Dropdown.Item>
					<Dropdown.Item>baz</Dropdown.Item>
				</Dropdown.Items>
			</Dropdown>
		),
	},
};

export const Icon: Story = {
	args: {
		children: (
			<Dropdown>
				<Dropdown.Button>Open menu</Dropdown.Button>
				<Dropdown.Items>
					<Dropdown.Item icon={<AiOutlineSmile />}>foo</Dropdown.Item>
				</Dropdown.Items>
			</Dropdown>
		),
	},
};
