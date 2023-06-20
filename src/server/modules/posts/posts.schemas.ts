import { z } from 'zod';

import { POST_DESCRIPTION_MAX_LENGTH } from '@/lib/constants';

import type { TypeOf } from 'zod';

export const postSchema = z.object({
	id: z.number(),
	description: z.string(),
	createdAt: z.string(),
	images: z.array(z.string()),
	like: z.boolean(),
	author: z.object({
		id: z.string(),
		username: z.string().nullable(),
		name: z.string().nullable(),
		image: z.string().nullable(),
	}),
	statistics: z.object({
		likes: z.number(),
	}),
});

export const latestPostsSchema = z.object({
	items: z.array(postSchema),
	nextCursor: z.number().nullable(),
});

export const getLatestPostsSchema = z.object({
	limit: z.number().min(1).max(100).optional().default(3),
	cursor: z.number().optional(),
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
});

export const deletePostByIdSchema = z.object({
	id: z.number(),
});

export type Post = TypeOf<typeof postSchema>;
export type GetLatestPostsInput = TypeOf<typeof getLatestPostsSchema>;
export type GetAllPostsInput = TypeOf<typeof getAllPostsSchema>;
export type GetPostByIdInput = TypeOf<typeof getPostByIdSchema>;
export type DeletePostByIdInput = TypeOf<typeof deletePostByIdSchema>;
