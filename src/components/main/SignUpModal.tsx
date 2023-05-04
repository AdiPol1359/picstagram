import { Alert } from '../ui/Alert/Alert';
import { Checkbox } from '../ui/Checkbox/Checkbox';
import { Modal } from '../ui/Modal/Modal';
import { TextField } from '../ui/TextField/TextField';
import { EntryForm } from './EntryForm/EntryForm';

import { getSignInPageErrorMessage } from '@/utils/auth-error';

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
		<EntryForm
			buttonText="Sign up"
			isLoading={false}
			onSubmit={() => console.log('SIGN UP')}
		>
			<TextField
				type="text"
				label="Username"
				placeholder="Your username"
				required
			/>
			<TextField
				type="text"
				label="First name"
				placeholder="Your first name"
				required
			/>
			<TextField
				type="text"
				label="Last name"
				placeholder="Your last name"
				required
			/>
			<TextField
				type="email"
				label="Email address"
				placeholder="Your email"
				required
			/>
			<TextField
				type="password"
				label="Password"
				placeholder="Your password"
				required
			/>
			<TextField
				type="password"
				label="Confirm password"
				placeholder="Confirm your password"
				required
			/>
			<Checkbox label="I accept the Terms and Conditions" />
		</EntryForm>
	</Modal>
);
