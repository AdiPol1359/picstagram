import type { Prisma } from '@prisma/client';

export const createPostSelect = (userId?: string) =>
	({
		id: true,
		description: true,
		image: {
			select: { id: true, url: true },
		},
		user: {
			select: {
				id: true,
				username: true,
				name: true,
				image: true,
			},
		},
		...(userId && { like: { where: { userId } } }),
		_count: { select: { like: true } },
	} satisfies Prisma.PostSelect);

export const getFileNameFromUrl = (url: string) =>
	url.match(/\/([^/]+)\.[\w]+$/)?.at(-1) || null;
