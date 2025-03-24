'use client';

import Image from 'next/image';
import React from 'react';
import dinkoVideoPatternBg from '../img/heros/dinko-vidovic-bg-video-citat.svg';
import videoPatternQuote from '../img/svg/dinko-vidovic-video-pattern-effect.svg';
import imageOfDinkoThumb from '../img/heros/image-of-dinko-bg-for-video.png';
import playButton from '../img/svg/dinko-vidovic-video-play-button.svg';
import Lightbox from 'yet-another-react-lightbox';
import ReactPlayer from 'react-player';
import Loading from '../loading';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
const VideoCitat = () => {
  const [open, setOpen] = React.useState(false);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const langTriage = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section className='w-full 2xl:mt-14 xl:mt-10 lg:mt-6 mt-2 relative bg-dinko-tamnoplava'>
      <picture className='block w-full h-full'>
        <img
          src={dinkoVideoPatternBg.src}
          alt='svg pattern'
          width={1920}
          height={867}
          className='absolute inset-0 py-[80px] w-full h-full object-cover object-center'
        />
      </picture>

      <div className='relative w-full h-full  flex items-center justify-center bg-cover bg-no-repeat bg-center xl:min-h-[1063px]'>
        <div className='w-full  my-0 mx-auto relative 2xl:py-24 py-20 md:px-8'>
          <div className='w-full flex place-items-center lg:justify-between justify-center lg:flex-nowrap flex-wrap-reverse relative xl:gap-[116px] md:gap-[81px] gap-[42px]'>
            <picture>
              <img
                src={videoPatternQuote.src}
                alt='decorative quote pattern'
                className='absolute top-[-20px] left-[2%] xl:block hidden'
                width={196}
                height={196}
              />
            </picture>
            <h2 className='text-alt-bila md:leading-[141%] leading-[134%] md:text-[36px] text-[26px] z-10 xl:max-w-[613px] w-full relative shrink-1  block md:px-0 px-3'>
              {langTriage(
                `Kretanje je nužno za zdrav, kvalitetan i ispunjen život. Pritom je važno da se krećemo u punom opsegu
              kretnji, bez bolova i ograničenja. Važno je da se krećemo s lakoćom.`,
                `Movement is essential for a healthy, quality, and fulfilling life. It is important to move with a full range of motion, without pain and limitations. It is crucial to move with ease.`
              )}
            </h2>

            <div className='relative w-full '>
              <picture className='w-full block shrink-0'>
                <img
                  src={imageOfDinkoThumb.src}
                  alt='picture of Dinko as thumbnail for video'
                  className='w-full aspect-auto  object-center object-cover block xl:h-[724px]'
                  width={981}
                  height={724}
                />
              </picture>
              <Image
                src={playButton}
                alt='play button icon'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20 cursor-pointer hover:motion-preset-pulse-sm motion-ease-spring-smooth'
                width={132}
                height={132}
                onClick={() => setOpen(true)}
              />
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                  {
                    //@ts-ignore
                    type: 'custom-slide',
                  },
                ]}
                render={{
                  slide: () => (
                    <ReactPlayer
                      light
                      url={'/dinko-vidovic-video.mov'}
                      config={{
                        file: {
                          attributes: {
                            poster: imageOfDinkoThumb.src,
                          },
                        },
                      }}
                      loop
                      width={'100%'}
                      height={'100%'}
                      playsinline
                      fallback={<Loading />}
                    />
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCitat;
