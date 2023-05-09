export const capitalize = (text: string) =>
	text.charAt(0).toUpperCase() + text.slice(1);

export const getFirstLetter = (text: string) => text[0].toUpperCase();

export const isObjectKey = <T extends Record<string, unknown>>(
	key: string,
	object: T
): key is keyof T & string => Object.keys(object).includes(key);
