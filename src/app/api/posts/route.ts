import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

import { createImage } from '@/lib/services/cloudinary.service';
import { createJsonResponse, protectRoute } from '@/lib/utils/route';
import { mapPrismaPostToPost } from '@/server/modules/posts/posts.mapper';
import { createPostSchema } from '@/server/modules/posts/posts.schemas';
import { createPost } from '@/server/modules/posts/posts.service';

export const POST = async (request: Request) => {
	const [err, session] = await protectRoute();

	if (err) return err;

	const data = await request.formData();
	const result = await createPostSchema.safeParseAsync({
		description: data.get('description'),
		images: data.getAll('images'),
	});

	if (!result.success) {
		return createJsonResponse({ message: 'Invalid payload!' }, 400);
	}

	const { description, images } = result.data;

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
