import { SinglePost } from '@/components/main/SinglePost/SinglePost';
import { getPostById } from '@/lib/post';

import type { PageParams } from '@/types';

export default async function SinglePostPage({
	params,
}: {
	params: PageParams<'slug'>;
}) {
	const post = await getPostById(Number(params.slug));

	return <SinglePost post={post} />;
}
