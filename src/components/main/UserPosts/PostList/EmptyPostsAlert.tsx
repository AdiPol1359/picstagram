import { LuCameraOff } from 'react-icons/lu';

export const EmptyPostsAlert = () => (
	<div className="mt-6 flex flex-col items-center gap-y-2 text-3xl">
		<LuCameraOff />
		<h2 className="text-xl">There are not any posts yet</h2>
	</div>
);
