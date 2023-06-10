import type { Post } from './posts.schemas';
import type { select } from './posts.service';
import type { Prisma } from '@prisma/client';

export const mapPrismaPostToPost = ({
	id,
	description,
	image,
}: Prisma.PostGetPayload<{ select: typeof select }>): Post => ({
	id,
	description,
	images: image.map(({ url }) => url),
});
