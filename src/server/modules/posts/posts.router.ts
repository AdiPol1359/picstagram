import { z } from 'zod';

import { getAllPostsHandler } from './posts.handler';
import { getAllPostsSchema, postSchema } from './posts.schemas';

import { publicProcedure, router } from '@/server/trpc';

export const postsRouter = router({
	getAll: publicProcedure
		.input(getAllPostsSchema)
		.output(z.array(postSchema))
		.query(({ input }) => getAllPostsHandler(input)),
});
