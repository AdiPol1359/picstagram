import { UserHeader } from '@/components/main/UserHeader/UserHeader';
import { DEFAULT_PROFILE_BIOGRAPHY } from '@/lib/constants';
import { getUserByUsername } from '@/lib/user';

import type { Metadata } from 'next';

export const generateMetadata = async ({
	params: { slug },
}: UserPageProps): Promise<Metadata> => {
	const { username, biography, image } = await getUserByUsername(slug);

	return {
		title: username,
		themeColor: '#fe85c8',
		openGraph: {
			type: 'profile',
			siteName: 'Picstagram',
			url: 'http://localhost:3000/aditv1337-0ed4a5',
			title: `${username} | Picstagram`,
			description: biography || DEFAULT_PROFILE_BIOGRAPHY,
			...(image && { images: image }),
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
