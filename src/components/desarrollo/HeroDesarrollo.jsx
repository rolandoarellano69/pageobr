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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-left text-white mb-4 ml-[4rem]">Encuentra la <br />Casa de tus sueños</h1>
          <Link href="/contacto">
            <p className="mt-4 inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark ml-[4rem]">
              Encuentra tu Casa
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroDesarrollo