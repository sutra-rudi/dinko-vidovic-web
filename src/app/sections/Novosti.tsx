import React from 'react';
import { novostiExample } from '../staticWebData/novostiDemo';
import Image from 'next/image';
import dinkoLinijeEfektAlt from '../img/svg/dinko-vidovic-linije-efekt-alt.svg';
const Novosti = () => {
  return (
    <section className='2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 relative z-10 block overflow-x-hidden'>
      <Image src={dinkoLinijeEfektAlt} alt='lines deco' className='absolute -right-12 top-12 z-[-1] block' />
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading  leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Novosti
      </h1>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 max-w-max-container my-0 mx-auto gap-9 mt-16 2xl:p-0 px-6 items-stretch'>
        {novostiExample.map((nov, index) => {
          return (
            <article key={index} className='bg-articleNovostiBg '>
              <Image src={nov.srcImage} alt='news thumbnail' />
              <div className='lg:px-5 lg:py-6 px-3 py-4 flex flex-col items-start gap-2'>
                <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl md:text-lg text-base leading-baseLineHeight font-medium lg:line-clamp-none line-clamp-2'>
                  {nov.title}
                </h2>
                <p className='text-dinko-tamnoplava md:text-base text-sm leading-normal font-normal text-balance lg:line-clamp-none md:line-clamp-4 line-clamp-3'>
                  {nov.content}
                </p>
                <a href='' className='text-dinko-plava font-medium self-end lg:text-base text-sm'>
                  Saznjaj više
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Novosti;
