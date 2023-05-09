import { TRPCError } from '@trpc/server';

import { createUser } from './users.service';

import { isPrismaError, prismaErrors } from '@/lib/prisma-errors';

import type { CreateUserInput } from './users.schemas';

export const createUserHandler = async ({
	username,
	name,
	email,
	password,
}: CreateUserInput) => {
	try {
		return await createUser({ username, name, email, password });
	} catch (err) {
		if (isPrismaError(err, prismaErrors.UniqueKeyViolation)) {
			throw new TRPCError({
				code: 'CONFLICT',
				message: 'User already exists!',
				cause: err,
			});
		}

		throw err;
	}
};
