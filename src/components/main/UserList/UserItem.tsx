import Link from 'next/link';

import { FollowButton } from '../FollowButton';

import { UserAvatar } from '@/components/common/UserAvatar';

import type { User } from '@/server/modules/users/users.schemas';

type UserItemProps = Readonly<{
	user: User;
}>;

export const UserItem = ({ user }: UserItemProps) => (
	<li className="flex gap-x-0.5 py-4">
		<Link
			href={`/${user.username}`}
			className="flex flex-1 items-center gap-x-2.5 overflow-hidden"
		>
			<UserAvatar user={user} size="sm" />
			<h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
				{user.username}
			</h3>
		</Link>
		<FollowButton user={user} />
	</li>
);
