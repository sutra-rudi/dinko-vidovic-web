'use client';

import React from 'react';
import parse from 'html-react-parser';

interface DinkoVidovicPrivacyPolicy {
  content: any;
}

const PageContent = ({ content }: DinkoVidovicPrivacyPolicy) => {
  return (
    <article className='py-6'>
      <div className='inner-cont-custom'>{parse(content)}</div>
    </article>
  );
};

export default PageContent;
