/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: '#29abe2',
        secondaryButton: '#03045e',
        ruddyblue: "#6BAAFF",
      },
      borderRadius: {
        'roundedd':'3rem',
      }
      
    },
  },
  plugins: [],
}