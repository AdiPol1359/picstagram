import { makeApi, Zodios } from '@zodios/core';
import { z } from 'zod';

const api = makeApi([
	{
		method: 'post',
		path: '/',
		alias: 'createAvatar',
		parameters: [
			{ type: 'Body', name: 'body', schema: z.instanceof(FormData) },
		],
		response: z.object({ url: z.string() }),
	},
	{
		method: 'delete',
		path: '/',
		alias: 'deleteAvatar',
		response: z.string(),
	},
]);

const client = new Zodios('/api/avatars', api);

export const createAvatar = (image: Blob) => {
	const formData = new FormData();

	formData.append('image', image);

	return client.createAvatar(formData);
};

export const deleteAvatar = () => client.deleteAvatar(undefined);
