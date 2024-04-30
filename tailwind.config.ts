import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'max-nav': '1660px',
        'max-container': '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'dinko-plava': '#17AEC2',
        'dinko-tamnoplava': '#092A4C',
        tekstovi: 'rgba(0, 0, 0, 0.8)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1280px',
        xl: '1820px',
      },
      borderRadius: {
        appButtonBase: '49px',
      },
    },
  },
  plugins: [],
};
export default config;
