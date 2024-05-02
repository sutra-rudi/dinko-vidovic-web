import React from 'react';
import dinkoBanner from '../img/heros/dinko-vidovic-pre-footer-banner.png';
import dinkoSocialBg from '../img/heros/dinko-vidovic-pre-footer-social-bg.png';
import Image from 'next/image';
import AppButton from '../components/AppButton';
const BannerSekcija = () => {
  return (
    <section>
      <div className='w-full relative lg:h-[961px] '>
        <Image
          src={dinkoBanner}
          alt='image of Dinko at work'
          fill
          className='object-cover object-center block'
          placeholder='blur'
        />
      </div>
      <div className='w-full relative flex items-center justify-center min-h-[340px]'>
        <Image src={dinkoSocialBg} alt='decorative background' fill className='select-none pointer-events-none' />
        <div className='flex z-10  gap-24 items-center'>
          <h2 className='text-4xl text-dinko-tamnoplava max-w-[637px] text-balance whitespace-pre-wrap'>
            {`Aktivnosti prof. Vidovića možete pratiti i na društvenim mrežama`}
          </h2>
          <div className='grid grid-cols-2 gap-6 items-center'>
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
