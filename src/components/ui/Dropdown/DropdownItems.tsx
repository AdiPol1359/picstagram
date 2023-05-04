import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import type { ReactNode } from 'react';

type DropdownItemsProps = Readonly<{
	children: ReactNode;
}>;

export const DropdownItems = ({ children }: DropdownItemsProps) => (
	<Transition
		as={Fragment}
		enter="transition duration-250"
		enterFrom="opacity-0 scale-95"
		enterTo="opacity-100 scale-100"
		leave="transition duration-250"
		leaveFrom="opacity-100 scale-100"
		leaveTo="opacity-0 scale-95"
	>
		<Menu.Items className="absolute right-0 top-full rounded-lg border bg-white p-1 shadow-sm">
			{children}
		</Menu.Items>
	</Transition>
);
