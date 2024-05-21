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

  console.log('NOVOSTI', novostiList.data.novosti);

  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  return (
    <section className='2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 relative z-10 overflow-x-hidden'>
      <Image
        ref={linesMove.ref as any}
        src={dinkoLinijeEfektAlt}
        alt='lines deco'
        className='absolute -right-12 top-12 z-[-1] block'
      />
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading  leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Novosti
      </h1>

      <Splide
        options={splideOptions}
        className='max-w-max-container my-0 mx-auto lg:gap-9 md:gap-6 gap-3 mt-16 2xl:p-0 px-3 cursor-grab'
      >
        {novostiList.data.novosti.edges.map((nov: any, index: number) => {
          return (
            <SplideSlide key={index}>
              <article key={index} className='bg-articleNovostiBg '>
                <Image
                  src={nov.node.novosti.slikaHeroBlog.node.sourceUrl}
                  alt='news thumbnail'
                  quality={100}
                  sizes={nov.node.novosti.slikaHeroBlog.node.sizes}
                  loading='eager'
                  width={350}
                  height={240}
                />
                <div className='lg:px-5 lg:py-6 px-3 py-4 flex flex-col items-start gap-2'>
                  <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl md:text-lg text-base leading-baseLineHeight font-medium lg:line-clamp-none line-clamp-2'>
                    {nov.node.novosti.hrvatskiJezik.nASLOVNOVOSTIHR}
                  </h2>
                  <p className='text-dinko-tamnoplava md:text-base text-sm leading-normal font-normal text-balance lg:line-clamp-none md:line-clamp-4 line-clamp-3'>
                    {nov.node.novosti.hrvatskiJezik.kratkiTekstZaKarticuNovostiDo200ZnakovaHr}
                  </p>

                  <Link
                    href={`/novosti/${slugify(nov.node.novosti.hrvatskiJezik.nASLOVNOVOSTIHR, slugifyOptions)}-${
                      nov.node.databaseId
                    }?lang=${checkParams}`}
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
