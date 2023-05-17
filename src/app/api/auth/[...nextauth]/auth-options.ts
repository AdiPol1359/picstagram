import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import { serverEnv } from '@/lib/env/server';
import { prisma } from '@/lib/prisma';
import { getUserByCredentials } from '@/server/modules/users/users.service';

import type { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/',
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		session({ session, token }) {
			session.user.id = token.id;
			session.user.username = token.username;

			return session;
		},
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.username = user.username;
			}

			return token;
		},
	},
	providers: [
		GoogleProvider({
			clientId: serverEnv.GOOGLE_CLIENT_ID,
			clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			clientId: serverEnv.FACEBOOK_CLIENT_ID,
			clientSecret: serverEnv.FACEBOOK_CLIENT_SECRET,
		}),
		DiscordProvider({
			clientId: serverEnv.DISCORD_CLIENT_ID,
			clientSecret: serverEnv.DISCORD_CLIENT_SECRET,
		}),
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			authorize: (credentials) => {
				if (!credentials) {
					return null;
				}

				return getUserByCredentials(credentials);
			},
		}),
	],
};
