import type { Config } from 'tailwindcss'
import daisy from 'daisyui'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisy],
} satisfies Config

