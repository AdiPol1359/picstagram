'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { UserPostDetails } from './UserPostDetails';

import { Modal } from '@/components/ui/Modal/Modal';
import { useCacheValue } from '@/hooks/useCacheValue';
import { useModal } from '@/hooks/useModal';

import type { Post } from '@/server/modules/posts/posts.schemas';

type UserPostModalProps = Readonly<{
	post: Post | null;
}>;

export const UserPostModal = ({ post }: UserPostModalProps) => {
	const { isOpen, openModal, closeModal } = useModal(Boolean(post));
	const { value, setCache } = useCacheValue<Post>();

	const router = useRouter();

	const userPost = post || value;

	useEffect(() => {
		if (post) {
			setCache(post);
			openModal();
		} else {
			closeModal();
		}
	}, [post, setCache, openModal, closeModal]);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				router.replace(`/${userPost?.author.username}`);
			}}
		>
			<Modal.Title>{userPost?.author.name}</Modal.Title>
			{userPost && <UserPostDetails post={userPost} />}
		</Modal>
	);
};
