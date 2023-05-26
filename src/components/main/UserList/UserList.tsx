import { EmptyDataAlert } from './EmptyDataAlert';
import { UserItem } from './UserItem';

import type { User } from '@/server/modules/users/users.schemas';

type UserListProps = Readonly<{
	alertMessage: string;
	users: User[];
}>;

export const UserList = ({ alertMessage, users }: UserListProps) => {
	if (users.length === 0) {
		return <EmptyDataAlert message={alertMessage} />;
	}

	return (
		<ul className="app-scrollbar max-h-96 divide-y overflow-auto">
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
};
