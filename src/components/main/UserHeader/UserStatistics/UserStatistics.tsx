'use client';

import { StatisticItem } from './StatisticItem';
import { UserListModalStatisticItem } from './UserListModalStatisticItem';

import { useGetFollowers } from '@/hooks/useGetFollowers';
import { useGetFollowing } from '@/hooks/useGetFollowing';

import type { User } from '@/server/modules/users/users.schemas';

type UserStatisticsProps = Readonly<{
	user: User;
}>;

export const UserStatistics = ({
	user: {
		id,
		statistics: { photos, followers, following },
	},
}: UserStatisticsProps) => {
	const { followers: userFollowers, isLoading: isFollowersLoading } =
		useGetFollowers(id);
	const { following: userFollowing, isLoading: isFollowingLoading } =
		useGetFollowing(id);

	return (
		<ul className="flex justify-between">
			<StatisticItem name="Photos" value={photos} />
			<UserListModalStatisticItem
				name="Followers"
				value={followers}
				users={userFollowers}
				isLoading={isFollowersLoading}
			/>
			<UserListModalStatisticItem
				name="Following"
				value={following}
				users={userFollowing}
				isLoading={isFollowingLoading}
			/>
		</ul>
	);
};