import crypto from 'node:crypto';

export const createSignature = ({
	publicId: public_id,
	timestamp,
	secret,
	eager,
}: {
	publicId: string;
	timestamp: string;
	secret: string;
	eager?: string;
}) =>
	crypto
		.createHash('sha1')
		.update(
			`${new URLSearchParams({
				...(eager && { eager }),
				public_id,
				timestamp,
			})
				.toString()
				.replaceAll('%2C', ',')}${secret}`
		)
		.digest('hex');
