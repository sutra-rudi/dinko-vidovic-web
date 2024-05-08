import React from 'react';
import dinkoVidovicFooterLogo from '../img/logos/dinko-vidovic-footer-logo.svg';
import Image from 'next/image';
import AppButton from './AppButton';
import {
  SlSocialLinkedin as LinkedInIcon,
  SlSocialInstagram as InstagramIcon,
  SlSocialFacebook as FacebookIcon,
  SlSocialYoutube as YoutubeIcon,
} from 'react-icons/sl';
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
      <div className='w-full flex items-center justify-center 2xl:p-0 px-6 2xl:py-0 py-8'>
        <div className='max-w-max-container w-full h-full grid grid-cols-1 gap-7 z-10 '>
          <div className='flex place-items-center lg:justify-between justify-center  lg:flex-nowrap flex-wrap lg:gap-0 gap-12'>
            <Image src={dinkoVidovicFooterLogo} alt='Logo of Dinko Vidović' />
            <div className='grid grid-cols-2 items-center lg:w-auto  w-max'>
              {footerLinks.map((lin, ind) => (
                <a href={''} key={ind}>
                  {lin}
                </a>
              ))}
            </div>
            <AppButton primary='sec' content='Dogovori pregled' />
          </div>
          <div className='w-full h-px bg-white'></div>

          <div className='flex w-full lg:justify-between h-min xl:flex-nowrap flex-wrap-reverse place-items-center justify-center lg:gap-0 gap-4'>
            <p className='text-white/80 lg:text-base text-xs text-balance text-center'>{`© prof. dr. sc. Dinko Vidović, prim, dr. med., 2024. | Made by Studio Sutra.`}</p>
            <div className='grid md:grid-cols-2 grid-cols-1 place-items-center gap-4'>
              <p>Follow us:</p>
              <div className='flex items-center gap-3'>
                <LinkedInIcon size={24} />
                <InstagramIcon size={24} />
                <FacebookIcon size={24} />
                <YoutubeIcon size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
