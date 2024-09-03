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
    <section className='w-full 2xl:mt-14 xl:mt-10 lg:mt-6 mt-2'>
      <div
        style={{ backgroundImage: `url(${dinkoVideoPatternBg.src})` }}
        className='relative w-full h-full  flex items-center justify-center bg-cover bg-no-repeat bg-center'
      >
        <div className='max-w-max-container my-0 mx-auto relative 2xl:py-24 py-20 '>
          <div className='w-full flex place-items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap relative xl:gap-0 gap-8'>
            <p className='text-alt-bila leading-tight md:text-3xl sm:text-2xl 2xl:pb-0 pb-4  text-lg z-10 text-balance xl:max-w-[613px] w-full relative shrink-1 md:pl-12 pl-16 pr-4 max-w-[40ch]'>
              <Image
                src={videoPatternQuote}
                alt='decorative quote pattern'
                className='absolute 2xl:-left-[7%] xl:-left-6 lg:left-2 left-1 -top-[30%] 2xl:w-24 2xl:h-24 xl:w-20 xl:h-20 lg:w-16 lg:h-16 w-14 h-14'
              />
              {langTriage(
                `Kretanje je nužno za zdrav, kvalitetan i ispunjen život. Pritom je važno da se krećemo u punom opsegu
              kretnji, bez bolova i ograničenja. Važno je da se krećemo s lakoćom.`,
                `Movement is essential for a healthy, quality, and fulfilling life. It is important to move with a full range of motion, without pain and limitations. It is crucial to move with ease.`
              )}
            </p>

            <div className='relative w-full aspect-video '>
              <Image
                src={imageOfDinkoThumb}
                alt='picture of Dinko as thumbnail for video'
                className='w-full aspect-video  object-left object-cover'
                width={981}
                height={549}
                quality={100}
              />
              <Image
                src={playButton}
                alt='play button icon'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20'
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
