import React from 'react'

import Image from 'next/image'



function CardAbout() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8 ">
    <div className="container mx-auto bg-primary rounded-lg overflow-hidden shadow-lg p-8 flex flex-col md:flex-row items-stretch">
    <div className="relative md:flex-shrink-0 w-full md:w-2/4 h-[350px] md:pl-3 md:h-auto mb-8 md:mb-0 md:ml-8 rounded-lg overflow-hidden flex items-center">
        <Image src="/ASESORA OBR.png" alt="JT Dev" layout="responsive" width={16} height={9} objectFit="cover" />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col md:gap-y-3 justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-4">¿QUIENES SOMOS?</h2>
        <p className="text-gray-300 mb-8">
          Somos una desarrolladora Inmobiliaria en constante crecimiento con diversos desarrollos en Tijuana B,C. en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en referentes.
        </p>
        <h4 className="text-lg text-gray-200 uppercase font-bold mb-2">Obr Group</h4>
      </div>
      {/* Image Section */}
     
    </div>
  </section>
  )
}

export default CardAbout  