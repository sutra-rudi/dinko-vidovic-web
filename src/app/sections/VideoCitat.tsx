import Image from 'next/image';
import React from 'react';

import dinkoVideoPatternBg from '../img/heros/dinko-vidovic-bg-video-citat.svg';
import videoPatternQuote from '../img/svg/dinko-vidovic-video-pattern-effect.svg';
import imageOfDinkoThumb from '../img/heros/image-of-dinko-bg-for-video.png';
import playButton from '../img/svg/dinko-vidovic-video-play-button.svg';
const VideoCitat = () => {
  return (
    <section className='w-full 2xl:mt-14 xl:mt-10 lg:mt-6 mt-2'>
      <div
        style={{ backgroundImage: `url(${dinkoVideoPatternBg.src})` }}
        className='relative w-full h-full  flex items-center justify-center bg-cover bg-no-repeat bg-center'
      >
        <div className='max-w-max-container my-0 mx-auto relative 2xl:py-24 pt-16 pb-0'>
          <div className='w-full flex place-items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap relative xl:gap-0 gap-8'>
            <p className='text-alt-bila leading-tight md:text-3xl sm:text-2xl  text-lg z-10 text-balance xl:max-w-[613px] w-full relative shrink-1 md:pl-12 pl-16 pr-4 max-w-[40ch]'>
              <Image
                src={videoPatternQuote}
                alt='decorative quote pattern'
                className='absolute 2xl:-left-[7%] left-4 -top-[30%] 2xl:w-24 2xl:h-24 xl:w-16 xl:h-16 w-12 h-12'
              />
              Kretanje je nužno za zdrav, kvalitetan i ispunjen život. Pritom je važno da se krećemo u punom opsegu
              kretnji, bez bolova i ograničenja. Važno je da se krećemo s lakoćom.
            </p>

            <div className='relative w-full aspect-video '>
              <Image
                src={imageOfDinkoThumb}
                alt='picture of Dinko as thumbnail for video'
                className='w-full aspect-video lg:min-h-[458px] xl:max-w-[700px] object-left object-cover '
              />
              <Image
                src={playButton}
                alt='play button icon'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain xl:w-32 xl:h-32 lg:w-28 lg:h-28 w-20 h-20'
              />
              {/* <div className='absolute w-12 h-12 inset-0 bg-red-500'></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCitat;
