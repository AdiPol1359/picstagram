import { NextResponse } from 'next/server';

import { createImage, deleteImage } from '@/lib/services/cloudinary.service';
import { createJsonResponse, protectRoute } from '@/lib/utils/route';

export const POST = async (request: Request) => {
	const [err, session] = await protectRoute();

	if (err) return err;

	const data = await request.formData();
	const image = data.get('image');

	if (!(image instanceof Blob)) {
		return createJsonResponse({ message: 'Invalid image!' }, 400);
	}

	const { secure_url, eager } = await createImage(image, {
		publicId: session.user.id,
		eager: ['c_fill', 'h_150', 'w_150'],
	});

	const url = eager?.[0] ? eager[0].secure_url : secure_url;

	return NextResponse.json({ url });
};

export const DELETE = async () => {
	const [err, session] = await protectRoute();

	if (err) return err;

	await deleteImage(session.user.id);

	return createJsonResponse(undefined, 204);
};
