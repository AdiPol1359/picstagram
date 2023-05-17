import { z } from 'zod';

import {
	EMAIL_MAX_LENGTH,
	NAME_REGEX,
	PASSWORD_MAX_LENGTH,
	PASSWORD_MIN_LENGTH,
	USERNAME_REGEX,
} from '@/lib/constants';

import type { TypeOf } from 'zod';

export const userSchema = z.object({
	id: z.string(),
	username: z.string().nullable(),
	name: z.string().nullable(),
	image: z.string().nullable(),
	biography: z.string().nullable(),
	statistics: z.object({
		photos: z.number(),
		followers: z.number(),
		following: z.number(),
	}),
});

export const createUserSchema = z.object({
	username: z.string().regex(USERNAME_REGEX),
	name: z.string().regex(NAME_REGEX),
	email: z.string().email().max(EMAIL_MAX_LENGTH).trim().toLowerCase(),
	password: z.string().min(PASSWORD_MIN_LENGTH).max(PASSWORD_MAX_LENGTH),
});

export const getUserByUsernameSchema = z.object({
	username: z.string(),
});

export type User = TypeOf<typeof userSchema>;
export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type GetUserByUsernameInput = TypeOf<typeof getUserByUsernameSchema>;
