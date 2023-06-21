import { describe, expect, it } from 'vitest';

import { isObjectKey } from './object';

describe('object', () => {
	const object = {
		foo: 'foo',
		bar: 'bar',
	};

	describe('isObjectKey', () => {
		it('should display that the property exists in the given object', () => {
			expect(isObjectKey('foo', object)).toBe(true);
		});

		it('should display that the property does not exist in the given object', () => {
			expect(isObjectKey('baz', object)).toBe(false);
		});
	});
});
