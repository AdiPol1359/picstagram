import { describe, expect, it } from 'vitest';

import { createSignature } from './cloudinary';

describe('cloudinary', () => {
	describe.each([
		{ publicId: 'foobar123', secret: 'secret', timestamp: '1687364529' },
	])('createSignature', ({ publicId, secret, timestamp }) => {
		it('should create a basic signature', () => {
			expect(
				createSignature({
					publicId,
					secret,
					timestamp,
				})
			).toBe('c00c89e7ba2cbc6ca2b57e875f16d12e5e4782bc');
		});

		it('should create a signature with folder', () => {
			expect(
				createSignature({
					publicId,
					secret,
					timestamp,
					folder: 'foo',
				})
			).toBe('8e8c9196827e046984ce0b445db9b83abf7ea31b');
		});

		it('should create a signature with eager', () => {
			expect(
				createSignature({
					publicId,
					secret,
					timestamp,
					eager: 'foo',
				})
			).toBe('feab893ec66d2c58d6a43c7786fb7f0906761d45');
		});

		it('should create a signature with eager and folder', () => {
			expect(
				createSignature({
					publicId,
					secret,
					timestamp,
					eager: 'foo',
					folder: 'foo',
				})
			).toBe('bfe3df98adaca498d7b056667b0712c242e68c4d');
		});
	});
});
