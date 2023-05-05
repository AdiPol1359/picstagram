import { SignInButton } from './SignInButton';
import { SignUpButton } from './SignUpButton';

import { PrivateElement } from '@/components/common/PrivateElement';

export const ButtonList = () => (
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
);
