import React from 'react';

const AppButton = ({ primary, content }: { primary: 'prim' | 'sec'; content: string }) => {
  return (
    <button
      className={`flex items-center justify-center px-5 py-3 rounded-appButtonBase ${
        primary === 'prim' && 'bg-dinko-tamnoplava text-white'
      }`}
    >
      {content}
    </button>
  );
};

export default AppButton;
