/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#29abe2",
        secondaryButton: "#03045e",
      },
      fontFamily: {
        custom: ["Poppins"],
      },
    },
  },
  plugins: [],
};
