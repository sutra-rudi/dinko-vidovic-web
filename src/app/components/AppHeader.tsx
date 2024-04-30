'use client';

import Image from 'next/image';
import React from 'react';
import dinkoLogo from '../img/logos/dinko-vidovic-logo.svg';
import { navLinks } from '../staticWebData/navLinks';
import AppButton from './AppButton';
const AppHeader = () => {
  return (
    <nav className='w-full bg-white'>
      <div className='max-w-max-nav mx-auto my-0 py-5'>
        <div className='flex flex-row justify-between items-center'>
          <Image src={dinkoLogo} alt='header logo signiature' />
          <div className='flex items-center gap-11'>
            {navLinks.hr.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className='transition-all uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava'
              >
                {link.title}
              </a>
            ))}
          </div>
          <AppButton primary='prim' content='Dogovorite pregled' />
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
