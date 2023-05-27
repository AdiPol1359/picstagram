import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '@/lib/env.mjs';
import { prisma } from '@/lib/prisma';
import {
	getUserByCredentials,
	initCreatedUser,
} from '@/server/modules/users/users.service';

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
	events: {
		createUser: async ({ user: createdUser }) => {
			const user = await initCreatedUser(createdUser);

			if (user) {
				createdUser.username = user.username;
			}
		},
	},
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		FacebookProvider({
			clientId: env.FACEBOOK_CLIENT_ID,
			clientSecret: env.FACEBOOK_CLIENT_SECRET,
		}),
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
		}),
		CredentialsProvider({
			credentials: {
				username: {},
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
