import { useSession } from 'next-auth/react';

import { isTRPCClientError, trpc } from '@/lib/utils/trpc';

import type { User } from '@/server/modules/users/users.schemas';

interface UserPayload {
	readonly username?: string;
	readonly name?: string;
	readonly email?: string;
	readonly image?: string | null;
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
		{ username, name, email, image, biography }: UserPayload,
		{ onSuccess, onAlreadyExistsError }: Options = {}
	) => {
		mutate(
			{ username, name, email, image, biography },
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
