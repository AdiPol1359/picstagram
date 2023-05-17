import { createUserHandler, getUserByUsernameHandler } from './users.handlers';
import {
	createUserSchema,
	getUserByUsernameSchema,
	userSchema,
} from './users.schemas';

import { publicProcedure, router } from '@/server/trpc';

export const usersRouter = router({
	create: publicProcedure
		.input(createUserSchema)
		.output(userSchema)
		.mutation(({ input }) => createUserHandler(input)),
	getByUsername: publicProcedure
		.input(getUserByUsernameSchema)
		.output(userSchema)
		.query(({ input }) => getUserByUsernameHandler(input)),
});
