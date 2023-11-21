import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProjectEx() {
  return (
    <section className="bg-white  md:p-8 py-12">
      <section className=" p-4 md:p-8">
      <h2 className="text-3xl text-gray-900 font-bold text-center mb-8 ">
            Proyectos de <span className="font-bold text-secondary">éxito</span>
        </h2>
      <div className="container mx-auto rounded-xl overflow-hidden shadow-lg bg-blue-400">
        <div className="relative h-[40vh] md:h-[65vh]">
          <Image
            src="/romeo.png"
            alt="Vista del acceso al proyecto residencial Aureo"
            fill
            className="z-0 object-cover"
          />
          <div className=" absolute bottom-0 rounded-tr-lg bg-gray-200 md:bg-transparent md:top-0 p-6 z-10">
            <Image
              src="/Privadas Romeo Logo 1.png"
              alt="Logo del proyecto Aureo"
              width={200}
              height={200}
            />
          </div>
          <div className="hidden md:block absolute top-0 right-1  z-10">
            <Image
              src="/etiqueta.png"
              alt="Logo del proyecto Aureo"
              width={450}
              height={200}
            />
          </div>
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Privadas Romeo</h3>
          <p className="mb-4 text-gray-700">
           Fraccionamiento en Santa Fe de 45, viviendas amplias e independientes.
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-red-500">100% Vendido</span>
         
          </div>
        </div>
      </div>
    </section>
   
</section>
  )
}

export default ProjectEx