'use client';

import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import dinkoPattern from '../img/heros/dinko-vidovic-bijeli-pattern.svg';
interface DinkoVidovicIskustvaPacijenata {
  iskustvaList: any;
}

const IskustvaPacijenata = ({ iskustvaList }: DinkoVidovicIskustvaPacijenata) => {
  const splideOptions: any = {
    perPage: 1,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: true,
    autoHeight: true,
    // autoplay: true,
    // interval: 2000,
    // rewind: true,
  };

  return (
    <section className='bg-overlayIskustva bg-center bg-cover 2xl:pb-24 xl:pb-20 lg:pb-16 pb-0 '>
      <h1 className='2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap xl:pt-28 xl:pb-16 lg:pt-24 lg:pb-12 md:pt-20 md:pb-8 pt-14 pb-8 text-center'>
        Iskustva pacijenata
      </h1>

      <Splide options={splideOptions} className='max-w-max-container mx-auto my-0'>
        {iskustvaList.data.allIskustvaPacijenata.edges.map((isk: any) => {
          return (
            <SplideSlide className='lg:pb-52 pb-24 2xl:p-0 px-6' key={isk.node.iskustvaPacijenataId}>
              <article className='flex items-center justify-center  lg:flex-nowrap flex-wrap lg:gap-6 gap-10'>
                <div className='lg:max-w-[620px] w-full flex flex-col items-start gap-5'>
                  <div className=''>
                    <h2 className='text-dinko-tamnoplava xl:text-2xl lg:text-xl text-lg leading-baseLineHeight font-medium'>
                      {isk.node.iskustvaPacijenataInputFields.imeIPrezimePacijenta}
                    </h2>
                    <p className='text-dinko-tamnoplava text-base leading-normal font-normal text-balance'>
                      {isk.node.iskustvaPacijenataInputFields.vrstaZahvata}
                    </p>
                  </div>

                  <p className='text-dinko-tamnoplava xl:text-lg text-base leading-normal font-normal text-balance'>
                    {isk.node.iskustvaPacijenataInputFields.testimonialsHrvatskiJezik.tekstTestimoniala}
                  </p>
                </div>

                {!isk.node.iskustvaPacijenataInputFields.slikaTestimonials &&
                isk.node.iskustvaPacijenataInputFields.videoLinkNaYoutube ? (
                  <div className='lg:max-w-[664px] w-full lg:aspect-[9/16] aspect-video lg:max-h-[449px] object-cover object-center relative'>
                    <ReactPlayer
                      url={isk.node.iskustvaPacijenataInputFields.videoLinkNaYoutube}
                      width={'100%'}
                      height={'100%'}
                      playsinline
                    />
                  </div>
                ) : isk.node.iskustvaPacijenataInputFields.slikaTestimonials ? (
                  <Image
                    src={isk.node.iskustvaPacijenataInputFields.slikaTestimonials.node.sourceUrl}
                    alt='testimonial patient'
                    sizes={isk.node.iskustvaPacijenataInputFields.slikaTestimonials.node.sizes}
                    width={664}
                    height={479}
                    className='lg:max-w-[664px] w-full lg:aspect-[9/16] aspect-video lg:max-h-[479px] object-cover object-center'
                  />
                ) : (
                  <Image
                    src={dinkoPattern}
                    alt='testimonial placeholder'
                    width={664}
                    height={479}
                    className='lg:max-w-[664px] w-full lg:aspect-[9/16] aspect-video lg:max-h-[479px] object-cover object-center opacity-50'
                  />
                )}
              </article>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default IskustvaPacijenata;
