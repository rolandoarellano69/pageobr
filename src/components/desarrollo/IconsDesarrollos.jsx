'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';


const iconsDev = [
  { src: '/ACCESO AUREO2 nochr.png', alt: 'Aureo Residencial', description: 'Loma Dorada', Precio: '$5,450,541 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
  { src: '/el colorado 4k.png', alt: 'Torres Del Colorado', description: 'Hacienda del Colorado', Precio: '$1,477,351 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
  { src: '/PLATINUM CON TERRAZA 4K.jpg', alt: 'Platinum Residencial', description: 'Loma Dorada', Precio: '$5,397,600 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
  { src: '/CIPRES FACHADA.jpg', alt: 'Cipres Del Bosque', description: 'Paseo Del Bosque', Precio: '$4,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
  { src: '/JADE 4K 4 CASAS.PNG', alt: 'Jade Residencial', description: 'La Gloria', Precio: '$2,348,431 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
  { src: '/ACCESO AUREO2 nochr.png', alt: 'Almeria', description: 'Barcelona', Precio: '$6,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2' },
];

function IconsDesarrollos() {
  return (
    <section className='bg-white text-black p-10'>
      <h2 className='text-center text-secondary text-4xl font-bold mb-8'>Desarrollos</h2>
      <main className=" container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-4">
        {iconsDev.map((iconDev, index) => (
          <Link key={index} href='/desarrollo/aureo' className="block rounded-lg p-4 shadow-lg bg-gray-100 shadow-indigo-100">
            {/* <img
            alt={iconDev.alt}
            src={iconDev.src}
            className=" h-[15rem] w-full bg-blue-500 rounded-md object-cover"
          /> */}
            <Image
              alt={iconDev.alt}
              src={iconDev.src}
              width={500} // Debes especificar un ancho
              height={300} // Debes especificar una altura
              layout="responsive" // Esto hará que la imagen sea responsiva
              className="bg-blue-500 rounded-md object-cover" // Añade tus clases de Tailwind aquí
            />

            <div className='mt-2 '>
              <dl>
                <div>
                  <dt className="sr-only ">Precio</dt>

                  <dd className="text-sm text-secondary">{iconDev.Precio}</dd>
                </div>
                <div>
                  <dt className="sr-only">Residencial Name</dt>

                  <dd className="font-medium">{iconDev.alt}</dd>
                </div>
                <div>
                  <dt className="sr-only">Address</dt>

                  <dd className="font-medium text-gray-600 text-sm ">{iconDev.description}</dd>
                </div>
              </dl>

              <section className='flex justify-around items-center mt-4'>

             
              <div className=" items-center gap-8 text-sm">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    className="h-5 w-5 text-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Estacionamientos</p>
                    <p className="font-medium">{iconDev.Parking} Carros</p>
                  </div>
                </div>
              </div>

              <div className=" sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 text-sm">
                <svg
                  className="h-5 w-5 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">W/C</p>
                  <p className="font-medium">{iconDev.Bathrooms} Baños</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-4 text-sm">
                <svg
                  className="h-5 w-5 ml-4 text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Habitaciones</p>
                  <p className="font-medium">{iconDev.Bedrooms} Cuartos</p>
                </div>
              </div>
              </section>
            </div>
          </Link>
        ))}
      </main>
    </section>
  )
}

export default IconsDesarrollos