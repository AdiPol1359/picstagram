import { makeApi, Zodios } from '@zodios/core';
import { z } from 'zod';

import { postSchema } from '@/server/modules/posts/posts.schemas';

const api = makeApi([
	{
		method: 'post',
		path: '/',
		alias: 'createPost',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				schema: z.instanceof(FormData),
			},
		],
		response: postSchema,
	},
]);

const client = new Zodios('/api/posts', api);

export const createPost = ({
	description,
	images,
}: {
	description: string;
	images: Blob[];
}) => {
	const formData = new FormData();

	formData.append('description', description);

	images.forEach((image) => {
		formData.append('images', image);
	});

	return client.createPost(formData);
};
