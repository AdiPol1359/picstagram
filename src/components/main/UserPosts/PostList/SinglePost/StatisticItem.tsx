import { formatNumber } from '@/lib/utils/intl';

import type { ReactNode } from 'react';

type StatisticItemProps = Readonly<{
	icon: ReactNode;
	value: number;
}>;

export const StatisticItem = ({ icon, value }: StatisticItemProps) => (
	<li className="flex items-center gap-x-1.5 text-xl">
		{icon}
		{formatNumber(value)}
	</li>
);
