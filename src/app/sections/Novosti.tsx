'use client';

import React from 'react';
import Image from 'next/image';
import dinkoLinijeEfektAlt from '../img/svg/dinko-vidovic-linije-efekt-alt.svg';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useParallax } from 'react-scroll-parallax';
import Link from 'next/link';
import slugify from 'slugify';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface DinkoNovosti {
  novostiList: any;
}

const Novosti = ({ novostiList }: DinkoNovosti) => {
  const splideOptions: any = {
    perPage: 4,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    // autoplay: true,
    // interval: 2000,
    // rewind: true,

    breakpoints: {
      400: { perPage: 1.2 },
      768: { perPage: 2.2 },
      1536: { perPage: 3.3 },
    },
  };

  const linesMove = useParallax<HTMLDivElement>({
    translateX: [0, 20],
    // translateY: [0, -15],
    easing: 'easeOut',
  });

  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const novostiShorthand = novostiList.data.allNovosti.edges;

  console.log('NOVOSTI LISTA', novostiShorthand);

  return (
    <section className='2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 relative z-10 overflow-x-hidden'>
      <Image
        ref={linesMove.ref as any}
        src={dinkoLinijeEfektAlt}
        alt='lines deco'
        className='absolute -right-12 top-12 z-[-1] block'
      />
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading  leading-baseLineHeight mx-auto my-0 w-full text-center'>
        {langTriage('Novosti', 'News')}
      </h1>

      <Splide
        options={splideOptions}
        className='max-w-max-container my-0 mx-auto lg:gap-9 md:gap-6 gap-3 mt-16 2xl:p-0 px-3 cursor-grab'
      >
        {novostiShorthand.map((nov: any, index: number) => {
          // console.log(nov);

          const novShorthand = nov.node.novostiFields;
          return (
            <SplideSlide key={index}>
              <article key={index} className='bg-articleNovostiBg '>
                <div className='relative w-full h-[241px] aspect-square'>
                  <Image
                    src={novShorthand.slikaHero.node.sourceUrl}
                    alt='news thumbnail'
                    quality={100}
                    // sizes={nov.node.novosti.slikaHeroBlog.node.sizes}
                    loading='eager'
                    width={350}
                    height={240}
                    className='object-cover w-full h-full aspect-square'
                    priority
                  />
                </div>
                <div className='lg:px-5 lg:py-6 px-3 py-4 flex flex-col items-start gap-2'>
                  <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl md:text-lg text-base leading-baseLineHeight font-medium lg:line-clamp-none line-clamp-2'>
                    {langTriage(novShorthand.hrvatskiJezik.naslov, novShorthand.engleskiJezik.naslov)}
                  </h2>
                  <p className='text-dinko-tamnoplava md:text-base text-sm leading-normal font-normal text-balance lg:line-clamp-none md:line-clamp-4 line-clamp-3'>
                    {langTriage(novShorthand.hrvatskiJezik.uvod, novShorthand.engleskiJezik.uvod)}
                  </p>

                  <Link
                    href={`/novosti/${slugify(
                      langTriage(novShorthand.hrvatskiJezik.naslov, novShorthand.engleskiJezik.naslov),
                      slugifyOptions
                    )}-${nov.node.databaseId}/?lang=${checkParams}`}
                    className='text-dinko-plava font-medium self-end lg:text-base text-sm'
                  >
                    Saznaj više
                  </Link>
                </div>
              </article>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Novosti;
