import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { EntryForm } from '../../EntryForm/EntryForm';
import { useSignUpForm } from './useSignUpForm';

import { Alert } from '@/components/ui/Alert/Alert';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { PasswordField } from '@/components/ui/PasswordField/PasswordField';
import { TextField } from '@/components/ui/TextField/TextField';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';

export const SignUpForm = () => {
	const [alert, setAlert] = useState<string | null>(null);
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignUpForm({
		onSuccess: () => setAlert('Your account has been successfully created!'),
		onUnknownError: () => toast.error(DEFAULT_ERROR_MESSAGE),
	});

	return (
		<EntryForm
			buttonText="Sign up"
			isLoading={isLoading}
			onSubmit={handleFormSubmit}
		>
			{alert && <Alert variant="success">{alert}</Alert>}
			<TextField
				type="text"
				label="Username"
				placeholder="Your username"
				required={true}
				error={errors.username?.message}
				{...register('username')}
			/>
			<TextField
				type="text"
				label="Name"
				placeholder="Your name"
				required={true}
				error={errors.name?.message}
				{...register('name')}
			/>
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
			<PasswordField
				label="Confirm password"
				placeholder="Confirm your password"
				required={true}
				error={errors.confirmPassword?.message}
				{...register('confirmPassword')}
			/>
			<Checkbox
				label="I accept the Terms and Conditions"
				error={errors.acceptRules?.message}
				{...register('acceptRules')}
			/>
		</EntryForm>
	);
};
