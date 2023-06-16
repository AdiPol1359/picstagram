import { TRPCError } from '@trpc/server';

import { mapPrismaPostToPost } from './posts.mapper';
import {
	deletePostById,
	getAllUserPosts,
	getLatestPosts,
	getUserPostById,
} from './posts.service';
import { getFileNameFromUrl } from './posts.utils';

import { deleteImage } from '@/lib/services/cloudinary.service';

import type {
	DeletePostByIdInput,
	GetAllPostsInput,
	GetPostByIdInput,
} from './posts.schemas';

import type { Context, ProtectedContext } from '@/server/context';

export const getLatestPostsHandler = async ({ session }: Context) => {
	const posts = await getLatestPosts(session?.user.id);

	return posts.map(mapPrismaPostToPost);
};

export const getAllPostsHandler = async ({ username }: GetAllPostsInput) => {
	const posts = await getAllUserPosts(username);

	return posts.map(mapPrismaPostToPost);
};

export const getPostByIdHandler = async (
	{ session }: Context,
	{ id, username }: GetPostByIdInput
) => {
	const post = await getUserPostById(id, { username }, session?.user.id);

	if (!post) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Post not found!',
		});
	}

	return mapPrismaPostToPost(post);
};

export const deletePostByIdHandler = async (
	{ session }: ProtectedContext,
	{ id }: DeletePostByIdInput
) => {
	const post = await getUserPostById(id, { id: session.user.id });

	if (!post) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Post not found!',
		});
	}

	const names = post.image
		.map(({ url }) => getFileNameFromUrl(url))
		.filter(Boolean);

	await Promise.all(names.map(deleteImage));
	await deletePostById(id);

	return mapPrismaPostToPost(post);
};
