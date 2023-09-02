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
        "text-primary": "#31572C",
        "dark": "#4F772D",
        "text-dark": "#132A13",
        "primary": "#90A955",
        "light": "#ECF39E",
      }
    },
  },
  plugins: [],
}
export default config
