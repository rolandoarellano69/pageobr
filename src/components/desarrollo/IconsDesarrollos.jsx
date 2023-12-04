'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';


const iconsDev = [
  { src: '/ACCESO AUREO 4K_Mesa de trabajo 1.jpg', srcIcon:'/LOGO AUREO.png', alt: 'Aureo Residencial', description: 'Loma Dorada', Precio: '$5,450,541 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://residencialaureo.com/inicio' },
  { src: '/TORREES_Mesa de trabajo 1.jpg', srcIcon:'/LOGO TORRES.png', alt: 'Torres Del Colorado', description: 'Hacienda del Colorado', Precio: '$1,477,351 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://torresdelcolorado.com/' },
  { src: '/PLATINUM_Mesa de trabajo 1.jpg', srcIcon:'/LOGO PLATINUM.png', alt: 'Platinum Residencial', description: 'Loma Dorada', Precio: '$5,397,600 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://platinumresidencial.com/' },
  { src: '/CIPRES_Mesa de trabajo 1.jpg', srcIcon:'/LOGO CIPRES.png', alt: 'Cipres Del Bosque', description: 'Paseo Del Bosque', Precio: '$4,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://cipresdelbosque.com/' },
  { src: '/JADE_Mesa de trabajo 1.jpg', srcIcon:'/logo Jade blanco-02.png', alt: 'Jade Residencial', description: 'La Gloria', Precio: '$2,348,431 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://jaderesidencial.com.mx/' },
  { src: '/ALMERIA_Mesa de trabajo 1.jpg', srcIcon:'/LOGO ALMERIA.png',  alt: 'Almeria', description: 'Barcelona', Precio: '$6,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://almeria.com.mx/' },
];

function IconsDesarrollos() {
  return (
    <section className='bg-white text-black p-10'>
      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[0rem] md:-translate-y-[6rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] font-bold rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-500 z-20"> Desarrollos</div>

      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">

        {iconsDev.map((iconDev, index) => (
          <Link key={index} href={iconDev.hrefn} className=" rounded-[6rem]  shadow-lg shadow-indigo-100 relative ">
            <div className='group'>

            <div className='absolute inset-0 flex items-center justify-center opacity-0 rounded-[6rem] bg-black/75 group-hover:opacity-100'>
            <Image
            alt={iconDev.alt}
            src={iconDev.srcIcon}
            width={400}
            height={300}
             className=''/>
            </div>
              <Image
                alt={iconDev.alt}
                src={iconDev.src}
                width={900}
                height={600}
                className="bg-blue-500 rounded-[6rem] object-cover " // Añade tus clases de Tailwind aquí
              />
            </div>
          </Link>
        ))}
      </main>
    </section>
  )
}

export default IconsDesarrollos