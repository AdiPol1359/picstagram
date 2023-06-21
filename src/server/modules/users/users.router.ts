import { z } from 'zod';

import {
	createUserHandler,
	getUserByUsernameHandler,
	searchUsersHandler,
	updateUserHandler,
} from './users.handlers';
import {
	createUserSchema,
	getUserByUsernameSchema,
	searchUsersSchema,
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
	search: publicProcedure
		.input(searchUsersSchema)
		.output(z.array(userSchema))
		.query(({ ctx, input }) => searchUsersHandler(ctx, input)),
});
