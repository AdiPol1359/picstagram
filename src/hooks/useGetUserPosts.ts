import { trpc } from '@/lib/utils/trpc';

export const useGetUserPosts = (username: string) => {
	const { data: posts = [], ...rest } = trpc.posts.getAll.useQuery({
		username,
	});

	return { posts, ...rest };
};
