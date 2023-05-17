import crypto from 'node:crypto';

export const generateUsername = ({ email }: { email: string }) =>
	`${email.split('@')[0]}-${crypto.randomBytes(3).toString('hex')}`;
