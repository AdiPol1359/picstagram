import { UserCta } from './UserCta';
import { UserDetails } from './UserDetails';
import { UserEditorPanel } from './UserEditorPanel';
import { UserStatistics } from './UserStatistics/UserStatistics';

import { UserAvatar } from '@/components/common/UserAvatar';

import type { User } from '@/server/modules/users/users.schemas';

type UserHeaderProps = Readonly<{
	user: User;
}>;

export const UserHeader = ({ user }: UserHeaderProps) => (
	<div className="mb-5 border-b pb-5">
		<header className="mx-auto flex w-full max-w-xl flex-col items-center justify-between gap-y-5 px-2 sm:flex-row sm:items-start sm:px-0">
			<UserEditorPanel user={user}>
				<UserAvatar user={user} size="xl" />
			</UserEditorPanel>
			<section className="w-full space-y-5 sm:max-w-xs">
				<UserCta user={user} />
				<UserStatistics user={user} />
				<UserDetails user={user} />
			</section>
		</header>
	</div>
);
