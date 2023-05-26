import { LoadingContent } from '@/components/common/LoadingContent';
import { UserList } from '@/components/main/UserList/UserList';
import { useGetFollowing } from '@/hooks/useGetFollowing';

type UserFollowingListProps = Readonly<{
	userId: string;
}>;

export const UserFollowingList = ({ userId }: UserFollowingListProps) => {
	const { following, isLoading } = useGetFollowing(userId);

	return (
		<LoadingContent isLoading={isLoading}>
			<UserList
				alertMessage="This user doesn't follow any user yet!"
				users={following}
			/>
		</LoadingContent>
	);
};
