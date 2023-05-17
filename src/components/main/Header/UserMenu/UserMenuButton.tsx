import { UserAvatar } from '@/components/common/UserAvatar';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

import type { Session } from 'next-auth';

type UserMenuButtonProps = Readonly<{
	user: Session['user'];
}>;

export const UserMenuButton = ({ user }: UserMenuButtonProps) => (
	<Dropdown.Button>
		<UserAvatar user={user} />
	</Dropdown.Button>
);
