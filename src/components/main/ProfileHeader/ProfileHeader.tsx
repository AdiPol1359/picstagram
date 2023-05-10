import { ProfileCta } from './ProfileCta';
import { ProfileInformation } from './ProfileInformation';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics';

import { Avatar } from '@/components/ui/Avatar/Avatar';

export const ProfileHeader = () => (
	<header className="mx-auto mt-6 flex w-full max-w-xl flex-col items-center justify-between gap-y-5 px-2 sm:flex-row sm:px-0">
		<Avatar size="xl">J</Avatar>
		<section className="w-full space-y-5 sm:max-w-xs">
			<ProfileCta />
			<ProfileStatistics />
			<ProfileInformation />
		</section>
	</header>
);
