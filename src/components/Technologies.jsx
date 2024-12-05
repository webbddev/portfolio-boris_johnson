'use client';

import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { motion } from 'framer-motion';

// Define a reusable animation variant for icons
const iconVariants = (duration) => ({
  initial: { y: -10 }, // Initial position: 10 units above the final position
  animate: {
    // Animate a y-axis movement between 10 units above and below the final position
    y: [15, -15],
    transition: {
      duration: duration,
      // Linear easing for a consistent speed
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      {/* Animate the heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move down
        initial={{ opacity: 0, y: -100 }} // Initially invisible and off-screen
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl font-bold'
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }} // Fade in and move right
        initial={{ opacity: 0, x: -100 }} // Initially invisible and off-screen
        transition={{ duration: 1.5 }} 
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {/* Animate each icon with different durations */}
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className='text-5xl text-cyan-400' />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(3)}
          className='p-4'
        >
          <TbBrandNextjs className='text-5xl' />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(2)}
          className='p-4'
        >
          <SiMongodb className='text-5xl text-green-700' />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(6)}
          className='p-4'
        >
          <FaCss3Alt className='text-5xl text-orange-500' />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(4)}
          className='p-4'
        >
          <SiTypescript className='text-5xl text-blue-500' />
        </motion.div>
        <motion.div
          initial='initial'
          animate='animate'
          variants={iconVariants(2.5)}
          className='p-4'
        >
          <DiJavascript1 className='text-5xl' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
