import type { Metadata, Viewport } from 'next';

import './globals.scss';
import localFont from 'next/font/local';
import { Providers } from './providers';
import CookiesConsent from './CookiesConsent';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { GlobalContextProvider } from './contexts/store';
import LanguageSwitch from './components/LangSwitch';
import { Suspense } from 'react';
import 'yet-another-react-lightbox/styles.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  interactiveWidget: 'overlays-content',
  colorScheme: 'light',
  themeColor: '#eeeeee',
};

export const metadata: Metadata = {
  title: 'Dinko Vidović',
  description: '',
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

const Firs = localFont({
  src: [
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Regular.ttf', weight: '400' },
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Medium.ttf', weight: '500' },
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Bold.ttf', weight: '700' },
  ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='hr-HR'
      className='w-full h-full bg-white scrollbar scrollbar-thumb-dinko-plava scrollbar-track-alt-bila'
    >
      <body className={`${Firs.className} w-full h-full bg-white max-w-[1920px] mx-auto my-0`}>
        <Suspense>
          <GlobalContextProvider>
            <Providers>
              {children}
              <LanguageSwitch />
            </Providers>
          </GlobalContextProvider>
          <CookiesConsent />

          <GoogleAnalytics gaId={process.env.DINKO_VIDOVIC_ANALYTICS_KEY!} />
          <GoogleTagManager gtmId={process.env.DINKO_VIDOVIC_TAG_ANALYTICS_KEY!} />
        </Suspense>
      </body>
    </html>
  );
}
