import { MdError, MdTaskAlt } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

type Variant = 'error' | 'success';

const colors: Record<Variant, string> = {
	error: 'bg-red-50 text-red-700 [&>svg]:text-red-400',
	success: 'bg-green-50 text-green-700 [&>svg]:text-green-400',
};

const icons: Record<Variant, IconType> = {
	error: MdError,
	success: MdTaskAlt,
};

type AlertProps = Readonly<{
	variant: Variant;
	children: ReactNode;
}>;

export const Alert = ({ variant, children }: AlertProps) => {
	const Icon = icons[variant];

	return (
		<div
			role="alert"
			className={twMerge(
				'flex items-center gap-x-1.5 rounded-lg p-4 text-lg',
				colors[variant]
			)}
		>
			<Icon />
			<div className="text-sm font-medium">{children}</div>
		</div>
	);
};
