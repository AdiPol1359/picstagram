import { trpc } from '@/lib/utils/trpc';

export const useToggleLike = (like: boolean) => {
	const createLikeMutation = trpc.likes.create.useMutation();
	const deleteLikeMutation = trpc.likes.delete.useMutation();

	const isLoading =
		createLikeMutation.isLoading || deleteLikeMutation.isLoading;

	const toggleLike = async (postId: number) => {
		const mutation = like ? deleteLikeMutation : createLikeMutation;

		await mutation.mutateAsync({ postId });
	};

	return { toggleLike, isLoading };
};
