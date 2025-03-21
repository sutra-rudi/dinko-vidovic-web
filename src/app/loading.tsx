'use client';
import React from 'react';
import { FallingLines } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <FallingLines color='#17AEC2' width='100' visible={true} />
    </div>
  );
};

export default Loading;
