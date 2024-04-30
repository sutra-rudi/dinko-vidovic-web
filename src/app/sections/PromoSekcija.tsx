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
      <div className='flex gap-0 items-stretch w-full overflow-hidden'>
        {promoTrakaSlike.map((slik, ind) => {
          return (
            <Image
              src={slik.src}
              key={ind}
              alt='Operation thumbnail'
              className='object-cover aspect-[9/16] max-w-[385px] h-[442px]'
            />
          );
        })}
      </div>

      <div className='w-full bg-overlayPromoTraka min-h-[550px] flex items-center justify-center'>
        <div className='max-w-max-container w-full my-0 mx-auto flex items-center justify-between'>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava text-[99px] leading-baseLineHeight font-medium'>300</h1>
            <p className='text-2xl text-dinko-tamnoplava font-medium'>operacija godišnje</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava text-[99px] leading-baseLineHeight font-medium'>22</h1>
            <p className='text-2xl text-dinko-tamnoplava font-medium'>godina iskustva</p>
          </div>
          <div className='grid grid-cols-1 place-items-center'>
            <h1 className='text-dinko-tamnoplava text-[99px] leading-baseLineHeight font-medium'>34</h1>
            <p className='text-2xl text-dinko-tamnoplava font-medium'>održanih edukacija</p>
          </div>
        </div>
      </div>

      <div className='min-h-[794px] bg-dinko-tamnoplava flex items-center justify-center'>
        <div className='flex flex-row flex-wrap w-full max-w-max-container justify-center  place-items-center gap-y-20 gap-x-20'>
          <div className='grid items-center grid-cols-1 gap-8'>
            <h2 className='text-4xl text-dinko-plava text-center'>Klinički rad</h2>
            <div className='flex gap-20 px-24'>
              <Image src={kbc} alt='' />
              <Image src={katarina} alt='' />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 gap-8'>
            <h2 className='text-4xl text-dinko-plava text-center'>Akademsko djelovanje</h2>
            <div className='flex gap-20 px-24'>
              <Image src={sveuciliste} alt='' />
              <Image src={stomatoloski} alt='' />
            </div>
          </div>
          <div className='grid items-center grid-cols-1 gap-8'>
            <h2 className='text-4xl text-dinko-plava text-center'>Stručna društva</h2>
            <div className='flex gap-20 px-24'>
              <Image src={ao} alt='' />
              <Image src={traumatsko} alt='' />
              <Image src={pedi} alt='' />
              <Image src={esska} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSekcija;
