import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type AvatarProps = Readonly<
	| {
			src: string;
			alt: string;
			children?: undefined;
	  }
	| { children: ReactNode; src?: undefined; alt?: undefined }
>;

export const Avatar = ({ src, alt, children }: AvatarProps) => (
	<div
		className={twMerge(
			'relative h-11 w-11 overflow-hidden rounded-full',
			children &&
				'flex items-center justify-center bg-primary-400 font-medium text-white'
		)}
	>
		{src && <Image src={src} alt={alt} fill />}
		{children}
	</div>
);
