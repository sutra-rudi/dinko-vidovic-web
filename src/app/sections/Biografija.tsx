'use client';

import Image from 'next/image';
import React from 'react';
import DinkoBioHero from '../img/heros/dinko-vidovic-biografija-slika.png';
import { hrBio } from '../staticWebData/biographyDemo';
import StickyBox from 'react-sticky-box';
import AppButton from '../components/AppButton';
const Biografija = () => {
  return (
    <section className='relative mt-28 pb-28'>
      <div className='flex items-start max-w-max-container my-0 mx-auto gap-24 '>
        <Image className='max-w-[795px]' alt='Image of Dinko Vidovic smiling' src={DinkoBioHero} />
        <StickyBox offsetBottom={24} offsetTop={24} className='pt-16'>
          <div className='grid grid-cols-1 items-start gap-6'>
            <h1 className='text-dinko-tamnoplava text-heroText leading-baseLineHeight'>Biografija</h1>
            <p className='text-dinko-tamnoplava text-base break-words whitespace-pre-wrap text-balance leading-normal'>
              {hrBio}
            </p>
            <div className='self-start'>
              <AppButton primary='bio' content='Izdvojeno iz medija' />
            </div>
          </div>
        </StickyBox>
      </div>
    </section>
  );
};

export default Biografija;
