import { useMutation } from '@tanstack/react-query';

import { createAvatar } from '@/lib/services/avatars.service';

export const useCreateUserAvatar = () => {
	const { mutateAsync, isLoading } = useMutation({ mutationFn: createAvatar });

	const createUserAvatar = async (image: Blob) => {
		const { url } = await mutateAsync(image);

		return url;
	};

	return { createUserAvatar, isLoading };
};
