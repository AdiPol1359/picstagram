import { LatestPosts } from '@/components/main/LatestPosts/LatestPosts';

export default function IndexPage() {
	return (
		<>
			<h1 className="text-3xl font-semibold">Latest posts</h1>
			<LatestPosts />
		</>
	);
}
