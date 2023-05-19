import { UserItem } from './UserItem';

import { LoadingContent } from '@/components/common/LoadingContent';
import { Modal } from '@/components/ui/Modal/Modal';

import type { ComponentProps } from 'react';

import type { User } from '@/server/modules/users/users.schemas';

type UserListModalProps = Readonly<{
	title: string;
	isLoading: boolean;
	users: User[];
}> &
	ComponentProps<typeof Modal>;

export const UserListModal = ({
	title,
	isLoading,
	users,
	...props
}: UserListModalProps) => (
	<Modal {...props}>
		<Modal.Title>{title}</Modal.Title>
		<LoadingContent isLoading={isLoading}>
			<ul className="app-scrollbar max-h-96 divide-y overflow-auto">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>
		</LoadingContent>
	</Modal>
);
