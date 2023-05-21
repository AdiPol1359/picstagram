import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const useRequiredSession = () => {
	const { status } = useSession();

	return (fn: () => unknown) => {
		if (status !== 'authenticated') {
			return () => {
				toast.error('You have to log in first!');
			};
		}

		return fn;
	};
};
