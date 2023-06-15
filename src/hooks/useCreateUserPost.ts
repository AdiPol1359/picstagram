import { useMutation } from '@tanstack/react-query';

import { useRefreshUserPosts } from './useRefreshUserPosts';

import { createPost } from '@/lib/services/posts.service';

export const useCreateUserPost = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: createPost });

	const refresh = useRefreshUserPosts();

	const createUserPost = async ({
		description,
		images,
	}: {
		description: string;
		images: Blob[];
	}) => {
		const {
			author: { username },
		} = await mutateAsync({ description, images });

		if (username) {
			await refresh(username);
		}
	};

	return { createUserPost, isLoading };
};
