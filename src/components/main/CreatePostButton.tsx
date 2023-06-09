'use client';

import { Button } from '../ui/Button/Button';
import { CreatePostModal } from './CreatePostModal/CreatePostModal';

import { useModal } from '@/hooks/useModal';

export const CreatePostButton = () => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button onClick={openModal}>Create a new post</Button>
			<CreatePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
