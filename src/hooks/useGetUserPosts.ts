import { trpc } from '@/lib/utils/trpc';

export const useGetUserPosts = (username: string | null) => {
	const { data: posts = [], ...rest } = trpc.posts.getAll.useQuery(
		{
			username: username || '',
		},
		{ enabled: Boolean(username) }
	);

	return { posts, ...rest };
};
