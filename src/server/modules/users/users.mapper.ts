import type { User } from './users.schemas';
import type { createUserSelect } from './users.utils';
import type { Prisma } from '@prisma/client';

type PrismaUser = Prisma.UserGetPayload<{
	select: ReturnType<typeof createUserSelect>;
}>;

export const mapPrismaUserToUser = ({
	id,
	name,
	username,
	image,
	biography,
	follower,
	_count: { follower: followers, following },
}: PrismaUser): User => ({
	id,
	name,
	username,
	image,
	biography,
	statistics: { followers, following, photos: 0 },
	...(!!follower && { follow: follower.length > 0 }),
});
