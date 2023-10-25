'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Cal from './Cal';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Schedule a meeting
      </p>
      <Cal />
      <a className='underline' href='mailto:mematthew123@icloud.com'>
        mematthew123@gmail.com{''}
      </a>
      {''} ||{' '}
      <a className='underline' href='phone:1-406-402-7769'>
        {''} 406 402 7769
      </a>
    </motion.section>
  );
}
