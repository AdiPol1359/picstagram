const numberFormat = new Intl.NumberFormat('en', {
	notation: 'compact',
});

export const formatNumber = (number: number) =>
	number < 10000 ? number.toString() : numberFormat.format(number);
