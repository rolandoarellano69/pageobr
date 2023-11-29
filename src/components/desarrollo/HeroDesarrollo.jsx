import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HeroDesarrollo() {
  return (
    <section>
      <div className="relative h-screen flex items-center justify-start">
        <div>

        <Image
          src="/familia.jpg"
          alt="Descripción de la imagen"
          fill
          sizes='100vw 100vh'
          quality={100}
          // style={{objectFit: 'cover' }}
        className='object-cover ' />
        </div>
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 p-8">
          <h1 className="text-2xl md:text-[40px] font-extrabold text-left text-zinc-600 mb-4 ml-[4rem]">Encuentra la <br />Casa de tus sueños</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroDesarrollo 