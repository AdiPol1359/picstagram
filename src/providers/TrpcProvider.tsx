import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

import { getBaseUrl, trpc } from '@/lib/utils/trpc';

import type { ReactNode } from 'react';

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
		}),
	],
});

type TrpcProviderProps = Readonly<{
	children: ReactNode;
}>;

export const TrpcProvider = ({ children }: TrpcProviderProps) => (
	<trpc.Provider client={trpcClient} queryClient={queryClient}>
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	</trpc.Provider>
);
