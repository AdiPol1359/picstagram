'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import { TrpcProvider } from './TrpcProvider';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
	<SessionProvider>
		<TrpcProvider>
			{children}
			<Toaster position="top-left" />
		</TrpcProvider>
	</SessionProvider>
);
