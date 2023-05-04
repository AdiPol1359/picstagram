import { BsDiscord, BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { twMerge } from 'tailwind-merge';

import type { IconType } from 'react-icons';

type Variant = 'discord' | 'facebook' | 'google';

const variants: Record<Variant, string> = {
	discord: 'bg-[#7289d9]',
	facebook: 'bg-[#1877f2]',
	google: 'border bg-white text-black',
};

const icons: Record<Variant, IconType> = {
	discord: BsDiscord,
	facebook: BsFacebook,
	google: FcGoogle,
};

type SocialButtonProps = Readonly<{
	variant: Variant;
	text: string;
	onClick: () => void;
}>;

export const SocialButton = ({ variant, text, onClick }: SocialButtonProps) => {
	const Icon = icons[variant];

	return (
		<button
			type="button"
			onClick={onClick}
			className={twMerge(
				'flex w-full items-center justify-center gap-x-2 rounded-lg py-1.5 font-medium text-white',
				variants[variant]
			)}
		>
			<Icon className="text-lg" />
			{text}
		</button>
	);
};
