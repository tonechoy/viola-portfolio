import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Projects = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
      < motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className='text-center mb-2 text-lg font-ovo'>
        My portfolio</motion.h4>
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className='text-center text-5xl font-ovo'>
        My Projects</motion.h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my web development protfolio! <br />Expolore a collect of projects showcasing my experties in front-end development. <br />Click the green arrow button to explore more!</p>

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5 dark:text-gray-700'>
        {workData.map((project, index, key)=>(
          <motion.div 
          initial={{ scale: 1.05 }}
          // whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={index} 
          className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          style={{backgroundImage: `url(${project.bgImage})`}}>

            <div className='font-outfit bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-300'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <a target='_blank' href={project.link}><Image src={assets.send_icon} alt='' className='w-5'/></a>
                
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      <motion.a 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.5 }}
      href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-300 dark:hover:bg-dark-hover dark:border-gray-200 dark:text-gray-200'>
        Show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' 
        className='w-4'/>
      </motion.a>
    </motion.div>
  )
}

export default Projects