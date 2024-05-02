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
    <footer className='lg:h-[557px] relative bg-dinko-plava before:absolute before:bg-footerOverlay before:w-full before:h-full'>
      <div className='w-full flex items-center justify-center h-full '>
        <div className='max-w-max-container w-full h-full grid grid-cols-1 gap-7 z-10'>
          <div className='flex items-center justify-between'>
            <Image src={dinkoVidovicFooterLogo} alt='Logo of Dinko Vidović' />
            <div className='grid grid-cols-2 items-center'>
              {footerLinks.map((lin, ind) => (
                <a href={''} key={ind}>
                  {lin}
                </a>
              ))}
            </div>
            <AppButton primary='sec' content='Dogovori pregled' />
          </div>
          <div className='w-full h-px bg-white'></div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
