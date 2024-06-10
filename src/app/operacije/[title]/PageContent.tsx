'use client';

import Image from 'next/image';
import React from 'react';
// import IzdvojenoIzMedijaHero from '../img/heros/izdvojeno-iz-medija-hero.png';
interface DinkoOperacije {
  content: any;
}
import parse from 'html-react-parser';
import Link from 'next/link';

const PageContent = ({ content }: DinkoOperacije) => {
  console.log('CONTENT', content);

  return (
    <section className='relative max-w-full mx-auto my-0 overflow-hidden min-h-dvh '>
      <div className={'w-full mx-auto my-0 flex flex-col gap-4 items-start justify-center'}>
        {content.map((contentItem: any, index: number) => {
          return (
            <div className='max-w-full' key={index}>
              <div className='operations-cont-custom'>
                {parse(contentItem.node.operacijeTekstoviPodstranica.sadrzajHr)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
