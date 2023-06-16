import { trpc } from '@/lib/utils/trpc';

export const useGetLatestPosts = () => {
	const { data: posts = [], ...rest } = trpc.posts.getLatest.useQuery(
		undefined,
		{ cacheTime: 0 }
	);

	return { posts, ...rest };
};
