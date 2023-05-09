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
});

export const createUserSchema = z.object({
	username: z.string().regex(USERNAME_REGEX),
	name: z.string().regex(NAME_REGEX),
	email: z.string().email().max(EMAIL_MAX_LENGTH).trim().toLowerCase(),
	password: z.string().min(PASSWORD_MIN_LENGTH).max(PASSWORD_MAX_LENGTH),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
