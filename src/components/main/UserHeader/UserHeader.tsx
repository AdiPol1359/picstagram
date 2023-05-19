import { UserCta } from './UserCta';
import { UserDetails } from './UserDetails';
import { UserStatistics } from './UserStatistics/UserStatistics';

import { UserAvatar } from '@/components/common/UserAvatar';

import type { User } from '@/server/modules/users/users.schemas';

type UserHeaderProps = Readonly<{
	user: User;
}>;

export const UserHeader = ({ user }: UserHeaderProps) => (
	<header className="mx-auto mt-6 flex w-full max-w-xl flex-col items-center justify-between gap-y-5 px-2 sm:flex-row sm:px-0">
		<UserAvatar user={user} size="xl" />
		<section className="w-full space-y-5 sm:max-w-xs">
			<UserCta user={user} />
			<UserStatistics user={user} />
			<UserDetails user={user} />
		</section>
	</header>
);
