'use client';

import { PostList } from './PostList/PostList';

import { LoadingContent } from '@/components/common/LoadingContent';
import { useGetUserPosts } from '@/hooks/useGetUserPosts';

import type { User } from '@/server/modules/users/users.schemas';

type UserPostsProps = Readonly<{
	user: User;
}>;

export const UserPosts = ({ user: { username } }: UserPostsProps) => {
	const { posts, isLoading } = useGetUserPosts(username || '');

	return (
		<LoadingContent isLoading={isLoading}>
			<PostList posts={posts} />
		</LoadingContent>
	);
};
