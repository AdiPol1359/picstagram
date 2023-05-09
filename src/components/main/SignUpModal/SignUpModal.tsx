import { SignUpForm } from './SignUpForm/SignUpForm';

import { Alert } from '@/components/ui/Alert/Alert';
import { Modal } from '@/components/ui/Modal/Modal';
import { getSignInPageErrorMessage } from '@/lib/auth-errors';

import type { ComponentProps } from 'react';

type SignUpModalProps = Readonly<{
	error: string | null;
}> &
	ComponentProps<typeof Modal>;

export const SignUpModal = ({ error, ...props }: SignUpModalProps) => (
	<Modal {...props}>
		<Modal.Title>Create a new account</Modal.Title>
		{error && (
			<div className="my-4">
				<Alert variant="error">{getSignInPageErrorMessage(error)}</Alert>
			</div>
		)}
		<SignUpForm />
	</Modal>
);
