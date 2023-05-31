import { UpdateUserForm } from './UpdateUserForm/UpdateUserForm';

import { Modal } from '@/components/ui/Modal/Modal';

import type { ComponentProps } from 'react';

import type { User } from '@/server/modules/users/users.schemas';

type UpdateUserModalProps = Readonly<{
	user: User;
}> &
	ComponentProps<typeof Modal>;

export const UpdateUserModal = ({ user, ...props }: UpdateUserModalProps) => (
	<Modal {...props}>
		<Modal.Title>Update your account</Modal.Title>
		<UpdateUserForm user={user} onSuccess={props.onClose} />
	</Modal>
);
