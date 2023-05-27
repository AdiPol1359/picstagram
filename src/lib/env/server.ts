import { z } from 'zod';

const serverEnvSchema = z.object({
	BASE_URL: z.string().nonempty(),
	GOOGLE_CLIENT_ID: z.string().nonempty(),
	GOOGLE_CLIENT_SECRET: z.string().nonempty(),
	FACEBOOK_CLIENT_ID: z.string().nonempty(),
	FACEBOOK_CLIENT_SECRET: z.string().nonempty(),
	DISCORD_CLIENT_ID: z.string().nonempty(),
	DISCORD_CLIENT_SECRET: z.string().nonempty(),
});

export const serverEnv = serverEnvSchema.parse({
	BASE_URL: process.env.BASE_URL,
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
});
