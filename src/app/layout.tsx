import { Inter } from 'next/font/google';

import { Header } from '@/components/main/Header/Header';
import { AppProviders } from '@/providers/AppProviders';

import type { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'latin-ext'],
});

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<AppProviders>
					<Header />
					{children}
				</AppProviders>
			</body>
		</html>
	);
}
