import type { Metadata } from 'next';

import './globals.scss';
import localFont from 'next/font/local';
import { Providers } from './providers';
import CookiesConsent from './CookiesConsent';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Dinko Vidović',
  description: '',
};

const Firs = localFont({
  src: [
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Regular.ttf', weight: '400' },
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Medium.ttf', weight: '500' },
    { path: '../../public/fonts/tt_firs_neue/TT Firs Neue Trial Bold.ttf', weight: '700' },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='hr-HR'
      className='w-full h-full bg-white scrollbar scrollbar-thumb-dinko-plava scrollbar-track-alt-bila'
    >
      <body className={`${Firs.className} w-full h-full bg-white `}>
        <Providers>{children}</Providers>
        <CookiesConsent />
        <GoogleAnalytics gaId={process.env.DINKO_VIDOVIC_ANALYTICS_KEY!} />
      </body>
    </html>
  );
}
