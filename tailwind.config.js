/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				avenir: ['Nunito Sans', 'system-ui', 'sans-serif'],
				questrial: ['Questrial', 'sans-serif']
			}
		}
	},
	plugins: []
};
