'use client';

import { LatestPostList } from './LatestPostList';

import { LoadingContent } from '@/components/common/LoadingContent';
import { useGetLatestPosts } from '@/hooks/useGetLatestPosts';

export const LatestPosts = () => {
	const { posts, isLoading } = useGetLatestPosts();

	return (
		<LoadingContent isLoading={isLoading}>
			<LatestPostList posts={posts} />
		</LoadingContent>
	);
};
