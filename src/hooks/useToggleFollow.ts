import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { trpc } from '@/lib/utils/trpc';

export const useToggleFollow = (initialState: boolean) => {
	const router = useRouter();
	const [isFollowing, setIsFollowing] = useState(initialState);

	const createFollowMutation = trpc.follows.createFollow.useMutation();
	const deleteFollowMutation = trpc.follows.deleteFollow.useMutation();

	const isLoading =
		createFollowMutation.isLoading || deleteFollowMutation.isLoading;

	const toggleFollow = async ({ userId }: { userId: string }) => {
		if (isFollowing) {
			await deleteFollowMutation.mutateAsync({ userId });
		} else {
			await createFollowMutation.mutateAsync({ userId });
		}

		router.refresh();
		setIsFollowing((prev) => !prev);
	};

	return { toggleFollow, isFollowing, isLoading };
};
