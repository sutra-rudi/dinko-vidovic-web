'use client';

import Image from 'next/image';
import React from 'react';
// import IzdvojenoIzMedijaHero from '../img/heros/izdvojeno-iz-medija-hero.png';
interface DinkoOperacije {
  content: any;
}
import parse from 'html-react-parser';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '@/app/types/appState';

const PageContent = ({ content }: DinkoOperacije) => {
  console.log('CONTENT', content);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  return (
    <section className='relative max-w-full mx-auto my-0 overflow-hidden min-h-dvh '>
      <div className={'max-w-max-container mx-auto my-0 flex flex-col gap-4 items-start justify-center'}>
        {content.map((contentItem: any, index: number) => {
          const contentTriage =
            checkParams === UserLanguage.hr
              ? contentItem.node.operacijeTekstoviPodstranica.sadrzajHr
              : contentItem.node.operacijeTekstoviPodstranica.sadrzajEng;

          return (
            <div className='w-full' key={index}>
              <div className='operations-cont-custom'>{parse(contentTriage)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageContent;
