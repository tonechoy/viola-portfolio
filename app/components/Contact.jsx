import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b76da7d8-9074-4d44-8bf8-c9871dc54b79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className='text-center mb-2 text-lg font-ovo'>
        Contact me</motion.h4>
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className='text-center text-5xl font-ovo'>
        Get in touch</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I'd love to hear from you! <br />If you have any questions, comments, or feedback, please use the form below.</motion.p>

      <motion.form onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
        className='font-outfit max-w-2xl mx-auto'>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required
            name='name'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-gray-200/90'/>
          <input type="email" placeholder='Enter your email' required
            name='email'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-gray-200/90'/>
        </div>
        <textarea id="" rows="6" placeholder='Enter your message' required
          name='message' 
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-gray-200/90'></textarea>
        <motion.button type='submit'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'>
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
          </motion.button>

          <p className='mt-4'>{result}</p>
      </motion.form>
    </div>
  )
}

export default Contact