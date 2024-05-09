'use client';

import React from 'react';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';
import Image from 'next/image';
import parse from 'html-react-parser';

interface DinkoSingleBlogData {
  content: any;
}

const PageContent = ({ content }: DinkoSingleBlogData) => {
  return (
    <article className='relative overflow-x-hidden mx-auto my-0 '>
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
      <div className='inner-cont-custom'>{parse(content[0].content.rendered)}</div>
    </article>
  );
};

export default PageContent;
