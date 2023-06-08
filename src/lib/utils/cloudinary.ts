import crypto from 'node:crypto';

export const createSignature = ({
	publicId: public_id,
	timestamp,
	secret,
	eager,
	folder,
}: {
	publicId: string;
	timestamp: string;
	secret: string;
	eager?: string;
	folder?: string;
}) =>
	crypto
		.createHash('sha1')
		.update(
			`${new URLSearchParams({
				...(eager && { eager }),
				...(folder && { folder }),
				public_id,
				timestamp,
			})
				.toString()
				.replaceAll('%2C', ',')
				.replaceAll('%2F', '/')}${secret}`
		)
		.digest('hex');
