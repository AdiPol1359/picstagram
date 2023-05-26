import { UserHeader } from '@/components/main/UserHeader/UserHeader';
import { DEFAULT_PROFILE_BIOGRAPHY, PROJECT_NAME } from '@/lib/constants';
import { serverEnv } from '@/lib/env/server';
import { getUserByUsername } from '@/lib/user';

import type { Metadata } from 'next';

export const generateMetadata = async ({
	params: { slug },
}: UserPageProps): Promise<Metadata> => {
	const { username, biography, image } = await getUserByUsername(slug);

	return {
		title: username,
		themeColor: '#fe67bA',
		openGraph: {
			type: 'profile',
			url: `${serverEnv.BASE_URL}/${username}`,
			siteName: PROJECT_NAME,
			description: biography || DEFAULT_PROFILE_BIOGRAPHY,
			...(username && { title: username }),
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
