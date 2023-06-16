import { createPostSelect } from './posts.utils';

import { prisma } from '@/lib/prisma';

export const getLatestPosts = (sessionUserId?: string) =>
	prisma.post.findMany({
		orderBy: { createdAt: 'desc' },
		select: createPostSelect(sessionUserId),
	});

export const getAllUserPosts = (username: string) =>
	prisma.post.findMany({
		where: { user: { username } },
		orderBy: { createdAt: 'desc' },
		select: createPostSelect(),
	});

export const getUserPostById = (
	id: number,
	user:
		| { id: string; username?: undefined }
		| { username: string; id?: undefined },
	sessionUserId?: string
) =>
	prisma.post.findFirst({
		where: { id, user },
		select: createPostSelect(sessionUserId),
	});

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
		select: createPostSelect(),
	});

export const deletePostById = (id: number) =>
	prisma.post.delete({ where: { id }, select: createPostSelect() });
