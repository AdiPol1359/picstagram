import { formatNumber } from '@/lib/utils/intl';

type StatisticItemProps = Readonly<{
	name: string;
	value: number;
	onClick?: () => void;
}>;

export const StatisticItem = ({ name, value, onClick }: StatisticItemProps) => (
	<li onClick={onClick} className="flex flex-col items-center">
		{name}
		<strong>{formatNumber(value)}</strong>
	</li>
);
