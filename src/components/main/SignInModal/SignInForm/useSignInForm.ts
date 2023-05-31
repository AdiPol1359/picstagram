import { signInFormSchema } from './SignInForm.schemas';

import { useZodForm } from '@/hooks/useZodForm';
import { signInWithCredentials } from '@/lib/auth';

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
	const { handleSubmit, setError, ...rest } = useZodForm(signInFormSchema);

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
