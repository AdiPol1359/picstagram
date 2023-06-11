'use client';

import { useSession } from 'next-auth/react';
import { IoAdd } from 'react-icons/io5';

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
			<button
				type="button"
				onClick={openModal}
				aria-label="Create a new post"
				className="fixed bottom-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-400 p-2 text-2xl text-white opacity-40 transition-opacity hover:opacity-100"
			>
				<IoAdd />
			</button>
			<CreatePostModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
