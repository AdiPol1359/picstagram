import { Button } from '@/components/ui/Button/Button';

import type { User } from '@/server/modules/users/users.schemas';

type UserCtaProps = Readonly<{
	user: User;
}>;

export const UserCta = ({ user: { username } }: UserCtaProps) => (
	<div className="flex items-center justify-between gap-x-3 sm:justify-start">
		<h2 className="text-lg font-medium">{username}</h2>
		<Button>Follow</Button>
	</div>
);
