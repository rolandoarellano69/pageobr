import React from 'react'
import Image from 'next/image'

function HeroDesarrollo() {
  return (
    <>
      <section>
        <div className="relative flex items-center justify-start">
          <div className='hidden md:block h-[80vh] lg:w-[80hw] '>

            <Image
              src="/familia3.jpg"
              alt="Descripción de la imagen"
              fill
              quality={100}
              className='object-fill translate-y-[6rem] ' />

          </div>
        </div>
        <div className='md:hidden block h-[20vh]'>
          <Image
            src="/familiamobile2.jpg"
            alt="Descripción de la imagen"
            fill
            quality={100}
            // style={{objectFit: 'cover' }}
            className='object-contain ' />
        </div>
      </section>
    </>
  )
}

export default HeroDesarrollo 