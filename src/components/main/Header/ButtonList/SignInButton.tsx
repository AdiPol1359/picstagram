'use client';

import { SignInModal } from '../../SignInModal/SignInModal';

import { Button } from '@/components/ui/Button/Button';
import { useModal } from '@/hooks/useModal';

export const SignInButton = () => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button variant="text" onClick={openModal}>
				Sign in
			</Button>
			<SignInModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
