import { z } from 'zod';

import { POST_DESCRIPTION_MAX_LENGTH } from '@/lib/constants';

import type { TypeOf } from 'zod';

export const postSchema = z.object({
	id: z.number(),
	description: z.string(),
	images: z.array(z.string()),
	author: z.object({
		id: z.string(),
		username: z.string().nullable(),
		name: z.string().nullable(),
	}),
});

export const createPostSchema = z.object({
	description: z.string().nonempty().max(POST_DESCRIPTION_MAX_LENGTH).trim(),
	images: z.array(z.custom<File>((value) => value instanceof Blob)),
});

export const getAllPostsSchema = z.object({
	username: z.string(),
});

export const getPostByIdSchema = z.object({
	id: z.number(),
	username: z.string(),
});

export type Post = TypeOf<typeof postSchema>;
export type GetAllPostsInput = TypeOf<typeof getAllPostsSchema>;
export type GetPostByIdInput = TypeOf<typeof getPostByIdSchema>;
