import React from 'react';
import { novostiExample } from '../staticWebData/novostiDemo';
import Image from 'next/image';
import dinkoLinijeEfektAlt from '../img/svg/dinko-vidovic-linije-efekt-alt.svg';
const Novosti = () => {
  return (
    <section className='mt-28 relative z-10 block'>
      <Image src={dinkoLinijeEfektAlt} alt='lines deco' className='absolute -right-12 top-12 z-[-1] block' />
      <h1 className='text-dinko-tamnoplava text-heroText leading-baseLineHeight mx-auto my-0 w-full text-center'>
        Novosti
      </h1>
      <div className='flex max-w-max-container my-0 mx-auto gap-9 mt-16'>
        {novostiExample.map((nov, index) => {
          return (
            <article key={index} className='bg-articleNovostiBg'>
              <Image src={nov.srcImage} alt='news thumbnail' />
              <div className='px-5 py-6 flex flex-col items-start gap-2'>
                <h2 className='text-dinko-tamnoplava text-2xl leading-baseLineHeight font-medium'>{nov.title}</h2>
                <p className='text-dinko-tamnoplava text-base leading-normal font-normal text-balance'>{nov.content}</p>
                <a href='' className='text-dinko-plava font-medium self-end'>
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
