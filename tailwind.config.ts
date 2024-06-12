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
        'operations-cont': '1200px',
        'articles-cont': '1024px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        overlayVideoCitat: 'url("img/heros/dinko-vidovic-bg-video-citat.svg")',
        overlayIskustva: 'url("img/heros/dinko-vidovic-iskustva-pacijenata-bg.png")',
        overlayPromoTraka: 'url("img/svg/dinko-promo-traka-pattern.svg")',
        footerOverlay: 'url("img/svg/dinko-promo-traka-pattern.svg")',
        dinkoSocialBg: 'url("img/heros/dinko-vidovic-pre-footer-social-bg.png")',
        dinkoNotFoundBg: 'url("img/heros/dinko-vidovic-not-found.png")',
      },

      transitionTimingFunction: {
        'custom-ease-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'custom-ease-out': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'custom-ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      },

      colors: {
        'dinko-plava': '#17AEC2',
        'dinko-tamnoplava': '#092A4C',
        'dinko-operacije': 'rgba(9, 42, 76, 0.02)',
        tekstovi: 'rgba(0, 0, 0, 0.8)',
        articleNovostiBg: '#fafafa',
        'alt-bila': '#F5FAFF',
      },
      screens: {
        xsm: '400px',
        sm: '640px', // Small devices (landscape phones, 640px and up)
        md: '768px', // Medium devices (tablets, 768px and up)
        lg: '1024px', // Large devices (desktops, 1024px and up)
        xl: '1280px', // Extra large devices (large desktops, 1280px and up)
        '2xl': '1536px', // 2X large devices (extra large desktops, 1536px and up)
        '3xl': '1700px',
        '2k': '1920px',
        blogListCustom: '880px',
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
        '7xl': '4.8rem', // 4.8rem * 16px/rem = 77px cca
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
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
export default config;
