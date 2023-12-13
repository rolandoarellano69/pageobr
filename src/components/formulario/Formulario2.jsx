'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';
export const Formulario2 = () => {
  const iframeStyle = {
    height: '70vh',
    width: '80%',
    border: 'none',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }
  };

  return (
    <>
    <div className='bg-primary w-full h-[6rem]'></div>
    <section className='text-gray-600 body-font mt-[2rem]'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-5 py-0 ">
        
        {/* Contenido del Formulario */}
        <motion.iframe
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          aria-label='Form OBR'
          src='https://forms.zohopublic.com/obrgroup/form/FormOBR/formperma/h5W4BVvU_PTm6KUWmBvVstuKP133oP3GXrSVkzLYrZo'
          style={iframeStyle}
        ></motion.iframe>
      </div>
    </section>
  </>

  )
}