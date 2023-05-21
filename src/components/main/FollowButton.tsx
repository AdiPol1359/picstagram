'use client';

import { useSession } from 'next-auth/react';

import { Button } from '../ui/Button/Button';

import { useRequiredSession } from '@/hooks/useRequiredSession';
import { useToggleFollow } from '@/hooks/useToggleFollow';

import type { User } from '@/server/modules/users/users.schemas';

type FollowButtonProps = Readonly<{
	user: User;
}>;

export const FollowButton = ({ user: { id, follow } }: FollowButtonProps) => {
	const requiredSession = useRequiredSession();
	const { data } = useSession();
	const { toggleFollow, isFollowing, isLoading } = useToggleFollow(
		Boolean(follow)
	);

	if (data?.user.id === id) {
		return null;
	}

	return (
		<Button
			disabled={isLoading}
			onClick={requiredSession(() => toggleFollow({ userId: id }))}
		>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</Button>
	);
};
