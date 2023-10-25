import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HeroDesarrollo() {
  return (
    <section>
      <div className="relative bg-cover bg-center h-screen flex items-center justify-start">
        <Image src="/familia.jpg" alt="Hero" fill object-fit='cover' quality={100} priority={true} />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 p-8 block">
          <h1 className="hidden md:block text-4xl font-extrabold text-left text-slate-700 mb-4">Encuentra la <br />Casa de tus sueños</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroDesarrollo