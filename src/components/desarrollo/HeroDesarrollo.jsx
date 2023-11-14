import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HeroDesarrollo() {
  return (
    <section>
      <div className="relative bg-cover bg-center h-screen flex items-center justify-start">
        <Image
          src="/familia.jpg"
          alt="Descripción de la imagen"
          layout='fill'
          objectFit='cover'
          quality={75}
          priority
        />
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