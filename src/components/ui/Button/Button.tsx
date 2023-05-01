import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const variants = {
	default: 'bg-white text-black',
	primary:
		'border-primary-400 bg-primary text-white enabled:hover:bg-primary-400',
	danger: 'border-red-600 text-red-600 enabled:hover:bg-red-600/10',
	text: 'border-transparent text-black shadow-none enabled:hover:bg-gray-100',
} as const;

type ButtonProps = Readonly<{
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	fill?: boolean;
	variant?: keyof typeof variants;
	icon?: ReactNode;
	children: ReactNode;
}>;

export const Button = ({
	type = 'button',
	disabled,
	onClick,
	fill,
	variant = 'default',
	icon,
	children,
}: ButtonProps) => (
	<button
		type={type}
		disabled={disabled}
		onClick={onClick}
		className={twMerge(
			'duration-250 flex items-center justify-center gap-x-1.5 rounded-lg border px-5 py-2.5 font-medium shadow-sm transition disabled:opacity-75',
			fill ? 'w-full' : 'w-fit',
			variants[variant]
		)}
	>
		{icon && <div className="text-sm">{icon}</div>}
		{children}
	</button>
);
