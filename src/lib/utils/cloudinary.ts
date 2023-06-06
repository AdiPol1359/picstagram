import crypto from 'node:crypto';

export const createSignature = ({
	publicId: public_id,
	timestamp,
	secret,
}: {
	publicId: string;
	timestamp: string;
	secret: string;
}) =>
	crypto
		.createHash('sha1')
		.update(`${new URLSearchParams({ public_id, timestamp })}${secret}`)
		.digest('hex');
