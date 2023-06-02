import { z } from 'zod';

import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_MAX_LENGTH,
	EMAIL_MAX_LENGTH_ERROR_MESSAGE,
	NAME_ERROR_MESSAGE,
	NAME_REGEX,
	USERNAME_ERROR_MESSAGE,
	USERNAME_REGEX,
} from '@/lib/constants';

export const simpleUserFormSchema = z.object({
	username: z.string().regex(USERNAME_REGEX, USERNAME_ERROR_MESSAGE),
	name: z.string().regex(NAME_REGEX, NAME_ERROR_MESSAGE),
	email: z
		.string()
		.email(EMAIL_ERROR_MESSAGE)
		.max(EMAIL_MAX_LENGTH, EMAIL_MAX_LENGTH_ERROR_MESSAGE)
		.trim()
		.toLowerCase(),
});
