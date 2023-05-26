import { trpc } from '@/lib/utils/trpc';

export const useGetFollowers = (userId: string) => {
	const { data: followers = [], ...rest } = trpc.follows.getFollowers.useQuery(
		{ userId },
		{ cacheTime: 0 }
	);

	return { followers, ...rest };
};
