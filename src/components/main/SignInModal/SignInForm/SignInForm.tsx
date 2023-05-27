import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { EntryForm } from '../../EntryForm/EntryForm';
import { useSignInForm } from './useSignInForm';

import { PasswordField } from '@/components/ui/PasswordField/PasswordField';
import { TextField } from '@/components/ui/TextField/TextField';

export const SignInForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignInForm({
		onSubmit: () => setIsLoading(true),
		onSignIn: () => setIsLoading(false),
		onUnknownError: () => toast.error('An unexpected error occurred!'),
	});

	return (
		<EntryForm
			buttonText="Sign in"
			isLoading={isLoading}
			onSubmit={handleFormSubmit}
		>
			<TextField
				type="text"
				label="Username"
				placeholder="Your username"
				required={true}
				error={errors.username?.message}
				{...register('username')}
			/>
			<PasswordField
				label="Password"
				placeholder="Your password"
				required={true}
				error={errors.password?.message}
				{...register('password')}
			/>
		</EntryForm>
	);
};
