'use client';

import Image from 'next/image';
import React from 'react';
import DinkoBioHero from '../img/heros/dinko-vidovic-biografija-slika.png';
import DinkoBioMobile from '../img/heros/dinko-vidovic-biografija-slika-mobile.png';
import StickyBox from 'react-sticky-box';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import parse from 'html-react-parser';

interface DinkoBiography {
  content: any;
}

const Biografija = ({ content }: DinkoBiography) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang') ?? UserLanguage.hr;

  const bioShorthand = content.data.allBiografija.edges[0].node.biografijaFields;

  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  return (
    <section className='relative 2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 pb-28'>
      <div className='flex lg:items-start items-center lg:justify-start justify-center max-w-max-container my-0 mx-auto lg:gap-24 md:gap-20 gap-16 lg:flex-nowrap flex-wrap 2xl:p-0 px-6 '>
        <StickyBox
          offsetTop={200}
          offsetBottom={100}
          className='max-lg:!relative max-lg:!top-0 w-full h-full  lg:min-h-[700px] md:min-h-[600px] min-h-[500px] lg:max-w-[795px] '
        >
          <div className='lg:block hidden'>
            <Image
              className='object-cover lg:object-bottom object-center md:aspect-[9 / 16] aspect-square'
              alt='Image of Dinko Vidovic smiling'
              src={DinkoBioHero}
              fill
            />
          </div>
          <div className='lg:hidden block'>
            <Image
              className='object-cover lg:object-bottom object-center md:aspect-[9 / 16] aspect-square'
              alt='Image of Dinko Vidovic smiling'
              src={DinkoBioMobile}
              fill
            />
          </div>
        </StickyBox>

        <div className='grid grid-cols-1 items-start gap-6 lg:max-w-[686px] w-full lg:pt-16 pr-6'>
          <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading leading-baseLineHeight'>
            {langTriage('Biografija', 'Biography')}
          </h1>

          <div className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal dinko-bio'>
            {parse(langTriage(bioShorthand.biografijaHr, bioShorthand.biografijaEn))}
          </div>

          <div className='place-self-start'>
            <Link
              href={`/media-excerpt?lang=${checkParams}`}
              className='transition-all duration-300 ease-custom-ease-in-out flex items-center justify-center px-5 py-[0.6rem] rounded-appButtonBase lg:text-base text-sm cursor-pointer bg-dinko-plava hover:bg-dinko-tamnoplava text-white'
            >
              {langTriage('Izdvojeno iz medija', 'Featured in Media')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biografija;
