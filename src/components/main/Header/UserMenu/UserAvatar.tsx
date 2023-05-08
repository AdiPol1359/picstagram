import { useSession } from 'next-auth/react';

import { Avatar } from '@/components/ui/Avatar/Avatar';
import { getFirstLetter } from '@/lib/utils';

export const UserAvatar = () => {
	const { data } = useSession();

	if (!data?.user?.name) return null;

	const { name, image } = data.user;

	if (image) {
		return <Avatar src={image} alt={name} />;
	}

	return <Avatar>{getFirstLetter(name)}</Avatar>;
};
