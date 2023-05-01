import type { ReactNode } from 'react';

type IconButtonProps = Readonly<{
	onClick?: () => void;
	label: string;
	icon: ReactNode;
}>;

export const IconButton = ({ onClick, label, icon }: IconButtonProps) => (
	<button
		type="button"
		aria-label={label}
		onClick={onClick}
		className="duration-250 rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary"
	>
		{icon}
	</button>
);
