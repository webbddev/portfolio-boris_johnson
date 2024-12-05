'use client';

import Image from 'next/image';
import { PROJECTS } from '../constants/data';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move down
        initial={{ opacity: 0, y: -100 }} // Initially invisible and off-screen
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl font-bold'
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center space-x-4 xl:space-x-8'
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fade in and move right
              initial={{ opacity: 0, x: -100 }} // Initially invisible and off-screen
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className='w-full h-auto rounded-lg mb-6 object-cover'
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fade in and move right
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-lg lg:w-3/4'
            >
              <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
              <p className='mb-4 text-stone-300 text-lg'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-200'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
