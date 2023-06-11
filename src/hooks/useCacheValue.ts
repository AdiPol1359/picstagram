import { useRef } from 'react';

export const useCacheValue = <T>() => {
	const ref = useRef<T | null>(null);

	const setCache = (value: T) => {
		ref.current = value;
	};

	const clearCache = () => {
		ref.current = null;
	};

	return { value: ref.current, setCache, clearCache };
};
