import { prisma } from '@/lib/prisma';

export const createLike = ({
	postId,
	userId,
}: {
	postId: number;
	userId: string;
}) => prisma.like.create({ data: { postId, userId } });

export const deleteLike = ({
	postId,
	userId,
}: {
	postId: number;
	userId: string;
}) => prisma.like.delete({ where: { postId_userId: { postId, userId } } });
