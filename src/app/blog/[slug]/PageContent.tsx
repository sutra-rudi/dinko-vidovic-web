'use client';

import React from 'react';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';
import Image from 'next/image';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import { Roboto_Condensed } from 'next/font/google';
import { UserLanguage } from '@/app/types/appState';
import { useAppContext } from '@/app/contexts/store';
// import { usePathname } from 'next/navigation';
// import { ActionTypes } from '@/app/types/actionTypes';
const RobotoFont = Roboto_Condensed({ subsets: ['latin'], weight: ['700'] });

interface DinkoSingleBlogData {
  content: any;
}

const PageContent = ({ content }: DinkoSingleBlogData) => {
  console.log('CONTENT', content);

  const {
    state: { userLang },
  } = useAppContext();

  const shortHand = content.data.vidovicBlog.dinkoBlog;

  const langShortHand = (lang: UserLanguage) => {
    if (lang === UserLanguage.hr) {
      const hrTrans = {
        title: shortHand.hrvatskiJezik.nASLOVHR,
        subTitle: shortHand.hrvatskiJezik.uvodnikHr,
        content: shortHand.hrvatskiJezik.blogTekstHr,
      };

      return hrTrans;
    } else {
      const enTrans = {
        title: shortHand.engleskiJezik.naslovEng,
        subTitle: shortHand.engleskiJezik.uvodnikEng,
        content: shortHand.engleskiJezik.blogTekstEng,
      };

      return enTrans;
    }
  };

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
          src={shortHand.slikaHeroBlog.node.sourceUrl}
          sizes={shortHand.slikaHeroBlog.node.sizes}
          className='aspect-video object-cover block'
          fill
          alt='hero'
          quality={100}
        />
      </div>
      <div className='text-dinko-plava mx-auto my-0 max-w-[1024px] mt-24 xl:p-0 px-4'>
        {dayjs(shortHand.datumBlog).format('DD.MM.YYYY')}
      </div>
      <h2 className='text-dinko-tamnoplava mx-auto my-0 max-w-[1024px] pb-8 text-4xl leading-[112%] xl:p-0 px-4'>
        {langShortHand(userLang).title}
      </h2>

      <h4
        className={`text-dinko-tamnoplava mx-auto my-0 max-w-[1024px] xl:py-8 xl:px-0 px-4 text-xl leading-baseLineHeight py-4 ${RobotoFont.className}`}
      >
        {langShortHand(userLang).subTitle}
      </h4>
      <div className='inner-cont-custom'>{parse(langShortHand(userLang).content)}</div>
    </article>
  );
};

export default PageContent;
