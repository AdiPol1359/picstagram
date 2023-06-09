import { mapPrismaUserToUser } from '../users/users.mapper';
import { createFollow, deleteFollow, getFollows } from './follows.service';

import type {
	CreateFollowInput,
	DeleteFollowInput,
	GetFollowsInput,
} from './follows.schemas';

import type { Context, ProtectedContext } from '@/server/context';

export const getFollowersHandler = async (
	{ session }: Context,
	{ userId }: GetFollowsInput
) => {
	const follows = await getFollows(
		{
			followingId: userId,
		},
		session?.user.id
	);
	const followers = follows.map(({ follower }) => follower).filter(Boolean);

	return followers.map((user) => mapPrismaUserToUser(user));
};

export const getFollowingHandler = async (
	{ session }: Context,
	{ userId }: GetFollowsInput
) => {
	const follows = await getFollows(
		{
			followerId: userId,
		},
		session?.user.id
	);
	const following = follows.map(({ following }) => following).filter(Boolean);

	return following.map((user) => mapPrismaUserToUser(user));
};

export const createFollowHandler = async (
	{ session }: ProtectedContext,
	{ userId }: CreateFollowInput
) => {
	await createFollow({ followerId: session.user.id, followingId: userId });
};

export const deleteFollowHandler = async (
	{ session }: ProtectedContext,
	{ userId }: DeleteFollowInput
) => {
	await deleteFollow({ followerId: session.user.id, followingId: userId });
};
