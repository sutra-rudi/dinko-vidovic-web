import React, { Suspense } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import DinkoNotFoundHero from '../app/img/heros/dinko-vidovic-not-found.png';
import Image from 'next/image';
import { UserLanguage } from './types/appState';
import Link from 'next/link';

const PageNotFound = ({ searchParams }: { searchParams: { lang: string } }) => {
  const prepareUserMsg = () => {
    if (searchParams && typeof searchParams !== undefined) {
      const triage =
        searchParams.lang === UserLanguage.hr
          ? 'Stranica koju ste tražili nije pronađena'
          : 'The page you requested is not found';

      return triage;
    } else return '';
  };

  const prepareCTA = () => {
    if (searchParams && typeof searchParams !== undefined) {
      const triage = searchParams.lang === UserLanguage.hr ? 'Povratak na naslovnu stranicu' : 'Back to homepage';

      return triage;
    } else return '';
  };

  return (
    <Suspense>
      <AppHeader />
      <main className='w-full h-full relative after:w-full after:h-full after:bg-dinko-tamnoplava/75 after:absolute after:inset-0 grid items-center justify-center'>
        <Image
          src={DinkoNotFoundHero}
          alt='not found hero image dinko in operation room'
          placeholder='blur'
          quality={100}
          fill
          className='object-cover aspect-video block object-center select-none pointer-events-none'
        />

        <div className='z-20 grid grid-cols-1 items-center text-center justify-center  px-4'>
          <p className='text-white 2xl:text-[122px] xl:text-[80px] lg:text-6xl text-5xl leading-none'>404</p>
          <p className='text-white leading-none'>{prepareUserMsg()}</p>

          <Link
            className='mt-12 text-white outline outline-2 outline-white rounded-full xl:px-8 xl:py-4 px-6 py-4 inline-block self-center text-balance leading-none transition-all duration-300 ease-custom-ease-in-out hover:bg-dinko-plava hover:outline-dinko-plava'
            href={'/'}
          >
            {prepareCTA()}
          </Link>
        </div>
      </main>
      <AppFooter />
    </Suspense>
  );
};

export default PageNotFound;
