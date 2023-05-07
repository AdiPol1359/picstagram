import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import { serverEnv } from '@/lib/env/server';
import { prisma } from '@/lib/prisma';

import type { AuthOptions } from 'next-auth';

const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/',
	},
	session: {
		strategy: 'jwt',
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
			authorize: async (credentials) => {
				const user = await prisma.user.findUnique({
					where: { email: credentials?.email },
				});

				if (
					!credentials ||
					!user?.password ||
					!(await compare(credentials.password, user.password))
				) {
					return null;
				}

				return user;
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
