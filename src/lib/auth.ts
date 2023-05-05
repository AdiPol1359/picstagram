import { signIn, signOut } from 'next-auth/react';

export const signInWithCredentials = async (
	{
		email,
		password,
	}: {
		email: string;
		password: string;
	},
	{ onError }: { onError: (error: string) => void }
) => {
	const result = await signIn('credentials', {
		email,
		password,
		redirect: false,
	});

	if (result?.error) {
		onError(result.error);
	}
};

export const signInWith = (provider: 'discord' | 'facebook' | 'google') =>
	signIn(provider, { callbackUrl: '/' });

export const signOutUser = () => signOut({ redirect: false });
