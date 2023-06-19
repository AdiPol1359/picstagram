'use client';

import { useRouter } from 'next/navigation';

import { Modal } from '../ui/Modal/Modal';
import { SinglePost } from './SinglePost/SinglePost';

import type { Post } from '@/server/modules/posts/posts.schemas';

type SinglePostModalProps = Readonly<{
	post: Post;
}>;

export const SinglePostModal = ({ post }: SinglePostModalProps) => {
	const { back, refresh } = useRouter();

	return (
		<Modal
			onClose={() => {
				back();
				refresh();
			}}
			large
			isOpen
		>
			<SinglePost post={post} />
		</Modal>
	);
};
