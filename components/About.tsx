/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      // Initial animation state: the section starts with 0 opacity and is translated 100 units on the y-axis (downwards)
      initial={{ opacity: 0, y: 100 }}
      // Animation state when the section is visible: it becomes fully opaque and moves to its original position
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 font-medium'>
        I am an experienced software developer with expertise in React, Next.js,
        TypeScript, PHP, Java, and Node. I enjoy building web applications and
        learning new technologies. I am currently working as a freelance
        developer and am open to new opportunities.
      </p>
      <p className='mb-3 font-medium'>
        {''} My journey began with a Fullstack developer program at Merit
        America in 2021, focusing on React and Java. Since then, I have
        continued learning and have been fortunate to work on a variety of
        projects both as a solo developer and as part of a fast paced startup
        team.
      </p>
      <p className='mb-3 font-medium'>
        Problem-solving is at the core of my passion for programming. Seeing a
        problem, breaking it down into manageable pieces, and then building a
        solution is what I love most about programming.
      </p>
      <p className='mb-3 font-medium'>
        When not learning new skills or working on current projects I enjoy
        skiing, hiking, and volunteering with the{' '}
        <a
          href='https://www.missoulacounty.us/government/health/animal-control/animal-shelter'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 underline'
        >
          Missoula Animal Shelter
        </a>
        .
      </p>
    </motion.section>
  );
}
