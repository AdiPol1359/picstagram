import { createPostFormSchema } from './CreatePostForm.schemas';

import { useCreateUserPost } from '@/hooks/useCreateUserPost';
import { useZodForm } from '@/hooks/useZodForm';

interface Options {
	readonly onSuccess?: () => void;
	readonly onUnknownError?: () => void;
}

export const useCreatePostForm = ({ onSuccess, onUnknownError }: Options) => {
	const { handleSubmit, ...rest } = useZodForm(createPostFormSchema);

	const { createUserPost, isLoading } = useCreateUserPost();

	const handleFormSubmit = handleSubmit(async ({ description, images }) => {
		try {
			await createUserPost({ description, images });
			onSuccess?.();
		} catch (err) {
			onUnknownError?.();
		}
	});

	return { handleFormSubmit, isLoading, ...rest };
};
