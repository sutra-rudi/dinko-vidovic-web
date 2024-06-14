'use client';

import Image from 'next/image';
import React from 'react';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';
interface DinkoOperacije {
  content: any;
  pageTitle: any;
  heroImage: any;
}
import parse from 'html-react-parser';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '@/app/types/appState';
import { parseSimpleString } from '@/app/utils/parseByLang';

const PageContent = ({ content, pageTitle, heroImage }: DinkoOperacije) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  return (
    <section className='relative max-w-full mx-auto my-0 overflow-hidden min-h-dvh xl:pb-32 lg:pb-16 md:pb-12 pb-8 '>
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute top-[15%] -left-[10%] z-0 pointer-events-none select-none opacity-80'
      />
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute top-[42%] -right-[5%] z-0 pointer-events-none select-none opacity-80'
      />
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute -bottom-[5%] -left-[5%] z-0 pointer-events-none select-none opacity-80'
      />
      <div className='relative w-full 2xl:h-[397px] xl:h-[250px] h-[170px] after:absolute after:inset-0 after:w-full after:h-full after:bg-dinko-tamnoplava/40 after:pointer-events-none after:select-none'>
        <Image
          src={heroImage ? heroImage.node.sourceUrl : '/'}
          className='aspect-video object-cover block'
          fill
          alt='hero'
          quality={100}
        />
        <div className='absolute  bottom-0 left-0 w-full  items-center justify-end 2xl:pr-20 xl:pr-16 lg:pr-12 pr-8 hidden'>
          <h2 className='2xl:text-operationsHeroLarge xl:text-9xl lg:text-8xl md:text-7xl text-6xl lg:text-white/30 text-white/15 z-20 capitalize leading-none'>
            {pageTitle}
          </h2>
        </div>
      </div>

      <div className={'max-w-articles-cont mx-auto my-0 flex flex-col  items-start justify-center'}>
        {content.map((contentItem: any, index: number) => {
          const contentTriage =
            checkParams === UserLanguage.hr
              ? contentItem.node.operacijeTekstoviPodstranica.sadrzajHr
              : contentItem.node.operacijeTekstoviPodstranica.sadrzajEng;

          return (
            <div className='w-full xl:mt-24 lg:mt-16 md:mt-12 mt-8' key={index}>
              <div className='mb-4'>
                <h3 className='lg:text-5xl md:text-4xl text-3xl lg:leading-blogParaLineHeight leading-baseLineHeight text-dinko-tamnoplava uppercase text-balance font-semibold lg:px-0 px-4'>
                  {parseSimpleString(
                    contentItem.node.operacijeTekstoviPodstranica.naslovHr,
                    contentItem.node.operacijeTekstoviPodstranica.naslovEng,
                    checkParams!
                  )}
                </h3>
              </div>
              <div className='operations-cont-custom'>{parse(contentTriage)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
