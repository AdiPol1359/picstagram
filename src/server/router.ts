import { followsRouter } from './modules/follows/follows.router';
import { usersRouter } from './modules/users/users.router';
import { router } from './trpc';

export const appRouter = router({
	users: usersRouter,
	follows: followsRouter,
});

export type AppRouter = typeof appRouter;
