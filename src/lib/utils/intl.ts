const LOCALE = 'en-US';

const numberFormat = new Intl.NumberFormat(LOCALE, {
	notation: 'compact',
});

const rules = new Intl.PluralRules(LOCALE);

export const formatNumber = (number: number) =>
	number < 10000 ? number.toString() : numberFormat.format(number);

export const pluralize = (one: string, many: string) => (count: number) => {
	return {
		one,
		many,
		zero: many,
		two: many,
		few: many,
		other: many,
	}[rules.select(count)];
};
