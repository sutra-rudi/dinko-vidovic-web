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

const PromoSekcija = () => {
  return (
    <section className='relative w-full'>
      <div className='flex gap-0 items-stretch w-full overflow-scroll snap-x snap-always snap-center'>
        {promoTrakaSlike.map((slik, ind) => {
          return (
            <Image
              src={slik.src}
              key={ind}
              alt='Operation thumbnail'
              className='object-cover aspect-[9/16] max-w-[385px] xl:h-[442px] h-[200px] snap-always snap-center'
            />
          );
        })}
      </div>

      <div className='w-full bg-overlayPromoTraka lg:min-h-[550px] md:min-h-[500px] min-h-[400px] flex items-center justify-center lg:py-12 md:py-10 py-8 px-3'>
        <div className='max-w-max-container w-full my-0 mx-auto flex items-center justify-center xl:gap-40 lg:gap-32 md:gap-28 gap-20 lg:flex-nowrap flex-wrap'>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'>
              300
            </h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>operacija godišnje</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'>
              22
            </h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>godina iskustva</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava 2xl:text-[99px] xl:text-[80px] lg:text-6xl text-5xl leading-baseLineHeight font-medium'>
              34
            </h1>
            <p className='lg:text-2xl text-lg text-dinko-tamnoplava font-medium'>održanih edukacija</p>
          </div>
        </div>
      </div>

      <div className='lg:py-12 md:py-10 py-8 px-3 bg-dinko-tamnoplava flex items-center justify-center'>
        <div className='flex flex-row flex-wrap w-full max-w-max-container justify-center  place-items-center  gap-y-20 gap-x-20'>
          <div className='grid items-center grid-cols-1 xl:gap-8 lg:gap-6 gap-2'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center'>Klinički rad</h2>
            <div className='flex xl:gap-20 lg:gap-16 md:gap-16 gap-12   lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={kbc}
                alt=''
              />
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={katarina}
                alt=''
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 gap-8'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center'>
              Akademsko djelovanje
            </h2>
            <div className='flex xl:gap-20 lg:gap-16 md:gap-16 gap-12  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={sveuciliste}
                alt=''
              />
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={stomatoloski}
                alt=''
              />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 gap-8'>
            <h2 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl text-dinko-plava text-center'>
              Stručna društva
            </h2>
            <div className='flex xl:gap-20 lg:gap-16 md:gap-16 gap-12  lg:flex-nowrap flex-wrap items-center justify-center'>
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={ao}
                alt=''
              />
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={traumatsko}
                alt=''
              />
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
                src={pedi}
                alt=''
              />
              <Image
                className='lg:w-32 md:w-24 w-16 lg:h-32 md:h-24 h-16 object-contain object-center'
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
