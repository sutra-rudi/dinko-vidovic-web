import Image from 'next/image';
import React from 'react';
import landingHeroDinko from '../img/heros/dinko-vidovic-hero-slika.png';
import dinkoLinijeEfekt from '../img/svg/dinko-vidovic-linije-efekt.svg';
import AppButton from '../components/AppButton';
const LandingHero = () => {
  return (
    <section className='w-full h-full relative overflow-hidden lg:min-h-fit min-h-iframes-images-lg'>
      <Image src={landingHeroDinko} alt='picture of Dinko Vidovic' loading='eager' placeholder='blur' priority />
      <Image src={dinkoLinijeEfekt} alt='flavor' className='absolute -bottom-8 -left-16' />
      <div className='absolute lg:bottom-[30%] bottom-0 right-[10%] lg:max-w-[407px] w-full lg:bg-transparent bg-dinko-tamnoplava'>
        <h1 className='text-heroText text-dinko-tamnoplava text-balance leading-tight whitespace-pre-wrap'>{`Kreći se\ns lakoćom!`}</h1>
        <div className='flex items-start flex-col justify-start gap-5 '>
          <p className='text-base text-dinko-tamnoplava text-balance leading-snug'>
            {`Prof. dr. sc. Dinko Vidović specijalist je ortopedije i traumatologije. Godišnje obavi 300 operacijskih
          zahvata iz područja kirurgije koljena i kuka.`}
          </p>
          <AppButton primary='hero' content='Dogovorite pregled' />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
