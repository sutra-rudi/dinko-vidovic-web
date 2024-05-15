import React from 'react';

const AppButton = ({ primary, content }: { primary: 'prim' | 'sec' | 'hero' | 'bio' | 'blue-bg'; content: string }) => {
  return (
    <button
      className={`transition-all duration-300 ease-custom-ease-in-out flex items-center justify-center px-5 py-[0.6rem] rounded-appButtonBase lg:text-base text-sm cursor-pointer ${
        primary === 'prim' && 'bg-dinko-tamnoplava text-white hover:text-dinko-tamnoplava hover:bg-dinko-plava'
      } ${
        primary === 'hero' &&
        'bg-transparent text-dinko-tamnoplava outline outline-2 outline-dinko-tamnoplava hover:bg-dinko-plava hover:text-dinko-tamnoplava hover:outline-dinko-plava'
      } ${primary === 'bio' && 'bg-dinko-plava hover:bg-dinko-tamnoplava hover:text-white'} ${
        primary === 'sec' && 'bg-white text-dinko-tamnoplava hover:bg-dinko-plava hover:text-dinko-tamnoplava'
      } ${
        primary === 'blue-bg' &&
        'bg-white  outline-white text-dinko-tamnoplava hover:outline-dinko-tamnoplava hover:bg-dinko-tamnoplava hover:text-white'
      }`}
    >
      {content}
    </button>
  );
};

export default AppButton;
