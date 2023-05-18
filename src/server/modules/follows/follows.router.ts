import { getFollowersHandler, getFollowingHandler } from './follows.handlers';
import { followsSchema, getFollowsSchema } from './follows.schemas';

import { publicProcedure, router } from '@/server/trpc';

export const followsRouter = router({
	getFollowers: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ input }) => getFollowersHandler(input)),
	getFollowing: publicProcedure
		.input(getFollowsSchema)
		.output(followsSchema)
		.query(({ input }) => getFollowingHandler(input)),
});
