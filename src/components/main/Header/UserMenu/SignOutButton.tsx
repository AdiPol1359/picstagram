import { BiLogOut } from 'react-icons/bi';

import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import { signOutUser } from '@/lib/auth';

export const SignOutButton = () => (
	<Dropdown.Item icon={<BiLogOut />} onClick={signOutUser}>
		Sign out
	</Dropdown.Item>
);
