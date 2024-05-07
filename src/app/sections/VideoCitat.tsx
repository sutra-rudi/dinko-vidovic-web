import Image from 'next/image';
import React from 'react';

import videoPatternQuote from '../img/svg/dinko-vidovic-video-pattern-effect.svg';
import imageOfDinkoThumb from '../img/heros/image-of-dinko-bg-for-video.png';
const VideoCitat = () => {
  return (
    <section className='w-full 2xl:mt-14 xl:mt-10 lg:mt-6 mt-2'>
      <div className='relative w-full h-full bg-overlayVideoCitat min-h-[768px] flex items-center justify-center'>
        <div className='max-w-max-container my-0 mx-auto relative py-8'>
          <div className='w-full flex items-stretch justify-between 2xl:p-0 px-6 xl:flex-nowrap flex-wrap relative '>
            <p className='text-alt-bila leading-tight lg:text-4xl md:text-3xl sm:text-2xl text-xl z-10 text-balance xl:max-w-[613px] w-full relative shrink-1'>
              <Image
                src={videoPatternQuote}
                alt='decorative quote pattern'
                className='absolute lg:-left-28 lg:-top-32 -top-14 xl:w-36 xl:h-36 lg:w-20 lg:h-20 md:w-16 md:h-16 w-12 h-12'
              />
              Kretanje je nužno za zdrav, kvalitetan i ispunjen život. Pritom je važno da se krećemo u punom opsegu
              kretnji, bez bolova i ograničenja. Važno je da se krećemo s lakoćom.
            </p>

            <Image
              src={imageOfDinkoThumb}
              alt='picture of Dinko as thumbnail for video'
              className='w-full lg:aspect-video aspect-square min-h-[458px] xl:max-w-[781px] object-top object-cover shrink-1'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCitat;
