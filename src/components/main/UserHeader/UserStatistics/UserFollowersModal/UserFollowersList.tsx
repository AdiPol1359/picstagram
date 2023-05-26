import { LoadingContent } from '@/components/common/LoadingContent';
import { UserList } from '@/components/main/UserList/UserList';
import { useGetFollowers } from '@/hooks/useGetFollowers';

type UserFollowersListProps = Readonly<{
	userId: string;
}>;

export const UserFollowersList = ({ userId }: UserFollowersListProps) => {
	const { followers, isLoading } = useGetFollowers(userId);

	return (
		<LoadingContent isLoading={isLoading}>
			<UserList
				alertMessage="This user doesn't have any followers yet!"
				users={followers}
			/>
		</LoadingContent>
	);
};
