export const getFileNameFromUrl = (url: string) =>
	url.match(/\/([^/]+)\.[\w]+$/)?.at(-1) || null;
