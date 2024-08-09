import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        "th01": "#983e43",
        "th02": "#663273",
        "th03": "#cdaf07",
        "th04": "#7bc884",
        "th05": "#8c10b1",
        "th06": "#cc1f06",
        "th07": "#cc75af",
        "th08": "#2a2c82",
        "th09": "#B00B69", // TODO: Update color later
        "th10": "#789107",
        "th11": "#48130b",
        "th12": "#3458bf",
        "th128": "#03b4b9",
        "th13": "#3d6776",
        "th14": "#8e6d72",
        "th15": "#573a9d",
        "th16": "#125c11",
        "th17": "#18141a",
        "th18": "#1ccd93",
      }
    }
  },
  plugins: [],
} satisfies Config

