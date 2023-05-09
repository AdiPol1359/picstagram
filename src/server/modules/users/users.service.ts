import { hash } from 'bcrypt';

import { prisma } from '@/lib/prisma';

export const createUser = async ({
	username,
	name,
	email,
	password,
}: {
	username: string;
	name: string;
	email: string;
	password: string;
}) =>
	prisma.user.create({
		data: { username, name, email, password: await hash(password, 10) },
	});
