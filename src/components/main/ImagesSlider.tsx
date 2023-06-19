'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import type { SwiperRef } from 'swiper/react';

register();

type ImagesSliderProps = Readonly<{
	images: string[];
}>;

export const ImagesSlider = ({ images }: ImagesSliderProps) => {
	const ref = useRef<SwiperRef>(null);

	useEffect(() => {
		ref.current?.swiper.update();
	}, [images]);

	return (
		<swiper-container
			slides-per-view={1}
			ref={ref}
			class="rounded-xl"
			navigation
		>
			{images.map((image) => (
				<swiper-slide key={image} class="relative aspect-video">
					<Image src={image} alt="Slide image" className="object-cover" fill />
				</swiper-slide>
			))}
		</swiper-container>
	);
};
