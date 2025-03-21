'use client';

import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
interface DinkoBlogList {
  blogList: any;
  isBlogPage?: boolean;
}

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import slugify from 'slugify';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const BlogSekcija = ({ blogList, isBlogPage }: DinkoBlogList) => {
  const splideOptions: any = {
    perPage: 3,
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

  const contentShorthand = blogList.data.allVidovicBlog.edges;

  return (
    <section className='w-full relative xl:pb-24 lg:pb-20 pb-16'>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-32 lg:pt-24 md:pt-20 pt-16 pb-4 text-center'>
        Blog
      </h1>
      <Splide options={splideOptions} className='max-w-max-container my-0 mx-auto mt-9 2xl:p-0 md:px-6 px-2'>
        {contentShorthand.map((blo: any) => {
          return (
            <SplideSlide key={blo.node.id}>
              <article
                className={` w-full flex place-items-stretch flex-wrap 2xl:gap-7 xl:gap-3 lg:gap-2 gap-1 bg-[#f1f1f1] `}
              >
                <Image
                  src={blo.node.dinkoBlog.slikaThumbBlog.node.sourceUrl}
                  width={284}
                  height={284}
                  sizes={blo.node.dinkoBlog.slikaThumbBlog.node.sizes}
                  alt='blog thumbnail'
                  quality={100}
                  className='w-full h-full block  2xl:aspect-square aspect-video  object-cover object-center max-h-[284px]'
                />
                <div className='pt-2 pb-3 xl:px-5 lg:px-4 px-3 flex flex-col items-start w-full h-full gap-3'>
                  <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium '>
                    {langTriage(blo.node.dinkoBlog.hrvatskiJezik.nASLOVHR, blo.node.dinkoBlog.engleskiJezik.naslovEng)}
                  </h2>
                  {isBlogPage && (
                    <span className='text-dinko-tamnoplava  xl:text-base text-sm  md:line-clamp-4 line-clamp-3'>
                      {langTriage(
                        blo.node.dinkoBlog.hrvatskiJezik.kratkiTekstZaKarticuBlogaDo200ZnakovaHr,
                        blo.node.dinkoBlog.engleskiJezik.kratkiTekstZaKarticuEn
                      )}
                    </span>
                  )}
                  <Link
                    href={`/blog/${slugify(
                      langTriage(blo.node.dinkoBlog.hrvatskiJezik.nASLOVHR, blo.node.dinkoBlog.engleskiJezik.naslovEng),
                      slugifyOptions
                    )}-${blo.node.vidovicBlogId}?lang=${checkParams}`}
                    className='text-dinko-plava font-medium self-end  xl:text-lg lg:text-base text-sm pt-4 transition-all ease-in-out hover:text-dinko-tamnoplava'
                  >
                    {langTriage('Pročitaj blog', 'Read blog')}
                  </Link>
                </div>
              </article>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className='flex items-center justify-center mt-12'>
        <Link
          href={'/blog'}
          className='transition-all duration-300 ease-custom-ease-in-out flex items-center justify-center px-5 py-[0.6rem] rounded-appButtonBase lg:text-base text-sm cursor-pointer bg-dinko-plava hover:bg-dinko-tamnoplava text-white'
        >
          {langTriage('Arhiva blogova', 'Blog archive')}
        </Link>
      </div>
    </section>
  );
};

export default BlogSekcija;
