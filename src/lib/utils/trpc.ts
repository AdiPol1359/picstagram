import { createTRPCReact, TRPCClientError } from '@trpc/react-query';

import type { AppRouter } from '@/server/router';

export const getBaseUrl = () => {
	if (typeof window !== 'undefined') {
		return '';
	}

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	if (process.env.RENDER_INTERNAL_HOSTNAME) {
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
	}

	return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const isTRPCClientError = (
	cause: unknown
): cause is TRPCClientError<AppRouter> => cause instanceof TRPCClientError;

export const trpc = createTRPCReact<AppRouter>();
