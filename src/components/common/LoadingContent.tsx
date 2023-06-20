import { Spinner } from '../ui/Spinner/Spinner';

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
		return <Spinner center />;
	}

	return <>{children}</>;
};
