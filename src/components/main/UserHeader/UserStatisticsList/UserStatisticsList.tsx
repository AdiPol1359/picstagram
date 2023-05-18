'use client';

import { StatisticItem } from './StatisticItem';
import { UserListModalStatisticItem } from './UserListModalStatisticItem';

import { useGetFollowers } from '@/hooks/useGetFollowers';
import { useGetFollowing } from '@/hooks/useGetFollowing';

import type { User } from '@/server/modules/users/users.schemas';

type UserStatisticsListProps = Readonly<{
	user: User;
}>;

export const UserStatisticsList = ({
	user: {
		id,
		statistics: { photos, followers, following },
	},
}: UserStatisticsListProps) => {
	const { followers: userFollowers } = useGetFollowers(id);
	const { following: userFollowing } = useGetFollowing(id);

	return (
		<ul className="flex justify-between">
			<StatisticItem name="Photos" value={photos} />
			<UserListModalStatisticItem
				name="Followers"
				value={followers}
				users={userFollowers}
			/>
			<UserListModalStatisticItem
				name="Following"
				value={following}
				users={userFollowing}
			/>
		</ul>
	);
};
