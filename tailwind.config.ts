import type { Config } from 'tailwindcss'
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,md,mdx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['--font-geist-sans'],
      mono: ['--font-geist-mono'],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['synthwave', 'bumblebee'],
  }
} satisfies Config

