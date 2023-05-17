import { useSession } from 'next-auth/react';

import { UserAvatar } from '@/components/common/UserAvatar';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

export const UserMenuButton = () => {
	const { data } = useSession();

	return (
		<Dropdown.Button>{data && <UserAvatar user={data.user} />}</Dropdown.Button>
	);
};
