/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				muted: {
					DEFAULT: "hsl(0 0% 96.1%)",
					foreground: "hsl(0 0% 65.1%)",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
