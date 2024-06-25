/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      redColor:'#DC4A2D',
      redBg:'#FEF4F2',
      headSecondary:'#B0B0B0',
      navSecondary:'#888888',
      navBorder:'#E7E7E7',
      primaryHeading:'#3D3D3D',
      badgeBackground:'#ABEFC6',
      badgeText:'#067647',
      descColor:'#3D3D3D',
      white:'#ffffff'

    }
  },
  plugins: [],
};
