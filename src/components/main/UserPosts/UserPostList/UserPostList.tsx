import { EmptyPostsAlert } from './EmptyPostsAlert';
import { UserPostListItem } from './UserPostListItem/UserPostListItem';

import type { Post } from '@/server/modules/posts/posts.schemas';

type UserPostListProps = Readonly<{
	posts: Post[];
}>;

export const UserPostList = ({ posts }: UserPostListProps) => {
	if (posts.length === 0) {
		return <EmptyPostsAlert />;
	}

	return (
		<ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{posts.map((post) => (
				<UserPostListItem key={post.id} post={post} />
			))}
		</ol>
	);
};
