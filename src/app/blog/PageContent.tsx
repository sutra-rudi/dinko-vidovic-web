'use client';

import Image from 'next/image';
import React from 'react';
import blogArchiveHero from '../img/blog/blog-archive-hero.png';
import Link from 'next/link';
import slugify from 'slugify';
import { useSearchParams } from 'next/navigation';
interface DinkoBlogList {
  blogList: any;
  isBlogPage?: boolean;
}
const PageContent = ({ blogList }: DinkoBlogList) => {
  console.log('BLOG LISTA', blogList);

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
    <section className='w-full h-full '>
      <div className='w-full relative'>
        <h2 className='absolute text-white text-6xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          Arhiva Blogova
        </h2>
        <Image width={1917} height={457} alt='blog archive hero image of x-ray' src={blogArchiveHero} quality={100} />
      </div>
      <div className='max-w-max-container my-0 mx-auto pt-14 pb-12 2xl:px-0 px-4 w-full '>
        <div className='w-full flex items-center justify-end flex-row pb-12'>
          <div className='flex items-center gap-6  justify-end'>
            <label className='lg:text-base text-sm ' htmlFor=''>
              Sortiranje po:
            </label>
            <select
              disabled
              className='m-0 xsm:py-2 xsm:px-4 py-1 px-2 rounded border-0 outline-none bg-alt-bila appearance-none lg:max-w-[248px] lg:text-base text-sm text-dinko-tamnoplava xsm:min-w-[230px]'
              name=''
              id=''
            >
              <option value=''>{`Datumu (od najnovijeg)`}</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 xl:gap-12 lg:gap-6 md:gap-4 gap-2 items-start'>
          {blogList.map((blog: any, index: number) => {
            return (
              <article
                key={index}
                className={` w-full flex xl:flex-nowrap items-stretch flex-wrap 2xl:gap-7 xl:gap-6 lg:gap-5 gap-2 bg-[#f1f1f1] `}
              >
                <Image
                  src={blog.imageData.sourceUrl}
                  width={284}
                  height={284}
                  sizes={blog.imageData.sizes}
                  alt='blog thumbnail'
                  className=' w-full h-full block  lg:aspect-square shrink aspect-video object-cover object-center lg:min-h-[284px] min-h-[180px]'
                />
                <div className='py-2 xl:pr-4 lg:pr-3 pr-2 xl:pl-0 pl-2 flex flex-col items-start w-full h-full gap-3'>
                  <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium '>
                    {blog.nASLOVHR ?? blog.naslovEng}
                  </h2>

                  <span className='text-dinko-tamnoplava  xl:text-base text-sm  md:line-clamp-4 line-clamp-3'>
                    {blog.kratkiTekstZaKarticuBlogaDo200ZnakovaHr ?? blog.kratkiTekstZaKarticuEn}
                  </span>

                  <Link
                    href={`/blog/${slugify(blog.nASLOVHR ?? blog.naslovEng, slugifyOptions)}-${
                      blog.blogId
                    }?lang=${checkParams}`}
                    className='text-dinko-plava font-medium self-end  xl:text-lg lg:text-base text-sm pt-4'
                  >
                    Pročitaj blog
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageContent;
