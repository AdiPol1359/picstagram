import type { User } from './users.schemas';
import type { select } from './users.service';
import type { Prisma } from '@prisma/client';

type PrismaUser = Prisma.UserGetPayload<{ select: typeof select }>;

export const mapPrismaUserToUser = ({
	id,
	name,
	username,
	image,
	biography,
	_count: { follower: followers, following },
}: PrismaUser): User => ({
	id,
	name,
	username,
	image,
	biography,
	statistics: { followers, following, photos: 0 },
});
