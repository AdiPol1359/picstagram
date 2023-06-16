import { TRPCError } from '@trpc/server';
import { notFound } from 'next/navigation';

import { createContext } from '@/server/context';
import { appRouter } from '@/server/router';

export const parsePostQuery = (query: string | string[] | undefined) => {
	if (!query) {
		return null;
	}

	return Number(Array.isArray(query) ? query[0] : query);
};

export const getPostById = async ({
	id,
	username,
}: {
	id: number;
	username: string;
}) => {
	const caller = appRouter.createCaller(await createContext());

	try {
		return await caller.posts.getById({ id, username });
	} catch (err) {
		if (err instanceof TRPCError && err.code === 'NOT_FOUND') {
			throw notFound();
		}

		throw err;
	}
};
