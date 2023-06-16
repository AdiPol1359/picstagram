import { z } from 'zod';

import type { TypeOf } from 'zod';

export const createLikeSchema = z.object({
	postId: z.number(),
});

export const deleteLikeSchema = z.object({
	postId: z.number(),
});

export type CreateLikeInput = TypeOf<typeof createLikeSchema>;
export type DeleteLikeInput = TypeOf<typeof deleteLikeSchema>;
