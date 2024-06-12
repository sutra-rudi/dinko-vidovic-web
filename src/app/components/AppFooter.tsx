'use client';

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
import { useSearchParams } from 'next/navigation';
import dinkoFooterPattern from '../img/svg/dinko-promo-traka-pattern.svg';
const AppFooter = () => {
  const footerLinks = [
    {
      content: 'Biografija',
      href: '/biografija',
    },
    {
      content: 'Iskustva Pacijenata',
      href: '/iskustva-pacijenata',
    },
    {
      content: 'Iz Medija',
      href: '/',
    },
    {
      content: 'Najčešća Pitanja',
      href: '/faq',
    },
    {
      content: 'Operacije',
      href: '/operacije',
    },
    {
      content: 'Novosti',
      href: '/novosti',
    },
    {
      content: 'Blog',
      href: '/blog',
    },
    {
      content: 'Pravila privatnosti',
      href: '/privacy-policy',
    },
    {
      content: 'Izdvojeno iz medija',
      href: '/media-excerpt',
    },
    {
      content: 'Uvjeti korištenja',
      href: '/terms-of-use',
    },
  ];

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  return (
    <footer className='lg:h-[557px] relative bg-dinko-plava  flex items-center justify-center'>
      <Image
        src={dinkoFooterPattern}
        fill
        alt='svg pattern dinko vidovic'
        className='w-full h-full object-cover object-center block'
      />
      <div className='w-full flex items-center justify-center 2xl:p-0 px-6 2xl:py-0 py-8'>
        <div className='max-w-max-container w-full h-full grid grid-cols-1 gap-7 z-10 '>
          <div className='flex place-items-center lg:justify-between justify-center  lg:flex-nowrap flex-wrap lg:gap-0 gap-12'>
            <Image
              src={dinkoVidovicFooterLogo}
              alt='Logo of Dinko Vidović'
              width={271}
              height={56}
              className='object-contain object-center block aspect-video'
            />
            <div className='grid grid-cols-2 items-center gap-x-4 lg:w-auto  w-max'>
              {footerLinks.map((lin, ind) => (
                <a
                  href={`${lin.href}?lang=${checkParams}`}
                  key={ind}
                  className='relative block before:absolute before:-left-2 text-white before:bg-dinko-tamnoplava before:h-full before:w-1 before:opacity-0 before:hover:opacity-100 before:transition-all before:ease-custom-ease-in-out hover:translate-x-1 hover:text-dinko-tamnoplava transition-all ease-custom-ease-in-out'
                >
                  {lin.content}
                </a>
              ))}
            </div>
            <AppButton primary='blue-bg' content='Dogovori pregled' />
          </div>
          <div className='w-full h-px bg-white'></div>

          <div className='flex w-full lg:justify-between h-min xl:flex-nowrap flex-wrap-reverse place-items-center justify-center lg:gap-0 gap-4'>
            <p className='text-white/80 lg:text-base text-xs text-balance text-center flex gap-px items-center md:flex-nowrap flex-wrap justify-center'>
              <span className='flex'>
                <span>© prof. dr. sc. Dinko Vidović, prim, dr. med.</span>
                <span>, 2024.</span>
                <span className='px-px sm:block hidden'>|</span>
              </span>
              <span>Made by Studio Sutra</span>.
            </p>
            <div className='flex md:flex-nowrap flex-wrap place-items-center md:gap-4 gap-2'>
              <p className='text-white'>Follow us:</p>
              <div className='flex items-center gap-3'>
                <LinkedInIcon
                  className='text-white transition-all ease-custom-ease-in-out hover:scale-125 hover:text-dinko-tamnoplava cursor-pointer'
                  size={24}
                />
                <InstagramIcon
                  className='text-white transition-all ease-custom-ease-in-out hover:scale-125 hover:text-dinko-tamnoplava cursor-pointer'
                  size={24}
                />
                <FacebookIcon
                  className='text-white transition-all ease-custom-ease-in-out hover:scale-125 hover:text-dinko-tamnoplava cursor-pointer'
                  size={24}
                />
                <YoutubeIcon
                  className='text-white transition-all ease-custom-ease-in-out hover:scale-125 hover:text-dinko-tamnoplava cursor-pointer'
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
