'use client';

import Image from 'next/image';
import React from 'react';
import dinkoLogo from '../img/logos/dinko-vidovic-logo.svg';
import { navLinks } from '../staticWebData/navLinks';
import AppButton from './AppButton';
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import {
  SlSocialLinkedin as LinkedInIcon,
  SlSocialInstagram as InstagramIcon,
  SlSocialFacebook as FacebookIcon,
  SlSocialYoutube as YoutubeIcon,
} from 'react-icons/sl';
import { useAppContext } from '../contexts/store';
import { UserLanguage } from '../types/appState';
import { operacijeByKat } from '../staticWebData/operacijeDemo';
const AppHeader = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    isMobileOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [isMobileOpen]);

  const {
    state: { userLang },
  } = useAppContext();

  const getCurrentLangLinks = React.useCallback(
    () => (userLang === UserLanguage.hr ? navLinks.hr : navLinks.en),
    [userLang]
  );

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);

  return (
    <nav className='w-full bg-white '>
      <div className='max-w-max-nav mx-auto my-0 py-5 px-6'>
        <div className='flex flex-row justify-between items-center'>
          <Link href={'/'}>
            <Image src={dinkoLogo} alt='header logo signiature' />
          </Link>
          <div className='w-full flex items-center justify-end 2xl:gap-16  gap-8 '>
            <div onMouseLeave={() => setIsDropdown(false)} className='xl:flex hidden items-center 3xl:gap-11 gap-6'>
              {getCurrentLangLinks().map((link) => {
                if (link.isMenu) {
                  return (
                    <div className='relative' key={link.title}>
                      <a
                        onMouseOver={() => setIsDropdown(true)}
                        onMouseEnter={() => setIsDropdown(true)}
                        href={link.href}
                        className='transition-all uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava text-base'
                      >
                        {link.title}
                      </a>

                      <div
                        className={`absolute transition-all w-auto duration-300 ease-custom-ease-in-out bg-red-400 grid grid-cols-1 items-start gap-4 top-[1.5rem] z-30 left-0 ${
                          isDropdown
                            ? 'opacity-1 translate-y-0'
                            : 'opacity-0 translate-y-10 pointer-events-none select-none'
                        }`}
                      >
                        {operacijeByKat.map((operacija, index) => {
                          return (
                            <div
                              key={index}
                              className='relative cursor-pointer group transition-all duration-300 ease-custom-ease-in-out'
                            >
                              {userLang === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                              <div className='absolute transition-all duration-300 ease-custom-ease-in-out translate-y-10  left-full min-w-[400px] top-0 min-h-36 bg-blue-500 opacity-0 pointer-events-none select-none grid group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:select-auto group-hover:opacity-100 grid-cols-1 w-full gap-1'>
                                {userLang === UserLanguage.hr
                                  ? operacija.contentHr.map((op, index) => <p key={index}>{op}</p>)
                                  : operacija.contentEn.map((op, index) => <p key={index}>{op}</p>)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    href={link.href}
                    key={link.title}
                    className='transition-all relative uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava text-base'
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>

            <div className='md:block hidden'>
              <AppButton primary='prim' content='Dogovorite pregled' />
            </div>
            <div className='xl:hidden block z-50'>
              <Hamburger color={isMobileOpen ? '#F5FAFF' : '#092A4C'} onToggle={() => setIsMobileOpen(!isMobileOpen)} />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div
        className={`w-full transition-all items-center justify-center ease-custom-ease-in-out bg-dinko-tamnoplava  z-40 absolute top-0 left-0 h-full ${
          isMobileOpen ? 'translate-y-0 grid' : 'translate-y-full hidden'
        }`}
      >
        <div className='flex flex-col mx-auto my-0 items-start h-max justify-start w-full px-12  gap-6'>
          {navLinks.hr.map((link) => (
            <a
              href={link.href}
              key={link.title}
              className='transition-all uppercase cursor-pointer text-alt-bila hover:text-dinko-plava text-base'
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className='grid items-center gap-4 grid-cols-1 px-12'>
          <div className='flex items-center gap-3 justify-start'>
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

          <div className='w-2/4 bg-alt-bila/20 h-px'></div>

          <p className='text-white/80 lg:text-base text-xs text-balance text-center flex gap-px items-center md:flex-nowrap flex-wrap justify-start'>
            <span className='flex text-left justify-start'>
              <span className='whitespace-nowrap'>© prof. dr. sc. Dinko Vidović, prim, dr. med., 2024.</span>
              <span className='px-px sm:block hidden'>|</span>
            </span>
            <span>Made by Studio Sutra</span>.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
