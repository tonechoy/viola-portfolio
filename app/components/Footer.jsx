import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20 font-outfit text-gray-600 text-sm dark:text-gray-300'>
      <div className='text-center'>
        <a href="#top">
          <Image src={isDarkMode ? assets.viola_logo_white : assets.viola_logo} alt=''
          className='w-25 mx-auto mb-2'/>
        </a>
        <div className='w-max flex items-center mx-auto gap-2'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt=''
            className='w-5'/>
          violawschan@gmail.com
        </div>

        {/* <hr className='mb-4 mt-6 text-gray-400 max-w-[80%] mx-auto'/> */}

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p><span>&#169;</span> 2025 Viola Chan. All rights reserved.</p>
          <ul className='flex items-center justify-between gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/tonechoy">GitHub</a></li>
            <li><a target='_blank' href="">Privacy Policy</a></li>
            <li><a href="#contact">Connect with me</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer