'use client';

import { useSession } from 'next-auth/react';

import { Button } from '../ui/Button/Button';

import { useToggleFollow } from '@/hooks/useToggleFollow';

import type { User } from '@/server/modules/users/users.schemas';

type FollowButtonProps = Readonly<{
	user: User;
}>;

export const FollowButton = ({ user: { id, follow } }: FollowButtonProps) => {
	const { data } = useSession();
	const { toggleFollow, isFollowing, isLoading } = useToggleFollow(
		Boolean(follow)
	);

	if (data?.user.id === id) {
		return null;
	}

	return (
		<Button disabled={isLoading} onClick={() => toggleFollow({ userId: id })}>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</Button>
	);
};
