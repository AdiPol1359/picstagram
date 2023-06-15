import { trpc } from '@/lib/utils/trpc';

export const useGetLatestPosts = () => {
	const { data: posts = [], ...rest } = trpc.posts.getLatest.useQuery();

	return { posts, ...rest };
};
