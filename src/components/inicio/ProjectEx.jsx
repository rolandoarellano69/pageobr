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
            layout="fill"
            objectFit="cover"
            className="z-0"
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
            {/* <Link href="/learn-more">
              <button className="bg-secondary font-medium text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-[#d3822d]">
                Conocer más
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
    {/* <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl text-gray-900 font-bold">
            Proyectos de <span className="font-bold text-secondary">éxito</span>
        </h2>
    </div>
    <div className="relative bg-gray-200 h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg mx-4 md:mx-0">
        <Image
            src="/romeo.png"
            alt="Imagen del Proyecto"
            layout="fill"
            objectFit="cover"
        />
        <div className="absolute block top-0 left-0 ml-4 mt-4 p-2">
            <Image
                src="/Privadas Romeo Logo 1.png"
                alt="LOGO"
                width={150}
                height={200}
            />
        </div>
        <div className="hidden md:absolute md:block md:top-0 md:right-0 md:mr-4   ">
            <Image
                src="/etiqueta.png"
                alt="Etiqueta"
                width={350}
                height={200}
            />
        </div>
    </div> */}
</section>
  )
}

export default ProjectEx