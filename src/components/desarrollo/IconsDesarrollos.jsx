'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

const variants = {
  offscreen: {
    y: 0, // Empieza 50px más abajo
    opacity: 0 // Empieza totalmente transparente
  },
  onscreen: {
    y: 0, // Termina en la posición original
    opacity: 1, // Termina totalmente opaco
    transition: {
      type: "spring", // Tipo de transición (opcional)
      bounce: 0.4, // Cantidad de rebote (opcional)
      duration: 0.8 // Duración de la animación en segundos
    }
  }
}

const iconsDev = [
  { src: '/ACCESO AUREO 4K_Mesa de trabajo 1.jpg', srcIcon: '/LOGO AUREO.png', alt: 'Aureo Residencial', description: 'Loma Dorada', Precio: '$5,450,541 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://residencialaureo.com/inicio' },
  { src: '/PLATINUM_Mesa de trabajo 1.jpg', srcIcon: '/LOGO PLATINUM.png', alt: 'Platinum Residencial', description: 'Loma Dorada', Precio: '$5,397,600 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://platinumresidencial.com/' },
  { src: '/TORREES_Mesa de trabajo 1.jpg', srcIcon: '/LOGO TORRES.png', alt: 'Torres Del Colorado', description: 'Hacienda del Colorado', Precio: '$1,477,351 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://torresdelcolorado.com/' },
  { src: '/CIPRES_Mesa de trabajo 1.jpg', srcIcon: '/LOGO CIPRES.png', alt: 'Cipres Del Bosque', description: 'Paseo Del Bosque', Precio: '$4,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://cipresdelbosque.com/' },
  { src: '/JADE_Mesa de trabajo 1.jpg', srcIcon: '/logo Jade blanco-02.png', alt: 'Jade Residencial', description: 'La Gloria', Precio: '$2,348,431 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://jaderesidencial.com.mx/' },
  { src: '/ALMERIA_Mesa de trabajo 1.jpg', srcIcon: '/LOGO ALMERIA.png', alt: 'Almeria', description: 'Barcelona', Precio: '$6,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://almeria.com.mx/' },
];

function IconsDesarrollos() {
  return (
    <>
     <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[30rem] md:translate-y-[4rem] lg:translate-y-[3rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] font-bold rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-500 z-20"> Desarrollos</div>
      <section className='bg-white text-black p-8 lg:p-8 translate-y-[30rem] lg:translate-y-[4rem]'>
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {iconsDev.map((iconDev, index) => (
            <motion.div
              key={index}
              variants={variants} // Asigna las variantes
              initial="offscreen" // Estado inicial
              whileInView="onscreen" // Estado cuando el componente está en la vista
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -10, // Mueve la tarjeta hacia arriba ligeramente
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)" // Incrementa la sombra para dar un efecto de elevación
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className='rounded-[6rem]'>

              <Link href={iconDev.hrefn} className="relative rounded-[6rem]">
                <div className='group rounded-[6rem]'>

                  <div className='absolute inset-0 flex items-center justify-center shadow-lg shadow-indigo-200 opacity-0 rounded-[6rem] bg-black/75 group-hover:opacity-100'>
                    <Image
                      alt={iconDev.alt}
                      src={iconDev.srcIcon}
                      width={300}
                      height={0}
                      className='rounded-[6rem]' />
                  </div>
                  <Image
                    alt={iconDev.alt}
                    src={iconDev.src}
                    width={900}
                    height={600}
                    className=" rounded-[6rem] object-cover " // Añade tus clases de Tailwind aquí
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </main>
      </section>
    </>
  )
}

export default IconsDesarrollos