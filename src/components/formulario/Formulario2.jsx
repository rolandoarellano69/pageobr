'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';
export const Formulario2 = () => {
  const iframeStyle = {
    height: '100vh',
    width: '70%',
    border: 'none',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }
  };

  return (
    <>
      <div className='relative bg-secondary top-0 w-full'></div>
      <section className='text-gray-600 body-font mt-[4rem] relative'>
        <div className="container px-5 py-24 mx-auto flex-row-reverse flex sm:flex-nowrap flex-wrap h-[80vh]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-2/3 md:w-1/2 md:h-1/2 lg:h-2/3 overflow-hidden top-8 sm:mr-10 p-10 flex items-end justify-start relative">

            <Image
              src='/mujer-sonriente-algo-presentacion-auriculares.jpg'
              alt='OBR Group'
              fill
              className='object-contain ' />
          </motion.div>

          {/* div zoho */}
          <motion.iframe
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            aria-label='Form OBR'
            style={iframeStyle}
            src='https://forms.zohopublic.com/obrgroup/form/FormOBR/formperma/h5W4BVvU_PTm6KUWmBvVstuKP133oP3GXrSVkzLYrZo'
          ></motion.iframe>

        </div>


      </section>
    </>

  )
}