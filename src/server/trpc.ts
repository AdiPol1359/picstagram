import { initTRPC } from '@trpc/server';

import { isPrismaError } from '@/lib/utils/prisma-errors';

import type { Context } from './context';

const t = initTRPC.context<Context>().create({
	errorFormatter: ({ shape, error }) => ({
		...shape,
		data: {
			...shape.data,
			...(isPrismaError(error.cause) && {
				target: error.cause.meta?.target[0],
			}),
		},
	}),
});

export const router = t.router;
export const publicProcedure = t.procedure;
