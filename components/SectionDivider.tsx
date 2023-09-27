'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    // Using the motion.div component from Framer Motion to enable animations on this div
    <motion.div
      // Styling the div as a vertical line, hidden on small screens and visible on larger screens
      className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20'
      // The initial state of the div before any animations start
      initial={{ opacity: 0, y: 100 }} // It starts with an opacity of 0 (fully transparent) and is positioned 100 units below its final position
      // The state to animate to
      animate={{ opacity: 1, y: 0 }} // It will animate to an opacity of 1 (fully opaque) and move to its final position (y: 0)
      // Transition properties for the animation
      transition={{ delay: 0.125 }} // The animation will start after a delay of 0.125 seconds
    ></motion.div>
  );
}
