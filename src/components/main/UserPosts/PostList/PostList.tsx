import Link from 'next/link';

import { EmptyPostsAlert } from './EmptyPostsAlert';
import { SinglePost } from './SinglePost/SinglePost';

import type { Post } from '@/server/modules/posts/posts.schemas';

type PostListProps = Readonly<{
	posts: Post[];
	username: string;
}>;

export const PostList = ({ posts, username }: PostListProps) => {
	if (posts.length === 0) {
		return <EmptyPostsAlert />;
	}

	return (
		<ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
			{posts.map((post) => (
				<Link key={post.id} href={`/${username}?post=${post.id}`}>
					<SinglePost post={post} />
				</Link>
			))}
		</ol>
	);
};
