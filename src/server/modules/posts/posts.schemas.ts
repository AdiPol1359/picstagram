import { z } from 'zod';

import type { TypeOf } from 'zod';

export const postSchema = z.object({
	id: z.number(),
	description: z.string(),
	images: z.array(z.string()),
});

export const getAllPostsSchema = z.object({
	username: z.string(),
});

export type Post = TypeOf<typeof postSchema>;
export type GetAllPostsInput = TypeOf<typeof getAllPostsSchema>;
