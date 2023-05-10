import { StatisticItem } from './StatisticItem';

export const ProfileStatistics = () => (
	<ul className="flex justify-between">
		<StatisticItem name="Posts" value={10} />
		<StatisticItem name="Followers" value={5} />
		<StatisticItem name="Following" value={7} />
	</ul>
);
