export const BUTTON_BASE_STYLES =
	'duration-250 flex items-center justify-center gap-x-1.5 rounded-lg border px-5 py-2.5 font-medium shadow-sm transition disabled:pointer-events-none disabled:opacity-75';

export const BUTTON_VARIANTS = {
	default: 'bg-white text-black',
	primary: 'border-primary-400 bg-primary text-white hover:bg-primary-400',
	danger: 'border-red-600 text-red-600 hover:bg-red-600/10',
	text: 'border-transparent text-black shadow-none hover:bg-gray-100',
} as const;
