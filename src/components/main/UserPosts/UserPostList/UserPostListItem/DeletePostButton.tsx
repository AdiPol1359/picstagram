import { useSession } from 'next-auth/react';
import { AiOutlineDelete } from 'react-icons/ai';

import { ConfirmModal } from '@/components/ui/ConfirmModal/ConfirmModal';
import { IconButton } from '@/components/ui/IconButton/IconButton';
import { useDeleteUserPost } from '@/hooks/useDeleteUserPost';
import { useModal } from '@/hooks/useModal';

import type { Post } from '@/server/modules/posts/posts.schemas';

type DeletePostButtonProps = Readonly<{
	post: Post;
}>;

export const DeletePostButton = ({
	post: { id, author },
}: DeletePostButtonProps) => {
	const { data } = useSession();
	const { isOpen, openModal, closeModal } = useModal();
	const { deleteUserPost, isLoading } = useDeleteUserPost();

	if (data?.user.id !== author.id) {
		return null;
	}

	return (
		<>
			<div className="absolute left-1 top-1 z-50">
				<IconButton
					variant="danger"
					label="Delete this post"
					icon={<AiOutlineDelete />}
					onClick={openModal}
				/>
			</div>
			<ConfirmModal
				title="Do you want to delete this post?"
				isOpen={isOpen}
				isLoading={isLoading}
				onClose={closeModal}
				onConfirm={() => deleteUserPost(id)}
			/>
		</>
	);
};
