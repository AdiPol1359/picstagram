import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { SwiperProps, SwiperRef, SwiperSlideProps } from 'swiper/react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': DetailedHTMLProps<
				HTMLAttributes<HTMLElement> & SwiperProps & { class?: string },
				SwiperRef
			>;
			'swiper-slide': DetailedHTMLProps<
				HTMLAttributes<HTMLElement> & SwiperSlideProps & { class?: string },
				HTMLElement
			>;
		}
	}
}
