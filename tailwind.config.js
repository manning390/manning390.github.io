/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: "rgb(var(--accent-color, '#c88623') / <alpha-value>)",
					amber: 'rgb(200 134 35  / <alpha-value>)',
					teal: 'rgb(14  210 174 / <alpha-value>)',
					violet: 'rgb(115 20  200 / <alpha-value>)',
					ruby: 'rgb(168 3   21  / <alpha-value>)',
				},
				background: '#191919',
				typo: '#ccc',
				muted: '#626262',
			},
			fontFamily: {
				fira: ['"Fira Code"', 'sans-serif'],
			},
		},
		animatedSettings: {
			classes: ['bounce'],
		},
	},
	plugins: [require('tailwindcss-animatecss')],
};
