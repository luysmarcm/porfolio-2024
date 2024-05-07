/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#3a2d28",
				secundary: "#a48373",
				fondo: "#000000",
				negro: "#1c2432",
				morado: "#775AA2",
				b: "#F1D2BB",
				fondo: "#F6F6F6",
				rosado: "#FACBC6",
				rosado2: "#F5867D",
				progress: "rgba(155, 155, 155, 1)",
				rosado3: "rgba(250, 203, 198)",
				rosado4: "#FDECEC",
				rosado5: "#f9bab4",
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
				Poppins: ["Poppins"],
			},
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
			backgroundImage: (theme) => ({
				banner: "url('/images/banner.webp')",
				contact: "url('/images/contact2.webp')",
			}),
		},
	},
	plugins: [],
};
