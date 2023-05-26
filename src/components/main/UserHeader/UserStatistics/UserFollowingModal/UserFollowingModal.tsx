import { UserFollowingList } from './UserFollowingList';

import { Modal } from '@/components/ui/Modal/Modal';

import type { ComponentProps } from 'react';

type UserFollowingModalProps = Readonly<{
	userId: string;
}> &
	ComponentProps<typeof Modal>;

export const UserFollowingModal = ({
	userId,
	...props
}: UserFollowingModalProps) => (
	<Modal {...props}>
		<Modal.Title>Following</Modal.Title>
		<UserFollowingList userId={userId} />
	</Modal>
);
