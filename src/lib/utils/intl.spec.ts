import { describe, expect, it } from 'vitest';

import { formatNumber, pluralize } from './intl';

describe('intl', () => {
	describe('formatNumber', () => {
		it('should not format the number', () => {
			expect(formatNumber(10)).toBe('10');
		});

		it('should not format the number', () => {
			expect(formatNumber(9999)).toBe('9999');
		});

		it('should format the number', () => {
			expect(formatNumber(10000)).toBe('10K');
		});

		it('should round the number down', () => {
			expect(formatNumber(10499)).toBe('10K');
		});

		it('should round the number up', () => {
			expect(formatNumber(10500)).toBe('11K');
		});
	});

	describe.each([{ one: 'apple', many: 'apples' }])(
		'pluralize',
		({ one, many }) => {
			it('should return plural', () => {
				expect(pluralize(one, many)(0)).toBe('apples');
			});

			it('should return singular', () => {
				expect(pluralize(one, many)(1)).toBe('apple');
			});

			it('should return plural', () => {
				expect(pluralize(one, many)(10)).toBe('apples');
			});
		}
	);
});
