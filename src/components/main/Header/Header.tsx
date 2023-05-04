import Link from 'next/link';

import { SignInButton } from './SignInButton';
import { SignUpButton } from './SignUpButton';

import { PrivateElement } from '@/components/common/PrivateElement';
import { Container } from '@/components/ui/Container/Container';

export const Header = () => (
	<header className="h-16 px-3.5 shadow-md shadow-gray-200/30">
		<Container className="flex h-full items-center justify-between">
			<Link href="/" className="text-lg font-semibold">
				Picstagram
			</Link>
			<PrivateElement loggedIn={false}>
				<ul className="flex gap-x-2">
					<li>
						<SignInButton />
					</li>
					<li>
						<SignUpButton />
					</li>
				</ul>
			</PrivateElement>
		</Container>
	</header>
);
