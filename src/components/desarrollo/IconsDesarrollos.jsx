'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';


const iconsDev = [
  { src: '/PLATINUM CON TERRAZA noche 4K.jpg', alt: 'Aureo Residencial', description: 'Loma Dorada', Precio: '$5,450,541 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://residencialaureo.com/inicio' },
  { src: '/el colorado 4k.png', alt: 'Torres Del Colorado', description: 'Hacienda del Colorado', Precio: '$1,477,351 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://torresdelcolorado.com/' },
  { src: '/PLATINUM CON TERRAZA 4K.jpg', alt: 'Platinum Residencial', description: 'Loma Dorada', Precio: '$5,397,600 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://platinumresidencial.com/' },
  { src: '/CIPRES FACHADA.jpg', alt: 'Cipres Del Bosque', description: 'Paseo Del Bosque', Precio: '$4,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://cipresdelbosque.com/' },
  { src: '/JADE 4K 4 CASAS.PNG', alt: 'Jade Residencial', description: 'La Gloria', Precio: '$2,348,431 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://jaderesidencial.com.mx/' },
  { src: '/FACHADAS BARCELONA3.jpg', alt: 'Almeria', description: 'Barcelona', Precio: '$6,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://almeria.com.mx/' },
];

function IconsDesarrollos() {
  return (
    <section className='bg-white text-black p-10'>
      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[0rem] md:translate-y-[3rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-20"> Desarrollo</div>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {iconsDev.map((iconDev, index) => (
          <Link key={index} href={iconDev.hrefn} className=" rounded-lg p-4 shadow-lg bg-gray-100 shadow-indigo-100">

            <Image
              alt={iconDev.alt}
              src={iconDev.src}
              width={900}
              height={300}
              className="bg-blue-500 rounded-md object-fill" // Añade tus clases de Tailwind aquí
            />
          </Link>
        ))}
      </main>
    </section>
  )
}

export default IconsDesarrollos