import { useRouter } from 'next/navigation';

import { updateUserAvatarFormSchema } from './UpdateUserAvatarForm.schemas';

import { useCreateUserAvatar } from '@/hooks/useCreateUserAvatar';
import { useDeleteUserAvatar } from '@/hooks/useDeleteUserAvatar';
import { useUpdateUser } from '@/hooks/useUpdateUser';
import { useZodForm } from '@/hooks/useZodForm';

interface Options {
	readonly onSuccess?: () => void;
}

export const useUpdateUserAvatarForm = ({ onSuccess }: Options = {}) => {
	const { handleSubmit, ...rest } = useZodForm(updateUserAvatarFormSchema);

	const { createUserAvatar, isLoading: isCreateUserAvatarLoading } =
		useCreateUserAvatar();
	const { deleteUserAvatar, isLoading: isDeleteUserAvatarLoading } =
		useDeleteUserAvatar();
	const { updateUser, isLoading: isUpdateUserLoading } = useUpdateUser();

	const router = useRouter();

	const handleFormSubmit = handleSubmit(async ({ file }) => {
		const image = file
			? await createUserAvatar(file)
			: await deleteUserAvatar();

		updateUser(
			{
				image: image || null,
			},
			{
				onSuccess: () => {
					router.refresh();
					onSuccess?.();
				},
			}
		);
	});

	return {
		handleFormSubmit,
		isLoading:
			isCreateUserAvatarLoading ||
			isDeleteUserAvatarLoading ||
			isUpdateUserLoading,
		...rest,
	};
};
