import { select } from '../users/users.service';

import { prisma } from '@/lib/prisma';

export const getFollows = (where: {
	followerId?: string;
	followingId?: string;
}) =>
	prisma.usersFollows.findMany({
		where,
		select: {
			...(where.followerId && { following: { select } }),
			...(where.followingId && { follower: { select } }),
		},
	});
