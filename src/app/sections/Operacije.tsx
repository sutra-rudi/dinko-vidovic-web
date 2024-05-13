import React from 'react';
import { operacijeByKat } from '../staticWebData/operacijeDemo';
import lala from '../img/heros/dinko-vidovic-operacije-bg.png';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';

const Roboto = Roboto_Condensed({ weight: '700', subsets: ['latin'] });

const Operacije = () => {
  return (
    <section
      style={{ backgroundImage: `url(${lala.src})` }}
      className={`2xl:py-28 xl:py-24 lg:py-20 py-16 bg-cover bg-no-repeat bg-center`}
    >
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Operacije
      </h1>
      <div className='max-w-max-container mx-auto my-0 mt-16  xl:px-20 lg:px-16 md:px-8 px-2'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-center w-full  xl:bg-dinko-operacije xl:backdrop-blur-sm py-11 xl:gap-32 gap-8 md:px-8 px-2'>
          <div className='grid grid-cols-1 items-start gap-6 w-full xl:whitespace-nowrap xl:max-w-min max-w-max'>
            {operacijeByKat.slice(0, 1).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {operacija.titleHr}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {operacija.contentHr.map((content) => (
                      <Link
                        href={`/operacije/${operacija.titleHr.toLowerCase()}/#${content
                          .trim()
                          .toLowerCase()
                          .split(' ')
                          .join('-')}`}
                        className='text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out'
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
          <div className='grid grid-cols-1 items-start gap-6 w-full xl:whitespace-nowrap xl:max-w-min max-w-max'>
            {operacijeByKat.slice(1, 4).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {operacija.titleHr}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {operacija.contentHr.map((content) => (
                      <Link
                        href={`/operacije/${operacija.titleHr.toLowerCase()}/#${content
                          .trim()
                          .toLowerCase()
                          .split(' ')
                          .join('-')}`}
                        className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out'
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
          <div className='grid grid-cols-1 items-start gap-6 w-full xl:whitespace-nowrap xl:max-w-min max-w-max'>
            {operacijeByKat.slice(4, 7).map((operacija, index) => {
              return (
                <div className='grid grid-cols-1 items-start gap-2' key={index}>
                  <h2
                    className={`text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase ${Roboto.className}`}
                  >
                    {operacija.titleHr}
                  </h2>
                  <div className='grid grid-cols-1 xl:gap-0 gap-2'>
                    {operacija.contentHr.map((content) => (
                      <Link
                        href={`/operacije/${operacija.titleHr.toLowerCase()}/#${content
                          .trim()
                          .toLowerCase()
                          .split(' ')
                          .join('-')}`}
                        className='text-dinko-tamnoplava xl:text-lg text-base leading-blogParaLineHeight font-normal block relative before:absolute before:-left-2 before:bg-dinko-plava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-plava transition-all ease-custom-ease-in-out'
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
