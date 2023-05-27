import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signInFormSchema } from './SignInForm.schemas';

import { signInWithCredentials } from '@/lib/auth';

import type { TypeOf } from 'zod';

interface Options {
	readonly onSubmit: () => void;
	readonly onSignIn: () => void;
	readonly onUnknownError: () => void;
}

export const useSignInForm = ({
	onSubmit,
	onSignIn,
	onUnknownError,
}: Options) => {
	const { handleSubmit, setError, ...rest } = useForm<
		TypeOf<typeof signInFormSchema>
	>({
		resolver: zodResolver(signInFormSchema),
	});

	const handleFormSubmit = handleSubmit(async ({ username, password }) => {
		onSubmit();

		await signInWithCredentials(
			{ username, password },
			{
				onError: (error) => {
					switch (error) {
						case 'CredentialsSignin':
							setError('username', {
								message: 'Incorrect username or password',
							});
							break;
						default:
							onUnknownError();
					}
				},
			}
		);

		onSignIn();
	});

	return { handleFormSubmit, ...rest };
};
