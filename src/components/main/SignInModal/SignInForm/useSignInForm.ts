import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signInFormSchema } from './SignInForm.schemas';

import { signInWithCredentials } from '@/lib/auth';

import type { TypeOf } from 'zod';

interface Options {
	readonly onUnknownError: () => void;
}

export const useSignInForm = ({ onUnknownError }: Options) => {
	const { handleSubmit, setError, ...rest } = useForm<
		TypeOf<typeof signInFormSchema>
	>({
		resolver: zodResolver(signInFormSchema),
	});

	const handleFormSubmit = handleSubmit(({ email, password }) =>
		signInWithCredentials(
			{ email, password },
			{
				onError: (error) => {
					switch (error) {
						case 'CredentialsSignin':
							setError('email', { message: 'Incorrect email or password' });
							break;
						default:
							onUnknownError();
					}
				},
			}
		)
	);

	return { handleFormSubmit, ...rest };
};
