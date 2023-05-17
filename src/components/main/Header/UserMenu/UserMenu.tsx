'use client';

import { SignOutButton } from './SignOutButton';
import { UserMenuButton } from './UserMenuButton';

import { PrivateElement } from '@/components/common/PrivateElement';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

export const UserMenu = () => (
	<PrivateElement>
		<Dropdown>
			<UserMenuButton />
			<Dropdown.Items>
				<SignOutButton />
			</Dropdown.Items>
		</Dropdown>
	</PrivateElement>
);
