import { z } from 'zod';

import { simpleUserFormSchema } from '@/lib/schemas';

export const updateUserFormSchema = z
	.object({
		biography: z
			.string()
			.trim()
			.nullable()
			.transform((value) => value || null),
	})
	.merge(simpleUserFormSchema);
