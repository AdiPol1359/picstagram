import { useState } from 'react';

import { useUpdateUserAvatarForm } from './useUpdateUserAvatarForm';

import { UserAvatar } from '@/components/common/UserAvatar';
import { Button } from '@/components/ui/Button/Button';
import { FileButton } from '@/components/ui/FileButton/FileButton';
import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton';

import type { User } from '@/server/modules/users/users.schemas';

type UpdateUserAvatarFormProps = Readonly<{
	onSuccess?: () => void;
	user: User;
}>;

export const UpdateUserAvatarForm = ({
	onSuccess,
	user: { name, image: userImage },
}: UpdateUserAvatarFormProps) => {
	const [image, setImage] = useState(userImage);

	const { isLoading, handleFormSubmit, register } = useUpdateUserAvatarForm({
		onSuccess,
	});

	const handleFilesChange = (files: FileList) => {
		setImage(files.length > 0 ? URL.createObjectURL(files[0]) : null);
	};

	return (
		<div className="flex flex-col items-center gap-y-2">
			<UserAvatar size="xl" user={{ name, image }} />
			<form
				onSubmit={handleFormSubmit}
				className="flex w-full flex-col gap-y-2"
			>
				<div className="grid gap-2 sm:grid-cols-2">
					<FileButton
						accept="image/png,image/jpeg"
						onFiles={handleFilesChange}
						{...register('file')}
					>
						Upload new avatar
					</FileButton>
					<Button
						type="reset"
						variant="danger"
						onClick={() => setImage(null)}
						fill
					>
						Delete your avatar
					</Button>
				</div>
				<LoadingButton
					type="submit"
					variant="primary"
					disabled={image === userImage}
					isLoading={isLoading}
					fill
				>
					Update your avatar
				</LoadingButton>
			</form>
		</div>
	);
};
