'use client';

import Link from 'next/link';
import { useState } from 'react';

import { ImagesSlider } from '../ImagesSlider';
import { LikeButton } from './LikeButton';

import { UserAvatar } from '@/components/common/UserAvatar';
import { formatNumber, pluralize } from '@/lib/utils/intl';

import type { Post } from '@/server/modules/posts/posts.schemas';

type SinglePostProps = Readonly<{
	post: Post;
}>;

const likesPluralize = pluralize('like', 'likes');

export const SinglePost = ({
	post: { id, description, images, author, like, statistics },
}: SinglePostProps) => {
	const [likes, setLikes] = useState(statistics.likes);
	const [isLike, setIsLike] = useState(like);

	const handleLikeChange = () => {
		setLikes((prev) => prev + (isLike ? -1 : 1));
		setIsLike((prev) => !prev);
	};

	return (
		<article className="space-y-2.5">
			<Link
				href={`/${author.username}`}
				className="flex w-fit items-center gap-x-2.5"
			>
				<UserAvatar user={author} />
				<p className="font-medium">{author.username}</p>
			</Link>
			<ImagesSlider images={images} />
			<LikeButton postId={id} isLike={isLike} onChange={handleLikeChange} />
			<p className="font-medium">
				{formatNumber(likes)} {likesPluralize(likes)}
			</p>
			<div className="whitespace-pre-line break-all">{description}</div>
		</article>
	);
};
