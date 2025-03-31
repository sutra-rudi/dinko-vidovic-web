'use client';

import React from 'react';
import dinkoBanner from '../img/heros/dinko-vidovic-pre-footer-banner.png';
import Image from 'next/image';
import AppButton from '../components/AppButton';
import dinkoBannerBg from '../img/heros/dinko-vidovic-pre-footer-social-bg.png';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
const BannerSekcija = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang') ?? UserLanguage.hr;

  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Image
        src={dinkoBanner}
        alt='image of Dinko at work'
        fill
        className='object-cover object-center block  aspect-video'
        placeholder='blur'
      />
    ),
  };

  return (
    <section className='2xl:mt-24 xl:mt-20 lg:mt-16 mt-12'>
      <div className='w-full relative 2xl:h-[961px] lg:h-[450px] h-[400px]'>
        <ParallaxBanner layers={[background]} className='w-full relative 2xl:h-full lg:h-[450px] h-[400px]' />
      </div>
      <div className='w-full  relative flex items-center justify-center min-h-[360px] 2xl:p-0 px-6 bg-no-repeat xl:bg-center bg-right bg-cover'>
        <Image
          src={dinkoBannerBg.src}
          blurDataURL={dinkoBannerBg.blurDataURL}
          fill
          alt='operations scan'
          className='w-full h-full object-center object-cover block'
        />
        <div className='flex z-10  xl:gap-24 lg:gap-20 md:gap-16 gap-12 place-items-center justify-center lg:flex-nowrap flex-wrap'>
          <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-tamnoplava lg:max-w-[637px] text-balance whitespace-pre-wrap lg:text-left text-center'>
            {langTriage(
              `Aktivnosti prof. Vidovića možete pratiti i na društvenim mrežama`,
              `You can follow Prof. Vidović's activities on social media`
            )}
          </h2>
          <div className='grid grid-cols-2  gap-6 '>
            <AppButton primary='prim' content='INSTAGRAM' />
            <AppButton primary='sec' content='LINKEDIN' />
            <AppButton primary='sec' content='FACEBOOK' />
            <AppButton primary='prim' content='YOUTUBE' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSekcija;
