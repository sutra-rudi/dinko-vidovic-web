'use client';

import React from 'react';
import { promoTrakaSlike } from '../staticWebData/promoSekcijaTraka';
import Image from 'next/image';
import log1 from '../img/logos/oMeniLogoi/oMeni-01.png';
import log2 from '../img/logos/oMeniLogoi/oMeni-02.png';
import log3 from '../img/logos/oMeniLogoi/oMeni-03.png';
import log4 from '../img/logos/oMeniLogoi/oMeni-04.png';
import log5 from '../img/logos/oMeniLogoi/oMeni-05.png';
import log6 from '../img/logos/oMeniLogoi/oMeni-06.png';
import log7 from '../img/logos/oMeniLogoi/oMeni-07.png';
import log8 from '../img/logos/oMeniLogoi/oMeni-08.png';
import { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';
import dinkoPromoTrakaPattern from '../img/svg/dinko-promo-traka-pattern.svg';
const PromoSekcija = () => {
  const operacijeRef = React.useRef(null);
  const godineRef = React.useRef(null);
  const edukacijeRef = React.useRef(null);

  const operacijeRefCount = useCountUp({
    start: 0,
    end: 300,
    ref: operacijeRef,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  const godineRefCount = useCountUp({
    start: 0,
    end: 22,
    ref: godineRef,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  const edukacijeRefCount = useCountUp({
    start: 0,
    end: 34,
    ref: edukacijeRef,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <section className='relative w-full'>
      <div className='relative w-full overflow-hidden'>
        <motion.div
          className='flex'
          animate={{
            x: ['-100%', '0%'],
            transition: {
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            },
          }}
        >
          {[...promoTrakaSlike, ...promoTrakaSlike].map((slik, ind) => {
            return (
              <Image
                src={slik.src}
                key={ind}
                alt='Operation thumbnail'
                placeholder='blur'
                className='object-cover will-change-transform object-center w-[385px] aspect-square  xl:h-[330px] h-[350px]'
              />
            );
          })}
        </motion.div>
      </div>

      <div className='w-full relative bg-overlayPromoTraka lg:min-h-[450px] md:min-h-[400px] min-h-[300px] flex items-center justify-center lg:py-12 md:py-10 py-8 px-3'>
        <Image
          src={dinkoPromoTrakaPattern}
          fill
          alt='svg pattern dinko vidovic'
          className='object-cover object-center block'
        />
        <div className='max-w-max-container w-full my-0 mx-auto flex items-center justify-center xl:gap-40 lg:gap-32 md:gap-20 gap-8 lg:flex-nowrap flex-wrap'>
          <div className='grid grid-cols-1 place-items-center'>
            <h1
              ref={operacijeRef}
              className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'
            ></h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>operacija godišnje</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1
              ref={godineRef}
              className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'
            ></h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>godina iskustva</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1
              ref={edukacijeRef}
              className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'
            ></h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>održanih edukacija</p>
          </div>
        </div>
      </div>

      <div className='lg:py-20 md:py-16 py-14 px-3 bg-dinko-tamnoplava flex items-center justify-center'>
        <div className='flex flex-row flex-wrap w-full max-w-max-container justify-center  place-items-center  gap-y-20 gap-x-20'>
          <div className='grid items-center grid-cols-1 xl:gap-6 lg:gap-4 gap-3'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center leading-none'>
              Klinički rad
            </h2>
            <div className='flex xl:gap-16 lg:gap-12 md:gap-8 gap-8   lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log1}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log2}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 xl:gap-6 lg:gap-4 gap-3'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center  leading-none'>
              Akademsko djelovanje
            </h2>
            <div className='flex xl:gap-16 lg:gap-12 md:gap-8 gap-8  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log3}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log4}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 xl:gap-6 lg:gap-4 gap-3'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center'>
              Stručna društva
            </h2>
            <div className='flex xl:gap-16 lg:gap-12 md:gap-8 gap-8  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log5}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log6}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log7}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
              <Image
                className='lg:w-32 md:w-20 w-16 lg:h-20 md:h-20 h-16 object-contain object-center'
                src={log8}
                alt='institution logo'
                width={120}
                height={120}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSekcija;
