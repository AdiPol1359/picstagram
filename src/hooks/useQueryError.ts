import { useSearchParams } from 'next/navigation';

export const useQueryError = () => {
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	return { isError: Boolean(error), error };
};
