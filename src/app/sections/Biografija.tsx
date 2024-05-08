'use client';

import Image from 'next/image';
import React from 'react';
import DinkoBioHero from '../img/heros/dinko-vidovic-biografija-slika.png';
import { hrBio } from '../staticWebData/biographyDemo';
import StickyBox from 'react-sticky-box';
import AppButton from '../components/AppButton';
const Biografija = () => {
  return (
    <section className='relative 2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 pb-28'>
      <div className='flex lg:items-start items-center lg:justify-start justify-center max-w-max-container my-0 mx-auto lg:gap-24 md:gap-20 gap-16 lg:flex-nowrap flex-wrap 2xl:p-0 px-6 '>
        <StickyBox
          offsetTop={0}
          offsetBottom={0}
          className='max-lg:!relative w-full h-full xl:min-h-[750px] lg:min-h-[700px] min-h-[400px] lg:max-w-[795px] '
        >
          <Image
            className='object-cover lg:object-bottom object-center lg:aspect-[9 / 16] md:aspect-video aspect-square'
            alt='Image of Dinko Vidovic smiling'
            src={DinkoBioHero}
            fill
          />
        </StickyBox>

        <div className='grid grid-cols-1 items-start gap-6 lg:max-w-[686px] w-full lg:pt-16 pr-6'>
          <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading leading-baseLineHeight'>
            Biografija
          </h1>
          <p className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal'>
            {hrBio}
          </p>
          <div className='self-start'>
            <AppButton primary='bio' content='Izdvojeno iz medija' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biografija;
