'use client';

import { SignUpModal } from '../SignUpModal';

import { Button } from '@/components/ui/Button/Button';
import { useModal } from '@/hooks/useModal';

export const SignUpButton = () => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button variant="primary" onClick={openModal}>
				Sign up
			</Button>
			<SignUpModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
