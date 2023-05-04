import { Menu } from '@headlessui/react';

import { DropdownItem } from './DropdownItem';
import { DropdownItems } from './DropdownItems';

import type { ReactNode } from 'react';

type DropdownProps = Readonly<{
	children: ReactNode;
}>;

export const Dropdown = ({ children }: DropdownProps) => (
	<Menu as="div" className="relative flex h-full items-center">
		{children}
	</Menu>
);

Dropdown.Item = DropdownItem;
Dropdown.Items = DropdownItems;
Dropdown.Button = Menu.Button;
