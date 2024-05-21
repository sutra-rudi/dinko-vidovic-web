'use client';

import Image from 'next/image';
import React from 'react';
import landingHeroDinko from '../img/heros/dinko-vidovic-hero-slika.png';
import landingHeroDinkoMobile from '../img/heros/dinko-vidovic-hero-mobile.png';
import dinkoLinijeEfekt from '../img/svg/dinko-vidovic-linije-efekt.svg';
import AppButton from '../components/AppButton';
import { useParallax } from 'react-scroll-parallax';
import dinkoLottie from '../img/lottie/novi-lottie-hero.json';
import Lottie from 'lottie-react';

const LandingHero = () => {
  const linesMove = useParallax<HTMLDivElement>({
    translateX: [0, -10],
    translateY: [0, 15],
    easing: 'easeOut',
  });

  console.log('ALO', dinkoLottie);

  return (
    <section className='w-full h-full relative overflow-hidden lg:min-h-fit min-h-iframes-images-lg'>
      <Image
        // ref={heroMove.ref as any}
        className='md:block hidden'
        src={landingHeroDinko}
        alt='picture of Dinko Vidovic'
        loading='eager'
        placeholder='blur'
        priority
        quality={100}
      />
      <Image
        className='md:hidden block w-full'
        // ref={heroMove.ref as any}
        src={landingHeroDinkoMobile}
        alt='picture of Dinko Vidovic'
        loading='eager'
        placeholder='blur'
        priority
        quality={100}
      />
      <Image
        ref={linesMove.ref as any}
        src={dinkoLinijeEfekt}
        alt='flavor'
        className='absolute -bottom-8 -left-16 xl:block hidden'
      />

      <div className='lg:block hidden absolute 3xl:bottom-[30%] 2xl:bottom-[22%] bottom-[12%] right-[10%] max-w-[407px]  lg:bg-transparent'>
        {/* <h1 className='text-heroText text-dinko-tamnoplava text-balance  leading-none whitespace-pre-wrap'>{`Kreći se\ns lakoćom!`}</h1> */}
        <Lottie animationData={dinkoLottie} width={200} height={200} />
        {/* <HeroLottie /> */}
        <div className='flex items-start flex-col justify-start gap-6 mt-3 '>
          <p className='text-base text-dinko-tamnoplava text-balance leading-snug'>
            {`Prof. dr. sc. Dinko Vidović specijalist je ortopedije i traumatologije. Godišnje obavi 300 operacijskih
          zahvata iz područja kirurgije koljena i kuka.`}
          </p>
          <AppButton primary='hero' content='Dogovorite pregled' />
        </div>
      </div>
      {/* tablet / mobile */}
      <div className='bg-dinko-tamnoplava lg:hidden block px-6 py-10'>
        <h2 className='text-4xl text-white text-balance leading-none whitespace-pre-wrap'>{`Kreći se\ns lakoćom!`}</h2>
        <div className='flex items-start flex-col justify-start gap-5 z-10 mt-2'>
          <p className='text-base text-white text-balance leading-snug'>
            {`Prof. dr. sc. Dinko Vidović specijalist je ortopedije i traumatologije. Godišnje obavi 300 operacijskih
          zahvata iz područja kirurgije koljena i kuka.`}
          </p>
          <AppButton primary='blue-bg' content='Dogovorite pregled' />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
