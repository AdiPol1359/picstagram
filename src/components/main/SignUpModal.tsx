import { Modal } from '../ui/Modal/Modal';

import type { ComponentProps } from 'react';

type SignUpModalProps = ComponentProps<typeof Modal>;

export const SignUpModal = (props: SignUpModalProps) => (
	<Modal {...props}>
		<Modal.Title>Create a new account</Modal.Title>
	</Modal>
);
