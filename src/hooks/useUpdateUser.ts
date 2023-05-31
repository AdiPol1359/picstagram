import { useSession } from 'next-auth/react';

import { isTRPCClientError, trpc } from '@/lib/utils/trpc';

import type { User } from '@/server/modules/users/users.schemas';

interface UserPayload {
	readonly username?: string;
	readonly name?: string;
	readonly biography?: string | null;
}

interface Options {
	readonly onSuccess?: (user: User) => void;
	readonly onAlreadyExistsError?: (target?: string) => void;
}

export const useUpdateUser = () => {
	const { update } = useSession();
	const { mutate, isLoading } = trpc.users.update.useMutation();

	const updateUser = (
		{ username, name, biography }: UserPayload,
		{ onSuccess, onAlreadyExistsError }: Options = {}
	) => {
		mutate(
			{ username, name, biography },
			{
				onSuccess: async (user) => {
					await update(user);
					onSuccess?.(user);
				},
				onError: (err) => {
					if (isTRPCClientError(err)) {
						switch (err.data?.code) {
							case 'CONFLICT':
								onAlreadyExistsError?.(err.data.target);
								break;
						}
					}
				},
			}
		);
	};

	return { updateUser, isLoading };
};
