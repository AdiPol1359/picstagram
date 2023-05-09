import { usersRouter } from './modules/users/users.router';
import { router } from './trpc';

export const appRouter = router({
	users: usersRouter,
});

export type AppRouter = typeof appRouter;
