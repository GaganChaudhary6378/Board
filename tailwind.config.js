/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont:["Montserrat"],
        lato:["Lato"]
      },
      colors: {
        'secondary-text': 'var(--secondary-text, #858585)',
        'bg1': 'var(--background, #F5F5F5)',
      },
      backgroundColor: {
        box1: 'rgba(221, 239, 224, 1)',
        box2: 'rgba(244, 236, 221, 1)',
        box3: 'rgba(239, 218, 218, 1)',
        box4: 'rgba(222, 224, 239, 1)',
        acti: 'rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}
