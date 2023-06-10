'use client';

import { useSession } from 'next-auth/react';

import { Button } from '../ui/Button/Button';
import { CreatePostModal } from './CreatePostModal/CreatePostModal';

import { useModal } from '@/hooks/useModal';

import type { User } from '@/server/modules/users/users.schemas';

type CreatePostButtonProps = Readonly<{
	user: User;
}>;

export const CreatePostButton = ({ user }: CreatePostButtonProps) => {
	const { data } = useSession();
	const { isOpen, openModal, closeModal } = useModal();

	if (data?.user.id !== user.id) {
		return null;
	}

	return (
		<>
			<Button onClick={openModal}>Create a new post</Button>
			<CreatePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
