import { z } from 'zod';

import {
	NAME_ERROR_MESSAGE,
	NAME_REGEX,
	USERNAME_ERROR_MESSAGE,
	USERNAME_REGEX,
} from '@/lib/constants';

export const updateUserFormSchema = z.object({
	username: z.string().regex(USERNAME_REGEX, USERNAME_ERROR_MESSAGE),
	name: z.string().regex(NAME_REGEX, NAME_ERROR_MESSAGE),
	biography: z
		.string()
		.trim()
		.nullable()
		.transform((value) => value || null),
});
