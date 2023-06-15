import { z } from 'zod';

import {
	deletePostByIdHandler,
	getAllPostsHandler,
	getLatestPostsHandler,
	getPostByIdHandler,
} from './posts.handler';
import {
	deletePostByIdSchema,
	getAllPostsSchema,
	getPostByIdSchema,
	postSchema,
} from './posts.schemas';

import { protectedProcedure, publicProcedure, router } from '@/server/trpc';

export const postsRouter = router({
	getLatest: publicProcedure
		.output(z.array(postSchema))
		.query(() => getLatestPostsHandler()),
	getAll: publicProcedure
		.input(getAllPostsSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getAllPostsHandler(input)),
	getById: publicProcedure
		.input(getPostByIdSchema)
		.output(postSchema)
		.query(({ input }) => getPostByIdHandler(input)),
	deleteById: protectedProcedure
		.input(deletePostByIdSchema)
		.output(postSchema)
		.mutation(({ ctx, input }) => deletePostByIdHandler(ctx, input)),
});
