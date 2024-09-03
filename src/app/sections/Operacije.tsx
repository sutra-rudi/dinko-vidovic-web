'use client';

import React from 'react';
import { operacijeByKat } from '../staticWebData/operacijeDemo';
import dinkoBackgroundOperacije from '../img/heros/dinko-vidovic-operacije-bg.png';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';
import slugify from 'slugify';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import Image from 'next/image';

const Roboto = Roboto_Condensed({ weight: '700', subsets: ['latin'] });

const Operacije = () => {
  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseOperationsLinks = (operacija: any, content: string) =>
    checkParams === UserLanguage.hr
      ? `/operacije/${slugify(content, slugifyOptions)}/?lang=${checkParams}`
      : `/operacije/${slugify(content, slugifyOptions)}/?lang=${checkParams}`;
  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section className={`2xl:pt-28 2xl:pb-20 xl:pt-24 xl:pb-16 lg:pt-20 lg:pb-12 pt-16 pb-8 `}>
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl xl:pb-6 lg:text-4xl text-subHeading leading-baseLineHeight mx-auto my-0 w-full text-center'>
        {langTriage('Operacije', 'Surgeries')}
      </h1>
      <div className='2xl:max-w-max-container max-w-operations-cont mx-auto my-0 xl:px-20 lg:px-16 md:px-8 px-2'>
        {/* TABLET/MOBILE */}
        <div className='2xl:hidden grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-start justify-center w-full  xl:bg-dinko-operacije xl:backdrop-blur-sm py-11 xl:gap-32 gap-8 md:px-8 px-2 relative'>
          <Image
            src={dinkoBackgroundOperacije.src}
            blurDataURL={dinkoBackgroundOperacije.blurDataURL}
            fill
            alt='operations image animation'
            className='object-cover block w-full h-full'
          />
          <div className='grid grid-cols-1 items-start gap-6 w-full min-w-0'>
            {operacijeByKat.slice(0, 2).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {checkParams === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {checkParams === UserLanguage.hr
                      ? operacija.contentHr.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out  xl:whitespace-nowrap'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))
                      : operacija.contentEn.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out  xl:whitespace-nowrap'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-1 items-start gap-6 w-full min-w-0'>
            {operacijeByKat.slice(2, 7).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {checkParams === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {checkParams === UserLanguage.hr
                      ? operacija.contentHr.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out  xl:whitespace-nowrap'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))
                      : operacija.contentEn.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out  xl:whitespace-nowrap'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* DESKTOP */}
        <div className='2xl:grid hidden  2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-items-center justify-center w-full  xl:bg-dinko-operacije xl:backdrop-blur-sm py-11 xl:gap-32 gap-8 md:px-8 px-2 relative'>
          <Image
            src={dinkoBackgroundOperacije.src}
            blurDataURL={dinkoBackgroundOperacije.blurDataURL}
            fill
            alt='operations image animation'
            className='object-cover block w-full h-full'
          />
          <div ref={ref} className='grid grid-cols-1 items-start gap-6 w-full min-w-0'>
            {inView &&
              operacijeByKat.slice(0, 1).map((operacija, index) => {
                return (
                  <div className='grid grid-cols-1 items-start gap-2' key={index}>
                    <h2
                      className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                    >
                      {checkParams === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                    </h2>
                    <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                      {checkParams === UserLanguage.hr
                        ? operacija.contentHr.map((content, index) => (
                            <div
                              className=' text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out text-balance'
                              key={content}
                            >
                              <Link href={parseOperationsLinks(operacija, content)}>{content}</Link>
                            </div>
                          ))
                        : operacija.contentEn.map((content, index) => (
                            <div
                              className=' text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out  text-balance'
                              key={content}
                            >
                              <Link href={parseOperationsLinks(operacija, content)}>{content}</Link>
                            </div>
                          ))}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='grid grid-cols-1 items-start gap-6 w-full  min-w-0'>
            {operacijeByKat.slice(1, 4).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {checkParams === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {checkParams === UserLanguage.hr
                      ? operacija.contentHr.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out text-balance'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))
                      : operacija.contentEn.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out text-balance'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-1 items-start gap-6 w-full  min-w-0'>
            {operacijeByKat.slice(4, 7).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {checkParams === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {checkParams === UserLanguage.hr
                      ? operacija.contentHr.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out text-balance'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))
                      : operacija.contentEn.map((content) => (
                          <Link
                            href={parseOperationsLinks(operacija, content)}
                            className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out text-balance'
                            key={content}
                          >
                            {content}
                          </Link>
                        ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operacije;
