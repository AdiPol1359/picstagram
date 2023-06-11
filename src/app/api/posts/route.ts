import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

import { POST_DESCRIPTION_MAX_LENGTH } from '@/lib/constants';
import { createImage } from '@/lib/services/cloudinary.service';
import { createJsonResponse, protectRoute } from '@/lib/utils/route';
import { mapPrismaPostToPost } from '@/server/modules/posts/posts.mapper';
import { createPost } from '@/server/modules/posts/posts.service';

const validateImages = (data: unknown): data is File[] =>
	Array.isArray(data) &&
	data.length > 0 &&
	data.every((item) => item instanceof Blob);

const validateDescription = (data: unknown): data is string =>
	typeof data === 'string' && data.length <= POST_DESCRIPTION_MAX_LENGTH + 9999;

export const POST = async (request: Request) => {
	const [err, session] = await protectRoute();

	if (err) return err;

	const data = await request.formData();

	const images = data.getAll('images');
	const description = data.get('description');

	if (!validateImages(images) || !validateDescription(description)) {
		return createJsonResponse({ message: 'Invalid payload!' }, 400);
	}

	const urls = await Promise.all(
		images.map((image) => createImage(image, { publicId: crypto.randomUUID() }))
	);

	const post = await createPost({
		description,
		images: urls.map(({ secure_url }) => secure_url),
		userId: session.user.id,
	});

	return NextResponse.json(mapPrismaPostToPost(post));
};
