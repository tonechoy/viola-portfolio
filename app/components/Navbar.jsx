import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] opacity-75 dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-gray-200/20" : ""}`}>
      <motion.div
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      >
        <a href="#top">
          <Image src={isDarkMode ? assets.viola_logo_white : assets.viola_logo} className='w-30 cursor-pointer mr-14' alt=''/>
        </a>
      </motion.div>
        

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm/2 dark:border dark:border-gray-300/50 dark:bg-transparent"} `}>
          <li><a href="#top" className='font-ovo'>Home</a></li>
          <li><a href="#about" className='font-ovo'>About me</a></li>
          {/* <li><a href="#services" className='font-ovo'>Services</a></li> */}
          <li><a href="#projects" className='font-ovo'>My Projects</a></li>
          <li><a href="#contact" className='font-ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer'/>
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='press to contact' className='w-3'/>
          </a>
          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
          </button>
        </div>

        {/* ------- mobile menu ----------- */}

        <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-gray-300'
          ref={sideMenuRef}
        >

          <div className='absolute right-6 top-6 flex flex-col' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a href="#top" onClick={closeMenu} className='font-ovo flex-1 hover:bg-rose-200 dark:hover:bg-gray-700'>Home</a></li>
          <li><a href="#about" onClick={closeMenu} className='font-ovo flex-1  hover:bg-rose-200 dark:hover:bg-gray-700'>About me</a></li>
          {/* <li><a href="#service" onClick={closeMenu} className='font-ovo flex-1 '>Services</a></li> */}
          <li><a href="#projects" onClick={closeMenu} className='font-ovo flex-1  hover:bg-rose-200 dark:hover:bg-gray-700'>My Projects</a></li>
          <li><a href="#contact" onClick={closeMenu} className='font-ovo flex-1  hover:bg-rose-200 dark:hover:bg-gray-700'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar