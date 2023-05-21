import { createUserSelect } from '../users/users.utils';

import { prisma } from '@/lib/prisma';

export const getFollows = (
	{
		followerId,
		followingId,
	}: {
		followerId?: string;
		followingId?: string;
	},
	sessionUserId?: string
) =>
	prisma.usersFollows.findMany({
		where: {
			followerId: followerId,
			followingId: followingId,
		},
		select: {
			...(followerId && {
				following: { select: createUserSelect({ followerId: sessionUserId }) },
			}),
			...(followingId && {
				follower: { select: createUserSelect({ followerId: sessionUserId }) },
			}),
		},
	});

export const createFollow = ({
	followerId,
	followingId,
}: {
	followerId: string;
	followingId: string;
}) => prisma.usersFollows.create({ data: { followerId, followingId } });

export const deleteFollow = ({
	followerId,
	followingId,
}: {
	followerId: string;
	followingId: string;
}) =>
	prisma.usersFollows.delete({
		where: { followerId_followingId: { followerId, followingId } },
	});
