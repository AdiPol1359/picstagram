import { z } from 'zod';

import { POST_DESCRIPTION_MAX_LENGTH } from '@/lib/constants';

export const createPostFormSchema = z.object({
	description: z
		.string()
		.nonempty('Please enter a post description')
		.max(POST_DESCRIPTION_MAX_LENGTH, 'Post can be up to 300 characters long')
		.trim(),
	images: z
		.custom<FileList>((value) => value instanceof FileList)
		.refine((files) => files.length > 0)
		.transform((files) => Array.from(files)),
});
