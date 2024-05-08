import React from 'react';

const AppButton = ({ primary, content }: { primary: 'prim' | 'sec' | 'hero' | 'bio' | 'blue-bg'; content: string }) => {
  return (
    <button
      className={`transition-all ease-in flex items-center justify-center px-5 py-[0.6rem] rounded-appButtonBase lg:text-base text-sm ${
        primary === 'prim' && 'bg-dinko-tamnoplava text-white'
      } ${primary === 'hero' && 'bg-transparent text-dinko-tamnoplava outline outline-2 outline-dinko-tamnoplava'} ${
        primary === 'bio' && 'bg-dinko-plava'
      } ${primary === 'sec' && 'bg-white text-dinko-tamnoplava'} ${
        primary === 'blue-bg' && 'bg-transparent outline outline-2 outline-white text-white'
      }`}
    >
      {content}
    </button>
  );
};

export default AppButton;
