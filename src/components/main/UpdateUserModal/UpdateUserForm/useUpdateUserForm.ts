import { useRouter } from 'next/navigation';

import { updateUserFormSchema } from './UpdateUserForm.schemas';

import { useUpdateUser } from '@/hooks/useUpdateUser';
import { useZodForm } from '@/hooks/useZodForm';
import { capitalize, isObjectKey } from '@/lib/utils/utils';

import type { User } from '@/server/modules/users/users.schemas';

interface Options {
	readonly onSuccess?: () => void;
}

export const useUpdateUserForm = (
	{ username, name, biography }: User,
	{ onSuccess }: Options = {}
) => {
	const router = useRouter();

	const { updateUser, isLoading } = useUpdateUser();
	const { handleSubmit, getValues, setError, ...rest } = useZodForm(
		updateUserFormSchema,
		{
			defaultValues: {
				biography,
				...(name && { name }),
				...(username && { username }),
			},
		}
	);

	const handleFormSubmit = handleSubmit(({ username, name, biography }) => {
		updateUser(
			{ username, name, biography },
			{
				onSuccess: ({ username }) => {
					router.replace(`/${username}`);
					router.refresh();
					onSuccess?.();
				},
				onAlreadyExistsError: (target) => {
					if (target && isObjectKey(target, getValues())) {
						setError(target, {
							message: `${capitalize(target)} already exists`,
						});
					}
				},
			}
		);
	});

	return { handleFormSubmit, isLoading, ...rest };
};
