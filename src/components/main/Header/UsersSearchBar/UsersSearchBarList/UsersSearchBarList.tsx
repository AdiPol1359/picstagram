import { UserSearchBarListItem } from './UsersSearchBarListItem';

import type { User } from '@/server/modules/users/users.schemas';

type UsersSearchBarListProps = Readonly<{
	onItemClick?: () => void;
	users: User[];
}>;

export const UsersSearchBarList = ({
	onItemClick,
	users,
}: UsersSearchBarListProps) => {
	if (users.length === 0) {
		return <p className="my-2.5 text-center font-medium">Users not found :c</p>;
	}

	return (
		<ol className="divide-y">
			{users.map((user) => (
				<UserSearchBarListItem
					key={user.id}
					user={user}
					onClick={onItemClick}
				/>
			))}
		</ol>
	);
};
