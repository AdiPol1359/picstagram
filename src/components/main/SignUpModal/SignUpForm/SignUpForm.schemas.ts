import { z } from 'zod';

import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@/lib/constants';
import { simpleUserFormSchema } from '@/lib/schemas';

const PASSWORD_MIN_LENGTH_ERROR_MESSAGE =
	'Password must be at least 6 characters long';
const PASSWORD_MAX_LENGTH_ERROR_MESSAGE =
	'Password can be up to 30 characters long';

export const signUpFormSchema = z
	.object({
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
	.merge(simpleUserFormSchema)
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords are not the same',
		path: ['confirmPassword'],
	});
