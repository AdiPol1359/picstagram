import { LoadingSpinner } from './LoadingSpinner';

import type { ReactNode } from 'react';

type LoadingContentProps = Readonly<{
	isLoading: boolean;
	children: ReactNode;
}>;

export const LoadingContent = ({
	isLoading,
	children,
}: LoadingContentProps) => {
	if (isLoading) {
		return <LoadingSpinner />;
	}

	return <>{children}</>;
};
