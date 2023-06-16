import { createLike, deleteLike } from './likes.service';

import type { CreateLikeInput, DeleteLikeInput } from './likes.schemas';

import type { ProtectedContext } from '@/server/context';

export const createLikeHandler = async (
	{ session }: ProtectedContext,
	{ postId }: CreateLikeInput
) => {
	await createLike({ postId, userId: session.user.id });
};

export const deleteLikeHandler = async (
	{ session }: ProtectedContext,
	{ postId }: DeleteLikeInput
) => {
	await deleteLike({ postId, userId: session.user.id });
};
