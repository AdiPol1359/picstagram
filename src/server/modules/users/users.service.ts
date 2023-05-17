import { compare, hash } from 'bcrypt';

import { prisma } from '@/lib/prisma';

import type { Prisma } from '@prisma/client';

export const select = {
	id: true,
	name: true,
	username: true,
	password: true,
	image: true,
	biography: true,
	_count: { select: { follower: true, following: true } },
} satisfies Prisma.UserSelect;

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
		select,
	});

export const getUserByCredentials = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const user = await prisma.user.findUnique({ where: { email }, select });

	if (!user?.password || !(await compare(password, user.password))) {
		return null;
	}

	return user;
};

export const getUserByUsername = (username: string) =>
	prisma.user.findUnique({ where: { username }, select });
