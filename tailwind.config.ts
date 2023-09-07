import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "text-dark": "#1B3022",
        "text-primary": "#395756",
        "dark": "#4F5D75",
        "primary": "#7261A3",
        "light": "#A67DB8",
      }
    },
  },
  plugins: [],
}
export default config
