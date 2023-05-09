import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const sizes = {
	xs: 'h-8 w-8',
	sm: 'h-11 w-11',
	md: 'h-16 w-16',
	lg: 'h-28 w-28',
	xl: 'h-36 w-36',
} as const;

type AvatarProps = Readonly<
	{ size?: keyof typeof sizes } & (
		| {
				src: string;
				alt: string;
				children?: undefined;
		  }
		| { children: ReactNode; src?: undefined; alt?: undefined }
	)
>;

export const Avatar = ({ size = 'sm', src, alt, children }: AvatarProps) => (
	<div
		className={twMerge(
			'relative overflow-hidden rounded-full',
			sizes[size],
			children &&
				'flex items-center justify-center bg-primary-400 font-medium text-white'
		)}
	>
		{src && <Image src={src} alt={alt} fill />}
		{children}
	</div>
);
