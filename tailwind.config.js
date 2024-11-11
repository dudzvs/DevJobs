/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif'],
			},

			colors: {
				primary: {
					main: '#5964E0',
					secondary: '#19202D',
					tertiary: '#6E8098',
					bgMains: '#FFFFFF',
				},
			},
			backgroundImage: {
				'header-mobile':
					'url("./public/images/mobile/bg-pattern-header.svg")',
				iconChecked: 'url("./public/images/desktop/icon-check.svg")',
			},
		},
	},
	plugins: [],
};
