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
        overlayVideoCitat: 'url("img/heros/dinko-vidovic-bg-video-citat.svg")',
        overlayIskustva: 'url("img/heros/dinko-vidovic-iskustva-pacijenata-bg.png")',
        overlayPromoTraka: 'url("img/svg/dinko-promo-traka-pattern.svg")',
        footerOverlay: 'url("img/svg/dinko-promo-traka-pattern.svg")',
      },

      colors: {
        'dinko-plava': '#17AEC2',
        'dinko-tamnoplava': '#092A4C',
        tekstovi: 'rgba(0, 0, 0, 0.8)',
        articleNovostiBg: '#fafafa',
        'alt-bila': '#F5FAFF',
      },
      screens: {
        xs: '360px', // Extra small devices (phones, less than 576px)
        sm: '576px', // Small devices (phones, 576px and up)
        md: '768px', // Medium devices (tablets, 768px and up)
        lg: '992px', // Large devices (desktops, 992px and up)
        xl: '1200px', // Extra large devices (large desktops, 1200px and up)
        '2xl': '1440px', // 2X large devices
        '3xl': '1920px', // 3X large devices
      },
      fontSize: {
        xs: '0.75rem', // 0.75rem * 16px/rem = 12px
        sm: '0.875rem', // 0.875rem * 16px/rem = 14px
        base: '1rem', // 1rem * 16px/rem = 16px
        lg: '1.125rem', // 1.125rem * 16px/rem = 18px
        xl: '1.25rem', // 1.25rem * 16px/rem = 20px
        '2xl': '1.5rem', // 1.5rem * 16px/rem = 24px
        '3xl': '1.875rem', // 1.875rem * 16px/rem = 30px
        subHeading: '2rem', // 2rem * 16px/rem = 32px
        '4xl': '2.25rem', // 2.25rem * 16px/rem = 36px
        '5xl': '3rem', // 3rem * 16px/rem = 48px
        '6xl': '4rem', // 4rem * 16px/rem = 64px
        heroText: '3.4375rem', // 55px / 16px/rem = 3.4375rem
      },
      minHeight: {
        'custom-page-min': 'calc(100svh + 1rem)',
        'iframes-images-lg': 'calc(40vh + 2.5rem)',
        'iframes-images-md': 'calc(35vh + 2.5rem)',
        'iframes-images-sm': 'calc(30vh + 2.5rem)',
      },
      borderRadius: {
        appButtonBase: '49px',
      },
      lineHeight: {
        baseLineHeight: '120%',
        blogParaLineHeight: '140%',
      },
    },
  },
  plugins: [],
};
export default config;
