import React from 'react'
import Image from 'next/image'
import { TbTargetArrow,TbEye } from 'react-icons/tb'

function MisioVision() {
  return (
    <div className=" flex justify-center items-center bg-white w-full h-auto md:h-50 p-4 md:p-8">
      {/* Background Image */}


<section className="py-6 bg-white text-gray-50">
	<div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
		<div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-secondary ">
			<span className="text-3xl flex justify-center items-center gap-2">Misión<TbTargetArrow className='text-[2rem]'/></span>
	
			<p className="font-semibold text-left mt-4">  Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.</p>
			{/* <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700">Sign up</button> */}
		</div>
		<div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center  sm:p-8 lg:p-16 bg-primary text-gray-100">
			<span className="text-3xl justify-center items-center font-semibold flex gap-2">Visión <TbEye className='text-[2rem]'/></span>

			<p className="font-semibold text-left mt-4">Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes.</p>
			{/* <button className="px-8 py-3 mt-6 -lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">Sign up</button> */}
		</div>
	</div>
</section>
{/* 
      <div className=" container mx-auto grid grid-cols-2 grid-rows-2 gap-1">
        <div className='  bg-primary pt-5 h-[10hv] rounded-lg'><h2 id="who-we-are-heading" className="text-xl gap-3 flex justify-center items-center lg:text-3xl font-bold text-center text-white mb-4">Misión<TbTargetArrow className='text-[2rem]'/>
        </h2>
          <p className="text-sm lg:text-base text-gray-100 mb-8 m-10">
            Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.
          </p></div>
        <div className="col-start-2 row-start-2 bg-primary pt-5 h-[10hv] rounded-lg"><h2 id="who-we-are-heading" className="text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4 flex justify-center items-center gap-3 ">Visión <TbEye/></h2>
          <p className="text-sm lg:text-base text-gray-100 mb-8 m-10">
            Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes.
          </p></div>
      </div> */}
      {/* <div className='relative bg-primary py-4 lg:py-8 mx-10 rounded-xl -translate-y-8 z-20'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-9'>
          <div className='lg:w-2/4  mb-8 lg:mb-0'>
          <h2 id="who-we-are-heading" className="text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4">Misión</h2>
            <p className="text-sm lg:text-base text-gray-300 mb-8 m-10">
            Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.
            </p>
          </div>
          <div className='lg:w-2/4'>
            <h2 id="who-we-are-heading" className="text-xl lg:text-3xl font-bold text-center text-gray-100 mb-4">Visión</h2>
            <p className="text-sm lg:text-base text-gray-300 mb-8">
            Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes.
            </p>
          </div>
        </div>
      </div> */}

      {/* Content
    <div className="relative p-4 md:p-8  bg-primary rounded-lg shadow-lg">
     <div className="absolute inset-0 z-20">
      <Image src="/textura_ka 1.png" alt="Background Texture" layout="fill" objectFit="cover" className="opacity-75" />
    </div> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-white">
         Mission Section 
        <div className="flex flex-col justify-center items-center text-base p-4">
          <h1 className="text-2xl font-bold mb-4">Misión</h1>
          <p>Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.</p>
        </div>
         Vision Section 
        <div className="flex flex-col justify-center items-center text-left p-4">
          <h1 className="text-2xl font-bold mb-4">Visión</h1>
          <p>Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes</p>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default MisioVision