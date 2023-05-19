import { UserListModal } from '../../UserListModal/UserListModal';
import { StatisticItem } from './StatisticItem';

import { useModal } from '@/hooks/useModal';

import type { User } from '@/server/modules/users/users.schemas';

type UserListModalStatisticItemProps = Readonly<{
	name: string;
	value: number;
	isLoading: boolean;
	users: User[];
}>;

export const UserListModalStatisticItem = ({
	name,
	value,
	isLoading,
	users,
}: UserListModalStatisticItemProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<StatisticItem name={name} value={value} onClick={openModal} />
			<UserListModal
				title={name}
				isLoading={isLoading}
				users={users}
				isOpen={isOpen}
				onClose={closeModal}
			/>
		</>
	);
};
