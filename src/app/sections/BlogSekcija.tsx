'use client';

import React from 'react';
import Image from 'next/image';
import AppButton from '../components/AppButton';

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

  return (
    <section className='w-full relative xl:pb-24 lg:pb-20 pb-16'>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-32 lg:pt-24 md:pt-20 pt-16 pb-4 text-center'>
        Blog
      </h1>
      <Splide options={splideOptions} className='max-w-max-container my-0 mx-auto mt-9 2xl:p-0 md:px-6 px-2'>
        {blogList.data.allVidovicBlog.edges.map((blo: any) => {
          return (
            <SplideSlide key={blo.node.id}>
              <article
                className={` w-full flex xl:flex-nowrap items-stretch flex-wrap 2xl:gap-7 xl:gap-6 lg:gap-5 gap-2 bg-[#f1f1f1] `}
              >
                <Image
                  src={blo.node.dinkoBlog.slikaThumbBlog.node.sourceUrl}
                  width={284}
                  height={284}
                  sizes={blo.node.dinkoBlog.slikaThumbBlog.node.sizes}
                  alt='blog thumbnail'
                  className=' w-full h-full block  lg:aspect-square shrink aspect-video object-cover object-center lg:min-h-[284px] min-h-[180px]'
                />
                <div className='py-2 xl:pr-4 lg:pr-3 pr-2 xl:pl-0 pl-2 flex flex-col items-start w-full h-full gap-3'>
                  <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium '>
                    {blo.node.dinkoBlog.hrvatskiJezik.nASLOVHR}
                  </h2>
                  {isBlogPage && (
                    <span className='text-dinko-tamnoplava  xl:text-base text-sm  md:line-clamp-4 line-clamp-3'>
                      {blo.node.dinkoBlog.hrvatskiJezik.kratkiTekstZaKarticuBlogaDo200ZnakovaHr}
                    </span>
                  )}
                  <Link
                    href={`/blog/${slugify(blo.node.dinkoBlog.hrvatskiJezik.nASLOVHR, slugifyOptions)}-${
                      blo.node.vidovicBlogId
                    }?lang=${checkParams}`}
                    className='text-dinko-plava font-medium self-end  xl:text-lg lg:text-base text-sm pt-4'
                  >
                    Pročitaj blog
                  </Link>
                </div>
              </article>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className='flex items-center justify-center mt-12'>
        <AppButton primary='bio' content='Arhiva blogova' />
      </div>
    </section>
  );
};

export default BlogSekcija;
