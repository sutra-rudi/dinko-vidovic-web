import React from 'react';
import { iskustvaDemo } from '../staticWebData/iskustvaDemo';
import Image from 'next/image';

const IskustvaPacijenata = () => {
  return (
    <section className='bg-overlayIskustva bg-center bg-cover 2xl:pb-24 xl:pb-20 lg:pb-16 pb-0 '>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-28 xl:pb-16 lg:pt-24 lg:pb-12 md:pt-20 md:pb-8 pt-14 pb-8 text-center'>
        Iskustva pacijenata
      </h1>

      <div className='max-w-max-container mx-auto my-0  '>
        {iskustvaDemo.map((isk, ind) => {
          return (
            <article
              key={ind}
              className='flex items-center justify-center lg:pb-52 pb-24 2xl:p-0 px-6 lg:flex-nowrap flex-wrap lg:gap-0 gap-10'
            >
              <div className='lg:max-w-[620px] w-full flex flex-col items-start gap-5'>
                <div className=''>
                  <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl text-lg leading-baseLineHeight font-medium'>
                    {isk.title}
                  </h2>
                  <p className='text-dinko-tamnoplava text-base leading-normal font-normal text-balance'>
                    {isk.subtitle}
                  </p>
                </div>
                <p className='text-dinko-tamnoplava xl:text-lg text-base leading-normal font-normal text-balance'>
                  {isk.content}
                </p>
                <a href='' className='text-dinko-plava font-medium xl:text-lg text-base'>
                  Pogledaj video
                </a>
              </div>
              <Image
                alt='doctor with patient'
                src={isk.imgSrc}
                className='lg:max-w-[664px] w-full aspect-[9/16] max-h-[479px] object-cover object-center'
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default IskustvaPacijenata;
