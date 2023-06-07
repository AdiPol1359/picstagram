import { makeApi, Zodios } from '@zodios/core';
import { z } from 'zod';

import { env } from '../env.mjs';
import { createSignature } from '../utils/cloudinary';

const api = makeApi([
	{
		method: 'post',
		path: '/image/upload',
		alias: 'createImage',
		parameters: [
			{
				type: 'Body',
				name: 'body',
				schema: z.instanceof(FormData),
			},
		],
		response: z.object({
			secure_url: z.string(),
			eager: z
				.array(
					z.object({
						secure_url: z.string(),
					})
				)
				.optional(),
		}),
	},
	{
		method: 'post',
		path: '/image/destroy',
		alias: 'deleteImage',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: z.object({
					timestamp: z.string(),
					public_id: z.string(),
					api_key: z.string(),
					signature: z.string(),
				}),
			},
		],
		response: z.object({
			result: z.union([z.literal('ok'), z.literal('not found')]),
		}),
	},
]);

const client = new Zodios(
	`https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}`,
	api
);

export const createImage = (
	file: Blob,
	{ publicId, eager }: { publicId: string; eager?: string[] }
) => {
	const timestamp = Date.now().toString();
	const formData = new FormData();

	formData.append('file', file);
	formData.append('public_id', publicId);
	formData.append('timestamp', timestamp);
	formData.append('api_key', env.CLOUDINARY_API_KEY);
	formData.append(
		'signature',
		createSignature({
			publicId,
			timestamp,
			secret: env.CLOUDINARY_API_SECRET,
			eager: eager?.join(','),
		})
	);

	eager && formData.append('eager', eager.join(','));

	return client.createImage(formData);
};

export const deleteImage = (publicId: string) => {
	const timestamp = Date.now().toString();

	return client.deleteImage({
		timestamp,
		public_id: publicId,
		api_key: env.CLOUDINARY_API_KEY,
		signature: createSignature({
			timestamp,
			publicId,
			secret: env.CLOUDINARY_API_SECRET,
		}),
	});
};
