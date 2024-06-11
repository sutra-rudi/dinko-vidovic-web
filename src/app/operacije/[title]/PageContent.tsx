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
  console.log('CONTENT', content, pageTitle, heroImage);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  // console.log('CHECK PARAMS', checkParams);
  return (
    <section className='relative max-w-full mx-auto my-0 overflow-hidden min-h-dvh '>
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute top-[5%] -left-[10%] z-0 pointer-events-none select-none'
      />
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute top-[42%] -right-[5%] z-0 pointer-events-none select-none'
      />
      <Image
        src={blogSvg}
        alt='svg deco'
        className='absolute -bottom-[0] -left-[5%] z-0 pointer-events-none select-none'
      />
      <div className='relative w-full 2xl:h-[619px] xl:h-[420px] h-[320px] after:absolute after:inset-0 after:w-full after:h-full after:bg-dinko-tamnoplava/40 after:pointer-events-none after:select-none'>
        <Image src={heroImage.sourceUrl} className='aspect-video object-cover block' fill alt='hero' quality={100} />
        <div className='absolute bottom-32 left-0 w-full flex items-center justify-center'>
          <h2 className='text-7xl text-white z-20 capitalize'>{pageTitle}</h2>
        </div>
      </div>

      <div className={'max-w-max-container mx-auto my-0 flex flex-col  items-start justify-center'}>
        {content.map((contentItem: any, index: number) => {
          const contentTriage =
            checkParams === UserLanguage.hr
              ? contentItem.node.operacijeTekstoviPodstranica.sadrzajHr
              : contentItem.node.operacijeTekstoviPodstranica.sadrzajEng;

          return (
            <div className='w-full xl:mt-36 lg:mt-20 md:mt-20 mt-12' key={index}>
              <div className='xl:mb-12'>
                <h3 className='lg:text-4xl md:text-3xl text-2xl text-dinko-tamnoplava uppercase text-balance font-semibold'>
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
