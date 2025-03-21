'use client';

import Image from 'next/image';
import React from 'react';
import landingHeroDinko from '../img/heros/dinko-vidovic-hero-slika.png';
import landingHeroDinkoMobile from '../img/heros/dinko-vidovic-hero-mobile.png';
import dinkoLinijeEfekt from '../img/svg/dinko-vidovic-linije-efekt.svg';
import AppButton from '../components/AppButton';
import { useParallax } from 'react-scroll-parallax';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const LandingHero = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const linesMove = useParallax<HTMLDivElement>({
    translateX: [0, -10],
    translateY: [0, 15],
    easing: 'easeInOut',
  });

  const heroBlockMove = useParallax<HTMLDivElement>({
    translateY: [0, 25],
    easing: 'easeInOut',
  });
  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  return (
    <section className='w-full h-full relative overflow-hidden lg:min-h-fit min-h-iframes-images-lg'>
      <Image
        className='md:block hidden'
        src={landingHeroDinko.src}
        alt='picture of Dinko Vidovic'
        blurDataURL={landingHeroDinko.blurDataURL}
        width={1920}
        height={967}
      />
      <Image
        className='md:hidden block w-full'
        src={landingHeroDinkoMobile.src}
        alt='picture of Dinko Vidovic'
        blurDataURL={landingHeroDinkoMobile.blurDataURL}
        width={374}
        height={405}
      />
      <Image
        ref={linesMove.ref as any}
        src={dinkoLinijeEfekt}
        alt='flavor'
        className='absolute -bottom-8 -left-16 xl:block hidden'
      />

      <div
        ref={heroBlockMove.ref as any}
        className='lg:block hidden absolute 3xl:bottom-[30%] 2xl:bottom-[22%] xl:bottom-[24%] bottom-[20%] 2xl:right-[10%] xl:right-[7%] lg:right-[5%] max-w-[407px]  lg:bg-transparent motion-preset-fade motion-duration-300'
      >
        <h1 className='text-heroText leading-baseLineHeight text-dinko-tamnoplava motion-preset-fade  motion-ease-spring-smooth block'>
          {langTriage('Kreći se s lakoćom!', 'Move with ease!')}
        </h1>

        <div className='flex items-start flex-col justify-start gap-6 mt-3 '>
          <p className='text-base text-dinko-tamnoplava text-balance leading-snug motion-preset-fade motion-delay-300  '>
            {langTriage(
              `Prof. dr. sc. Dinko Vidović specijalist je ortopedije i traumatologije. Godišnje obavi 300 operacijskih
          zahvata iz područja kirurgije koljena i kuka.`,
              `Prof. Dinko Vidović, PhD, MD, is a specialist in orthopedics and traumatology. He performs 300 surgical procedures annually in the field of knee and hip surgery.`
            )}
          </p>
          <div className='motion-preset-fade motion-ease-spring-smooth motion-delay-500'>
            <AppButton primary='hero' content={langTriage('Dogovorite pregled', 'Schedule an Appointment')} />
          </div>
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
          <AppButton primary='blue-bg' content={langTriage('Dogovorite pregled', 'Schedule an Appointment')} />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
