import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


function CardAbout() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (

    <motion.section
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      variants={variants} 
      aria-labelledby="who-we-are-heading">
      <div className='relative bg-primary py-4 lg:py-8 mx-10 rounded-xl -translate-y-8 z-20'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-9'>
          <div className='lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0'>
            <Image
              src='/ASESORA OBR.png'
              alt='Equipo de OBR Grupo Inmobiliario'
              width={250}
              height={200}
              objectFit='cover'
            />
          </div>
          <div className='lg:w-1/2'>
            <h2 id="who-we-are-heading" className="text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4">¿QUIENES SOMOS?</h2>
            <p className="text-sm lg:text-base text-gray-300 mb-8">
              Somos una desarrolladora Inmobiliaria en constante crecimiento con diversos desarrollos en Tijuana B.C., en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en referentes.
            </p>
            <h4 className="text-base lg:text-lg text-gray-200 uppercase font-bold">Obr Group</h4>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CardAbout  