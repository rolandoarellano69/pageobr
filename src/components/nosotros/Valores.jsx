'use client'
import React from 'react';
import '../../app/globals.css';
import Image from 'next/image';

// Importar solo el módulo necesario (no necesitas paginación en este caso)
const iconsValores = [
  { src: '/RESPONSABILIDAD.png', alt: 'Responsabilidad', name: 'Responsabilidad' },
  { src: '/HONESTIDAD.png', alt: 'Honestidad', name: 'Honestidad' },
  { src: '/CONFIABILIDAD.png', alt: 'Confiabilidad', name: 'Confiabilidad' },
  { src: '/SERVICIO.png', alt: 'Servicio', name: 'Servicio' },
  { src: '/COMPROMISO.png', alt: 'Compromiso', name: 'Compromiso' },
  { src: '/PASION.png', alt: 'Pasión', name: 'Pasión' },
];

function Valores() {
  return (
    <>
      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[2rem] md:translate-y-[4rem] lg:-translate-y-[2rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] font-bold rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-500 z-20"> Valores </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10  '>
        {iconsValores.map((valor, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
            <Image
              src={valor.src}
              alt={valor.alt}
              width={200}
              height={200}
              quality={100}
              className='rounded-full' />
            <p className='text-center font-bold mb-2 text-secondary'>{valor.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Valores