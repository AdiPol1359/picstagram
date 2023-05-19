import { mapPrismaUserToUser } from '../users/users.mapper';
import { getFollows } from './follows.service';

import type { GetFollowsInput } from './follows.schemas';

export const getFollowersHandler = async ({ userId }: GetFollowsInput) => {
	const follows = await getFollows({ followingId: userId });
	const followers = follows.map(({ follower }) => follower).filter(Boolean);

	return followers.map(mapPrismaUserToUser);
};

export const getFollowingHandler = async ({ userId }: GetFollowsInput) => {
	const follows = await getFollows({ followerId: userId });
	const following = follows.map(({ following }) => following).filter(Boolean);

	return following.map(mapPrismaUserToUser);
};
