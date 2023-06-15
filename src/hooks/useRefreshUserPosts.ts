import { useRouter } from 'next/navigation';

import { trpc } from '@/lib/utils/trpc';

export const useRefreshUserPosts = () => {
	const { posts } = trpc.useContext();
	const { refresh } = useRouter();

	return async (username: string) => {
		await posts.getAll.refetch({ username });
		refresh();
	};
};
