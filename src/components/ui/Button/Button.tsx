import { twMerge } from 'tailwind-merge';

import { BUTTON_BASE_STYLES, BUTTON_VARIANTS } from './Button.styles';

import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
	fill?: boolean;
	variant?: keyof typeof BUTTON_VARIANTS;
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
			BUTTON_BASE_STYLES,
			fill ? 'w-full' : 'w-fit',
			BUTTON_VARIANTS[variant]
		)}
	>
		{icon && <div className="text-sm">{icon}</div>}
		{children}
	</button>
);
