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
	getLatestPostsSchema,
	getPostByIdSchema,
	latestPostsSchema,
	postSchema,
} from './posts.schemas';

import { protectedProcedure, publicProcedure, router } from '@/server/trpc';

export const postsRouter = router({
	getLatest: publicProcedure
		.input(getLatestPostsSchema)
		.output(latestPostsSchema)
		.query(({ ctx, input }) => getLatestPostsHandler(ctx, input)),
	getAll: publicProcedure
		.input(getAllPostsSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getAllPostsHandler(input)),
	getById: publicProcedure
		.input(getPostByIdSchema)
		.output(postSchema)
		.query(({ ctx, input }) => getPostByIdHandler(ctx, input)),
	deleteById: protectedProcedure
		.input(deletePostByIdSchema)
		.output(postSchema)
		.mutation(({ ctx, input }) => deletePostByIdHandler(ctx, input)),
});
