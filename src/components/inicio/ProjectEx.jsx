import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProjectEx() {
  return (
    <>
    <div className="relative flex container mx-auto -translate-y-[3rem] justify-center items-center border-2 gap-1 py-2 md:py-4 lg:py-8 rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-0">
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
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            <p className="text-base text-gray-600">Preventa desde</p>
            <span className="font-bold text-[19px] text-gray-600">$5,450,541 MXN</span>
            <Link href="/learn-more">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProjectEx