import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  return (
    <div id='top'
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration:0.8, type: 'spring', stiffness:100}}
      >
        <Image src={assets.viola_profile_pic_logo} alt='' 
          className='rounded-full w-20 md:w-27'/>
      </motion.div>
      <h3 
      // initial={{y: -20, opacity: 0}}
      // whileInView={{y: 0, opacity: 1}}
      // transition={{duration: 0.6, delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
          Hi! I'm Viola Chan <Image src={assets.hand_icon} alt='' 
          className='w-6'/>
      </h3>
      <motion.h1 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        I am a web developer based in Hong Kong.
      </motion.h1>
      {/* <p className='max-w-2xl mx-auto font-ovo'>
        I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </p> */}
      <p className='max-w-2xl mx-auto font-ovo'>
        I am a tech enthusiast, passionate about new technology, have done a few projects with the use of html, css, JavaScript, React JS, Node.Js, different types of databases, etc. <br />
        Scroll down below to learn more about me!
      </p>

      {/* buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 font-outfit'>
        <motion.a href="#contact" 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:text-gray-200'>
          contact me 
          <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.2}}
        href="/viola-it-assistant-resume.pdf"
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-gray-100 dark:text-black'>
          my resume 
          <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>
      
      
    </div>
  )
}

export default Header