import { prisma } from '@/lib/prisma';

import type { Prisma } from '@prisma/client';

export const select = {
	id: true,
	description: true,
	image: {
		select: { id: true, url: true },
	},
} satisfies Prisma.PostSelect;

export const createPost = ({
	description,
	userId,
	images,
}: {
	description: string;
	userId: string;
	images: string[];
}) =>
	prisma.post.create({
		data: {
			description,
			userId,
			image: {
				createMany: {
					data: images.map((url) => ({ url })),
				},
			},
		},
		select,
	});
