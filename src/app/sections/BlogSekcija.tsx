'use client';

import React from 'react';
import Image from 'next/image';
import AppButton from '../components/AppButton';
import parse from 'html-react-parser';
import Link from 'next/link';
interface DinkoBlogList {
  blogList: any;
  isBlogPage?: boolean;
}

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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

  return (
    <section className='w-full relative xl:pb-24 lg:pb-20 pb-16'>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-32 lg:pt-24 md:pt-20 pt-16 pb-4 text-center'>
        Blog
      </h1>
      <Splide options={splideOptions} className='max-w-max-container my-0 mx-auto mt-9 2xl:p-0 md:px-6 px-2'>
        {blogList.map((blo: any) => {
          return (
            <SplideSlide key={blo.id}>
              <article className={` w-full flex xl:flex-nowrap items-stretch flex-wrap lg:gap-7 gap-2 bg-[#f1f1f1] `}>
                <Image
                  src={blo._embedded['wp:featuredmedia']['0'].source_url}
                  width={blo._embedded['wp:featuredmedia']['0'].media_details.width}
                  height={blo._embedded['wp:featuredmedia']['0'].media_details.height}
                  alt='blog thumbnail'
                  className=' w-full  lg:aspect-square shrink-1 aspect-video object-cover object-center lg:min-h-[284px] min-h-[180px]'
                />
                <div className='py-2 px-4 flex flex-col items-start w-full h-full gap-3'>
                  <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium '>
                    {blo.title.rendered}
                  </h2>
                  {isBlogPage && (
                    <span className='text-dinko-tamnoplava  lg:text-base text-sm  md:line-clamp-4 line-clamp-3'>
                      {parse(blo.excerpt.rendered)}
                    </span>
                  )}
                  <Link
                    href={`/blog/${blo.slug}`}
                    className='text-dinko-plava font-medium self-end  xl:text-lg lg:text-base text-sm'
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
