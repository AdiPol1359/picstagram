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
		<ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
			{posts.map((post) => (
				<UserPostListItem key={post.id} post={post} />
			))}
		</ol>
	);
};
