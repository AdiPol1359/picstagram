/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: '#fe67bA',
					50: 'oklch(97% 0.202 349.21)',
					100: 'oklch(94% 0.202 349.21)',
					200: 'oklch(87.5% 0.202 349.21)',
					300: 'oklch(82% 0.202 349.21)',
					400: 'oklch(77% 0.202 349.21)',
					500: 'oklch(72.67% 0.202 349.21)',
					600: 'oklch(65.95% 0.258 354.95)',
					700: 'oklch(56.5% 0.258 354.95)',
					800: 'oklch(42% 0.258 354.95)',
					900: 'oklch(26% 0.258 354.95)',
					950: 'oklch(17% 0.258 354.95)',
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
