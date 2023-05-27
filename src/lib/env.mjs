import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		GOOGLE_CLIENT_ID: z.string().nonempty(),
		GOOGLE_CLIENT_SECRET: z.string().nonempty(),
		FACEBOOK_CLIENT_ID: z.string().nonempty(),
		FACEBOOK_CLIENT_SECRET: z.string().nonempty(),
		DISCORD_CLIENT_ID: z.string().nonempty(),
		DISCORD_CLIENT_SECRET: z.string().nonempty(),
	},
	client: {
		NEXT_PUBLIC_BASE_URL: z.string().nonempty(),
	},
	runtimeEnv: {
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
		DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
		DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
});
