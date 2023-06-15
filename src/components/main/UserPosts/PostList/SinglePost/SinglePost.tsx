import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart, AiFillMessage } from 'react-icons/ai';
import { TbLayersSubtract } from 'react-icons/tb';

import { DeletePostButton } from './DeletePostButton';
import { StatisticItem } from './StatisticItem';

import type { Post } from '@/server/modules/posts/posts.schemas';

type SinglePostProps = Readonly<{
	post: Post;
}>;

export const SinglePost = ({ post }: SinglePostProps) => {
	const {
		id,
		images,
		description,
		author: { username },
	} = post;

	return (
		<article className="group relative aspect-square overflow-hidden rounded-md">
			<DeletePostButton post={post} />
			<Link href={{ pathname: `/${username}`, query: { post: id } }}>
				<Image
					src={images[0]}
					alt={description.substring(0, 10)}
					className="object-cover"
					fill
				/>
				{images.length > 1 && (
					<TbLayersSubtract className="absolute right-3 top-2.5 text-xl text-white" />
				)}
				<ul className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-x-7 bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
					<StatisticItem icon={<AiFillHeart />} value={0} />
					<StatisticItem icon={<AiFillMessage />} value={0} />
				</ul>
			</Link>
		</article>
	);
};
