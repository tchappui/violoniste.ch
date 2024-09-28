/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'DEFAULT': '#e48e46',
					'50': '#fdf7ef',
					'100': '#faecda',
					'200': '#f5d6b3',
					'300': '#eebb83',
					'400': '#e48e46',
					'500': '#e0792f',
					'600': '#d16125',
					'700': '#ae4a20',
					'800': '#8b3d21',
					'900': '#70331e',
					'950': '#3c180e',
    },
			},
			fontFamily: {
				cursive: ['corner-store-jf', 'sans-serif']
			}
		},
	},
	plugins: [],
}
