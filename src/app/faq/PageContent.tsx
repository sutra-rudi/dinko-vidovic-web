'use client';

import React from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';

interface DinkoVidovicFAQ {
  content: any;
  heroImg: any;
}

const PageContent = ({ content, heroImg }: DinkoVidovicFAQ) => {
  console.log('HERO IMG', heroImg);
  return (
    <article className='py-6 w-full'>
      <div className='relative w-full 2xl:h-[619px] xl:h-[420px] h-[320px] pb-12'>
        <Image
          width={1414}
          height={795}
          alt='picture of Dinko Vidovic in his office'
          src={heroImg.sourceUrl}
          // sizes={heroImg.sizes}
          quality={100}
          loading='eager'
          className='block aspect-video object-cover object-center w-full h-full'
        />
      </div>
      <div className='inner-cont-custom'>{parse(content)}</div>
    </article>
  );
};

export default PageContent;
