import { TRPCError } from '@trpc/server';

import { mapPrismaPostToPost } from './posts.mapper';
import { getAllPostsByUsername, getPostById } from './posts.service';

import type { GetAllPostsInput, GetPostByIdInput } from './posts.schemas';

export const getAllPostsHandler = async ({ username }: GetAllPostsInput) => {
	const posts = await getAllPostsByUsername(username);

	return posts.map(mapPrismaPostToPost);
};

export const getPostByIdHandler = async ({
	id,
	username,
}: GetPostByIdInput) => {
	const post = await getPostById({ id, username });

	if (!post) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Post not found!',
		});
	}

	return mapPrismaPostToPost(post);
};
