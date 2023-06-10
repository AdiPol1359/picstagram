import type { User } from './users.schemas';
import type { createUserSelect } from './users.utils';
import type { Prisma } from '@prisma/client';

type PrismaUser = Prisma.UserGetPayload<{
	select: ReturnType<typeof createUserSelect>;
}>;

export const mapPrismaUserToUser = (
	{
		id,
		name,
		email,
		username,
		image,
		biography,
		follower,
		_count: { post: posts, follower: followers, following },
	}: PrismaUser,
	{ self }: { self?: boolean } = {}
): User => ({
	id,
	name,
	username,
	image,
	biography,
	statistics: { posts, followers, following },
	...(self && { email }),
	...(!!follower && { follow: follower.length > 0 }),
});
