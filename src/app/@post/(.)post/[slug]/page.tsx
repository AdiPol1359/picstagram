import { SinglePostModal } from '@/components/main/SinglePostModal';
import { getPostById } from '@/lib/post';

import type { PageParams } from '@/types';

export default async function SinglePostPage({
	params,
}: {
	params: PageParams<'slug'>;
}) {
	const post = await getPostById(Number(params.slug));

	return <SinglePostModal post={post} />;
}
