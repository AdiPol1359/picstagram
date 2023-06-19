import { TRPCError } from '@trpc/server';
import { notFound } from 'next/navigation';

import { createContext } from '@/server/context';
import { appRouter } from '@/server/router';

export const getPostById = async (id: number) => {
	const caller = appRouter.createCaller(await createContext());

	try {
		return await caller.posts.getById({ id });
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound();
		}

		throw err;
	}
};
