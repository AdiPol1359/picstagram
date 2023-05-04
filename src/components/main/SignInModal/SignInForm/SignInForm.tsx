import { toast } from 'react-hot-toast';

import { EntryForm } from '../../EntryForm/EntryForm';
import { useSignInForm } from './useSignInForm';

import { PasswordField } from '@/components/ui/PasswordField/PasswordField';
import { TextField } from '@/components/ui/TextField/TextField';

export const SignInForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignInForm({
		onUnknownError: () => toast.error('An unexpected error occurred!'),
	});

	return (
		<EntryForm buttonText="Sign in" onSubmit={handleFormSubmit}>
			<TextField
				type="email"
				label="Email address"
				placeholder="Your email"
				required={true}
				error={errors.email?.message}
				{...register('email')}
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
