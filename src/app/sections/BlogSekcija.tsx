import React from 'react';
import { blogExample } from '../staticWebData/blogDemo';
import Image from 'next/image';
import AppButton from '../components/AppButton';

const BlogSekcija = () => {
  return (
    <section className='w-full relative xl:pb-24 lg:pb-20 pb-16'>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-32 lg:pt-24 md:pt-20 pt-16 pb-4 text-center'>
        Blog
      </h1>

      <div className='max-w-max-container my-0 mx-auto grid xsm:grid-cols-2 grid-cols-1  xl:place-items-start place-items-center lg:gap-x-9 gap-x-5 lg:gap-y-16 gap-y-8 mt-9 2xl:p-0 px-6'>
        {blogExample.map((blo, ind) => {
          return (
            <article
              key={ind}
              className='xl:max-w-[617px] w-full flex items-start xl:flex-nowrap flex-wrap lg:gap-7 gap-4 bg-[#f1f1f1] '
            >
              <Image
                src={blo.imgSrc}
                alt='blog thumbnail'
                className='xl:max-w-[284px] w-full xl:max-h-[284px] xl:aspect-square max-h-[300px] aspect-video object-cover'
              />
              <div className='p-2 flex flex-col items-start w-full gap-3'>
                <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium'>
                  {blo.title}
                </h2>
                <p className='text-dinko-tamnoplava  xl:text-base text-sm leading-normal font-normal text-balance lg:line-clamp-none md:line-clamp-4 line-clamp-3'>
                  {blo.content}
                </p>
                <a href='' className='text-dinko-plava font-medium self-end  xl:text-lg text-base'>
                  Procitaj blog
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className='flex items-center justify-center mt-12'>
        <AppButton primary='bio' content='Arhiva blogova' />
      </div>
    </section>
  );
};

export default BlogSekcija;
