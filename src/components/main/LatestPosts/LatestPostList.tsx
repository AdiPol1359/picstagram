import { SinglePost } from '../SinglePost';

import type { Post } from '@/server/modules/posts/posts.schemas';

type LatestPostListProps = Readonly<{
	posts: Post[];
}>;

export const LatestPostList = ({ posts }: LatestPostListProps) => (
	<ol className="divide-y">
		{posts.map((post) => (
			<li key={post.id} className="py-7">
				<SinglePost post={post} />
			</li>
		))}
	</ol>
);
