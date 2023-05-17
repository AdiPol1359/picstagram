'use client';

import { useSession } from 'next-auth/react';

import { ProfileButton } from './ProfileButton';
import { SignOutButton } from './SignOutButton';
import { UserMenuButton } from './UserMenuButton';

import { PrivateElement } from '@/components/common/PrivateElement';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

export const UserMenu = () => {
	const { data } = useSession();

	return (
		<PrivateElement>
			<Dropdown>
				{data && <UserMenuButton user={data.user} />}
				<Dropdown.Items>
					{data?.user.username && (
						<ProfileButton username={data.user.username} />
					)}
					<SignOutButton />
				</Dropdown.Items>
			</Dropdown>
		</PrivateElement>
	);
};
