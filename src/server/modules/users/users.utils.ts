import crypto from 'node:crypto';

import type { Prisma } from '@prisma/client';

export const createUserSelect = ({
	followerId,
}: { followerId?: string } = {}) =>
	({
		id: true,
		name: true,
		email: true,
		username: true,
		password: true,
		image: true,
		biography: true,
		_count: { select: { follower: true, following: true } },
		...(followerId && { follower: { where: { followerId } } }),
	} satisfies Prisma.UserSelect);

export const generateUsername = ({ email }: { email: string }) =>
	`${email.split('@')[0]}-${crypto.randomBytes(3).toString('hex')}`;
