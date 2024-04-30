import Image from 'next/image';
import React from 'react';

import videoPatternQuote from '../img/svg/dinko-vidovic-video-pattern-effect.svg';
import imageOfDinkoThumb from '../img/heros/image-of-dinko-bg-for-video.png';
const VideoCitat = () => {
  return (
    <section className='mt-14 w-full '>
      <div className='relative w-full h-full bg-overlayVideoCitat min-h-[768px] flex items-center justify-center'>
        <div className='max-w-max-container my-0 mx-auto relative py-8'>
          <Image src={videoPatternQuote} alt='decorative quote pattern' className='absolute -left-24 -top-20' />
          <div className='w-full flex items-center gap-28 px-10'>
            <p className='text-alt-bila leading-tight text-4xl'>
              Kretanje je nužno za zdrav, kvalitetan i ispunjen život. Pritom je važno da se krećemo u punom opsegu
              kretnji, bez bolova i ograničenja. Važno je da se krećemo s lakoćom.
            </p>
            <div className='relative w-full aspect-video min-h-[458px] max-w-[781px] object-top object-cover'>
              <Image
                src={imageOfDinkoThumb}
                alt='picture of Dinko as thumbnail for video'
                fill
                className='aspect-video object-top object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCitat;
