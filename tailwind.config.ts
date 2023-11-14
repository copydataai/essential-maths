import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,md,mdx,tsx}'],
  theme: {
    colors: {
      primary: {
  /* Primary: Orbital Kingdom */
        100: '#F7F2FF',
        200: '#CEB6FD',
        300: '#9875EF',
        400: '#5635CA',
        500: '#190482',
        600: '#0D016B',
        700: '#050054',
        800: '#00013D',
        900: '#000326',
      },
  /* Accent: Verminal */
      accent: {
        100: '#F4FFF2',
        200: '#C4FEB9',
        300: '#98F97E',
        400: '#71EB42',
        500: '#4DCF0C',
        600: '#43A404',
        700: '#387A01',
        800: '#295000',
        900: '#162600',
      },
  /* Neutral */
      neutral: {
        100: '#FBFAFC',
        200: '#E9E7ED',
        300: '#D7D5DE',
        400: '#C6C3CF',
        500: '#B4B2BF',
        600: '#8E8D99',
        700: '#696973',
        800: '#45464D',
        900: '#222326',
      },
    },
    extend: {

    },
  },
  plugins: [],
} satisfies Config

