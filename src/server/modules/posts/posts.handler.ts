import { mapPrismaPostToPost } from './posts.mapper';
import { getAllPostsByUsername } from './posts.service';

import type { GetAllPostsInput } from './posts.schemas';

export const getAllPostsHandler = async ({ username }: GetAllPostsInput) => {
	const posts = await getAllPostsByUsername(username);

	return posts.map(mapPrismaPostToPost);
};
