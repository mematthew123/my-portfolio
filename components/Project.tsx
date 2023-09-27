'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // `useScroll` is a hook from Framer Motion that provides scroll progress as a motion value.
  // It returns an object containing `scrollYProgress` which is a motion value between 0 and 1 representing the scroll progress.
  const { scrollYProgress } = useScroll({
    target: ref, // The target element to measure the scroll progress of.
    offset: ['0 1', '1.33 1'], // The range of scrollY values over which the scroll progress should be measured.
  });

  // `useTransform` is a hook that creates a new motion value that transforms the output of another motion value using a range of input/output pairs.
  // Here, it's used to transform the `scrollYProgress` into scale and opacity values.
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // As the scroll progresses from 0 to 1, the scale will change from 0.8 to 1.
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // As the scroll progresses from 0 to 1, the opacity will change from 0.6 to 1.

  return (
    // `motion.div` is a special Framer Motion component that can animate its properties.
    // Here, it's used to animate the scale and opacity of the div based on the scroll progress.
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess, // Applying the scale transformation based on scroll progress
        opacity: opacityProgess, // Applying the opacity transformation based on scroll progress
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* 
                 The following styles are applied when the parent with the 'group' class is hovered over:
                group-hover:scale-[1.04] // Scales the image up slightly to 1.04 times its original size
                group-hover:-translate-x-3 // Moves the image 3 units to the left
                group-hover:translate-y-3 // Moves the image 3 units upwards
                group-hover:-rotate-2 // Rotates the image 2 degrees counter-clockwise */}

        {/* The following styles are applied when the parent with the 'group' class AND 'even' class is hovered over:
                group-even:group-hover:translate-x-3 // Moves the image 3 units to the left
                group-even:group-hover:translate-y-3 // Moves the image 3 units upwards
                group-even:group-hover:rotate-2 // Rotates the image 2 degrees clockwise */}
        <Link href={liveLink} passHref>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='
        absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04] 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 
        group-even:right-[initial] group-even:-left-40' // For even groups, the image is positioned 40 units to the left
          />
        </Link>
      </section>
    </motion.div>
  );
}
