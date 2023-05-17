import { TRPCError } from '@trpc/server';

import { mapPrismaUserToUser } from './users.mapper';
import { createUser, getUserByUsername } from './users.service';

import { isPrismaError, prismaErrors } from '@/lib/utils/prisma-errors';

import type { CreateUserInput, GetUserByUsernameInput } from './users.schemas';

export const createUserHandler = async ({
	username,
	name,
	email,
	password,
}: CreateUserInput) => {
	try {
		return mapPrismaUserToUser(
			await createUser({ username, name, email, password })
		);
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

export const getUserByUsernameHandler = async ({
	username,
}: GetUserByUsernameInput) => {
	const user = await getUserByUsername(username);

	if (!user) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'User not found!',
		});
	}

	return mapPrismaUserToUser(user);
};
