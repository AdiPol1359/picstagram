import { StatisticItem } from './StatisticItem';

type UserStatisticsListProps = Readonly<{
	photos: number;
	followers: number;
	following: number;
}>;

export const UserStatisticsList = ({
	photos,
	followers,
	following,
}: UserStatisticsListProps) => (
	<ul className="flex justify-between">
		<StatisticItem name="Photos" value={photos} />
		<StatisticItem name="Followers" value={followers} />
		<StatisticItem name="Following" value={following} />
	</ul>
);
