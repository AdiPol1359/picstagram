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

	const { username } = session.user;

	if (!username) {
		return createJsonResponse({ message: 'Username not found!' }, 404);
	}

	const { secure_url } = await createImage(image, username);

	return NextResponse.json({ url: secure_url });
};

export const DELETE = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return createJsonResponse({ message: 'Unauthorized!' }, 401);
	}

	const { username } = session.user;

	if (!username) {
		return createJsonResponse({ message: 'Username not found!' }, 404);
	}

	await deleteImage(username);

	return createJsonResponse(undefined, 204);
};