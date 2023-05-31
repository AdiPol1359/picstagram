import {
	createUserHandler,
	getUserByUsernameHandler,
	updateUserHandler,
} from './users.handlers';
import {
	createUserSchema,
	getUserByUsernameSchema,
	updateUserSchema,
	userSchema,
} from './users.schemas';

import { protectedProcedure, publicProcedure, router } from '@/server/trpc';

export const usersRouter = router({
	create: publicProcedure
		.input(createUserSchema)
		.output(userSchema)
		.mutation(({ input }) => createUserHandler(input)),
	update: protectedProcedure
		.input(updateUserSchema)
		.output(userSchema)
		.mutation(({ ctx, input }) => updateUserHandler(ctx, input)),
	getByUsername: publicProcedure
		.input(getUserByUsernameSchema)
		.output(userSchema)
		.query(({ ctx, input }) => getUserByUsernameHandler(ctx, input)),
});
