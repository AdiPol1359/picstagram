import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';

type Variant = 'apple' | 'facebook' | 'google';

const colors: Record<Variant, string> = {
	apple: 'bg-black',
	facebook: 'bg-[#1877f2]',
	google: 'bg-[#4285f4]',
};

const icons: Record<Variant, JSX.Element> = {
	apple: <BsApple />,
	facebook: <BsFacebook />,
	google: <BsGoogle />,
};

type SocialButtonProps = Readonly<{
	onClick?: () => void;
	variant: Variant;
	text: string;
}>;

export const SocialButton = ({ onClick, variant, text }: SocialButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		className={twMerge(
			'flex w-full items-center justify-center gap-x-2 rounded-lg py-1.5 font-medium text-white',
			colors[variant]
		)}
	>
		{icons[variant]}
		{text}
	</button>
);
