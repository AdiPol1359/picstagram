import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';

export const createJsonResponse = (
	body: Record<string, unknown> | undefined,
	status: number
) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
		},
	});

export const protectRoute = async () => {
	const session = await getServerSession(authOptions);

	if (session) {
		return [null, session] as const;
	}

	return [createJsonResponse({ message: 'Unauthorized!' }, 401), null] as const;
};
