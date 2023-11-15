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
    /* Accent: Aphrodite Aqua */
      accent: {
        100: '#F2FFFE',
        200: '#C9FFF6',
        300: '#9EFCE8',
        400: '#71F5D1',
        500: '#46E8B2',
        600: '#22B87D',
        700: '#118752',
        800: '#09572F',
        900: '#042613',
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

