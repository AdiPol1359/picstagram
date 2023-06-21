import Link from 'next/link';

import { UserAvatar } from '@/components/common/UserAvatar';
import { FollowButton } from '@/components/main/FollowButton';

import type { User } from '@/server/modules/users/users.schemas';

type UsersSearchBarListItemProps = Readonly<{
	onClick?: () => void;
	user: User;
}>;

export const UserSearchBarListItem = ({
	onClick,
	user,
}: UsersSearchBarListItemProps) => (
	<li onClick={onClick} className="flex items-center justify-between p-2.5">
		<Link
			href={`/${user.username}`}
			className="flex flex-1 items-center gap-x-2 overflow-hidden"
		>
			<UserAvatar user={user} />
			<p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
				{user.username}
			</p>
		</Link>
		<FollowButton user={user} />
	</li>
);
