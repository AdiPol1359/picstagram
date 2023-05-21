import { TRPCError } from '@trpc/server';
import { notFound } from 'next/navigation';

import { createContext } from '@/server/context';
import { appRouter } from '@/server/router';

export const getUserByUsername = async (username: string) => {
	const caller = appRouter.createCaller(await createContext());

	try {
		return await caller.users.getByUsername({ username });
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			return notFound();
		}

		throw err;
	}
};
