import React from 'react';
import { operacijeExample } from '../staticWebData/operacijeDemo';

const Operacije = () => {
  return (
    <section className='2xl:mt-28 xl:mt-24 lg:mt-20 mt-16'>
      <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Operacije
      </h1>
      <div className='max-w-max-container mx-auto my-0 grid md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-8 gap-6 mt-16 items-stretch'>
        {operacijeExample.map((op, index) => {
          return (
            <article key={index} className='grid grid-cols-1 xl:gap-1 gap-3 items-start 2xl:p-0 px-6 md:max-w-[686px]'>
              <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl text-lg leading-baseLineHeight font-medium'>
                {op.title}
              </h2>
              <p className='text-dinko-tamnoplava xl:text-lg text-base leading-normal font-normal text-balance'>
                {op.content}
              </p>
              <a href='' className='text-dinko-plava font-medium xl:text-lg text-base'>
                Saznaj više
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Operacije;
