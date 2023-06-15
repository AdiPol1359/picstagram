import type { Post } from './posts.schemas';
import type { select } from './posts.service';
import type { Prisma } from '@prisma/client';

export const mapPrismaPostToPost = ({
	id,
	description,
	image,
	user: { id: userId, image: userImage, username, name },
}: Prisma.PostGetPayload<{ select: typeof select }>): Post => ({
	id,
	description,
	images: image.map(({ url }) => url),
	author: {
		id: userId,
		image: userImage,
		username,
		name,
	},
});
