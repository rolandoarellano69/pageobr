import React from 'react'
import Image from 'next/image'
function MisioVision() {
  return (
    <div className="relative flex justify-center items-center w-full h-auto md:h-50 p-4 md:p-8">
    {/* Background Image */}
    
    {/* Content */}
    <div className="relative p-4 md:p-8  bg-primary rounded-lg shadow-lg">
    {/* <div className="absolute inset-0 z-20">
      <Image src="/textura_ka 1.png" alt="Background Texture" layout="fill" objectFit="cover" className="opacity-75" />
    </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-white">
        {/* Mission Section */}
        <div className="flex flex-col justify-center items-center text-base p-4">
          <h1 className="text-2xl font-bold mb-4">Misión</h1>
          <p>Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.</p>
        </div>
        {/* Vision Section */}
        <div className="flex flex-col justify-center items-center text-left p-4">
          <h1 className="text-2xl font-bold mb-4">Visión</h1>
          <p>Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MisioVision