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
  SlPlus as PlusIcon,
  SlArrowDown as DownIcon,
  SlArrowRight as RightIcon,
} from 'react-icons/sl';

import { useAppContext } from '../contexts/store';
import { UserLanguage } from '../types/appState';
import { operacijeByKat } from '../staticWebData/operacijeDemo';

import { useOnClickOutside } from 'usehooks-ts';
import { useSearchParams } from 'next/navigation';
import slugify from 'slugify';

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

  const containerRef = React.useRef(null);

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  const [isMobileDropdown, setIsMobileDropdown] = React.useState<number | null>();

  const handleClickOutsideOfContainer = () => {
    setIsDropdown(false);
    setIsMobileDropdown(null);
  };

  useOnClickOutside(containerRef, handleClickOutsideOfContainer);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  //cleanup

  React.useEffect(() => {
    return () => {
      setIsDropdown(false);
      setIsMobileDropdown(null);
    };
  }, []);

  return (
    <nav className='w-full bg-white '>
      <div className='max-w-max-nav mx-auto my-0 py-5 px-6'>
        <div className='flex flex-row justify-between items-center'>
          <Link href={'/'}>
            <Image src={dinkoLogo} alt='header logo signiature' />
          </Link>
          <div className='w-full flex items-center justify-end 2xl:gap-16  gap-8 '>
            <div className='xl:flex hidden items-center 3xl:gap-11 gap-6'>
              {getCurrentLangLinks().map((link) => {
                if (link.isMenu) {
                  return (
                    <div ref={containerRef} className='relative' key={link.title}>
                      <div
                        onMouseOver={() => setIsDropdown(true)}
                        onMouseEnter={() => setIsDropdown(true)}
                        onClick={() => setIsDropdown(true)}
                        className='transition-all ease-custom-ease-in-out duration-300 group flex items-center gap-2 uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava text-base'
                      >
                        <span className='transition-all ease-custom-ease-in-out duration-300'>{link.title}</span>
                        <DownIcon
                          className={`text-xs shrink-0 text-dinko-tamnoplava group-hover:text-dinko-plava transition-all ease-custom-ease-in-out duration-300 origin-center ${
                            isDropdown && 'rotate-180'
                          }`}
                        />
                      </div>

                      <div
                        className={`absolute pt-6 transition-all w-full min-w-60 duration-300 ease-custom-ease-in-out bg-white grid grid-cols-1 items-start  top-[2rem] z-30 left-0 ${
                          isDropdown
                            ? 'opacity-1 translate-y-0'
                            : 'opacity-0 translate-y-10 pointer-events-none select-none'
                        }`}
                      >
                        {operacijeByKat.map((operacija, index) => {
                          return (
                            <div
                              key={index}
                              className='relative cursor-pointer group transition-all duration-300 ease-custom-ease-in-out py-2 border border-dinko-tamnoplava/5'
                            >
                              <span className='flex items-center gap-1 group px-4 '>
                                <PlusIcon className='transition-all duration-300 ease-custom-ease-in-out group-hover:text-dinko-plava group-hover:rotate-45' />
                                <span className='transition-all duration-300 ease-custom-ease-in-out group-hover:text-dinko-plava'>
                                  {userLang === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                                </span>
                              </span>
                              <div
                                className={`absolute transition-all duration-300 ease-custom-ease-in-out translate-y-10  left-full  top-0  min-w-72 w-full bg-white  opacity-0 pointer-events-none select-none grid group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:select-auto group-hover:opacity-100 grid-cols-1 `}
                              >
                                {userLang === UserLanguage.hr
                                  ? operacija.contentHr.map((op, index) => (
                                      <Link
                                        href={`/operacije/${slugify(operacija.titleHr, slugifyOptions)}/#${slugify(
                                          op,
                                          slugifyOptions
                                        )}?lang=${checkParams}`}
                                        key={index}
                                        className='text-base leading-baseLineHeight inline-block border border-dinko-tamnoplava/5'
                                      >
                                        <span className='flex items-center gap-2 justify-between transition-all duration-300 ease-custom-ease-in-out hover:text-dinko-plava px-4 py-4'>
                                          <span>{op}</span>
                                          <RightIcon className='transition-all duration-300 ease-custom-ease-in-out shrink-0 ' />
                                        </span>
                                      </Link>
                                    ))
                                  : operacija.contentEn.map((op, index) => (
                                      <Link
                                        href={`/operacije/${slugify(operacija.titleEn, slugifyOptions)}/#${slugify(
                                          op,
                                          slugifyOptions
                                        )}?lang=${checkParams}`}
                                        key={index}
                                        className='text-base leading-baseLineHeight inline-block  border border-dinko-tamnoplava/5'
                                      >
                                        <span className='flex items-center gap-2 justify-between transition-all duration-300 ease-custom-ease-in-out hover:text-dinko-plava px-4 py-4'>
                                          <span>{op}</span>
                                          <RightIcon className='transition-all duration-300 ease-custom-ease-in-out shrink-0' />
                                        </span>
                                      </Link>
                                    ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    href={link.href}
                    key={link.title}
                    className='transition-all relative uppercase cursor-pointer text-dinko-tamnoplava hover:text-dinko-plava text-base'
                  >
                    {link.title}
                  </Link>
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
        <div className='flex flex-col mx-auto my-0 items-start h-max justify-start w-full sm:px-12 px-8  gap-6'>
          {getCurrentLangLinks().map((link) => {
            if (link.isMenu) {
              return (
                <div ref={containerRef} className='relative' key={link.title}>
                  <div
                    onClick={() => setIsDropdown(true)}
                    className='transition-all ease-custom-ease-in-out duration-300 group flex items-center gap-2 uppercase cursor-pointer text-alt-bila text-base'
                  >
                    <span className='transition-all ease-custom-ease-in-out duration-300'>{link.title}</span>
                    <DownIcon
                      className={`text-xs shrink-0 text-alt-bila  transition-all ease-custom-ease-in-out duration-300 origin-center ${
                        isDropdown && 'rotate-180'
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute transition-all w-full min-w-60 duration-300 ease-custom-ease-in-out bg-dinko-tamnoplava border border-alt-bila grid grid-cols-1 items-start  top-[2rem] z-30 left-[15%] ${
                      isDropdown
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-10 pointer-events-none select-none'
                    }`}
                  >
                    {operacijeByKat.map((operacija, index) => {
                      return (
                        <div
                          onClick={() => setIsMobileDropdown(index)}
                          key={index}
                          className='relative cursor-pointer group transition-all duration-300 ease-custom-ease-in-out py-4'
                        >
                          <span className='flex items-center gap-1 px-4 text-white'>
                            <PlusIcon className='transition-all duration-300 ease-custom-ease-in-out group-hover:text-dinko-plava group-hover:rotate-45' />
                            <span className='transition-all duration-300 ease-custom-ease-in-out group-hover:text-dinko-plava'>
                              {userLang === UserLanguage.hr ? operacija.titleHr : operacija.titleEn}
                            </span>
                          </span>
                          <div
                            className={`absolute transition-all duration-300 ease-custom-ease-in-out translate-y-10  left-[20%]  top-0 w-full bg-alt-bila z-40  opacity-0 pointer-events-none select-none grid grid-cols-1  ${
                              isMobileDropdown === index && 'translate-y-0 pointer-events-auto select-auto opacity-100'
                            }`}
                          >
                            {userLang === UserLanguage.hr
                              ? operacija.contentHr.map((op, index) => (
                                  <Link
                                    href={`/operacije/${slugify(operacija.titleHr, slugifyOptions)}/#${slugify(
                                      op,
                                      slugifyOptions
                                    )}?lang=${checkParams}`}
                                    key={index}
                                    className='text-xs leading-baseLineHeight inline-block border border-dinko-tamnoplava/5'
                                  >
                                    <span className='flex items-center gap-2 transition-all duration-300 ease-custom-ease-in-out hover:text-dinko-plava px-4 py-2'>
                                      <span>{op}</span>
                                      <RightIcon className='transition-all duration-300 ease-custom-ease-in-out shrink-0 ' />
                                    </span>
                                  </Link>
                                ))
                              : operacija.contentEn.map((op, index) => (
                                  <Link
                                    href={`/operacije/${slugify(operacija.titleEn, slugifyOptions)}/#${slugify(
                                      op,
                                      slugifyOptions
                                    )}?lang=${checkParams}`}
                                    key={index}
                                    className='text-xs leading-baseLineHeight inline-block  border border-dinko-tamnoplava/5'
                                  >
                                    <span className='flex items-center gap-2 transition-all duration-300 ease-custom-ease-in-out hover:text-dinko-plava px-4 py-2'>
                                      <span>{op}</span>
                                      <RightIcon className='transition-all duration-300 ease-custom-ease-in-out shrink-0' />
                                    </span>
                                  </Link>
                                ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                href={link.href}
                key={link.title}
                className='transition-all uppercase cursor-pointer text-alt-bila hover:text-dinko-plava text-base'
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* mobile */}

        <div className='grid items-center gap-4 grid-cols-1 sm:px-12 px-8'>
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
