import { z } from 'zod';

import { BIOGRAPHY_REGEX } from '@/lib/constants';
import { simpleUserFormSchema } from '@/lib/schemas';

export const updateUserFormSchema = z
	.object({
		biography: z
			.string()
			.regex(
				BIOGRAPHY_REGEX,
				'Please use up to 40 characters per line and a maximum of 3 lines'
			)
			.trim()
			.transform((value) => value || null),
	})
	.merge(simpleUserFormSchema);
