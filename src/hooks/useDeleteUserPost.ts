import { useRefreshUserPosts } from './useRefreshUserPosts';

import { trpc } from '@/lib/utils/trpc';

export const useDeleteUserPost = () => {
	const { mutateAsync, isLoading } = trpc.posts.deleteById.useMutation();

	const refresh = useRefreshUserPosts();

	const deleteUserPost = async (id: number) => {
		const {
			author: { username },
		} = await mutateAsync({ id });

		if (username) {
			await refresh(username);
		}
	};

	return { deleteUserPost, isLoading };
};
