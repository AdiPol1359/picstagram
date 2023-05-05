'use client';

import { SignOutButton } from './SignOutButton';
import { UserAvatar } from './UserAvatar';

import { PrivateElement } from '@/components/common/PrivateElement';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';

export const UserMenu = () => (
	<PrivateElement>
		<Dropdown>
			<Dropdown.Button>
				<UserAvatar />
			</Dropdown.Button>
			<Dropdown.Items>
				<SignOutButton />
			</Dropdown.Items>
		</Dropdown>
	</PrivateElement>
);
