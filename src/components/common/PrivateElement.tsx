'use client';

import { useSession } from 'next-auth/react';

import type { ReactNode } from 'react';

type PrivateElementProps = Readonly<{
	loggedIn?: boolean;
	children: ReactNode;
}>;

export const PrivateElement = ({
	loggedIn = true,
	children,
}: PrivateElementProps) => {
	const { data } = useSession();

	if (Boolean(data) !== loggedIn) {
		return null;
	}

	return <>{children}</>;
};
