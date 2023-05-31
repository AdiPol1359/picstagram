import { z } from 'zod';

import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_MAX_LENGTH,
	EMAIL_MAX_LENGTH_ERROR_MESSAGE,
	NAME_ERROR_MESSAGE,
	NAME_REGEX,
	PASSWORD_MAX_LENGTH,
	PASSWORD_MIN_LENGTH,
	USERNAME_ERROR_MESSAGE,
	USERNAME_REGEX,
} from '@/lib/constants';

const PASSWORD_MIN_LENGTH_ERROR_MESSAGE =
	'Password must be at least 6 characters long';
const PASSWORD_MAX_LENGTH_ERROR_MESSAGE =
	'Password can be up to 30 characters long';

export const signUpFormSchema = z
	.object({
		username: z.string().regex(USERNAME_REGEX, USERNAME_ERROR_MESSAGE),
		name: z.string().regex(NAME_REGEX, NAME_ERROR_MESSAGE),
		email: z
			.string()
			.email(EMAIL_ERROR_MESSAGE)
			.max(EMAIL_MAX_LENGTH, EMAIL_MAX_LENGTH_ERROR_MESSAGE)
			.trim()
			.toLowerCase(),
		password: z
			.string()
			.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
			.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR_MESSAGE),
		confirmPassword: z
			.string()
			.min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MESSAGE)
			.max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR_MESSAGE),
		acceptRules: z.literal(true, {
			errorMap: () => ({ message: 'Please accept the terms and conditions' }),
		}),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords are not the same',
		path: ['confirmPassword'],
	});
