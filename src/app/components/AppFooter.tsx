import React from 'react';
import dinkoVidovicFooterLogo from '../img/logos/dinko-vidovic-footer-logo.svg';
import Image from 'next/image';
import AppButton from './AppButton';
const AppFooter = () => {
  const footerLinks = [
    'Biografija',
    'Iskustva Pacijenata',
    'Iz Medija',
    'Najčešća Pitanja',
    'Operacije',
    'Novosti',
    'Blog',
  ];

  return (
    <footer className='lg:h-[557px] relative bg-dinko-plava before:absolute before:bg-footerOverlay before:w-full before:h-full flex items-center justify-center'>
      <div className='w-full flex items-center justify-center 2xl:p-0 px-6 2xl:py-0 py-4'>
        <div className='max-w-max-container w-full h-full grid grid-cols-1 gap-7 z-10 '>
          <div className='flex place-items-center justify-between  lg:flex-nowrap flex-wrap lg:gap-0 gap-8'>
            <Image src={dinkoVidovicFooterLogo} alt='Logo of Dinko Vidović' />
            <div className='grid grid-cols-2 items-center lg:w-auto  w-full'>
              {footerLinks.map((lin, ind) => (
                <a href={''} key={ind}>
                  {lin}
                </a>
              ))}
            </div>
            <AppButton primary='sec' content='Dogovori pregled' />
          </div>
          <div className='w-full h-px bg-white'></div>

          <div className='flex w-full justify-between h-min'>
            <p className='text-white/80'>{`© prof. dr. sc. Dinko Vidović, prim, dr. med., 2024. | Made by Studio Sutra.`}</p>
            <div className='flex'>
              <p>Follow us:</p>
              <p>link</p>
              <p>link</p>
              <p>link</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
