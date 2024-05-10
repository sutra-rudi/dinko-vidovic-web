'use client';

import Image from 'next/image';
import React from 'react';
import dinkoLogo from '../img/logos/dinko-vidovic-logo.svg';
import { navLinks } from '../staticWebData/navLinks';
import AppButton from './AppButton';
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
const AppHeader = () => {
  return (
    <nav className='w-full bg-white'>
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
            <div className='xl:hidden block'>
              <Hamburger color='#092A4C' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
