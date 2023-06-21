import { describe, expect, it } from 'vitest';

import { capitalize, getFirstLetter } from './string';

describe('string', () => {
	describe('capitalize', () => {
		it('should capitalize first letter', () => {
			expect(capitalize('foo')).toBe('Foo');
		});
	});

	describe('getFirstLetter', () => {
		it('should only return the first letter', () => {
			expect(getFirstLetter('Foo')).toBe('F');
		});

		it('should only return the first letter and make it uppercase', () => {
			expect(getFirstLetter('bar')).toBe('B');
		});
	});
});
