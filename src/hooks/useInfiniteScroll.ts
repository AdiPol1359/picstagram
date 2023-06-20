import { useEffect } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
	useEffect(() => {
		const handleScrollEvent = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight
			) {
				callback();
			}
		};

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, [callback]);
};
