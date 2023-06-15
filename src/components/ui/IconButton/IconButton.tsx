import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const variants = {
	default: 'text-gray-600 hover:bg-gray-100 hover:text-primary',
	danger:
		'border border-transparent text-red-600 hover:border-red-600 hover:bg-red-600/20',
} as const;

type IconButtonProps = Readonly<{
	onClick?: () => void;
	variant?: keyof typeof variants;
	label: string;
	icon: ReactNode;
}>;

export const IconButton = ({
	onClick,
	variant = 'default',
	label,
	icon,
}: IconButtonProps) => (
	<button
		type="button"
		aria-label={label}
		onClick={onClick}
		className={twMerge(
			'duration-250 rounded-md p-1 transition-colors',
			variants[variant]
		)}
	>
		{icon}
	</button>
);
