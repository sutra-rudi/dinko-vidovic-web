'use client';

import Image from 'next/image';
import React from 'react';
import IzdvojenoIzMedijaHero from '../img/heros/izdvojeno-iz-medija-hero.png';
interface DinkoIzdvojenoIzMedija {
  content: any;
}
import parse from 'html-react-parser';
import Link from 'next/link';

const PageContent = ({ content }: DinkoIzdvojenoIzMedija) => {
  return (
    <section className='w-full h-full '>
      <div className='w-full relative  h-[420px]'>
        <h2 className='absolute text-white text-6xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>Media</h2>
        <Image
          fill
          alt='blog archive hero image of x-ray'
          src={IzdvojenoIzMedijaHero}
          quality={100}
          className='object-center object-cover block aspect-video'
        />
      </div>
      <div className='max-w-max-container my-0 mx-auto pt-14 pb-12 2xl:px-0 px-4 w-full '>
        <div className='grid grid-cols-2 xl:gap-12 lg:gap-6 md:gap-4 gap-2 items-start'>
          {content.data.allIzdvojenoIzMedija.edges.map((blog: any, index: number) => {
            return (
              <article
                key={index}
                className={` w-full flex xl:flex-nowrap items-stretch flex-wrap 2xl:gap-7 xl:gap-6 lg:gap-5 gap-2 bg-[#f1f1f1] `}
              >
                <Image
                  src={
                    blog.node.izdvojenoIzMedijaFields.slika !== null
                      ? blog.node.izdvojenoIzMedijaFields.slika.node.sourceUrl
                      : IzdvojenoIzMedijaHero
                  }
                  width={284}
                  height={284}
                  sizes={
                    blog.node.izdvojenoIzMedijaFields.slika !== null
                      ? blog.node.izdvojenoIzMedijaFields.slika.node.sizes
                      : ''
                  }
                  alt='blog thumbnail'
                  className=' w-full h-full block  lg:aspect-square shrink aspect-video object-cover object-center lg:min-h-[284px] min-h-[180px]'
                />
                <div className='py-2 xl:pr-4 lg:pr-3 pr-2 xl:pl-0 pl-2 flex flex-col items-start w-full h-full gap-3'>
                  <h2 className='text-dinko-tamnoplava lg:text-2xl md:text-xl text-lg leading-baseLineHeight font-medium '>
                    {parse(blog.node.izdvojenoIzMedijaFields.imeMedija)}
                  </h2>

                  <span className='text-dinko-tamnoplava  xl:text-base text-sm  md:line-clamp-4 line-clamp-3'>
                    {parse(blog.node.izdvojenoIzMedijaFields.sadrzaj)}
                  </span>

                  <Link
                    href={blog.node.izdvojenoIzMedijaFields.poveznica}
                    className='text-dinko-plava font-medium self-end  xl:text-lg lg:text-base text-sm pt-4 transition-all ease-in-out hover:text-dinko-tamnoplava'
                  >
                    Pročitaj članak
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
