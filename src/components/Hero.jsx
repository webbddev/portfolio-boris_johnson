'use client';

import Image from 'next/image';
import profilePic from '../assets/raviKumarProfile.webp';
import { HERO_CONTENT } from '@/constants/data';
import { motion, stagger } from 'framer-motion';

// Define container-level animation variants
const containerVariants = {
  hidden: {
    // Initially, the container is invisible and off-screen to the left
    opacity: 0,
    x: -100,
  },
  visible: {
    // The container becomes visible and moves to its final position
    opacity: 1,
    x: 0,
    transition: {
      // The entire container animation takes 0.5 seconds
      duration: 0.5,
      // Stagger child animations by 0.6 seconds
      staggerChildren: 0.6,
    },
  },
};

// Define child-level animation variants
const childVariants = {
  hidden: {
    // Initially, child elements are invisible and off-screen to the left
    opacity: 0,
    x: -100,
  },
  visible: {
    // Child elements become visible and move to their final position
    opacity: 1,
    x: 0,
    transition: {
      // Each child animation takes 0.5 seconds
      duration: 0.5,
    },
  },
};


const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            className='flex justify-center lg:p-8'
          >
            <Image
              src={profilePic}
              alt='Profile Picture'
              width={100}
              height={100}
              sizes='100vw'
              className='w-full h-auto border border-stone-900 rounded-3xl'
            />
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10'
          >
            <motion.h2
              variants={childVariants}
              className='pb-2 text-4xl font-bold tracking-wide lg:text-8xl'
            >
              Boris Johnson
            </motion.h2>
            <motion.span
              variants={childVariants}
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-normal font-normal text-transparent'
            >
              Full Stack Developer
            </motion.span>
            <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-lg p-2 text-sm text-stone-800 mb-10'
            >
              Download Resume{' '}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
