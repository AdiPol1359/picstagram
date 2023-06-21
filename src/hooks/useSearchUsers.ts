import { trpc } from '@/lib/utils/trpc';

export const useSearchUsers = (search: string) => {
	const { data: users = [], ...rest } = trpc.users.search.useQuery(
		{ search },
		{ enabled: Boolean(search), cacheTime: 0 }
	);

	return { users, ...rest };
};
