import React from 'react';
import { blogExample } from '../staticWebData/blogDemo';
import Image from 'next/image';
import AppButton from '../components/AppButton';

const BlogSekcija = () => {
  return (
    <section className='w-full relative pb-24'>
      <h1 className='text-heroText text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap pt-32 pb-4 text-center'>
        Blog
      </h1>

      <div className='max-w-max-container my-0 mx-auto grid grid-cols-2 items-start gap-x-9 gap-y-16 mt-9'>
        {blogExample.map((blo, ind) => {
          return (
            <article key={ind} className='max-w-[617px] flex items-start gap-7 bg-[#f1f1f1] '>
              <Image src={blo.imgSrc} alt='blog thumbnail' className='max-w-[284px]' />
              <div className='p-2 flex flex-col items-start w-full gap-3'>
                <h2 className='text-dinko-tamnoplava text-2xl leading-baseLineHeight font-medium'>{blo.title}</h2>
                <p className='text-dinko-tamnoplava text-base leading-normal font-normal text-balance'>{blo.content}</p>
                <a href='' className='text-dinko-plava font-medium self-end'>
                  Procitaj blog
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className='flex items-center justify-center mt-12'>
        <AppButton primary='bio' content='Arhiva blogova' />
      </div>
    </section>
  );
};

export default BlogSekcija;