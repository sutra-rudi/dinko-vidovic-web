'use client';
import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { FallingLines } from 'react-loader-spinner';
const Loading = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      {/* <AnimatePresence>
        <motion.div
          className='flex justify-center items-center w-full h-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > */}
      <FallingLines color='#17AEC2' width='100' visible={true} />
      {/* </motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default Loading;
