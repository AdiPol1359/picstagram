import { useMutation } from '@tanstack/react-query';

import { createPost } from '@/lib/services/posts.service';

export const useCreateUserPost = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: createPost });

	const createUserPost = async ({
		description,
		images,
	}: {
		description: string;
		images: Blob[];
	}) => {
		await mutateAsync({ description, images });
	};

	return { createUserPost, isLoading };
};
