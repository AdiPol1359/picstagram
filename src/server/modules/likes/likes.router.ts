import { createLikeHandler, deleteLikeHandler } from './likes.handler';
import { createLikeSchema, deleteLikeSchema } from './likes.schemas';

import { protectedProcedure, router } from '@/server/trpc';

export const likesRouter = router({
	create: protectedProcedure
		.input(createLikeSchema)
		.mutation(({ ctx, input }) => createLikeHandler(ctx, input)),
	delete: protectedProcedure
		.input(deleteLikeSchema)
		.mutation(({ ctx, input }) => deleteLikeHandler(ctx, input)),
});
