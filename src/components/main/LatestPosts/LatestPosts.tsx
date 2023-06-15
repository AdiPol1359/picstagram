'use client';

import { LatestPostList } from './LatestPostList';

import { LoadingContent } from '@/components/common/LoadingContent';
import { trpc } from '@/lib/utils/trpc';

export const LatestPosts = () => {
	const { data = [], isLoading } = trpc.posts.getLatest.useQuery();

	return (
		<LoadingContent isLoading={isLoading}>
			<LatestPostList posts={data} />
		</LoadingContent>
	);
};
