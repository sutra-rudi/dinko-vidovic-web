import React from 'react';
import { iskustvaDemo } from '../staticWebData/iskustvaDemo';
import Image from 'next/image';

const IskustvaPacijenata = () => {
  return (
    <section className='bg-overlayIskustva'>
      <h1 className='text-heroText text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap pt-32 text-center'>
        Iskustva pacijenata
      </h1>

      <div className='max-w-max-container mx-auto my-0 mt-24'>
        {iskustvaDemo.map((isk, ind) => {
          return (
            <article key={ind} className='flex items-center justify-center pb-52'>
              <div className='max-w-[620px] flex flex-col items-start gap-5'>
                <div className=''>
                  <h2 className='text-dinko-tamnoplava text-2xl leading-baseLineHeight font-medium'>{isk.title}</h2>
                  <p className='text-dinko-tamnoplava text-base leading-normal font-normal text-balance'>
                    {isk.subtitle}
                  </p>
                </div>
                <p className='text-dinko-tamnoplava text-lg leading-normal font-normal text-balance'>{isk.content}</p>
                <a href='' className='text-dinko-plava font-medium'>
                  Pogledaj video
                </a>
              </div>
              <Image
                alt='doctor with patient'
                src={isk.imgSrc}
                className='max-w-[664px] aspect-[9/16] max-h-[479px] object-cover object-center'
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default IskustvaPacijenata;
