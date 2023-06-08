import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { authOptions } from '../auth/[...nextauth]/auth-options';

import { createImage, deleteImage } from '@/lib/services/cloudinary.service';

const createJsonResponse = (
	body: Record<string, unknown> | undefined,
	status: number
) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json',
		},
	});

export const POST = async (request: Request) => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return createJsonResponse({ message: 'Unauthorized!' }, 401);
	}

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
	const session = await getServerSession(authOptions);

	if (!session) {
		return createJsonResponse({ message: 'Unauthorized!' }, 401);
	}

	await deleteImage(session.user.id);

	return createJsonResponse(undefined, 204);
};
