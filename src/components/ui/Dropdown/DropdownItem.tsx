import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownItemProps = Readonly<{
	onClick?: () => void;
	icon?: ReactNode;
	children: ReactNode;
}>;

export const DropdownItem = ({
	onClick,
	icon,
	children,
}: DropdownItemProps) => (
	<Menu.Item>
		{({ active }) => (
			<button
				onClick={onClick}
				className={twMerge(
					'duration-250 flex items-center gap-x-1 whitespace-nowrap rounded-md px-3.5 py-2.5 text-sm transition-colors',
					active && 'bg-primary-400 text-white'
				)}
			>
				{icon}
				{children}
			</button>
		)}
	</Menu.Item>
);
