import {
	createFollowHandler,
	deleteFollowHandler,
	getFollowersHandler,
	getFollowingHandler,
} from './follows.handlers';
import {
	createFollowSchema,
	deleteFollowSchema,
	followsSchema,
	getFollowsSchema,
} from './follows.schemas';

import { protectedProcedure, publicProcedure, router } from '@/server/trpc';

export const followsRouter = router({
	getFollowers: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ ctx, input }) => getFollowersHandler(ctx, input)),
	getFollowing: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ ctx, input }) => getFollowingHandler(ctx, input)),
	createFollow: protectedProcedure
		.input(createFollowSchema)
		.mutation(({ ctx, input }) => createFollowHandler(ctx, input)),
	deleteFollow: protectedProcedure
		.input(deleteFollowSchema)
		.mutation(({ ctx, input }) => deleteFollowHandler(ctx, input)),
});
