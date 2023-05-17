import { BiUser } from 'react-icons/bi';

import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

type ProfileButtonProps = Readonly<{
	username: string;
}>;

export const ProfileButton = ({ username }: ProfileButtonProps) => (
	<Dropdown.Item icon={<BiUser />} href={`/${username}`}>
		My profile
	</Dropdown.Item>
);
