import { isTRPCClientError, trpc } from '@/lib/utils/trpc';

interface UserPayload {
	readonly username: string;
	readonly name: string;
	readonly email: string;
	readonly password: string;
}

interface Options {
	readonly onSuccess?: () => void;
	readonly onAlreadyExistsError?: (target?: string) => void;
	readonly onUnknownError?: () => void;
}

export const useCreateUser = () => {
	const createUserMutation = trpc.users.create.useMutation();

	const createUser = (
		{ username, name, email, password }: UserPayload,
		{ onSuccess, onAlreadyExistsError, onUnknownError }: Options = {}
	) => {
		createUserMutation.mutate(
			{ username, name, email, password },
			{
				onSuccess,
				onError: (err) => {
					if (isTRPCClientError(err)) {
						switch (err.data?.code) {
							case 'CONFLICT':
								onAlreadyExistsError?.(err.data?.target);
								break;
							default:
								onUnknownError?.();
						}
					}
				},
			}
		);
	};

	return { createUser, isLoading: createUserMutation.isLoading };
};
