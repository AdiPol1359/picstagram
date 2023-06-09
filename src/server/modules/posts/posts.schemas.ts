import { z } from 'zod';

import type { TypeOf } from 'zod';

export const postSchema = z.object({
	id: z.number(),
	description: z.string(),
	images: z.array(z.string()),
});

export type Post = TypeOf<typeof postSchema>;
