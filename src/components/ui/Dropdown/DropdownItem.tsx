import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownItemProps<T> = Readonly<
	| {
			icon?: ReactNode;
			children: ReactNode;
	  } & (
			| {
					href?: __next_route_internal_types__.RouteImpl<T>;
					onClick?: undefined;
			  }
			| { onClick?: () => void; href?: undefined }
	  )
>;

export const DropdownItem = <T,>({
	onClick,
	icon,
	href,
	children,
}: DropdownItemProps<T>) => (
	<Menu.Item>
		{({ active }) => {
			const styles = twMerge(
				'duration-250 flex w-full items-center gap-x-1.5 whitespace-nowrap rounded-md px-3.5 py-2.5 text-sm transition-colors',
				active && 'bg-primary-400 text-white'
			);

			return href ? (
				<Link href={href} className={styles}>
					{icon}
					{children}
				</Link>
			) : (
				<button onClick={onClick} className={styles}>
					{icon}
					{children}
				</button>
			);
		}}
	</Menu.Item>
);
