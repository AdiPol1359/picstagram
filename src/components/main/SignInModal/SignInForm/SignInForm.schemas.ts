import { z } from 'zod';

import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_MAX_LENGTH,
	EMAIL_MAX_LENGTH_ERROR_MESSAGE,
	USERNAME_ERROR_MESSAGE,
	USERNAME_REGEX,
} from '@/lib/constants';

export const signInFormSchema = z.object({
	username: z.union([
		z.string().regex(USERNAME_REGEX, USERNAME_ERROR_MESSAGE),
		z
			.string()
			.email(EMAIL_ERROR_MESSAGE)
			.max(EMAIL_MAX_LENGTH, EMAIL_MAX_LENGTH_ERROR_MESSAGE)
			.trim()
			.toLowerCase(),
	]),
	password: z.string().nonempty(),
});
