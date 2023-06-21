import Link from 'next/link';

import { ButtonList } from './ButtonList/ButtonList';
import { UserMenu } from './UserMenu/UserMenu';
import { UsersSearchBar } from './UsersSearchBar/UsersSearchBar';

import { Container } from '@/components/ui/Container/Container';
import { PROJECT_NAME } from '@/lib/constants';

export const Header = () => (
	<div className="fixed left-0 top-0 z-50 h-16 w-full bg-white px-3.5 shadow-md shadow-gray-200/30">
		<Container
			as="header"
			className="flex h-full items-center justify-between gap-x-3"
		>
			<Link href="/" className="hidden text-lg font-semibold sm:block">
				{PROJECT_NAME}
			</Link>
			<UsersSearchBar />
			<ButtonList />
			<UserMenu />
		</Container>
	</div>
);
