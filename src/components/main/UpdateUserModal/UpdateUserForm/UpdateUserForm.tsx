import { useUpdateUserForm } from './useUpdateUserForm';

import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { TextField } from '@/components/ui/TextField/TextField';

import type { User } from '@/server/modules/users/users.schemas';

type UpdateUserFormProps = Readonly<{
	user: User;
	onSuccess?: () => void;
}>;

export const UpdateUserForm = ({ user, onSuccess }: UpdateUserFormProps) => {
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { isDirty, errors },
	} = useUpdateUserForm(user, { onSuccess });

	return (
		<form className="mt-3 space-y-3.5" onSubmit={handleFormSubmit}>
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
			<Textarea
				label="Biography"
				placeholder="Your biography"
				spellCheck={false}
				error={errors.biography?.message}
				{...register('biography')}
			/>
			<LoadingButton
				type="submit"
				variant="primary"
				disabled={!isDirty}
				isLoading={isLoading}
				fill
			>
				Update the account
			</LoadingButton>
		</form>
	);
};
