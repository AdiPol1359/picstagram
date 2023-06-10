import { followsRouter } from './modules/follows/follows.router';
import { postsRouter } from './modules/posts/posts.router';
import { usersRouter } from './modules/users/users.router';
import { router } from './trpc';

export const appRouter = router({
	users: usersRouter,
	follows: followsRouter,
	posts: postsRouter,
});

export type AppRouter = typeof appRouter;
