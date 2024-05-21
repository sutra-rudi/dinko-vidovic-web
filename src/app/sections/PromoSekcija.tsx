'use client';

import React from 'react';
import { promoTrakaSlike } from '../staticWebData/promoSekcijaTraka';
import Image from 'next/image';
import kbc from '../img/logos/oMeniLogoi/KBC-ZG-LOGO.svg';
import katarina from '../img/logos/oMeniLogoi/SVG-KATARINA-LOGO.svg';
import sveuciliste from '../img/logos/oMeniLogoi/MED-FAKS-LOGO.svg';
import stomatoloski from '../img/logos/oMeniLogoi/SVEUCILISTE-LOGO.svg';
import ao from '../img/logos/oMeniLogoi/AO-LOGO.svg';
import traumatsko from '../img/logos/oMeniLogoi/TRAUMATSKO-LOGO.svg';
import pedi from '../img/logos/oMeniLogoi/ORTOPEDIJA-LOGO.svg';
import esska from '../img/logos/oMeniLogoi/ESSKA-LOGO.svg';
import { useCountUp } from 'react-countup';
// @ts-ignore
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';

const PromoSekcija = () => {
  const splideOptions: any = {
    perPage: 4,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 1000,
    rewind: true,

    breakpoints: {
      400: { perPage: 2.4 },
      768: { perPage: 3.4 },
      1536: { perPage: 4 },
    },
  };

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
      {/* <Splide options={splideOptions} className='w-full'> */}
      <div className='relative w-full overflow-hidden'>
        <motion.div
          className='flex'
          animate={{
            x: ['-100%', '0%'],
            transition: {
              ease: 'linear',
              duration: 15,
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
                className='object-cover xl:aspect-[9/16] aspect-square max-w-[385px] xl:h-[442px] h-[350px]'
              />
            );
          })}
        </motion.div>
      </div>
      {/* </Splide> */}

      <div className='w-full bg-overlayPromoTraka lg:min-h-[550px] md:min-h-[500px] min-h-[400px] flex items-center justify-center lg:py-12 md:py-10 py-8 px-3'>
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
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={kbc}
                alt=''
              />
              <Image
                className='lg:w-56 md:w-24 w-16 lg:h-32 md:h-56 h-16 object-contain object-center'
                src={katarina}
                alt=''
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 xl:gap-6 lg:gap-4 gap-3'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center  leading-none'>
              Akademsko djelovanje
            </h2>
            <div className='flex xl:gap-16 lg:gap-12 md:gap-8 gap-8  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={sveuciliste}
                alt=''
              />
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={stomatoloski}
                alt=''
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 xl:gap-6 lg:gap-4 gap-3'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center'>
              Stručna društva
            </h2>
            <div className='flex xl:gap-16 lg:gap-12 md:gap-8 gap-8  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={ao}
                alt=''
              />
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={traumatsko}
                alt=''
              />
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={pedi}
                alt=''
              />
              <Image
                className='lg:w-40 md:w-32 w-24 lg:h-40 md:h-32 h-24 object-contain object-center'
                src={esska}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSekcija;
