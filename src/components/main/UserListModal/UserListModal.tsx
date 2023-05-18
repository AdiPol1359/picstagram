import { UserItem } from './UserItem';

import { Modal } from '@/components/ui/Modal/Modal';

import type { ComponentProps } from 'react';

import type { User } from '@/server/modules/users/users.schemas';

type UserListModalProps = Readonly<{
	title: string;
	users: User[];
}> &
	ComponentProps<typeof Modal>;

export const UserListModal = ({
	title,
	users,
	...props
}: UserListModalProps) => (
	<Modal {...props}>
		<Modal.Title>{title}</Modal.Title>
		<ul className="max-h-96 divide-y overflow-auto">
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	</Modal>
);
