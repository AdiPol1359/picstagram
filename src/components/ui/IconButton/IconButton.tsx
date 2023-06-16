import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const variants = {
	default: 'text-gray-600 hover:bg-gray-100 hover:text-primary',
	danger: 'text-red-600 hover:border-red-600 hover:bg-red-600/20',
} as const;

type IconButtonProps = Readonly<{
	variant?: keyof typeof variants;
	disabled?: boolean;
	onClick?: () => void;
	label: string;
	icon: ReactNode;
}>;

export const IconButton = ({
	variant = 'default',
	disabled,
	onClick,
	label,
	icon,
}: IconButtonProps) => (
	<button
		type="button"
		aria-label={label}
		disabled={disabled}
		onClick={onClick}
		className={twMerge(
			'duration-250 rounded-md border border-transparent p-1 transition-colors disabled:pointer-events-none disabled:opacity-50',
			variants[variant]
		)}
	>
		{icon}
	</button>
);
