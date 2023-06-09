import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { ImagesSlider } from '../../ImagesSlider';
import { useCreatePostForm } from './useCreatePostForm';

import { FileButton } from '@/components/ui/FileButton/FileButton';
import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';
import { createUrlFromFile } from '@/lib/utils/file';

type CreatePostFormProps = Readonly<{
	onSuccess?: () => void;
}>;

export const CreatePostForm = ({ onSuccess }: CreatePostFormProps) => {
	const [images, setImages] = useState<string[]>([]);

	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useCreatePostForm({
		onSuccess,
		onUnknownError: () => toast.error(DEFAULT_ERROR_MESSAGE),
	});

	return (
		<div className="space-y-3.5">
			{images.length > 0 && <ImagesSlider images={images} />}
			<form onSubmit={handleFormSubmit} className="space-y-3.5">
				<Textarea
					label="Description"
					placeholder="Post description"
					required={true}
					error={errors?.description?.message}
					{...register('description')}
				/>
				<FileButton
					accept="image/png,image/jpeg"
					limit={3}
					icon={true}
					multiple={true}
					fill={true}
					onFiles={(files) => {
						setImages(Array.from(files).map(createUrlFromFile));
					}}
					onLimitError={() => {
						toast.error('You can upload up to 3 photos per post!');
					}}
					{...register('images')}
				>
					Upload images
				</FileButton>
				<LoadingButton
					type="submit"
					variant="primary"
					isLoading={isLoading}
					disabled={images.length === 0 || isSubmitSuccessful}
					fill
				>
					Create a new post
				</LoadingButton>
			</form>
		</div>
	);
};
