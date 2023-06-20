'use client';

import { LatestPostList } from './LatestPostList';

import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useGetLatestPosts } from '@/hooks/useGetLatestPosts';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export const LatestPosts = () => {
	const { posts, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
		useGetLatestPosts();

	const loading = isLoading || isFetchingNextPage;

	useInfiniteScroll(() => {
		if (!loading && hasNextPage) {
			fetchNextPage();
		}
	});

	return (
		<>
			<LatestPostList posts={posts} />
			{loading && <LoadingSpinner />}
		</>
	);
};
