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
const AppHeader = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    isMobileOpen ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [isMobileOpen]);

  return (
    <nav className='w-full bg-white overflow-hidden'>
      <div className='max-w-max-nav mx-auto my-0 py-5 px-6'>
        <div className='flex flex-row justify-between items-center'>
          <Link href={'/'}>
            <Image src={dinkoLogo} alt='header logo signiature' />
          </Link>
          <div className='w-full flex items-center justify-end 2xl:gap-48  gap-8 '>
            <div className='xl:flex hidden items-center 3xl:gap-11 gap-6'>
              {navLinks.hr.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className='transition-all uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava text-base'
                >
                  {link.title}
                </a>
              ))}
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
        <div className='flex flex-col mx-auto my-0 items-start h-max justify-start  gap-6'>
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

        <div className='grid items-center gap-4 grid-cols-1'>
          <div className='flex items-center gap-3 justify-center'>
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

          <div className='w-1/4 bg-alt-bila/20 h-px place-self-center'></div>

          <p className='text-white/80 lg:text-base text-xs text-balance text-center flex gap-px items-center md:flex-nowrap px-6 flex-wrap justify-center'>
            <span className='flex'>
              <span>© prof. dr. sc. Dinko Vidović, prim, dr. med.</span>
              <span>, 2024.</span>
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
