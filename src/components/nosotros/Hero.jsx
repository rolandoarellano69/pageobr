import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  p-4 md:p-8 mt-16">
      <div className="relative h-56 md:h-auto md:min-h-[400px] rounded-lg overflow-hidden  ">
        <Image
          src={'/banner nosotros.webp'}
          alt="House"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col  justify-center items-center bg-[#FDFDFD] p-4 md:p-8 rounded-lg ">
        <p className="text-left text-gray-900 mb-4"> <span className='text-secondary font-semibold'>OBR GROUP</span>  comenzó su andar en <span className='text-secondary font-semibold'>2016</span>, siendo en la actualidad una desarrolladora inmobiliaria en constante crecimiento, con una eficaz combinación de experiencia entre sus colaboradores.</p>
          <p className='text-left text-gray-900'>
          Desde su creación se han completado diversos desarrollos en la localidad de <span className='text-secondary font-semibold'>Tijuana</span> , en zonas estratégicas y privilegiadas. Nuestros proyectos están llamados a convertirse en <span className='text-secondary font-semibold'>referentes.</span>
          </p>
      </div>
    </div>
  )
}

export default Hero