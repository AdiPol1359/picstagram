import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { signUpFormSchema } from './SignUpForm.schemas';

import { useCreateUser } from '@/hooks/useCreateUser';
import { capitalize, isObjectKey } from '@/lib/utils';

import type { TypeOf } from 'zod';

interface Options {
	readonly onSuccess?: () => void;
	readonly onUnknownError?: () => void;
}

export const useSignUpForm = ({ onSuccess, onUnknownError }: Options = {}) => {
	const { handleSubmit, getValues, setError, reset, ...rest } = useForm<
		TypeOf<typeof signUpFormSchema>
	>({
		resolver: zodResolver(signUpFormSchema),
	});
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
