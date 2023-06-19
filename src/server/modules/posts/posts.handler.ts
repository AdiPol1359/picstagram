import { TRPCError } from '@trpc/server';

import { mapPrismaPostToPost } from './posts.mapper';
import {
	deletePostById,
	getAllUserPosts,
	getLatestPosts,
	getPostById,
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
	{ id }: GetPostByIdInput
) => {
	const post = await getPostById(id, session?.user.id);

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
	const post = await getPostById(id);

	if (post?.user.id !== session.user.id) {
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
