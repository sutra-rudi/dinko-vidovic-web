import React from 'react';
import dinkoBanner from '../img/heros/dinko-vidovic-pre-footer-banner.png';
import dinkoSocialBg from '../img/heros/dinko-vidovic-pre-footer-social-bg.png';
import Image from 'next/image';
import AppButton from '../components/AppButton';
const BannerSekcija = () => {
  return (
    <section className='2xl:mt-24 xl:mt-20 lg:mt-16 mt-12'>
      <div className='w-full relative lg:h-[961px] h-[400px]'>
        <Image
          src={dinkoBanner}
          alt='image of Dinko at work'
          fill
          className='object-cover object-center block aspect-video '
          placeholder='blur'
        />
      </div>
      <div className='w-full relative flex items-center justify-center min-h-[340px] 2xl:p-0 px-6'>
        <Image
          src={dinkoSocialBg}
          alt='decorative background'
          fill
          className='select-none pointer-events-none object-center'
        />
        <div className='flex z-10  xl:gap-24 lg:gap-20 md:gap-16 gap-12 place-items-center justify-center lg:flex-nowrap flex-wrap'>
          <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-tamnoplava lg:max-w-[637px] text-balance whitespace-pre-wrap lg:text-left text-center'>
            {`Aktivnosti prof. Vidovića možete pratiti i na društvenim mrežama`}
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
