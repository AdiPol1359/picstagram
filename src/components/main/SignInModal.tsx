import { Modal } from '../ui/Modal/Modal';
import { TextField } from '../ui/TextField/TextField';
import { EntryForm } from './EntryForm/EntryForm';

import type { ComponentProps } from 'react';

type SignInModalProps = ComponentProps<typeof Modal>;

export const SignInModal = (props: SignInModalProps) => (
	<Modal {...props}>
		<Modal.Title>Sign in to your account</Modal.Title>
		<EntryForm buttonText="Sign in" onSubmit={() => console.log('SIGN IN')}>
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
		</EntryForm>
	</Modal>
);
