import { signUpFormSchema } from './SignUpForm.schemas';

import { useCreateUser } from '@/hooks/useCreateUser';
import { useZodForm } from '@/hooks/useZodForm';
import { isObjectKey } from '@/lib/utils/object';
import { capitalize } from '@/lib/utils/string';

interface Options {
	readonly onSuccess?: () => void;
	readonly onUnknownError?: () => void;
}

export const useSignUpForm = ({ onSuccess, onUnknownError }: Options = {}) => {
	const { handleSubmit, getValues, setError, reset, ...rest } =
		useZodForm(signUpFormSchema);
	const { createUser, isLoading } = useCreateUser();

	const handleFormSubmit = handleSubmit(
		({ username, name, email, password }) => {
			createUser(
				{
					username,
					name,
					email,
					password,
				},
				{
					onSuccess: () => {
						reset();
						onSuccess?.();
					},
					onAlreadyExistsError: (target) => {
						if (target && isObjectKey(target, getValues())) {
							setError(target, {
								message: `${capitalize(target)} already exists`,
							});
						}
					},
					onUnknownError,
				}
			);
		}
	);

	return { handleFormSubmit, isLoading, ...rest };
};
