import type { Post } from './posts.schemas';
import type { createPostSelect } from './posts.utils';
import type { Prisma } from '@prisma/client';

export const mapPrismaPostToPost = ({
	id,
	description,
	image,
	like,
	createdAt,
	_count,
	user: { id: userId, image: userImage, username, name },
}: Prisma.PostGetPayload<{
	select: ReturnType<typeof createPostSelect>;
}>): Post => ({
	id,
	description,
	createdAt: createdAt.toISOString(),
	images: image.map(({ url }) => url),
	like: Boolean(like?.length),
	author: {
		id: userId,
		image: userImage,
		username,
		name,
	},
	statistics: {
		likes: _count.like,
	},
});
