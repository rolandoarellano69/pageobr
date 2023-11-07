'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const iconsDev = [
  { src: '/icon/LOGO AUREO.png', alt: 'Aureo', description: 'Loma Dorada' },
  { src: '/icon/LOGO TORRES.png', alt: 'Torres', description: 'Hacienda del Colorado' },
  { src: '/icon/LOGO PLATINUM.png', alt: 'Platinum', description: 'Loma Dorada' },
  { src: '/icon/LOGO CIPRES.png', alt: 'Cipres', description: 'Paseo Del Bosque' },
  { src: '/icon/LOGO JADE.png', alt: 'Jade', description: 'La Gloria' },
  { src: '/icon/LOGO ALMERIA.png', alt: 'Almeria', description: 'Barcelona' },
];

function IconsDesarrollos() {
  return (
    <section className='bg-white p-10'>
      <h2 className='text-center text-secondary text-4xl font-bold mb-8'>Desarrollos</h2>
      <main className='grid grid-cols-1 grid-rows-3 gap-4 lg:grid-cols-2 lg:gap-8 '>
        {iconsDev.map((iconDev, index) => (
          <motion.div
            key={index}
            className='rounded-lg bg-primary p-4 flex flex-col items-center'
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={iconDev.src} alt={iconDev.alt} width={300} height={300} />
            <p className='text-white text-center font-bold'>{iconDev.description}</p>

          </motion.div>
        )

        )}
      </main>
    </section>
  )
}

export default IconsDesarrollos