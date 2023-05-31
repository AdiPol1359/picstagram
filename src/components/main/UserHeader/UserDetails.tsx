import { DEFAULT_PROFILE_BIOGRAPHY } from '@/lib/constants';

import type { User } from '@/server/modules/users/users.schemas';

type UserDetailsProps = Readonly<{
	user: User;
}>;

export const UserDetails = ({
	user: { name, biography },
}: UserDetailsProps) => (
	<div>
		<h3 className="font-medium">{name}</h3>
		<div className="mt-0.5 whitespace-pre-line text-justify">
			{biography || DEFAULT_PROFILE_BIOGRAPHY}
		</div>
	</div>
);
