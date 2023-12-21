import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProjectEx() {
  return (
    <>
      <div className="relative flex container mx-auto -translate-y-[1rem] justify-center items-center border-2 gap-1 py-2 md:py-4 lg:py-8 rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-0">
        Proyectos de  <span className="text-gray-600 font-bold">  éxito</span>
      </div>

      <div className="  hidden md:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[70vh] w-full">
          <Image
            src="/romeo.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            quality={100}
            className="z-0 object-cover bg-white"
          />
          <div className="absolute transform  p-9 z-10">
            <Image
              src="/Privadas Romeo Logo 1.png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={350}
              height={350}
              className=""
            />
          </div>
          <div className="absolute transform  right-[6rem] -top-[3rem] p-9 z-10">
            <Image
              src="/etiqueta.png"
              alt="Logo del proyecto Aureo"
              quality={100}
              width={750}
              height={550}
              className=""
            />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-[#E9E0C5] opacity-90 -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-600 ">
              Proyecto de únicamente 21 casas diseñadas con espacios cómodos <br /> y  modernos
              que te permitirán sentir la emocion de un nuevo hogar.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-[.5rem] overflow-hidden bg-transparent">
        <div className=' relative flex  lg:hidden h-[20rem] '>
          <Image
            src='/RESIDENCIALES-10.png'
            alt='vista de romeo'
            fill
            quality={100}
            className="object-contain"
          />
        </div>
      </section>
    </>
  )
}

export default ProjectEx