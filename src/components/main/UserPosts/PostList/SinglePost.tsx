import Image from 'next/image';
import { AiFillHeart, AiFillMessage } from 'react-icons/ai';
import { TbLayersSubtract } from 'react-icons/tb';

import { formatNumber } from '@/lib/utils/intl';

import type { ReactNode } from 'react';

import type { Post } from '@/server/modules/posts/posts.schemas';

const Statistic = ({ icon, value }: { icon: ReactNode; value: number }) => (
	<div className="flex items-center gap-x-1.5 text-xl">
		{icon}
		{formatNumber(value)}
	</div>
);

type SinglePostProps = Readonly<{
	post: Post;
}>;

export const SinglePost = ({
	post: { description, images },
}: SinglePostProps) => (
	<article className="group relative aspect-square overflow-hidden rounded-md">
		<Image src={images[0]} alt={description} className="object-cover" fill />
		{images.length > 1 && (
			<TbLayersSubtract className="absolute right-3 top-2.5 text-xl text-white" />
		)}
		<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-x-5 bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
			<Statistic icon={<AiFillHeart />} value={0} />
			<Statistic icon={<AiFillMessage />} value={0} />
		</div>
	</article>
);
