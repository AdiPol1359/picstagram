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
					50: '#fff0f8',
					100: '#ffe1f1',
					200: '#ffc2e3',
					300: '#fea4d6',
					400: '#fe85c8',
					500: '#fe67bA',
					600: '#fe209a',
					700: '#d50176',
					800: '#8e014e',
					900: '#470027',
					950: '#230014',
				},
			},
		},
	},
	plugins: [],
};
