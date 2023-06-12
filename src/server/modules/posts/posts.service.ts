import { prisma } from '@/lib/prisma';

import type { Prisma } from '@prisma/client';

export const select = {
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
		},
	},
} satisfies Prisma.PostSelect;

export const getAllPostsByUsername = (username: string) =>
	prisma.post.findMany({
		where: { user: { username } },
		orderBy: { createdAt: 'desc' },
		select,
	});

export const getPostById = ({
	id,
	username,
}: {
	id: number;
	username: string;
}) => prisma.post.findFirst({ where: { id, user: { username } }, select });

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
