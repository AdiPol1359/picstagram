import { UserHeader } from '@/components/main/UserHeader/UserHeader';
import { DEFAULT_PROFILE_BIOGRAPHY, PROJECT_NAME } from '@/lib/constants';
import { env } from '@/lib/env.mjs';
import { getUserByUsername } from '@/lib/user';

import type { Metadata } from 'next';

export const generateMetadata = async ({
	params: { slug },
}: UserPageProps): Promise<Metadata> => {
	const { username, name, image, biography } = await getUserByUsername(slug);

	const [firstName, lastName] = name?.split(' ') || [];

	return {
		title: username,
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			siteName: PROJECT_NAME,
			url: `${env.NEXT_PUBLIC_BASE_URL}/${username}`,
			description: biography || DEFAULT_PROFILE_BIOGRAPHY,
			firstName,
			lastName,
			...(username && { username, title: username }),
			...(image && { images: { url: image, width: 144, height: 144 } }),
		},
	};
};

type UserPageProps = Readonly<{
	params: { slug: string };
}>;

export default async function UserPage({ params: { slug } }: UserPageProps) {
	const user = await getUserByUsername(slug);

	return (
		<>
			<UserHeader user={user} />
		</>
	);
}
