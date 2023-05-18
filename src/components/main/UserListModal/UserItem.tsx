import Link from 'next/link';

import { UserAvatar } from '@/components/common/UserAvatar';
import { Button } from '@/components/ui/Button/Button';

import type { User } from '@/server/modules/users/users.schemas';

type UserItemProps = Readonly<{
	user: User;
}>;

export const UserItem = ({ user }: UserItemProps) => (
	<li className="flex py-4">
		<Link
			href={`/${user.username}`}
			className="flex flex-1 items-center gap-x-2.5"
		>
			<UserAvatar user={user} size="sm" />
			<h3 className="font-medium">{user.username}</h3>
		</Link>
		<Button>Follow</Button>
	</li>
);
