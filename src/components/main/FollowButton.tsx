'use client';

import { useRouter } from 'next/navigation';
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
	const { refresh } = useRouter();
	const { toggleFollow, isFollowing, isLoading } = useToggleFollow(follow);

	const handleButtonClick = async () => {
		await toggleFollow({ userId: id });
		refresh();
	};

	if (data?.user.id === id) {
		return null;
	}

	return (
		<Button disabled={isLoading} onClick={requiredSession(handleButtonClick)}>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</Button>
	);
};
