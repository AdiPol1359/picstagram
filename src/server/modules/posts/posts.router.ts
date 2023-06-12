import { z } from 'zod';

import { getAllPostsHandler, getPostByIdHandler } from './posts.handler';
import {
	getAllPostsSchema,
	getPostByIdSchema,
	postSchema,
} from './posts.schemas';

import { publicProcedure, router } from '@/server/trpc';

export const postsRouter = router({
	getAll: publicProcedure
		.input(getAllPostsSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getAllPostsHandler(input)),
	getById: publicProcedure
		.input(getPostByIdSchema)
		.output(postSchema)
		.query(({ input }) => getPostByIdHandler(input)),
});
