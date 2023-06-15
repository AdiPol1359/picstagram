import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';

import { ImagesSlider } from './ImagesSlider';

import { UserAvatar } from '@/components/common/UserAvatar';
import { IconButton } from '@/components/ui/IconButton/IconButton';

import type { Post } from '@/server/modules/posts/posts.schemas';

type SinglePostProps = Readonly<{
	post: Post;
}>;

export const SinglePost = ({
	post: { id, description, images, author },
}: SinglePostProps) => (
	<article className="space-y-2.5">
		<Link
			href={`/${author.username}`}
			className="flex w-fit items-center gap-x-2.5"
		>
			<UserAvatar user={author} />
			<p className="font-medium">{author.username}</p>
		</Link>
		<ImagesSlider images={images} />
		<div className="text-xl">
			<IconButton icon={<AiOutlineHeart />} label={`Like #${id} post`} />
		</div>
		<p className="font-medium">0 likes</p>
		<div className="whitespace-pre-line break-all">{description}</div>
	</article>
);
