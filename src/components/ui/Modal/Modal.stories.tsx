import { useState } from 'react';

import { Button } from '../Button/Button';
import { Modal } from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Modal',
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open modal</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Title>Example modal title</Modal.Title>
				Example modal content
			</Modal>
		</>
	);
};

export const Default: Story = {
	args: {
		isOpen: true,
		children: '',
	},
	render: () => <ExampleModal />,
};
