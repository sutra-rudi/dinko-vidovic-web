'use client';

import dayjs from 'dayjs';
import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';

interface DinkoSingleNewsData {
  content: any;
  date: any;
  heroImg: any;
  title: any;
}

const PageContent = ({ content, date, heroImg, title }: DinkoSingleNewsData) => {
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

      <div className='relative w-full 2xl:h-[619px] xl:h-[420px] h-[220px] aspect-video object-cover'>
        <Image
          src={heroImg.node.sourceUrl}
          sizes={heroImg.node.sizes}
          className='aspect-video object-cover'
          fill
          alt='hero'
        />
      </div>
      <div className='text-dinko-plava mx-auto my-0 max-w-[1024px] mt-24 xl:p-0 px-4'>
        {dayjs(date).format('DD.MM.YYYY')}
      </div>
      <h2 className='text-dinko-tamnoplava mx-auto my-0 max-w-[1024px] pb-8 text-4xl leading-[112%] xl:px-0 px-4 '>
        {title}
      </h2>

      <div className='inner-cont-custom'>{parse(content)}</div>
    </article>
  );
};

export default PageContent;
