import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


function ExpCard() {
  const itemVariante = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }


  return (
    <div className='bg-white pb-16'>
      <div className=" container  mx-auto flex flex-col lg:flex-row text-gray-800 justify-between items-center   pl-10 pr-16">
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <Image alt='Imagen1' src='/elementos web-05.png' width={200} height={100} className='' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <Image alt='Imagen1' src='/elementos web-06.png' width={200} height={100} className='' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <Image alt='Imagen1' src='/elementos web-07.png' width={200} height={100} className='mb-4' />
        </motion.div>
      </div>
    </div>
  )
}

export default ExpCard