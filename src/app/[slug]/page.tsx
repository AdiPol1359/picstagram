import { UserHeader } from '@/components/main/UserHeader/UserHeader';
import { getUserByUsername } from '@/lib/user';

import type { Metadata } from 'next';

export const generateMetadata = async ({
	params: { slug },
}: UserPageProps): Promise<Metadata> => {
	const { username } = await getUserByUsername(slug);

	return {
		title: username,
		openGraph: {
			type: 'article',
			title: 'siema',
			description: 'testowy opis',
			url: 'http://localhost:3000/aditv1337-0ed4a5',
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
