import { trpc } from '@/lib/utils/trpc';

export const useGetFollowing = (userId: string) => {
	const { data: following = [], ...rest } = trpc.follows.getFollowing.useQuery({
		userId,
	});

	return { following, ...rest };
};
