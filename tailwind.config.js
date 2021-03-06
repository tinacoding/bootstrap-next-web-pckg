module.exports = {
	purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/typography")]
};