/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/components/images/bob.jpg')",
        'profile-picture': "url('/src/components/images/profile.png')",
        'our-location': "url('/src/components/images/mylocation.png')",
      }
    },
  },
  plugins: [],
}
