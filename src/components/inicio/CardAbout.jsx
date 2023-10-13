import React from 'react'
import Imagen from 'next/image'

function CardAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-primary border border-gray-300 shadow-lg rounded-2xl m-10 md:m-16 p-6 md:p-8">
    <div className=" mb-4 md:mb-0 w-full md:w-1/3">
      <Imagen alt='Imagen1' src='/ASESORA OBR.png' width={800} height={800} loading='lazy' className='rounded-lg '/>
    </div>
    <div className="w-full md:w-2/3">
      <h2 className=" text-sm md:text-2xl font-bold mb-4 text-center md:text-left">¿QUIENES SOMOS?</h2>
      <p className="text-gray-200 text-xs  md:text-sm text-center md:text-left  font-light">
        Somos una desarrolladora Inmobiliaria en constante crecimiento con diversos desarrollos en Tijuana B,C. en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en referentes.
      </p>
    </div>
  </div>
  )
}

export default CardAbout