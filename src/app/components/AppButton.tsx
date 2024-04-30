import React from 'react';

const AppButton = ({ primary, content }: { primary: 'prim' | 'sec' | 'hero' | 'bio'; content: string }) => {
  return (
    <button
      className={`flex items-center justify-center px-5 py-2 rounded-appButtonBase ${
        primary === 'prim' && 'bg-dinko-tamnoplava text-white'
      } ${primary === 'hero' && 'bg-transparent text-dinko-tamnoplava outline outline-2 outline-dinko-tamnoplava'} ${
        primary === 'bio' && 'bg-dinko-plava'
      }`}
    >
      {content}
    </button>
  );
};

export default AppButton;
