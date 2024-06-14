'use client';

import dayjs from 'dayjs';
import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';

interface DinkoSingleNewsData {
  content: any;
}

const PageContent = ({ content }: DinkoSingleNewsData) => {
  console.log('KONTENT', content);
  return (
    <article className='relative max-w-full mx-auto my-0 overflow-hidden min-h-dvh'>
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

      <div className='relative w-full 2xl:h-[619px] xl:h-[420px] h-[320px]'>
        <Image
          src={content.heroImage.sourceUrl}
          className='aspect-video object-cover object-center block'
          fill
          quality={100}
          alt='hero'
        />
      </div>
      <div className='text-dinko-plava mx-auto my-0 max-w-[1024px] mt-24 xl:p-0 px-4'>
        {dayjs(content.newsDate).format('DD.MM.YYYY')}
      </div>
      <h2 className='text-dinko-tamnoplava mx-auto my-0 max-w-[1024px] pb-8 text-4xl leading-[112%] xl:px-0 px-4 '>
        {content.newsTitle}
      </h2>

      <div className='inner-cont-custom'>{parse(content.pageContent)}</div>
    </article>
  );
};

export default PageContent;
