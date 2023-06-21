export const isObjectKey = <T extends Record<string, unknown>>(
	key: string,
	object: T
): key is keyof T & string => Object.keys(object).includes(key);
