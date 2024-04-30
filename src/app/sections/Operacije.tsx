import React from 'react';
import { operacijeExample } from '../staticWebData/operacijeDemo';

const Operacije = () => {
  return (
    <section className='mt-28'>
      <h1 className='text-dinko-tamnoplava text-heroText leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Operacije
      </h1>
      <div className='max-w-max-container mx-auto my-0 grid grid-cols-2 gap-10 mt-16'>
        {operacijeExample.map((op, index) => {
          return (
            <article key={index} className='grid grid-cols-1 gap-1 items-start w-full'>
              <h2 className='text-dinko-tamnoplava text-2xl leading-baseLineHeight font-medium'>{op.title}</h2>
              <p className='text-dinko-tamnoplava text-lg leading-normal font-normal text-balance'>{op.content}</p>
              <a href='' className='text-dinko-plava font-medium'>
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
