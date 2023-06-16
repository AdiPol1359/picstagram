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
		.query(({ ctx }) => getLatestPostsHandler(ctx)),
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
