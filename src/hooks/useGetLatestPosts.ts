import { trpc } from '@/lib/utils/trpc';

export const useGetLatestPosts = () => {
	const { data, ...rest } = trpc.posts.getLatest.useInfiniteQuery(
		{ limit: 3 },
		{ cacheTime: 0, getNextPageParam: ({ nextCursor }) => nextCursor }
	);

	const posts = data?.pages.flatMap(({ items }) => items) || [];

	return { posts, ...rest };
};
