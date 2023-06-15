'use client';

import { UserPostList } from './UserPostList/UserPostList';

import { LoadingContent } from '@/components/common/LoadingContent';
import { useGetUserPosts } from '@/hooks/useGetUserPosts';

import type { User } from '@/server/modules/users/users.schemas';

type UserPostsProps = Readonly<{
	user: User;
}>;

export const UserPosts = ({ user: { username } }: UserPostsProps) => {
	const { posts, isLoading } = useGetUserPosts(username);

	return (
		<LoadingContent isLoading={isLoading}>
			<UserPostList posts={posts} />
		</LoadingContent>
	);
};
