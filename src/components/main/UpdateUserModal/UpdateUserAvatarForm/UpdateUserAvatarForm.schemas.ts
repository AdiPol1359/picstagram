import { z } from 'zod';

export const updateUserAvatarFormSchema = z.object({
	file: z
		.custom<FileList>((value) => value instanceof FileList)
		.transform((files) => (files.length ? files[0] : null)),
});
