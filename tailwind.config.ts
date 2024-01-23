import type { Config } from 'tailwindcss'
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{astro,html,md,mdx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
      mono: ["IBM Plex Mono", "monospace"]
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['synthwave', 'bumblebee'],
    logs: false,
  }
} satisfies Config

