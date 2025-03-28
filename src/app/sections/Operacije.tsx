'use client';

import React from 'react';
import { operacijeByKat } from '../staticWebData/operacijeDemo';
import dinkoBackgroundOperacije from '../img/heros/dinko-vidovic-operacije-bg.png';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';
import slugify from 'slugify';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import Image from 'next/image';
import { useIntersectionObserver } from 'usehooks-ts';

const Roboto = Roboto_Condensed({ weight: '700', subsets: ['latin'] });

const Operacije = () => {
  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  const [iV, setIv] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isIntersecting) {
      setIv(true);
    }
  }, [isIntersecting]);

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

  const [activeOp, setActiveOp] = React.useState<{
    titleHr: string;
    titleEn: string;
    id: number;
    contentHr: string[];
    contentEn: string[];
  } | null>(null);

  const [mA, setMa] = React.useState<boolean>(false);

  const isHr = checkParams === UserLanguage.hr;

  const findOpToActive = (opId: number) => operacijeByKat.find((item) => item.id === opId);
  return (
    <section
      className={`2xl:pt-28 2xl:pb-20 xl:pt-24 xl:pb-16 lg:pt-20 lg:pb-12 pt-16 pb-8 relative bg-dinko-tamnoplava min-h-[823px]`}
    >
      <Image
        src={dinkoBackgroundOperacije.src}
        blurDataURL={dinkoBackgroundOperacije.blurDataURL}
        fill
        alt='operations image animation'
        className='object-cover block w-full h-full object-center aspect-auto pointer-events-none select-none'
      />
      {activeOp === null && (
        <h1 className='text-alt-bila 2xl:text-heroText xl:text-5xl pb-6 lg:text-4xl text-subHeading leading-baseLineHeight mx-auto my-0 w-full text-center motion-preset-fade'>
          {`${langTriage('Operacije', 'Surgeries')} ${
            //@ts-ignore
            activeOp ? `/ ${isHr ? activeOp.titleHr : activeOp.titleEn}` : ''
          }`}
        </h1>
      )}
      <div className='2xl:max-w-max-container w-full max-w-operations-cont mx-auto my-0 xl:px-20 lg:px-16 md:px-8 px-2 '>
        {/* TABLET/MOBILE */}
        <div className='2xl:hidden hidden xl:grid-cols-2 md:grid-cols-2 grid-cols-1 items-start justify-center w-full  xl:bg-dinko-operacije xl:backdrop-blur-sm py-11 xl:gap-32 gap-8 md:px-8 px-2 relative'>
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
        <div className='2xl:hidden hidden  2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-items-center justify-center w-full  xl:bg-dinko-operacije xl:backdrop-blur-sm py-11 xl:gap-32 gap-8 md:px-8 px-2 relative'>
          <div ref={ref} className='grid grid-cols-1 items-start gap-6 w-full min-w-0'>
            {iV &&
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

        {/* NOVO */}

        <div className='grid w-full  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center place-items-center relative pb-5 '>
          {operacijeByKat.map((op, index) => {
            const isLastOdd = operacijeByKat.length % 3 === 1 && index === operacijeByKat.length - 1;

            return (
              <p
                onClick={() => {
                  setActiveOp(findOpToActive(op.id)!);
                  setMa(true);
                }}
                key={isHr ? op.titleHr : op.titleEn}
                className={`w-[260px] bg-alt-bila text-dinko-tamnoplava flex items-center justify-start gap-4 py-4 px-7 rounded-[10px] cursor-pointer ${
                  isLastOdd ? 'xl:col-span-3' : ''
                }`}
              >
                <svg width='24' height='23' viewBox='0 0 24 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M21.5833 0H2.41667C1.90833 0 1.42082 0.201934 1.06138 0.561379C0.701934 0.920823 0.5 1.40833 0.5 1.91667V21.0833C0.5 21.5917 0.701934 22.0792 1.06138 22.4386C1.42082 22.7981 1.90833 23 2.41667 23H21.5833C22.0917 23 22.5792 22.7981 22.9386 22.4386C23.2981 22.0792 23.5 21.5917 23.5 21.0833V1.91667C23.5 1.40833 23.2981 0.920823 22.9386 0.561379C22.5792 0.201934 22.0917 0 21.5833 0ZM18.7083 12.4583H12.9583V18.2083C12.9583 18.4625 12.8574 18.7063 12.6776 18.886C12.4979 19.0657 12.2542 19.1667 12 19.1667C11.7458 19.1667 11.5021 19.0657 11.3224 18.886C11.1426 18.7063 11.0417 18.4625 11.0417 18.2083V12.4583H5.29167C5.0375 12.4583 4.79375 12.3574 4.61402 12.1776C4.4343 11.9979 4.33333 11.7542 4.33333 11.5C4.33333 11.2458 4.4343 11.0021 4.61402 10.8224C4.79375 10.6426 5.0375 10.5417 5.29167 10.5417H11.0417V4.79167C11.0417 4.5375 11.1426 4.29375 11.3224 4.11402C11.5021 3.9343 11.7458 3.83333 12 3.83333C12.2542 3.83333 12.4979 3.9343 12.6776 4.11402C12.8574 4.29375 12.9583 4.5375 12.9583 4.79167V10.5417H18.7083C18.9625 10.5417 19.2063 10.6426 19.386 10.8224C19.5657 11.0021 19.6667 11.2458 19.6667 11.5C19.6667 11.7542 19.5657 11.9979 19.386 12.1776C19.2063 12.3574 18.9625 12.4583 18.7083 12.4583Z'
                    fill='#092A4C'
                  />
                </svg>
                <span>{isHr ? op.titleHr : op.titleEn}</span>
              </p>
            );
          })}

          {/* MODAL */}

          <div
            className={`absolute inset-0  w-full xl:min-h-[525px] min-h-max h-full rounded-3xl  bg-dinko-tamnoplava xl:px-24 lg:px-16 md:px-12 px-4 ${
              mA ? 'block motion-preset-slide-up motion-ease-spring-smooth motion-duration-300' : 'hidden'
            }`}
          >
            <h1 className='text-alt-bila 2xl:text-heroText xl:text-5xl xl:pb-6 lg:text-4xl text-subHeading leading-baseLineHeight mx-auto my-0 w-full text-center pt-11'>
              {`${langTriage('Operacije', 'Surgeries')} ${
                activeOp ? `/ ${isHr ? activeOp.titleHr : activeOp.titleEn}` : ''
              }`}
            </h1>
            <div
              className={`grid ${
                activeOp?.contentHr.length! <= 4 ? 'grid-cols-1' : 'xl:grid-cols-3 md:grid-cols-2 grid-cols-1'
              } items-center place-items-center mt-9 gap-y-7 text-alt-bila text-base mb-9`}
            >
              {isHr
                ? activeOp?.contentHr.map((item) => {
                    return (
                      <a
                        href={`/operacije/${slugify(item, slugifyOptions)}/?lang=${checkParams}`}
                        key={item}
                        className='max-w-[300px] w-full block relative group after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-alt-bila after:max-w-[189px] transition-all ease-in-out hover:translate-x-2 hover:text-dinko-plava hover:after:bg-dinko-plava'
                      >
                        {item}
                      </a>
                    );
                  })
                : activeOp?.contentEn.map((item) => {
                    return (
                      <a
                        href={`/operacije/${slugify(item, slugifyOptions)}/?lang=${checkParams}`}
                        key={item}
                        className='max-w-[300px] w-full block relative group after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-alt-bila after:max-w-[189px] transition-all ease-in-out hover:translate-x-2 hover:text-dinko-plava hover:after:bg-dinko-plava'
                      >
                        {item}
                      </a>
                    );
                  })}
            </div>
            <div
              className={`${
                activeOp?.contentHr.length! <= 4
                  ? 'absolute bottom-6 left-0 w-full flex items-center justify-center xl:px-24 lg:px-20 md:px-16 px-12'
                  : 'w-full flex items-center justify-center mt-12 mb-8'
              }`}
            >
              <p
                onClick={() => {
                  setMa(false);
                  setActiveOp(null);
                }}
                className='flex items-center justify-start gap-6  cursor-pointer text-alt-bila transition-all ease-in-out duration-200 hover:text-dinko-plava group hover:-translate-x-2'
              >
                <svg width='56' height='16' viewBox='0 0 56 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM56 7L1 7V9L56 9V7Z'
                    fill='currentColor'
                    className='fill-alt-bila group-hover:fill-dinko-plava'
                  />
                </svg>
                <span className=''>
                  {isHr ? 'Povratak na glavni izbornik OPERACIJA' : 'Return to the main SURGERIES menu.'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operacije;
